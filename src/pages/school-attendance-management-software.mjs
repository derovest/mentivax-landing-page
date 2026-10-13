import { prose, compare, rules, cards, chatDemo, faq, related, cta } from '../lib/components.mjs';
import { pick } from '../lib/links.mjs';
import { waLink } from '../site.mjs';

const FAQ = [
  {
    q: 'How do teachers mark attendance in Mentivax?',
    a: 'Teachers mark each child with one tap, or mark the whole class present in one go and change the few who are absent. The teacher app works offline, so registers can be taken even where the network is weak.'
  },
  {
    q: 'Are parents told automatically when their child is absent?',
    a: 'Yes. When a student is marked absent, Mentivax can send the parent a WhatsApp absence alert automatically. You decide whether alerts go out straight away or after a staff member checks the register.'
  },
  {
    q: 'Can Mentivax flag students who are absent repeatedly?',
    a: 'Yes. You can set a rule such as &ldquo;when a student is absent three days running, message the parent and inform the class teacher&rdquo;. Early-warning flags also show students whose attendance is slipping over time.'
  },
  {
    q: 'Can we get the monthly attendance register without Excel?',
    a: 'Yes. The monthly register is built from daily marking, with attendance percentages for every student, and can be exported to Excel if you still need a copy.'
  },
  {
    q: 'Does it work with biometric or card readers?',
    a: 'Mentivax supports card, fingerprint and QR readers at the school gate and on the bus, as well as photo-assisted attendance with parent consent. None of this is required: most schools start with the teacher app.'
  },
  {
    q: 'Can we track staff attendance too?',
    a: 'Yes. Staff attendance and leave, with leave balances, are part of the staff module and feed into payroll.'
  }
];

