import { prose, compare, rules, cards, chatDemo, steps, faq, related, cta } from '../lib/components.mjs';
import { pick } from '../lib/links.mjs';

const FAQ = [
  {
    q: 'What is school automation software?',
    a: 'School automation software takes over the repetitive work that sits around school records: sending fee reminders, alerting parents about absences, writing receipts, compiling reports and following up on pending tasks. A traditional school management system stores the data. Automation software also acts on it, either on its own or by preparing the work for a staff member to approve.'
  },
  {
    q: 'Is school automation software different from school management software or a school ERP?',
    a: 'They overlap. School management software and school ERPs keep the records: students, fees, attendance, exams, staff. Automation is the layer that does the follow-up work on those records. Mentivax includes the full set of school management modules and adds workflows and an AI agent on top, so the same system that holds your fee records can also send the reminders.'
  },
  {
    q: 'Will automation send messages to parents without anyone checking?',
    a: 'Only if you choose that. Each workflow can run automatically, appear as a suggestion, or wait for approval. Most schools let routine messages such as receipts and absence alerts go out on their own, and keep anything involving money, marks or a sensitive conversation behind an approval step. Nothing the AI agent prepares is sent until a person approves it.'
  },
  {
    q: 'Do we need technical staff to set up automations?',
    a: 'No. A workflow is written as a sentence, such as &ldquo;when a student is absent three days running, message the parent&rdquo;, and Mentivax turns it into a rule. Our team also sets up your first workflows with you during onboarding.'
  },
  {
    q: 'Which school tasks should we automate first?',
    a: 'Start with the job your office repeats most often and finds most frustrating. For most schools that is fee follow-up: finding who has not paid, reminding parents and writing receipts. Absence alerts and monthly attendance reports are usually next.'
  },
  {
    q: 'Does Mentivax use AI for automation?',
    a: 'Workflows follow the rules you set; they do not need AI. The Mentivax Agent uses AI to answer questions in plain words and to prepare work such as reminders, reports, substitute cover and worksheets for a person to approve. Children&rsquo;s names are removed before anything reaches the AI, and each AI feature can be switched off.'
  }
];

