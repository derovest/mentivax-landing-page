/* ============================================
   Section builders for generated pages. Each one emits markup that uses the
   existing classes in css/style.css, so pages match the hand-written ones.
   ============================================ */

import { WA_PILOT, waLink } from '../site.mjs';

const svg = (inner, size = 24) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

// Icon paths lifted from the existing pages.
const ICONS = {
  bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>',
  card: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  rupee: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
  check: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  bus: '<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>'
};

export const icon = (name, size) => svg(ICONS[name] || ICONS.info, size);

const arrow = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

const waGlyph = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right:8px;" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>';

const sectionHeader = ({ label, title, desc }) => `        <div class="section-header">
${label ? `          <p class="section-label">${label}</p>\n` : ''}          <h2 class="section-title">${title}</h2>
${desc ? `          <p class="section-desc">${desc}</p>\n` : ''}        </div>`;

/* --- Hero ------------------------------------------------------------- */

export function pageHero({ crumbs, label, title, subtitle, primary, secondary }) {
  const trail = crumbs
    .map((c, i) => (i === crumbs.length - 1 ? `<span>${c.name}</span>` : `<a href="${c.path}">${c.name}</a><span aria-hidden="true">/</span>`))
    .join('');
  const ctas = primary
    ? `
      <div class="page-hero-ctas">
        <a href="${primary.href}" class="btn btn-primary btn-lg" target="_blank" rel="noopener" data-cta="${primary.cta}">${primary.text}</a>
${secondary ? `        <a href="${secondary.href}" class="btn btn-outline-hero btn-lg"${secondary.external ? ' target="_blank" rel="noopener"' : ''}${secondary.cta ? ` data-cta="${secondary.cta}"` : ''}>${secondary.text}</a>\n` : ''}      </div>`
    : '';
  return `    <section class="page-hero">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        ${trail}
      </nav>
      <p class="section-label">${label}</p>
      <h1 class="page-hero-title">${title}</h1>
      <p class="page-hero-subtitle">${subtitle}</p>${ctas}
    </section>`;
}

/* --- Long-form prose -------------------------------------------------- */

// `html` is authored markup: <p>, <ul class="about-list">, <h3> etc.
export function prose({ id, alt = false, heading, lead, html }) {
  return `    <section class="about-section${alt ? ' about-section--alt' : ''}"${id ? ` id="${id}"` : ''}>
      <div class="container about-container">
        <div class="about-block">
          <h2 class="about-heading">${heading}</h2>
${lead ? `          <p class="about-lead">${lead}</p>\n` : ''}${html}
        </div>
      </div>
    </section>`;
}

/* --- Before / after comparison --------------------------------------- */

export function compare({ id, label, title, desc, old, now, footnote }) {
  const list = (items, mark, cls) =>
    items.map((t) => `              <li>\n                <span class="${cls}" aria-hidden="true">${mark}</span>\n                <span>${t}</span>\n              </li>`).join('\n');
  return `    <section class="why-different"${id ? ` id="${id}"` : ''}>
      <div class="container">
${sectionHeader({ label, title, desc })}
        <div class="diff-grid">
          <div class="diff-card diff-card--old reveal">
            <div class="diff-card-header">
              <span class="diff-badge diff-badge--red">${old.title}</span>
            </div>
            <ul class="diff-list">
${list(old.items, old.mark || '&times;', 'diff-x')}
            </ul>
          </div>
          <div class="diff-card diff-card--new reveal">
            <div class="diff-card-header">
              <span class="diff-badge diff-badge--green">${now.title}</span>
            </div>
            <ul class="diff-list">
${list(now.items, now.mark || '&#10003;', 'diff-check')}
            </ul>
          </div>
        </div>
${footnote ? `        <p class="agent-note">${footnote}</p>\n` : ''}      </div>
    </section>`;
}

/* --- Automation rules ("When … then …") ------------------------------ */

const MODES = {
  auto: 'Runs automatically',
  approve: 'After approval',
  suggest: 'Suggested to staff'
};

export function rules({ id, label, title, desc, items, footnote, alt = true }) {
  const cards = items
    .map(
      (r) => `          <article class="rule-card reveal">
            <p class="rule-step"><span class="rule-key">When</span>${r.when}</p>
            <p class="rule-step"><span class="rule-key rule-key--then">Then</span>${r.then}</p>
            <span class="rule-mode rule-mode--${r.mode}">${MODES[r.mode]}</span>
          </article>`
    )
    .join('\n');
  return `    <section class="${alt ? 'features' : 'modules'}"${id ? ` id="${id}"` : ''}>
      <div class="container">
${sectionHeader({ label, title, desc })}
        <div class="rule-grid">
${cards}
        </div>
${footnote ? `        <p class="agent-note">${footnote}</p>\n` : ''}      </div>
    </section>`;
}

/* --- Feature cards ---------------------------------------------------- */

export function cards({ id, label, title, desc, items, alt = true }) {
  const html = items
    .map(
      (c) => `          <article class="feature-card reveal">
            <div class="feature-icon feature-icon--${c.color || 'purple'}" aria-hidden="true">${icon(c.icon)}</div>
            <h3 class="feature-title">${c.title}</h3>
            <p class="feature-desc">${c.desc}</p>${c.demo ? `\n            ${c.demo}` : ''}
          </article>`
    )
    .join('\n');
  return `    <section class="${alt ? 'features' : 'modules'}"${id ? ` id="${id}"` : ''}>
      <div class="container">
${sectionHeader({ label, title, desc })}
        <div class="features-grid">
${html}
        </div>
      </div>
    </section>`;
}