export default {
  path: '/school-attendance-management-software/',
  updated: '2026-10-13',
  priority: '0.9',
  title: 'School Attendance Software with Automatic Parent Alerts | Mentivax',
  ogTitle: 'School Attendance Software With Automatic Parent Alerts',
  description: 'School attendance software with one-tap registers that work offline, automatic WhatsApp absence alerts to parents and monthly reports without Excel.',
  crumb: 'Attendance management',
  parents: [{ name: 'School management software', path: '/school-management-software/' }],
  label: 'School attendance management software',
  h1: 'School attendance software with automatic parent alerts',
  subtitle: 'Registers in seconds, parents told about absences the same day, and monthly reports that build themselves. No register books to total and no spreadsheets to rebuild.',
  heroPrimary: {
    href: waLink("Hi! I'd like to start a free pilot of Mentivax attendance."),
    text: 'Start free pilot',
    cta: 'free_pilot'
  },
  featureList: [
    'One-tap student attendance and mark-all-present',
    'Offline registers in the teacher app',
    'Automatic WhatsApp absence alerts to parents',
    'Repeated-absence workflows',
    'Monthly register with percentages and Excel export',
    'Early-warning flags for slipping attendance',
    'Card, fingerprint and QR readers at the gate and on the bus',
    'Staff attendance and leave'
  ],
  faq: FAQ,
  sections: [
    prose({
      id: 'why-attendance-software',
      heading: 'Taking attendance is quick. Everything after it isn&rsquo;t.',
      lead: 'Marking a register takes a few minutes. Totalling it, calling parents, chasing repeated absences and preparing the monthly report takes far longer.',
      html: `          <p>With a paper register, a child who misses school three days in a row is often noticed only when someone happens to look back through the pages. Parents find out late. At month end, a teacher or office assistant totals each row by hand and copies the numbers into a report.</p>
          <p>Mentivax makes marking faster, but the bigger change is what happens next: parents are alerted automatically, repeated absences are flagged, and the monthly register is ready when the month ends. It&rsquo;s one part of Mentivax&rsquo;s <a class="text-link" href="/school-management-software/">school management software</a>, and a good example of <a class="text-link" href="/school-automation-software/">school automation</a> in practice.</p>`
    }),
    cards({
      id: 'attendance-features',
      label: 'Attendance features',
      title: 'From the morning register to the monthly report.',
      items: [
        {
          icon: 'check',
          color: 'green',
          title: 'One-tap marking',
          desc: 'Tap each child, or mark the whole class present and change the few who are absent. Teachers who can use WhatsApp can use this.'
        },
        {
          icon: 'clock',
          color: 'purple',
          title: 'Works offline',
          desc: 'The teacher app takes registers without a network and syncs when it&rsquo;s back, so a weak signal never holds up the morning.'
        },
        {
          icon: 'chat',
          color: 'wa',
          title: 'Absence alerts to parents',
          desc: 'Parents get a WhatsApp message when their child is marked absent, so they hear from the school the same day.',
          demo: chatDemo([
            ['school', 'Diya was marked absent in Class 6B today.'],
            ['parent', 'She is unwell. Sorry for not informing.']
          ], 'Example message')
        },
        {
          icon: 'file',
          color: 'purple',
          title: 'Monthly register, built for you',
          desc: 'Attendance percentages for every student and class, calculated from daily marking. Export to Excel only if you still need a copy.'
        },
        {
          icon: 'chart',
          color: 'green',
          title: 'Early warning',
          desc: 'See which students&rsquo; attendance is slipping, alongside marks, homework and conduct, and track the help you give them.'
        },
        {
          icon: 'bus',
          color: 'purple',
          title: 'Gate and bus, if you want it',
          desc: 'Card, fingerprint and QR readers at the gate and on the bus, bus boarding marked per trip, and photo-assisted attendance only with parent consent.'
        }
      ]
    }),
    rules({
      id: 'attendance-automation',
      label: 'Attendance automation',
      title: 'Notify parents when their child is absent, without a single phone call.',
      desc: 'Rules written as sentences. You choose which run automatically and which wait for a teacher or the office to confirm.',
      items: [
        { when: 'a student is marked absent in the morning register', then: 'send the parent a WhatsApp absence alert', mode: 'auto' },
        { when: 'a student is absent for three consecutive days', then: 'prepare a message to the parent and inform the class teacher', mode: 'approve' },
        { when: 'a student&rsquo;s attendance falls below the level your school sets', then: 'flag the student for follow-up by the class teacher', mode: 'suggest' },
        { when: 'a teacher is on approved leave', then: 'suggest substitute cover for their periods', mode: 'suggest' }
      ],
      footnote: 'The thresholds are yours to choose. These are examples.'
    }),
    compare({
      id: 'register-vs-mentivax',
      label: 'Register vs Mentivax',
      title: 'Generate monthly attendance reports without rebuilding them in Excel.',
      old: {
        title: 'Paper register',
        items: [
          'Teachers total each row by hand at month end',
          'Parents learn about absences days later, if at all',
          'Repeated absences noticed only by chance',
          'Office copies figures into a spreadsheet for the principal',
          'Registers kept in a cupboard, hard to search'
        ]
      },
      now: {
        title: 'Mentivax',
        items: [
          'Percentages calculated as the register is marked',
          'Parents alerted on WhatsApp the same day',
          'Repeated absences trigger the rule you set',
          'Principal asks &ldquo;who is absent today?&rdquo; and gets the list',
          'Every past register searchable in seconds'
        ]
      }
    }),
    faq({ title: 'Attendance management: common questions', items: FAQ }),
    related({
      title: 'Attendance is one part of the school',
      desc: 'See how attendance connects to fees, exams and the rest of Mentivax.',
      items: pick('management', 'automation', 'fees', 'india', 'erp', 'features')
    }),
    cta({
      title: 'Still calling parents about absences? Let&rsquo;s automate it.',
      desc: 'Tell us how your school takes attendance today. We&rsquo;ll show you the same register in Mentivax, with alerts and reports switched on, in a free 20-minute demo.',
      taskPrompt: 'Hi! I want to automate attendance and absence alerts in our school.'
    })
  ]
};
