import { prose, compare, cards, migration, faq, related, cta } from '../lib/components.mjs';
import { pick } from '../lib/links.mjs';

const FAQ = [
  {
    q: 'What is a school ERP?',
    a: 'ERP stands for Enterprise Resource Planning. A school ERP is software that manages a school&rsquo;s core operations in one system, typically student information, admissions, fees, attendance, exams, timetable, staff, payroll, transport, library and parent communication. The terms school ERP and school management software are often used for the same kind of product.'
  },
  {
    q: 'Is Mentivax a school ERP?',
    a: 'Mentivax includes everything a school ERP does, with 23 modules from admissions and fees to payroll, transport and hostel. The difference is that Mentivax also automates the work around those records: reminders, receipts and alerts go out on their own, and an AI agent prepares routine work for staff to approve.'
  },
  {
    q: 'We already have a school ERP. Why do we still do so much manual work?',
    a: 'Most ERPs are built to record transactions, not to act on them. The ERP knows which fees are pending, but someone still has to filter the list, write reminders, send them and follow up. Automation is what removes those steps.'
  },
  {
    q: 'Can we switch from our current ERP to Mentivax?',
    a: 'Yes. We move students, fee structures, past bills and receipts from your old software, Excel or CSV and check every row. If you prefer, you can start with the modules your current ERP lacks and move the rest later.'
  },
  {
    q: 'Do we have to replace our whole ERP at once?',
    a: 'No. You can switch on only the Mentivax modules you need. Many schools start with fees or attendance, where automation saves the most time, and expand from there.'
  },
  {
    q: 'How much does a school ERP cost?',
    a: 'It depends on the modules and the size of the school. With Mentivax you pay only for the modules you use, and you can try it first with a free pilot. Tell us your school&rsquo;s size and needs on WhatsApp and we&rsquo;ll give you a clear quote.'
  }
];

