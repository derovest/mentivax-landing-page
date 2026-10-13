import { prose, compare, modules, faq, related, cta } from '../lib/components.mjs';
import { pick } from '../lib/links.mjs';

const FAQ = [
  {
    q: 'What does school management software do?',
    a: 'School management software keeps a school&rsquo;s records and daily operations in one system: student records and admissions, fees and receipts, attendance, exams and report cards, timetable, staff and payroll, transport and parent communication. Instead of separate registers and Excel files, every department works from the same data.'
  },
  {
    q: 'How is Mentivax different from other school management systems?',
    a: 'Most school management systems store and organise data, and staff still do the follow-up by hand. Mentivax includes the same modules, then automates the routine work on top of them: fee reminders, receipts and absence alerts go out on their own, and an AI agent answers questions and prepares work for staff to approve.'
  },
  {
    q: 'Do we have to buy every module?',
    a: 'No. Mentivax has 23 modules and you switch on only the ones you need. Many schools start with fees or attendance and add more later. You only pay for the modules you use.'
  },
  {
    q: 'Is it suitable for a small school?',
    a: 'Yes. Mentivax is built for small and medium schools that don&rsquo;t have an IT team. Staff can type what they need in plain words instead of learning dozens of menus, and we set everything up for you.'
  },
  {
    q: 'Can parents use it without installing an app?',
    a: 'Yes. Parents get reminders, receipts, alerts and circulars on WhatsApp, and open the parent portal in any phone browser with their mobile number. There is no account to create and no app to download.'
  },
  {
    q: 'How long does it take to start?',
    a: 'Most schools can go live within a week. We import your existing data from Excel, CSV or your old software and check it row by row, so your staff carry on from where they left off.'
  }
];

