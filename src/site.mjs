/* ============================================
   Site-wide settings shared by generated pages
   ============================================ */

export const SITE_URL = 'https://www.mentivax.com';

export const WA_NUMBER = '916381641340';

// Prefilled WhatsApp links. Keep the free-pilot wording identical to the
// hand-written pages so existing GA4 reports keep grouping these clicks.
export function waLink(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text).replace(/'/g, '%27')}`;
}

export const WA_PILOT = waLink("Hi! I'd like to start a free pilot for my school.");
export const WA_QUESTION = waLink('Hi! I have a question about Mentivax.');
export const WA_DEMO = waLink("Hi! I'd like to book a demo of Mentivax.");

// Hand-written pages that the generator does not render, but which belong in
// the sitemap. Bump `lastmod` when a page's content meaningfully changes.
export const STATIC_PAGES = [
  { path: '/', lastmod: '2026-10-13', changefreq: 'weekly', priority: '1.0', image: { loc: '/images/og-image.png', title: 'Mentivax — Less Paperwork, More Teaching' } },
  { path: '/what-is-mentivax/', lastmod: '2026-10-13', changefreq: 'monthly', priority: '0.9' },
  { path: '/why-mentivax/', lastmod: '2026-10-12', changefreq: 'monthly', priority: '0.9' },
  { path: '/features/', lastmod: '2026-10-13', changefreq: 'monthly', priority: '0.9' },
  { path: '/who-benefits/', lastmod: '2026-10-12', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq/', lastmod: '2026-10-13', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact/', lastmod: '2026-10-12', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy/', lastmod: '2026-10-12', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms/', lastmod: '2026-10-12', changefreq: 'yearly', priority: '0.3' }
];

// The one SoftwareApplication node. The homepage carries the full version by
// hand; generated pages repeat this short form under the same @id.
export const SOFTWARE_NODE = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: 'Mentivax',
  applicationCategory: 'EducationalApplication',
  applicationSubCategory: 'School automation and management software',
  operatingSystem: 'Web',
  url: `${SITE_URL}/`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Free pilot for your school'
  },
  publisher: { '@id': `${SITE_URL}/#organization` }
};

export const ORGANIZATION_NODE = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Mentivax',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/icon-512.png`
};
