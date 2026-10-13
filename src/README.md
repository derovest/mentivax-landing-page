# Generated pages

The hand-written pages (`/`, `/features/`, `/faq/` …) are edited directly.
The SEO solution pages and future guides are generated from this folder:

```
node src/build.mjs
```

Run it after any change here and commit the generated `index.html` files and
`sitemap.xml` together with the source. Vercel serves the committed output; no
build step runs on deploy. `src/` itself is excluded via `.vercelignore`.

| Source                | Output                                   |
| --------------------- | ---------------------------------------- |
| `src/pages/*.mjs`     | `/<path>/index.html` (solution pages)    |
| `src/guides/*.mjs`    | `/guides/<slug>/index.html`              |
| (any guide exists)    | `/guides/index.html`                     |
| everything above      | `sitemap.xml` (+ `STATIC_PAGES` in `site.mjs`) |

## Adding a guide

Create `src/guides/<slug>.mjs`:

```js
export default {
  slug: 'how-to-choose-school-management-software',
  draft: true,                 // skipped by the build until set to false
  published: '2026-11-01',
  updated: '2026-11-01',
  title: 'How to Choose School Management Software | Mentivax',  // <title>
  description: '…',            // meta description, ~150 characters
  h1: 'How to choose school management software',
  crumb: 'Choosing school software', // optional, shorter breadcrumb label
  summary: '…',                // hero subtitle; defaults to description
  body: `
        <p>…</p>
        <h2>…</h2>
        <ul><li>…</li></ul>`,
  faq: [{ q: '…', a: '…' }],   // optional; rendered on the page and as FAQPage JSON-LD
  related: {                   // optional "Keep exploring" cards
    title: 'Related',
    items: pick('management', 'automation')  // from src/lib/links.mjs
  }
};
```

The build adds Article + BreadcrumbList JSON-LD, the canonical URL, OG/Twitter
tags and a sitemap entry. Write for school owners, principals and office staff;
only describe features that exist today, and never invent numbers.

## Hand-written pages that share markup

The header, footer and analytics snippets in `src/lib/layout.mjs` are copies of
the ones in the hand-written pages. If you change the footer or nav, change it
in both places.