export default {
  path: '/school-automation-software/',
  updated: '2026-10-13',
  priority: '0.9',
  title: 'School Automation Software That Reduces Manual Work | Mentivax',
  ogTitle: 'School Automation Software That Reduces Manual Work',
  description: 'School automation software that sends fee reminders, absence alerts, receipts and reports on its own, with an AI agent and human approval for sensitive actions.',
  crumb: 'School automation software',
  label: 'School automation software',
  h1: 'School automation software that reduces manual work',
  subtitle: 'Don&rsquo;t just move your registers into software. Automate the work behind them. Mentivax sends fee reminders, absence alerts, receipts and reports on its own, and asks a person before anything sensitive goes out.',
  featureList: [
    'Workflows written as a sentence that run automatically, as suggestions, or after approval',
    'AI agent that answers questions and prepares work for approval',
    'Automatic WhatsApp fee reminders, receipts and absence alerts',
    'Teacher copilot for lesson plans, question papers and report-card remarks',
    'Connected school management modules: fees, attendance, exams, payroll, transport'
  ],
  faq: FAQ,
  sections: [
    prose({
      id: 'what-is-school-automation',
      heading: 'What is school automation software?',
      lead: 'School automation software does the repetitive follow-up work that school records create, so office staff and teachers don&rsquo;t have to.',
      html: `          <p>Most schools that &ldquo;went digital&rdquo; moved their registers and Excel sheets into software. The data now lives on a screen, but the work around it hasn&rsquo;t changed. Someone still checks who hasn&rsquo;t paid, types the reminder, calls the parent of the child who has been absent all week, and copies numbers into a month-end report.</p>
          <p>Automation software closes that gap. It watches the records your school already keeps, applies the rules you set, and either does the routine task itself or prepares it for a person to approve. The goal is simple: fewer jobs that depend on one person remembering to do them.</p>
          <p>Mentivax is built this way from the ground up. It is complete <a class="text-link" href="/school-management-software/">school management software</a> (admissions, fees, attendance, exams, timetable, transport, payroll and parent communication) with workflows and a personal AI agent working across all of it.</p>`
    }),
    compare({
      id: 'digitize-vs-automate',
      label: 'Digitizing vs automating',
      title: 'Most school software digitizes the work. Mentivax automates it.',
      desc: 'Digitizing puts the register on a screen. Automating means the follow-up happens without someone having to start it.',
      old: {
        title: 'Digitized only',
        items: [
          'Fee records are in the software, but someone still filters pending fees and types each reminder',
          'Attendance is marked on a phone, but no one is told when a child is absent three days running',
          'Receipts are printed at the counter and parents call the office for copies',
          'Month-end reports are exported to Excel and rebuilt by hand',
          'Only the person who knows the system can answer the principal&rsquo;s questions'
        ]
      },
      now: {
        title: 'Automated with Mentivax',
        items: [
          'Pending fees are found and WhatsApp reminders go out on the schedule you set',
          'Parents are alerted about absences, and repeated absences are flagged to the class teacher',
          'Receipts reach parents on WhatsApp the moment a payment is recorded',
          'Attendance and fee reports are ready when you ask, built from the day&rsquo;s work',
          'Anyone with permission can ask a question in plain words and get the answer'
        ]
      }
    }),
    rules({
      id: 'examples',
      label: 'What can be automated',
      title: 'Routine school work that can run on its own.',
      desc: 'Each of these is a Mentivax workflow: a rule written as a sentence. You decide whether it runs automatically, appears as a suggestion, or waits for approval.',
      items: [
        { when: 'a student is absent for three consecutive days', then: 'prepare a message to the parent and flag the student to the class teacher', mode: 'approve' },
        { when: 'a term fee is overdue', then: 'find the families with a pending balance and send a WhatsApp reminder in English or Tamil', mode: 'approve' },
        { when: 'a fee payment is recorded at the counter or online', then: 'write the receipt and send it to the parent on WhatsApp', mode: 'auto' },
        { when: 'a child is marked absent in the morning register', then: 'send the parent an absence alert', mode: 'auto' },
        { when: 'a teacher&rsquo;s leave is approved', then: 'suggest substitute cover for their periods from the timetable', mode: 'suggest' },
        { when: 'a bus permit, insurance or licence is close to expiry', then: 'alert the transport in-charge before it lapses', mode: 'auto' }
      ],
      footnote: 'These are examples. Your school can write its own rules for the jobs it repeats most.'
    }),
    cards({
      id: 'how-it-works',
      label: 'How Mentivax automates',
      title: 'How the work gets done for you.',
      desc: 'Automation in Mentivax isn&rsquo;t one feature. It runs through every module, so a fee paid, a register marked or a leave approved can set the next step in motion.',
      items: [
        {
          icon: 'bolt',
          color: 'green',
          title: 'Workflows that run themselves',
          desc: 'Write a rule as a sentence and Mentivax turns it into a workflow. Fee reminders, receipts and absence alerts go out on time, every time, without anyone remembering to send them.'
        },
        {
          icon: 'chat',
          color: 'purple',
          title: 'Your school&rsquo;s own AI agent',
          desc: 'Ask &ldquo;Who owes fees in Class 8 for over 60 days?&rdquo; and follow up like you would with a colleague. The agent prepares reminders, substitute cover, leave applications, PTM bookings and reports, each with an exact preview for you to approve.'
        },
        {
          icon: 'chat',
          color: 'wa',
          title: 'WhatsApp, where parents already are',
          desc: 'Reminders, receipts, absence alerts and circulars reach parents on WhatsApp. Staff can even ask the agent questions from WhatsApp.',
          demo: chatDemo([
            ['school', 'Term 2 fee of &#8377;12,500 is due on 10 July.'],
            ['parent', 'Paid by UPI just now.'],
            ['school', 'Receipt sent. Balance: &#8377;0']
          ], 'Example message')
        },
        {
          icon: 'cap',
          color: 'purple',
          title: 'Help for teachers, not more forms',
          desc: 'Lesson plans, question papers, worksheets and report-card remarks are drafted for teachers to check. Photograph an answer sheet and AI proposes marks against your answer key for the teacher to accept.'
        },
        {
          icon: 'users',
          color: 'green',
          title: 'Parents get answers without calling',
          desc: 'Parents ask about their own child in English or Tamil and get answers from the school&rsquo;s records: fees, homework, report cards and the bus. Fewer calls reach the office.'
        },
        {
          icon: 'grid',
          color: 'purple',
          title: 'One connected system underneath',
          desc: 'Automation works because the data is in one place. A fee paid at the counter updates the balance, the parent portal, the day book and the accounts at once, so the next step can start on its own.'
        }
      ]
    }),
    prose({
      id: 'human-approval',
      heading: 'Automation with a person in charge.',
      lead: 'AI drafts, a person decides. Automation should remove busywork, not judgement.',
      html: `          <p>Every Mentivax workflow runs in one of three ways, and you choose which:</p>
          <ul class="about-list">
            <li><strong>Automatically</strong>, for routine messages such as receipts and same-day absence alerts.</li>
            <li><strong>As a suggestion</strong>, shown to the right staff member to act on, such as substitute cover for a teacher on leave.</li>
            <li><strong>After approval</strong>, for anything involving money, marks or families, such as fee reminders to overdue parents.</li>
          </ul>
          <p>The AI agent only does what the person using it is allowed to do, and nothing it prepares is sent until someone approves the exact preview. Children&rsquo;s names are removed before anything reaches the AI, every change is recorded in an audit log, and each AI feature can be switched off.</p>
          <h3 class="about-subheading">Where to start</h3>
          <p>You don&rsquo;t need to automate the whole school on day one. Pick the job your office repeats most and dreads most. For most schools that is <a class="text-link" href="/school-fee-management-software/">fee follow-up</a>; for others it is <a class="text-link" href="/school-attendance-management-software/">attendance and absence alerts</a>. Once one workflow is saving time, adding the next is a sentence away.</p>`
    }),
    steps({
      id: 'getting-started',
      label: 'Getting started',
      title: 'From your most repetitive task to an automated one.',
      desc: 'No IT team needed. We set it up with you.',
      items: [
        { title: 'Tell us the task', desc: 'Fee reminders? Absence calls? The monthly report? We start with the one job that costs your staff the most time.' },
        { title: 'We bring your data', desc: 'Hand us your registers, Excel files or old software exports. We import and check them row by row, so no one re-types anything.' },
        { title: 'Switch on the workflow', desc: 'We write the first rules with you and you choose which run automatically and which wait for approval. Add more whenever you&rsquo;re ready.' }
      ]
    }),
    faq({ title: 'School automation: common questions', items: FAQ }),
    related({
      title: 'Explore Mentivax by need',
      desc: 'Automation runs on top of a complete school system. See how it works for each part of the school.',
      items: pick('management', 'erp', 'fees', 'attendance', 'india', 'features')
    }),
    cta({ taskPrompt: 'Hi! I want to automate this task in our school: ' })
  ]
};
