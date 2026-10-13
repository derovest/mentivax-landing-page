/* ============================================
   Page shell for generated pages: <head>, header, footer, analytics.
   Mirrors the hand-written pages so generated pages look native.
   ============================================ */

import { SITE_URL, WA_PILOT, WA_QUESTION } from '../site.mjs';

export function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Turn authored HTML (with entities) into plain text for JSON-LD.
export function toText(html) {
  return String(html)
    .replace(/<[^>]+>/g, '')
    .replace(/&rsquo;|&lsquo;/g, '’')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&rarr;/g, '→')
    .replace(/&#8377;/g, '₹')
    .replace(/&times;/g, '×')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function jsonLd(data) {
  // Indent to match the hand-written pages; escape "</" so text can never
  // close the script element.
  const json = JSON.stringify(data, null, 2).replace(/<\//g, '<\\/');
  return `  <script type="application/ld+json">\n${json.replace(/^/gm, '  ')}\n  </script>`;
}

function head({ title, description, path, ogTitle, ogType = 'website', robots = 'index, follow', canonical = true, schema = [] }) {
  const url = SITE_URL + path;
  const og = ogTitle || title;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="author" content="Mentivax">
  <meta name="robots" content="${robots}">
${canonical ? `  <link rel="canonical" href="${url}">\n` : ''}
  <!-- Open Graph -->
  <meta property="og:type" content="${ogType}">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(og)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${SITE_URL}/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="600">
  <meta property="og:image:alt" content="Mentivax — Less paperwork, more teaching">
  <meta property="og:site_name" content="Mentivax">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(og)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${SITE_URL}/images/og-image.png">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">

  <!-- PWA -->
  <meta name="theme-color" content="#0F1B34">
  <link rel="manifest" href="/manifest.json">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"></noscript>

  <!-- Styles -->
  <link rel="stylesheet" href="/css/style.css">
${schema.map(jsonLd).join('\n')}
  <!-- Microsoft Clarity -->
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "yrhurvh57r");
  </script>
</head>`;
}

const header = `  <a href="#main" class="skip-link">Skip to content</a>

  <!-- HEADER / NAV -->
  <header class="site-header" id="header">
    <div class="container header-inner">
      <a href="/" class="logo" aria-label="Mentivax home">
        <img src="/images/logo-102.png" alt="" class="logo-img" width="34" height="34" decoding="async" aria-hidden="true">
        <span class="logo-text">Mentivax</span>
      </a>
      <button class="mobile-menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mainNav">
        <span></span><span></span><span></span>
      </button>
      <nav class="main-nav" id="mainNav" aria-label="Main navigation">
        <ul>
          <li><a href="/what-is-mentivax/">What is Mentivax</a></li>
          <li><a href="/why-mentivax/">Why Mentivax</a></li>
          <li><a href="/features/">Features</a></li>
          <li><a href="/who-benefits/">Who benefits</a></li>
          <li><a href="/faq/">FAQ</a></li>
          <li><a href="/contact/">Contact</a></li>
          <li><a href="${WA_PILOT}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">Start free pilot</a></li>
        </ul>
      </nav>
    </div>
  </header>`;

// Keep in sync with the footer on the hand-written pages.
const footer = `  <!-- FOOTER -->
  <footer class="site-footer" id="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a href="/" class="logo" aria-label="Mentivax home">
          <img src="/images/logo-102.png" alt="" class="logo-img" width="34" height="34" decoding="async" aria-hidden="true">
          <span class="logo-text">Mentivax</span>
        </a>
        <p class="footer-tagline">Less paperwork, more teaching.<br>School automation with your own AI agent.</p>
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">
        <div class="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="/features/">Features</a></li>
            <li><a href="/features/#modules">All modules</a></li>
            <li><a href="/features/#how-it-works">How it works</a></li>
            <li><a href="/who-benefits/">Who benefits</a></li>
            <li><a href="/faq/">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="/school-automation-software/">School automation</a></li>
            <li><a href="/school-management-software/">School management</a></li>
            <li><a href="/school-erp-software/">School ERP</a></li>
            <li><a href="/school-fee-management-software/">Fee management</a></li>
            <li><a href="/school-attendance-management-software/">Attendance</a></li>
            <li><a href="/school-management-software-india/">For Indian schools</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/what-is-mentivax/">What is Mentivax</a></li>
            <li><a href="/why-mentivax/">Why Mentivax</a></li>
            <li><a href="/privacy/">Privacy policy</a></li>
            <li><a href="/terms/">Terms of service</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:hello@derovest.com?subject=Mentivax%20Enquiry">Email us</a></li>
            <li><a href="${WA_QUESTION}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="/contact/">Contact us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow us</h4>
          <ul>
            <li><a href="https://www.linkedin.com/company/mentivax/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/mentivax" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://www.facebook.com/mentivax" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="https://www.youtube.com/@mentivaxschool" target="_blank" rel="noopener">YouTube</a></li>
          </ul>
        </div>
      </nav>
      <div class="footer-bottom">
        <p>&copy; 2026 Mentivax. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/main.js" defer></script>

  <!-- Google tag (gtag.js) — loaded after first paint / first interaction -->
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-EMW6KZXQJM');
    (function () {
      var loaded = false;
      function loadGtag() {
        if (loaded) return;
        loaded = true;
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-EMW6KZXQJM';
        document.head.appendChild(s);
      }
      function schedule() { setTimeout(loadGtag, 1200); }
      if (document.readyState === 'complete') schedule();
      else window.addEventListener('load', schedule);
      ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(function (evt) {
        window.addEventListener(evt, loadGtag, { once: true, passive: true });
      });
    })();
  </script>
</body>
</html>
`;

// pageType ends up on <body data-page-type> so CTA click events can be
// segmented by landing-page type in GA4.
export function renderPage({ meta, pageType, body }) {
  return `${head(meta)}
<body data-page-type="${pageType}">
${header}

  <main id="main">
${body}
  </main>

${footer}`;
}
