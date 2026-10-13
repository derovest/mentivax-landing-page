import { prose, cards, chatDemo, steps, migration, faq, related, cta } from '../lib/components.mjs';
import { pick } from '../lib/links.mjs';

const FAQ = [
  {
    q: 'Does Mentivax support CBSE and State Board schools?',
    a: 'Yes. Report cards support CBSE 9-point grading, A+ to E grading or marks only, and Mentivax prepares CBSE and Tamil Nadu board student lists. If your school follows another board or a specific report-card format, tell us during the demo and we&rsquo;ll show you how it fits.'
  },
  {
    q: 'Can parents pay school fees by UPI?',
    a: 'Yes. Parents can pay through an online payment link, and the receipt is written automatically. At the counter, a single receipt can be split across cash, UPI, bank transfer and card.'
  },
  {
    q: 'Does Mentivax send WhatsApp messages to parents?',
    a: 'Yes. Fee reminders, receipts, absence alerts, circulars and bus alerts reach parents on WhatsApp. Fee reminders can be sent in English or Tamil.'
  },
  {
    q: 'Which languages does Mentivax support?',
    a: 'Staff screens and the parent portal switch between English and Tamil. Parents can also ask questions about their own child in English or Tamil.'
  },
  {
    q: 'Can Mentivax generate EMIS and UDISE+ data?',
    a: 'Yes. Student data can be exported in the format needed for EMIS / UDISE+ uploads, so the office doesn&rsquo;t re-enter it.'
  },
  {
    q: 'Does payroll handle PF, ESI and TDS?',
    a: 'Payroll produces payslips and the working papers for PF, ESI, professional tax and TDS. Accounts can be exported to Tally for your auditor.'
  },
  {
    q: 'How is student data protected?',
    a: 'Each school sees only its own data. Aadhaar numbers are stored encrypted and shown masked, every change is recorded in an audit log, staff can sign in with two-factor security, and consent and erasure follow the DPDP Act.'
  }
];