export default {
  path: '/school-erp-software/',
  updated: '2026-10-13',
  priority: '0.9',
  title: 'School ERP Software Built Around Automation | Mentivax',
  ogTitle: 'School ERP Software Built Around Automation',
  description: 'A school ERP with fees, attendance, exams, payroll and transport, plus workflows and an AI agent that automate the follow-up most ERPs leave to staff.',
  crumb: 'School ERP software',
  label: 'School ERP software',
  h1: 'School ERP software built around automation',
  subtitle: 'Everything you expect from a school ERP: students, fees, attendance, exams, staff and payroll. Plus the part most ERPs leave out: the follow-up work, done for you.',
  featureList: [
    'Student information system and admissions',
    'Fee management with automatic reminders and receipts',
    'Attendance with automatic parent alerts',
    'Exams, report cards and hall tickets',
    'Staff, payroll and statutory working papers',
    'Transport, library, hostel and front office',
    'Workflow automation and AI agent with human approval'
  ],
  faq: FAQ,
  sections: [
    prose({
      id: 'what-is-school-erp',
      heading: 'What is a school ERP?',
      lead: 'A school ERP is one system that manages a school&rsquo;s core operations, so every department works from the same records instead of separate files.',
      html: `          <p>The term comes from Enterprise Resource Planning, software originally built for companies. In schools, it usually covers:</p>
          <ul class="about-list">
            <li><strong>Students and admissions:</strong> enquiries, applications, profiles, certificates</li>
            <li><strong>Fees:</strong> fee structures, billing, receipts, concessions, dues</li>
            <li><strong>Attendance:</strong> student and staff registers</li>
            <li><strong>Academics and exams:</strong> timetable, homework, marks, report cards</li>
            <li><strong>Staff and payroll:</strong> leave, salaries and statutory deductions</li>
            <li><strong>Transport, library and hostel</strong></li>
            <li><strong>Parent communication</strong> and a parent portal</li>
          </ul>
          <p>Many buyers use &ldquo;school ERP&rdquo; and &ldquo;<a class="text-link" href="/school-management-software/">school management software</a>&rdquo; for the same thing. Mentivax covers all of these modules. Where it differs is in what happens after the data goes in.</p>`
    }),
    cards({
      id: 'why-manual-work-remains',
      label: 'The ERP gap',
      title: 'Why schools still do manual work after buying an ERP.',
      desc: 'An ERP replaces the register. It doesn&rsquo;t replace the person who has to act on what the register says.',
      items: [
        {
          icon: 'rupee',
          color: 'green',
          title: 'Pending fees still need chasing',
          desc: 'The ERP can list who hasn&rsquo;t paid. Someone still exports the list, writes reminders, sends them one by one and checks again next week.'
        },
        {
          icon: 'bell',
          color: 'purple',
          title: 'Nobody is alerted',
          desc: 'A child absent three days running is recorded correctly, and noticed only when a teacher happens to look. Records don&rsquo;t act on their own.'
        },
        {
          icon: 'file',
          color: 'purple',
          title: 'Reports end up in Excel',
          desc: 'The month-end report the principal wants isn&rsquo;t quite the one the ERP produces, so it is exported and rebuilt by hand every month.'
        },
        {
          icon: 'grid',
          color: 'green',
          title: 'Too many screens',
          desc: 'Finding the right module, menu and filter takes training. When the trained person is on leave, the work waits.'
        },
        {
          icon: 'users',
          color: 'purple',
          title: 'One person knows the system',
          desc: 'Questions from the principal or a parent go through whoever knows where the data lives, instead of being answered directly.'
        },
        {
          icon: 'clock',
          color: 'green',
          title: 'Follow-up depends on memory',
          desc: 'Permit renewals, overdue fees, pending certificates: if nobody remembers, nothing happens.'
        }
      ]
    }),
    compare({
      id: 'record-vs-workflow',
      label: 'Record management vs workflow automation',
      title: 'The same data. A different amount of work.',
      desc: 'Here is what sending fee reminders looks like in each.',
      old: {
        title: 'Traditional school ERP',
        mark: '&rarr;',
        items: [
          'A staff member logs in and finds the fees module',
          'Filters pending fees by class and due date',
          'Exports the list or copies it into Excel',
          'Types and sends reminders to each parent',
          'Checks again next week and follows up by hand'
        ]
      },
      now: {
        title: 'Mentivax',
        mark: '&rarr;',
        items: [
          'Your fee data and a rule: &ldquo;remind parents when a term fee is overdue&rdquo;',
          'Mentivax finds the families with a pending balance',
          'It prepares WhatsApp reminders in English or Tamil',
          'A staff member reviews the preview and approves, or lets it run automatically',
          'Receipts go out as payments come in; the list updates itself'
        ]
      },
      footnote: 'Data + rules + AI agent: routine work is prepared or done automatically, and staff review the actions that matter.'
    }),
    prose({
      id: 'how-mentivax-combines',
      heading: 'An ERP foundation with automation built in.',
      lead: 'ERP functionality is the foundation. Automation is the difference.',
      html: `          <p>Mentivax gives your school the full set of ERP modules: admissions, student records, fees, attendance, exams, timetable, staff, payroll, accounts, transport, library, hostel and the parent portal, all connected. On top of that sit two things most ERPs don&rsquo;t have:</p>
          <ul class="about-list">
            <li><strong>Workflows</strong> written as a sentence, such as &ldquo;when a student is absent three days running, message the parent&rdquo;, that run automatically, as suggestions, or after approval.</li>
            <li><strong>A personal AI agent</strong> that answers questions in plain words and prepares work such as fee reminders, substitute cover and reports, each with a preview for a person to approve.</li>
          </ul>
          <p>Staff who never learned the ERP&rsquo;s menus can type what they need. And you switch on only the modules you use, instead of paying for an ERP you use a fraction of. See <a class="text-link" href="/school-automation-software/">how school automation works</a> in more detail.</p>`
    }),
    migration({
      title: 'Already on another ERP? We move your data.',
      desc: 'Switching doesn&rsquo;t mean starting again. We import students, fee structures, past bills and receipts from your old software, Excel or CSV, checked row by row, so staff carry on from where they left off.',
      points: [
        'Import from old software, Excel or CSV',
        'Every row checked; nothing silently dropped',
        'Start with the modules your ERP lacks if you prefer',
        'Tally export for your auditor'
      ]
    }),
    faq({ title: 'School ERP: common questions', items: FAQ }),
    related({
      title: 'Explore further',
      items: pick('automation', 'management', 'india', 'fees', 'attendance', 'features')
    }),
    cta({ title: 'Tell us what your ERP still makes you do by hand.', taskPrompt: 'Hi! Our current ERP still makes us do this manually: ' })
  ]
};
