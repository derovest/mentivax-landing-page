import { prose, compare, rules, modules, cards, chatDemo, faq, related, cta } from '../lib/components.mjs';
import { pick } from '../lib/links.mjs';
import { waLink } from '../site.mjs';

const FAQ = [
  {
    q: 'What is school fee management software?',
    a: 'School fee management software records each student&rsquo;s fees, collects payments, issues receipts and tracks what is still pending. Mentivax also automates the follow-up: reminders to parents with pending fees, receipts on WhatsApp and the daily collection report.'
  },
  {
    q: 'Can we set up instalment, term and monthly fees?',
    a: 'Yes. Fee structures support instalments, splits across fee heads and transport fares, so each class can be billed the way your school actually charges, whether by term, by month or in instalments.'
  },
  {
    q: 'Can parents pay online?',
    a: 'Yes. Parents can pay through an online payment link and the receipt is written automatically. Payments at the counter can be split across cash, UPI, bank and card in one receipt.'
  },
  {
    q: 'Are fee reminders sent automatically?',
    a: 'They can be. You decide whether reminders go out automatically on the schedule you set, or are prepared for a staff member to review and approve first. Reminders are sent on WhatsApp in English or Tamil.'
  },
  {
    q: 'How do concessions and scholarships work?',
    a: 'Concessions go through an approval step before they apply, and scholarships, late fees, credit and refunds are recorded against the student&rsquo;s account, so the balance is always correct.'
  },
  {
    q: 'Can we still give our auditor the accounts?',
    a: 'Yes. Fee collections flow into the day book and accounts, and Mentivax exports to Tally for your auditor.'
  },
  {
    q: 'Can we use only fee management?',
    a: 'Yes. Many schools start with fee management alone because it saves the most time. You can add attendance, exams or other modules later, and only pay for what you use.'
  }
];

