#!/usr/bin/env node
/* ============================================
   Static page generator for Mentivax SEO pages and guides.

   Usage:  node src/build.mjs

   - src/pages/*.mjs   → /<path>/index.html   (solution landing pages)
   - src/guides/*.mjs  → /guides/<slug>/index.html, plus /guides/ once at
                         least one non-draft guide exists
   - sitemap.xml       → rewritten from STATIC_PAGES + everything generated

   Output is committed, so Vercel keeps serving plain static files with no
   build step. Hand-written pages (home, features, faq, …) are never touched.
   ============================================ */

import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { SITE_URL, STATIC_PAGES, SOFTWARE_NODE, ORGANIZATION_NODE, WA_DEMO, WA_PILOT } from './site.mjs';
import { renderPage, toText } from './lib/layout.mjs';
import { pageHero, faq, related, cta } from './lib/components.mjs';
import { pick } from './lib/links.mjs';

const SRC = dirname(fileURLToPath(import.meta.url));
const ROOT = join(SRC, '..');

async function loadDir(dir) {
  let files = [];
  try {
    files = (await readdir(join(SRC, dir))).filter((f) => f.endsWith('.mjs')).sort();
  } catch {
    return [];
  }
  const mods = await Promise.all(files.map((f) => import(pathToFileURL(join(SRC, dir, f)).href)));
  return mods.map((m, i) => ({ ...m.default, _file: `${dir}/${files[i]}` }));
}

function assertPage(p, required) {
  for (const key of required) {
    if (!p[key]) throw new Error(`${p._file}: missing "${key}"`);
  }
  if (!/^\/[a-z0-9-/]+\/$/.test(p.path)) throw new Error(`${p._file}: path must look like /some-path/`);
}

function breadcrumbNode(url, crumbs) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: SITE_URL + c.path
    }))
  };
}

function faqNode(url, items) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: toText(f.q),
      acceptedAnswer: { '@type': 'Answer', text: toText(f.a) }
    }))
  };
}

async function write(path, html) {
  const file = join(ROOT, path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
  return file;
}

/* --- Landing pages ---------------------------------------------------- */

// Alternate white / light backgrounds down the page so adjacent sections
// never blend, whatever order a page lists them in. Dark sections (the
// migration banner and CTA) reset the rhythm.
function alternate(sections) {
  let light = false;
  return sections.map((s) => {
    if (/<section class="(compat-banner|cta)\b/.test(s)) {
      light = false;
      return s;
    }
    const tone = light ? 'section-bg-light' : 'section-bg-white';
    light = !light;
    return s.replace(/<section class="([^"]+)"/, `<section class="$1 ${tone}"`);
  });
}

function buildLanding(p) {
  assertPage(p, ['path', 'title', 'description', 'h1', 'crumb', 'updated', 'sections']);
  const url = SITE_URL + p.path;
  const crumbs = [{ name: 'Home', path: '/' }, ...(p.parents || []), { name: p.crumb, path: p.path }];
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: p.title,
      description: p.description,
      inLanguage: 'en',
      dateModified: p.updated,
      isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'Mentivax', url: `${SITE_URL}/` },
      about: { '@id': SOFTWARE_NODE['@id'] },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      publisher: { '@id': ORGANIZATION_NODE['@id'] }
    },
    breadcrumbNode(url, crumbs),
    { ...SOFTWARE_NODE, ...(p.featureList ? { featureList: p.featureList } : {}) },
    ORGANIZATION_NODE
  ];
  if (p.faq && p.faq.length) graph.push(faqNode(url, p.faq));

  const hero = pageHero({
    crumbs,
    label: p.label,
    title: p.h1,
    subtitle: p.subtitle,
    primary: p.heroPrimary || { href: WA_PILOT, text: 'Start free pilot', cta: 'free_pilot' },
    secondary: p.heroSecondary || { href: WA_DEMO, text: 'Book a demo', cta: 'demo', external: true }
  });

  return renderPage({
    meta: {
      title: p.title,
      description: p.description,
      path: p.path,
      ogTitle: p.ogTitle,
      schema: [{ '@context': 'https://schema.org', '@graph': graph }]
    },
    pageType: 'seo-landing',
    body: [hero, ...alternate(p.sections)].join('\n\n')
  });
}

/* --- Guides ----------------------------------------------------------- */