// Small WhatsApp-style preview used inside a feature card.
export function chatDemo(lines, status) {
  const bubbles = lines
    .map(([who, text]) => `<span class="chat-bubble${who === 'parent' ? ' chat-bubble--reply' : ''}">${text}</span>`)
    .join('');
  return `<div class="feature-demo feature-demo--chat" aria-label="Example WhatsApp message">${bubbles}${status ? `<span class="chat-status">${status}</span>` : ''}</div>`;
}

/* --- Module cards ----------------------------------------------------- */

export function modules({ id, label, title, desc, items, alt = false }) {
  const html = items
    .map(
      (m) => `          <article class="module-card reveal"${m.id ? ` id="${m.id}"` : ''}>
            <div class="module-head">
              <span class="service-icon service-icon--${m.color || 'blue'}" aria-hidden="true">${icon(m.icon)}</span>
              <h3 class="module-title">${m.title}</h3>
            </div>
            <p class="module-desc">${m.desc}</p>
            <ul class="module-list">
${m.list.map((li) => `              <li>${li}</li>`).join('\n')}
            </ul>${m.link ? `\n            <a class="module-link" href="${m.link.href}">${m.link.text}${arrow}</a>` : ''}
          </article>`
    )
    .join('\n');
  return `    <section class="${alt ? 'features' : 'modules'}"${id ? ` id="${id}"` : ''}>
      <div class="container">
${sectionHeader({ label, title, desc })}
        <div class="module-grid">
${html}
        </div>
      </div>
    </section>`;
}

/* --- Numbered steps --------------------------------------------------- */

export function steps({ id, label, title, desc, items }) {
  const accents = ['dark', 'purple', 'green', 'dark', 'purple', 'green'];
  const html = items
    .map(
      (s, i) => `          <div class="step reveal" data-accent="${accents[i]}">
            <div class="step-number">Step ${String(i + 1).padStart(2, '0')}</div>
            <h3 class="step-title">${s.title}</h3>
            <p class="step-desc">${s.desc}</p>
          </div>`
    )
    .join('\n');
  return `    <section class="how-it-works"${id ? ` id="${id}"` : ''}>
      <div class="container">
${sectionHeader({ label, title, desc })}
        <div class="steps-grid">
${html}
        </div>
      </div>
    </section>`;
}

/* --- Data migration banner ------------------------------------------- */

export function migration({ title, desc, points }) {
  const tick = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
  return `    <section class="compat-banner" id="switching">
      <div class="container">
        <div class="compat-card reveal">
          <div class="compat-icon" aria-hidden="true">${icon('upload', 28)}</div>
          <div class="compat-content">
            <h2 class="compat-title">${title}</h2>
            <p class="compat-desc">${desc}</p>
            <div class="compat-points">
${points.map((p) => `              <span class="compat-point">${tick}${p}</span>`).join('\n')}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

/* --- FAQ (visible copy is also the FAQPage JSON-LD source) ------------ */

export function faq({ title = 'Frequently asked questions', items }) {
  const html = items
    .map(
      (f) => `          <details class="faq-item" role="listitem">
            <summary class="faq-question">
              <span>${f.q}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </summary>
            <div class="faq-answer">
              <p>${f.a}</p>
            </div>
          </details>`
    )
    .join('\n');
  return `    <section class="faq" id="faq">
      <div class="container">
        <h2 class="faq-title">${title}</h2>
        <div class="faq-list" role="list">
${html}
        </div>
      </div>
    </section>`;
}

/* --- Related pages ---------------------------------------------------- */

// items: [{ href, title, desc, icon }]
export function related({ label = 'Keep exploring', title, desc, items }) {
  const html = items
    .map(
      (r) => `          <a class="overview-card reveal" href="${r.href}">
            <span class="overview-icon" aria-hidden="true">${icon(r.icon, 22)}</span>
            <h3>${r.title}</h3>
            <p>${r.desc}</p>
            <span class="overview-link">${r.cta || 'Read more'}${arrow}</span>
          </a>`
    )
    .join('\n');
  return `    <section class="overview-section" id="related">
      <div class="container">
${sectionHeader({ label, title, desc })}
        <div class="overview-grid">
${html}
        </div>
      </div>
    </section>`;
}

/* --- Closing CTA ------------------------------------------------------ */

export function cta({
  label = 'Ready to try?',
  title = 'Tell us the most repetitive task in your school.',
  desc = 'We&rsquo;ll show you how Mentivax can automate it, in a free 20-minute demo with your own data. No credit card, no obligation.',
  taskPrompt = 'Hi! The most repetitive task in our school is: ',
  secondaryText = 'Talk on WhatsApp'
} = {}) {
  return `    <section class="cta" id="cta">
      <div class="container">
        <p class="cta-label">${label}</p>
        <h2 class="cta-title">${title}</h2>
        <p class="cta-desc">${desc}</p>
        <div class="cta-actions">
          <a href="${WA_PILOT}" class="btn btn-primary btn-lg" target="_blank" rel="noopener" data-cta="free_pilot">Start free pilot</a>
          <a href="${waLink(taskPrompt)}" class="btn btn-outline btn-lg" target="_blank" rel="noopener" data-cta="whatsapp">
            ${waGlyph}
            ${secondaryText}
          </a>
        </div>
        <div class="cta-reassurance">
          <span>No credit card needed</span>
          <span class="cta-dot">&middot;</span>
          <span>Free pilot for your school</span>
          <span class="cta-dot">&middot;</span>
          <span>We set everything up for you</span>
        </div>
      </div>
    </section>`;
}