export default {
  path: '/school-fee-management-software/',
  updated: '2026-10-13',
  priority: '0.9',
  title: 'School Fee Management Software with WhatsApp Reminders | Mentivax',
  ogTitle: 'School Fee Management Software That Automates Follow-Ups',
  description: 'Fee management software for schools: instalments, receipts, concessions and pending fees, with automatic WhatsApp reminders and daily collection reports.',
  crumb: 'Fee management',
  parents: [{ name: 'School management software', path: '/school-management-software/' }],
  label: 'School fee management software',
  h1: 'School fee management software that automates follow-ups',
  subtitle: 'Bill every class, collect by cash or UPI, and know exactly who owes what. Then let Mentivax send the reminders and receipts, so your office stops chasing fees by hand.',
  heroPrimary: {
    href: waLink("Hi! I'd like to start a free pilot of Mentivax fee management."),
    text: 'Start free pilot',
    cta: 'free_pilot'
  },
  featureList: [
    'Fee structures with instalments, fee heads and transport fares',
    'Class billing and invoice editor',
    'Receipts across cash, UPI, bank and card; family receipts',
    'Concession approvals, scholarships, late fees, credit and refunds',
    'Online payment links with automatic receipts',
    'Automatic WhatsApp fee reminders in English or Tamil',
    'Day book, counter closing and bank matching',
    'Pending fees, defaulters and fee forecast',
    'Tally export'
  ],
  faq: FAQ,
  sections: [
    prose({
      id: 'the-problem',
      heading: 'Fee collection shouldn&rsquo;t depend on one person and one Excel file.',
      lead: 'In many schools the fee office runs on a spreadsheet that one person understands, a receipt book and a lot of phone calls.',
      html: `          <p>Balances drift when a payment is entered twice or not at all. Parents call for receipt copies. Every few weeks someone filters the sheet for pending fees, types reminders and calls the families who haven&rsquo;t responded. At month end the same person builds the collection report again, by hand.</p>
          <p>Mentivax replaces the spreadsheet with a fee system where every rupee is billed, collected and accounted for, and then <a class="text-link" href="/school-automation-software/">automates the follow-up</a> so that reminders, receipts and reports no longer wait for someone to find time.</p>`
    }),
    modules({
      id: 'fee-features',
      label: 'Everything in the fee office',
      title: 'From fee structure to final receipt.',
      desc: 'Each part works with the others: a payment at the counter updates the student&rsquo;s balance, the parent portal, the day book and the accounts at once.',
      items: [
        {
          icon: 'grid',
          color: 'blue',
          title: 'Fee structures',
          desc: 'Set fees up once, the way your school charges them.',
          list: [
            'Term, monthly and instalment fees',
            'Fee heads such as tuition, books and activities',
            'Transport fares by area or distance',
            'Siblings grouped as one family'
          ]
        },
        {
          icon: 'file',
          color: 'sky',
          title: 'Billing',
          desc: 'Invoices for a whole class in one go.',
          list: [
            'Class billing wizard',
            'Invoice editor for one-off changes',
            'Late fees',
            'Credit and refunds recorded properly'
          ]
        },
        {
          icon: 'card',
          color: 'green',
          title: 'Collection &amp; receipts',
          desc: 'At the counter or online, receipts are never handwritten.',
          list: [
            'One receipt split across cash, UPI, bank and card',
            'One family receipt for all siblings',
            'Online payment links; receipt written automatically',
            'Receipts sent to parents on WhatsApp'
          ]
        },
        {
          icon: 'heart',
          color: 'orange',
          title: 'Concessions &amp; scholarships',
          desc: 'Discounts that are approved and recorded, not pencilled in.',
          list: [
            'Concessions go through an approval step',
            'Scholarships recorded against the student',
            'RTE reimbursement claims tracked to receipt',
            'Balances always reflect what was agreed'
          ]
        },
        {
          icon: 'bell',
          color: 'red',
          title: 'Pending fees &amp; defaulters',
          desc: 'Know who owes what, without filtering a sheet.',
          list: [
            'Pending fees by class, student or due date',
            'Overdue families flagged with follow-up suggestions',
            'Fee forecast for the months ahead',
            'Ask &ldquo;who owes fees in Class 8 for over 60 days?&rdquo;'
          ]
        },
        {
          icon: 'chart',
          color: 'blue',
          title: 'Day book &amp; reports',
          desc: 'Close the counter and the month without Excel.',
          list: [
            'Counter closing and cash book every day',
            'Bank matching',
            'Daily and monthly collection reports',
            'Tally export for your auditor'
          ]
        }
      ]
    }),
    rules({
      id: 'fee-automation',
      label: 'Fee automation',
      title: 'Follow-ups that happen without anyone remembering.',
      desc: 'Write the rule once. Choose whether it runs automatically or waits for approval.',
      items: [
        { when: 'a fee instalment is due in three days', then: 'send parents with a pending balance a polite WhatsApp reminder', mode: 'auto' },
        { when: 'a fee is more than 30 days overdue', then: 'prepare a firmer reminder for the accountant to review before it goes out', mode: 'approve' },
        { when: 'a parent pays through the online link', then: 'record the payment, write the receipt and send it on WhatsApp', mode: 'auto' },
        { when: 'a family stays overdue after reminders', then: 'suggest a follow-up call to the office with the family&rsquo;s balance and history', mode: 'suggest' }
      ],
      footnote: 'Reminder timings and wording are examples. You set your own, in English or Tamil.'
    }),
    compare({
      id: 'a-month-in-the-fee-office',
      label: 'A month in the fee office',
      title: 'Stop preparing the same fee report every month.',
      old: {
        title: 'With Excel and a receipt book',
        items: [
          'Receipts handwritten, copies hunted down when parents ask',
          'Pending list filtered from the sheet every few weeks',
          'Reminders typed and sent one parent at a time',
          'Counter cash tallied by hand at day end',
          'Month-end collection report rebuilt in Excel'
        ]
      },
      now: {
        title: 'With Mentivax',
        items: [
          'Receipts generated for every payment and sent on WhatsApp',
          'Pending fees always current, by class or family',
          'Reminders go out on schedule, with approval if you want it',
          'Counter closing and cash book done in the system',
          'Ask for &ldquo;June fee report&rdquo; and get it'
        ]
      }
    }),
    cards({
      id: 'for-everyone',
      label: 'Who it helps',
      title: 'Better for the office, the principal and parents.',
      items: [
        {
          icon: 'briefcase',
          color: 'green',
          title: 'Accountant &amp; office staff',
          desc: 'No more re-entering payments, rewriting receipts or rebuilding reports. Anyone on staff with permission can find a family&rsquo;s balance, not just the one person who knows the file.'
        },
        {
          icon: 'chart',
          color: 'purple',
          title: 'Principal &amp; correspondent',
          desc: 'Ask &ldquo;today&rsquo;s fee collection?&rdquo; or &ldquo;how much is pending for Class 8?&rdquo; and get the answer in seconds, with the fee forecast for the months ahead.'
        },
        {
          icon: 'chat',
          color: 'wa',
          title: 'Parents',
          desc: 'Clear reminders, payment links and instant receipts on WhatsApp, and the full fee history in the parent portal, opened with a mobile number.',
          demo: chatDemo([
            ['school', 'Term 2 fee of &#8377;12,500 is due on 10 July. Pay here: [link]'],
            ['parent', 'Paid.'],
            ['school', 'Receipt sent. Balance: &#8377;0']
          ], 'Example message')
        }
      ]
    }),
    faq({ title: 'Fee management: common questions', items: FAQ }),
    related({
      title: 'Fee management is one part of the school',
      desc: 'See how fees connect to the rest of Mentivax.',
      items: pick('management', 'automation', 'attendance', 'india', 'erp', 'features')
    }),
    cta({
      title: 'Show us your fee sheet. We&rsquo;ll show you what can be automated.',
      desc: 'Send us your current fee Excel or tell us how you collect fees today. We&rsquo;ll show you Mentivax working on your own data, in a free 20-minute demo.',
      taskPrompt: 'Hi! I want to automate fee collection and reminders in our school.'
    })
  ]
};