function buildGuide(g) {
  g.path = `/guides/${g.slug}/`;
  assertPage(g, ['slug', 'title', 'description', 'h1', 'published', 'updated', 'body']);
  const url = SITE_URL + g.path;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides/' },
    { name: g.crumb || g.h1, path: g.path }
  ];
  const graph = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: g.h1,
      description: g.description,
      datePublished: g.published,
      dateModified: g.updated,
      inLanguage: 'en',
      image: `${SITE_URL}/images/og-image.png`,
      mainEntityOfPage: url,
      author: { '@id': ORGANIZATION_NODE['@id'] },
      publisher: { '@id': ORGANIZATION_NODE['@id'] }
    },
    breadcrumbNode(url, crumbs),
    ORGANIZATION_NODE
  ];
  if (g.faq && g.faq.length) graph.push(faqNode(url, g.faq));

  const body = [
    pageHero({ crumbs, label: g.label || 'Guide', title: g.h1, subtitle: g.summary || g.description }),
    `    <article class="article-section">
      <div class="article-content">
${g.body}
      </div>
    </article>`,
    g.faq && g.faq.length ? faq({ items: g.faq }) : '',
    g.related ? related(g.related) : '',
    cta()
  ].filter(Boolean);

  return renderPage({
    meta: {
      title: g.title,
      description: g.description,
      path: g.path,
      ogType: 'article',
      schema: [{ '@context': 'https://schema.org', '@graph': graph }]
    },
    pageType: 'guide',
    body: body.join('\n\n')
  });
}

function buildGuidesIndex(guides) {
  const path = '/guides/';
  const url = SITE_URL + path;
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Guides', path }];
  const body = [
    pageHero({
      crumbs,
      label: 'Guides',
      title: 'Practical guides for running a school with less paperwork.',
      subtitle: 'Plain-language guides for school owners, principals and office staff on choosing software and automating everyday school work.'
    }),
    related({
      label: 'All guides',
      title: 'Read a guide',
      items: guides.map((g) => ({ href: g.path, title: g.h1, desc: g.description, icon: 'file', cta: 'Read the guide' }))
    }),
    cta()
  ];
  return renderPage({
    meta: {
      title: 'School Automation & Management Guides | Mentivax',
      description: 'Practical guides on choosing school management software and automating school administration, written for Indian school owners, principals and office staff.',
      path,
      schema: [{ '@context': 'https://schema.org', '@graph': [breadcrumbNode(url, crumbs)] }]
    },
    pageType: 'guide-index',
    body: body.join('\n\n')
  });
}

/* --- 404 ------------------------------------------------------------- */

// Vercel serves /404.html (with a 404 status) for any unknown URL.
function buildNotFound() {
  const body = [
    pageHero({
      crumbs: [{ name: 'Home', path: '/' }, { name: 'Page not found', path: '/404.html' }],
      label: 'Error 404',
      title: 'We couldn&rsquo;t find that page.',
      subtitle: 'The link may be old or mistyped. Here are the most useful places to go next.'
    }),
    related({
      label: 'Popular pages',
      title: 'Where would you like to go?',
      items: [
        { href: '/', icon: 'home', title: 'Home', desc: 'Less paperwork, more teaching: what Mentivax does for your school.', cta: 'Go home' },
        ...pick('automation', 'management', 'fees', 'attendance', 'faq')
      ]
    }),
    cta()
  ];
  return renderPage({
    meta: {
      title: 'Page not found | Mentivax',
      description: 'This page does not exist. Find school automation and management software from Mentivax.',
      path: '/404.html',
      robots: 'noindex, follow',
      canonical: false
    },
    pageType: 'not-found',
    body: body.join('\n\n')
  });
}

/* --- Sitemap ---------------------------------------------------------- */

function sitemap(entries) {
  const urls = entries
    .map((e) => {
      const img = e.image
        ? `\n    <image:image>\n      <image:loc>${SITE_URL}${e.image.loc}</image:loc>\n      <image:title>${e.image.title}</image:title>\n    </image:image>`
        : '';
      return `  <url>\n    <loc>${SITE_URL}${e.path}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>${img}\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

/* --- Main ------------------------------------------------------------- */

const pages = await loadDir('pages');
const guides = (await loadDir('guides')).filter((g) => !g.draft);
const entries = [...STATIC_PAGES];

for (const p of pages) {
  await write(p.path, buildLanding(p));
  entries.push({ path: p.path, lastmod: p.updated, changefreq: 'monthly', priority: p.priority || '0.9' });
  console.log(`page   ${p.path}`);
}

for (const g of guides) {
  await write(`/guides/${g.slug}/`, buildGuide(g));
  entries.push({ path: g.path, lastmod: g.updated, changefreq: 'monthly', priority: '0.7' });
  console.log(`guide  ${g.path}`);
}

if (guides.length) {
  await write('/guides/', buildGuidesIndex(guides));
  const newest = guides.map((g) => g.updated).sort().pop();
  entries.push({ path: '/guides/', lastmod: newest, changefreq: 'weekly', priority: '0.6' });
  console.log('index  /guides/');
}

await writeFile(join(ROOT, '404.html'), buildNotFound());
console.log('404    /404.html');

await writeFile(join(ROOT, 'sitemap.xml'), sitemap(entries));
console.log(`sitemap.xml (${entries.length} urls)`);