export default {
  path: '/school-management-software/',
  updated: '2026-10-13',
  priority: '0.9',
  title: 'School Management Software That Does More Than Store Data | Mentivax',
  ogTitle: 'School Management Software That Does More Than Store Data',
  description: 'School management software for students, admissions, fees, attendance, exams, staff, payroll and transport, plus automation for the routine work around them.',
  crumb: 'School management software',
  label: 'School management software',
  h1: 'School management software that does more than store data',
  subtitle: 'Students, fees, attendance, exams, staff, transport and parents in one connected system. Then Mentivax goes a step further and automates the routine work around that data.',
  featureList: [
    'Student records, admissions and certificates',
    'Fee billing, receipts, concessions and online payment',
    'Attendance with WhatsApp absence alerts',
    'Exams, report cards and hall tickets',
    'Timetable, homework and lesson plans',
    'Staff attendance, leave and payroll',
    'Transport routes and GPS tracking',
    'Parent portal and WhatsApp communication',
    'AI agent and workflow automation'
  ],
  faq: FAQ,
  sections: [
    prose({
      id: 'what-it-covers',
      heading: 'One system for the whole school, not one app per department.',
      lead: 'In many schools the fee counter has one Excel file, the class teacher has a register, the office has another file for certificates and the accountant has Tally. None of them talk to each other.',
      html: `          <p>School management software brings all of it into one place. A student is entered once at admission, and the same record carries their fees, attendance, marks, transport and certificates through every year they are in the school. A fee paid at the counter shows in the parent portal, the day book and the accounts at once.</p>
          <p>That alone saves time. But a system that only stores data still needs people to act on it, which is where most school software stops and where Mentivax keeps going.</p>`
    }),
    modules({
      id: 'modules',
      label: 'What&rsquo;s included',
      title: 'Every part of school management, connected.',
      desc: 'Switch on only the modules your school needs. Each works on its own and with the others.',
      items: [
        {
          icon: 'users',
          color: 'blue',
          title: 'Students &amp; Admissions',
          desc: 'From the first enquiry to the transfer certificate.',
          list: [
            'Enquiry pipeline, online admission form and seat limits per class',
            'Student profiles with documents, health and fee history',
            'TC, bonafide and other certificates; ID cards',
            'Year-end promotion and Excel import'
          ]
        },
        {
          icon: 'card',
          color: 'green',
          title: 'Fees &amp; Payments',
          desc: 'Billing, collection and follow-up in one place.',
          list: [
            'Fee structures with instalments, concessions and late fees',
            'Receipts for cash, UPI, bank and card',
            'Day book, counter closing and online payment links',
            'Automatic WhatsApp reminders and receipts'
          ],
          link: { href: '/school-fee-management-software/', text: 'Fee management in detail' }
        },
        {
          icon: 'check',
          color: 'sky',
          title: 'Attendance',
          desc: 'Registers in seconds, parents informed automatically.',
          list: [
            'One-tap marking, even offline in the teacher app',
            'WhatsApp absence alerts to parents',
            'Monthly register with percentages',
            'Staff attendance and leave'
          ],
          link: { href: '/school-attendance-management-software/', text: 'Attendance in detail' }
        },
        {
          icon: 'file',
          color: 'orange',
          title: 'Exams &amp; Report Cards',
          desc: 'From mark entry to the printed report card.',
          list: [
            'Mark entry with checks and ranked result sheets',
            'Report cards with CBSE 9-point, A+ to E or marks-only grading',
            'Seating plans and hall tickets with photos',
            'AI-assisted answer-sheet marking that teachers review'
          ]
        },
        {
          icon: 'calendar',
          color: 'blue',
          title: 'Timetable &amp; Academics',
          desc: 'Plan the term and run the week without clashes.',
          list: [
            'Timetable generator with clash checks',
            'Substitute cover when a teacher is on leave',
            'Homework, class diary and syllabus progress',
            'Lesson plans and question papers drafted by AI for teachers to check'
          ]
        },
        {
          icon: 'briefcase',
          color: 'green',
          title: 'Staff, Payroll &amp; Accounts',
          desc: 'Pay staff and keep the books without a separate tool.',
          list: [
            'Staff register, attendance and leave balances',
            'Payroll with payslips and advances',
            'PF, ESI, professional tax and TDS working papers',
            'Expenses, P&amp;L and Tally export'
          ]
        },
        {
          icon: 'bus',
          color: 'red',
          title: 'Transport',
          desc: 'Safer, simpler school buses.',
          list: [
            'Routes, stops and fares',
            'Live GPS map and a driver app',
            '&ldquo;Bus is near&rdquo; alerts for parents',
            'Reminders before permits and insurance expire'
          ]
        },
        {
          icon: 'chat',
          color: 'sky',
          title: 'Parents &amp; Communication',
          desc: 'Parents stay informed without calling the office.',
          list: [
            'Parent portal opened with a mobile number',
            'WhatsApp reminders, receipts, circulars and alerts',
            'Parent&ndash;teacher meeting booking',
            'English and Tamil'
          ]
        },
        {
          icon: 'chart',
          color: 'orange',
          title: 'Reports &amp; Analytics',
          desc: 'Answers without waiting for someone to prepare them.',
          list: [
            'Fee collection, pending fees and fee forecast',
            'Attendance summaries and early-warning flags',
            'Ask questions in plain words and get a table back',
            'Excel and PDF export when you need it'
          ]
        }
      ]
    }),
    compare({
      id: 'stores-vs-automates',
      label: 'The difference',
      title: 'Traditional software stores data. Mentivax works on it.',
      desc: 'Both keep your records. Only one takes the next step for you.',
      old: {
        title: 'Traditional school management system',
        items: [
          'Shows a list of pending fees; staff send reminders one by one',
          'Records absences; nobody is alerted unless someone checks',
          'Generates a report when someone opens the right screen',
          'Staff need training to find the right menu',
          'Every module switched on and paid for, used or not'
        ]
      },
      now: {
        title: 'Mentivax',
        items: [
          'Sends fee reminders on the schedule you set, with approval if you want it',
          'Alerts parents about absences and flags repeated absences',
          'Answers &ldquo;today&rsquo;s fee collection?&rdquo; in plain words, any time',
          'Type what you need; the right page opens with details filled in',
          'Switch on only what you need and pay only for that'
        ]
      },
      footnote: 'Want the full picture of what automation means for a school? Read <a class="text-link" href="/school-automation-software/">school automation software explained</a>.'
    }),
    prose({
      id: 'how-to-choose',
      heading: 'How to choose school management software',
      lead: 'Before comparing feature lists, ask what will actually change in your office on a normal Tuesday.',
      html: `          <ul class="about-list">
            <li><strong>Will it reduce work, or just move it?</strong> If staff still compile reminders and reports by hand, the software has digitized the work but not reduced it.</li>
            <li><strong>Can your least technical staff member use it?</strong> Ask them to try a real task in the demo, not watch a presentation.</li>
            <li><strong>Can you start small?</strong> Paying for 20 modules on day one usually means using three of them.</li>
            <li><strong>Who moves your data?</strong> Re-typing years of fee records is where many software projects stall.</li>
            <li><strong>How do parents receive information?</strong> In India that usually means WhatsApp, not another app to install.</li>
            <li><strong>Who controls sensitive actions?</strong> Messages about fees and marks should go out only with the approval you decide.</li>
          </ul>
          <p>If you&rsquo;re comparing against an ERP your school already uses, our page on <a class="text-link" href="/school-erp-software/">school ERP software</a> covers why schools still do manual work after an ERP goes in.</p>`
    }),
    faq({ title: 'School management software: common questions', items: FAQ }),
    related({
      title: 'Explore further',
      items: pick('automation', 'erp', 'india', 'fees', 'attendance', 'faq')
    }),
    cta()
  ]
};
