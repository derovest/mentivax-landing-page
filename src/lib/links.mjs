/* ============================================
   Cards for the "Keep exploring" sections. Pick by key so every page links
   to its parent topics and siblings with consistent wording.
   ============================================ */

export const LINKS = {
  automation: {
    href: '/school-automation-software/',
    icon: 'bolt',
    title: 'School automation software',
    desc: 'What school automation means in practice, and which routine jobs can run on their own.'
  },
  management: {
    href: '/school-management-software/',
    icon: 'grid',
    title: 'School management software',
    desc: 'Every module a school runs on, from admissions to payroll, with automation built on top.'
  },
  erp: {
    href: '/school-erp-software/',
    icon: 'briefcase',
    title: 'School ERP software',
    desc: 'Why schools still do manual work after buying an ERP, and what changes when the ERP automates.'
  },
  india: {
    href: '/school-management-software-india/',
    icon: 'map',
    title: 'For Indian schools',
    desc: 'Instalment fees, UPI, WhatsApp, EMIS / UDISE+, CBSE grading, PF and ESI: built around Indian school life.'
  },
  fees: {
    href: '/school-fee-management-software/',
    icon: 'rupee',
    title: 'Fee management software',
    desc: 'Fee structures, receipts, concessions and pending fees, with reminders that go out on their own.'
  },
  attendance: {
    href: '/school-attendance-management-software/',
    icon: 'check',
    title: 'Attendance management software',
    desc: 'One-tap registers, automatic absence alerts to parents and monthly reports with no Excel.'
  },
  features: {
    href: '/features/',
    icon: 'grid',
    title: 'All features',
    desc: 'The full list of Mentivax modules and what each one does.',
    cta: 'See features'
  },
  faq: {
    href: '/faq/',
    icon: 'info',
    title: 'FAQ',
    desc: 'Honest answers on pricing, switching from old software, data safety and how the AI is used.',
    cta: 'Read the FAQ'
  }
};

export const pick = (...keys) => keys.map((k) => LINKS[k]);