export default {
  path: '/school-management-software-india/',
  updated: '2026-10-13',
  priority: '0.9',
  title: 'School Management Software for Indian Schools | Mentivax',
  ogTitle: 'School Management Software for Indian Schools',
  description: 'School management software built for Indian schools: instalment fees, UPI, WhatsApp parent alerts, CBSE grading, EMIS / UDISE+ export, PF / ESI payroll.',
  crumb: 'For Indian schools',
  label: 'School management software India',
  h1: 'School management software for Indian schools',
  subtitle: 'Built around how Indian schools actually run: term and instalment fees, UPI and cash at the counter, parents on WhatsApp, EMIS uploads and staff who&rsquo;d rather not learn fifty menus.',
  featureList: [
    'Instalment, term and transport fee structures',
    'Receipts across cash, UPI, bank and card',
    'WhatsApp fee reminders, receipts and absence alerts',
    'CBSE 9-point and A+ to E grading',
    'EMIS / UDISE+ export and board student lists',
    'PF, ESI, professional tax and TDS working papers',
    'RTE reimbursement claim tracking',
    'English and Tamil interface',
    'DPDP Act consent and erasure'
  ],
  faq: FAQ,
  sections: [
    prose({
      id: 'built-for-india',
      heading: 'Generic software makes Indian schools work around it.',
      lead: 'Software designed for schools elsewhere, or for large chains with IT teams, rarely fits a typical Indian school office.',
      html: `          <p>Fees come in instalments, by term, by month and with transport added on. Payments arrive in cash, UPI and bank transfer, sometimes in the same afternoon. Parents read WhatsApp, not email. The office needs EMIS data, board lists, transfer certificates and RTE claims, and the accountant needs PF, ESI and a Tally export at the end of the year.</p>
          <p>Mentivax is <a class="text-link" href="/school-management-software/">school management software</a> built around that reality, especially for small and medium schools that have tried complicated software before and gone back to Excel. Staff can type what they need in plain words, in English or Tamil, and <a class="text-link" href="/school-automation-software/">routine work is automated</a> so the office isn&rsquo;t doing it by hand.</p>`
    }),
    cards({
      id: 'indian-requirements',
      label: 'Made for Indian school operations',
      title: 'The details that matter in an Indian school office.',
      items: [
        {
          icon: 'rupee',
          color: 'green',
          title: 'Fee structures as they really are',
          desc: 'Term, monthly and instalment fees, transport fares by area or distance, sibling families paying once for all children, concessions, scholarships and late fees.'
        },
        {
          icon: 'card',
          color: 'purple',
          title: 'UPI, cash and the day book',
          desc: 'Receipts split across cash, UPI, bank and card. Online payment links write the receipt automatically, and the day book closes the counter and matches the bank.'
        },
        {
          icon: 'chat',
          color: 'wa',
          title: 'Parents on WhatsApp',
          desc: 'Reminders, receipts, absence alerts, circulars and &ldquo;bus is near&rdquo; messages reach parents on WhatsApp. No app to install.',
          demo: chatDemo([
            ['school', 'Aarav was marked absent today. Please let the class teacher know if he is unwell.'],
            ['parent', 'He has fever. Will send a leave letter.']
          ], 'Example message')
        },
        {
          icon: 'file',
          color: 'purple',
          title: 'Boards, grading and returns',
          desc: 'CBSE 9-point, A+ to E or marks-only report cards, hall tickets with photos, CBSE and Tamil Nadu board lists, and EMIS / UDISE+ export.'
        },
        {
          icon: 'briefcase',
          color: 'green',
          title: 'Staff, payroll and compliance',
          desc: 'Payslips, advances and full-and-final settlement, with PF, ESI, professional tax and TDS working papers, and RTE reimbursement claims tracked to receipt.'
        },
        {
          icon: 'shield',
          color: 'purple',
          title: 'Data protection for Indian law',
          desc: 'DPDP Act consent and erasure, Aadhaar stored encrypted and shown masked, role-based permissions and an audit log of every change.'
        }
      ]
    }),
    prose({
      id: 'academic-year',
      heading: 'Through the Indian academic year.',
      lead: 'The same system carries the school from admissions season to the year-end promotion.',
      html: `          <ul class="about-list">
            <li><strong>Admissions season:</strong> enquiries, school visits and follow-ups tracked in one pipeline, with an online admission form, application fee and a status page for each applying parent.</li>
            <li><strong>Start of term:</strong> class billing creates every student&rsquo;s fee invoice in one go; WhatsApp reminders go out as due dates approach.</li>
            <li><strong>Every school day:</strong> one-tap attendance with absence alerts to parents, homework and the class diary, and buses tracked on a live map.</li>
            <li><strong>Exam season:</strong> seating plans, hall tickets, mark entry with checks, ranked results and report cards.</li>
            <li><strong>Month end:</strong> payroll with statutory working papers, the fee collection report and the attendance register, without rebuilding them in Excel.</li>
            <li><strong>Year end:</strong> a promotion wizard moves students to the next class, and the accountant gets a Tally export.</li>
          </ul>`
    }),
    steps({
      id: 'implementation',
      label: 'Implementation',
      title: 'Live in about a week, with your data.',
      desc: 'No hardware and no IT team needed. We do the setup.',
      items: [
        { title: 'Start with your biggest headache', desc: 'Fees, attendance or reports: we begin with the one job that saves your office the most time.' },
        { title: 'We import your records', desc: 'Students, fee structures, past bills and receipts from Excel, CSV, registers or your old software, checked row by row.' },
        { title: 'Staff start working', desc: 'They type what they need in plain words, in English or Tamil. Add modules whenever you&rsquo;re ready.' }
      ]
    }),
    migration({
      title: 'Moving from registers, Excel or another software?',
      desc: 'You don&rsquo;t start again. We bring your students, fee structure, past bills and receipts across, so your staff carry on from where they left off.',
      points: [
        'Excel, CSV and old-software import',
        'Every row checked; nothing silently dropped',
        'EMIS / UDISE+ and board lists ready to upload',
        'Tally export for your auditor'
      ]
    }),
    faq({ title: 'Indian schools: common questions', items: FAQ }),
    related({
      title: 'Explore further',
      items: pick('automation', 'management', 'erp', 'fees', 'attendance', 'faq')
    }),
    cta()
  ]
};
