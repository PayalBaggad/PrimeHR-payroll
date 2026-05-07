// =============================================================
// FEATURE PAGE — single template that renders any feature detail
// page from the FEATURES content map (slug → spec).
// =============================================================

const FEATURES = {
  // ============ HRMS ============
  'payroll': {
    cat: 'HRMS',
    catColor: 'var(--brand-600)',
    crumbsParent: { label: 'HRMS', href: 'hrms.html' },
    eyebrow: 'hrms · payroll',
    title: 'Payroll that closes itself.',
    sub: 'Run payroll for hundreds of employees in under a minute. Auto-apply PF, ESI, PT and TDS. Generate payslips, bank-disbursal files and statutory challans without opening a spreadsheet.',
    mock: 'PayrollMock',
    pillars: [
      { i: 'bolt',   t: 'Auto-calculate gross & net',    d: 'CTC structures, variable components, loan EMIs and reimbursements roll into one click.' },
      { i: 'shield', t: 'Statutory built-in',            d: 'PF, ESI, PT, LWF, TDS — current rates, current rules, all states.' },
      { i: 'doc',    t: 'Payslips & bank file',          d: 'PDF payslips emailed automatically. NEFT/IMPS export for HDFC, ICICI, SBI, Axis & more.' },
      { i: 'plug',   t: 'Tally-ready exports',           d: 'Journal entries flow into Tally — no double-entry, no end-of-month panic.' },
    ],
    workflow: ['Sync attendance', 'Calculate gross', 'Apply deductions', 'Generate payslips', 'Disburse via bank file'],
    soon: ['Salary on-demand (employee withdraw any-time)', 'Multi-country payroll'],
  },
  'attendance': {
    cat: 'HRMS', catColor: 'var(--brand-600)', crumbsParent: { label: 'HRMS', href: 'hrms.html' },
    eyebrow: 'hrms · attendance',
    title: 'Attendance — without the policing.',
    sub: 'Geo-fenced clock-ins, selfie verification for WFH, IP-restricted login for office. Shifts, overtime and breaks rolled into one timeline per employee.',
    mock: 'AttendanceMock',
    pillars: [
      { i: 'pin',   t: 'Geo-fenced check-in',  d: 'Lock attendance to office radius, client site, or warehouse — no spoofing.' },
      { i: 'cal',   t: 'Shift planner',        d: 'Rotational, split, night shifts with auto OT calculation.' },
      { i: 'check', t: 'Multi-mode clock-in',  d: 'Selfie + GPS for field, biometric kiosk for factory, IP/SSO for office.' },
      { i: 'chart', t: 'Pattern alerts',       d: 'Spot late-comers, missed punches and over-leaves before they become a problem.' },
    ],
    workflow: ['Employee clocks in', 'Geo-tag verified', 'Attendance approved', 'Pushed to payroll'],
    soon: ['AI face-recognition kiosk', 'Smartwatch tap-to-clock'],
  },
  'leave': {
    cat: 'HRMS', catColor: 'var(--brand-600)', crumbsParent: { label: 'HRMS', href: 'hrms.html' },
    eyebrow: 'hrms · leave management',
    title: 'Leave that runs itself.',
    sub: 'Configure unlimited leave types — casual, sick, earned, maternity, comp-off, sabbatical. Auto-accrue, auto-encash, auto-approve when policy allows.',
    mock: 'LeaveMock',
    pillars: [
      { i: 'cal',   t: 'Custom leave types',    d: 'Casual, sick, earned, comp-off, paternity, sabbatical — set accrual & cap per policy.' },
      { i: 'wave',  t: 'Holiday calendars',     d: 'Per location, per office. Restricted holidays employees can choose from.' },
      { i: 'check', t: 'Approval workflows',    d: 'Manager → HR. Auto-approve short leaves. Escalate at threshold.' },
      { i: 'chart', t: 'Balance & encashment',  d: 'Live balance per employee, year-end carry-forward, leave encashment in payroll.' },
    ],
    workflow: ['Apply on app', 'Manager approves', 'Calendar updates', 'Payroll adjusts'],
    soon: ['Predictive absence forecasting', 'WhatsApp leave bot'],
  },
  'reimbursement': {
    cat: 'HRMS', catColor: 'var(--brand-600)', crumbsParent: { label: 'HRMS', href: 'hrms.html' },
    eyebrow: 'hrms · reimbursement',
    title: 'Reimbursement claims, killed.',
    sub: 'Snap a receipt, pick a category, submit. AI extracts amount, vendor and date. Manager approves on phone. Money lands with the next salary.',
    mock: 'ReimbursementMock',
    pillars: [
      { i: 'doc',   t: 'OCR receipts',          d: 'Snap a bill — vendor, date, GSTIN and amount auto-filled.' },
      { i: 'check', t: 'Policy guardrails',     d: 'Per-category caps, daily limits, mandatory receipts above ₹X.' },
      { i: 'bolt',  t: 'Bulk approve',          d: 'Approve a manager\'s entire week in two clicks.' },
      { i: 'plug',  t: 'Pay with payroll',      d: 'Approved claims flow into the next salary cycle automatically.' },
    ],
    workflow: ['Snap receipt', 'AI extracts data', 'Manager approves', 'Paid with salary'],
    soon: ['Corporate card auto-import', 'GST input credit auto-tag'],
  },
  'assets': {
    cat: 'HRMS', catColor: 'var(--brand-600)', crumbsParent: { label: 'HRMS', href: 'hrms.html' },
    eyebrow: 'hrms · assets',
    title: 'Know where every laptop is.',
    sub: 'Track laptops, phones, monitors, vehicles and ID cards. Allocate, transfer, return, write off — every move logged with date and signed-off employee.',
    mock: 'AssetsMock',
    pillars: [
      { i: 'layers', t: 'Asset register',     d: 'Serial, model, vendor, warranty, depreciation — all in one ledger.' },
      { i: 'users',  t: 'Allocation history', d: 'Who used what, when, signed acknowledgement included.' },
      { i: 'shield', t: 'Recovery on exit',   d: 'Auto-checklist on offboarding — laptop, phone, ID, parking pass.' },
      { i: 'chart',  t: 'Depreciation report',d: 'Asset value to date for finance, ready for the auditor.' },
    ],
    workflow: ['Procure', 'Allocate', 'Maintain', 'Recover on exit'],
    soon: ['QR-code asset scan', 'Vendor warranty alerts'],
  },
  'tasks': {
    cat: 'HRMS', catColor: 'var(--brand-600)', crumbsParent: { label: 'HRMS', href: 'hrms.html' },
    eyebrow: 'hrms · tasks · todos',
    title: 'Daily todos that don\'t slip.',
    sub: 'Assign tasks with SLAs. Reminders before they\'re late. Visible to manager. Roll up into appraisals — so good work doesn\'t get forgotten at year-end.',
    mock: 'TasksMock',
    pillars: [
      { i: 'check', t: 'Recurring task lists', d: 'Daily, weekly, monthly checklists per role.' },
      { i: 'bolt',  t: 'SLA + reminders',      d: 'Push notifications before due. Manager sees risk early.' },
      { i: 'users', t: 'Delegation',           d: 'Assign, reassign, or co-own with one tap.' },
      { i: 'chart', t: 'Rolls into appraisal', d: 'Quarterly task progress feeds into review automatically.' },
    ],
    workflow: ['Create task', 'Assign + SLA', 'Track + remind', 'Closed + scored'],
    soon: ['AI task generation from chat', 'Slack/Teams two-way sync'],
  },
  'letters': {
    cat: 'HRMS', catColor: 'var(--brand-600)', crumbsParent: { label: 'HRMS', href: 'hrms.html' },
    eyebrow: 'hrms · letter generation',
    title: 'Generate any HR letter in 5 seconds.',
    sub: 'Offer, appointment, appraisal, experience, relieving, salary-hike. Custom templates with merge fields. e-Signed PDF emailed and archived automatically.',
    mock: 'LettersMock',
    pillars: [
      { i: 'doc',   t: 'Pre-built templates',  d: 'Offer, appointment, appraisal, experience, relieving — editable.' },
      { i: 'bolt',  t: 'Auto-fill merge fields', d: 'Name, designation, CTC, joining date — pulled from employee record.' },
      { i: 'shield', t: 'e-Signature',         d: 'CEO/HR digital signature stamped. Tamper-proof PDF.' },
      { i: 'plug',  t: 'Bulk generation',      d: 'Generate appraisal letters for the whole team in one go.' },
    ],
    workflow: ['Pick template', 'Auto-fill', 'Review', 'e-Sign + email'],
    soon: ['Multi-language letters (Hindi, Tamil)', 'WhatsApp delivery'],
  },

  // ============ FINANCE ============
  'invoice': {
    cat: 'Finance', catColor: 'var(--accent-600)', crumbsParent: { label: 'Finance', href: 'finance.html' },
    eyebrow: 'finance · invoice',
    title: 'Invoices that get paid faster.',
    sub: 'GST-compliant, e-Invoice (IRN) ready, multi-currency. Auto-reminders, embedded payment links, and Tally sync — so receivables don\'t age.',
    mock: 'InvoiceMock',
    pillars: [
      { i: 'doc',   t: 'GST + e-Invoice IRN',     d: 'CGST/SGST/IGST auto-applied. IRN generated at the click of "Save".' },
      { i: 'plug',  t: 'Multi-currency + FX',     d: 'Bill in INR, USD, AED, GBP — FX captured at issue date.' },
      { i: 'bolt',  t: 'Razorpay/Stripe links',   d: 'Customer pays with one tap. Status syncs back live.' },
      { i: 'cal',   t: 'Recurring & milestones',  d: 'Subscriptions, milestones, retainers — all on schedule.' },
    ],
    workflow: ['Create invoice', 'Generate IRN', 'Send + remind', 'Reconcile'],
    soon: ['Credit-note workflows', 'WhatsApp invoice delivery'],
  },
  'bank-statement': {
    cat: 'Finance', catColor: 'var(--accent-600)', crumbsParent: { label: 'Finance', href: 'finance.html' },
    eyebrow: 'finance · bank statement upload',
    title: 'Statements parsed in seconds.',
    sub: 'Drop a bank PDF, CSV or Excel. We auto-detect the bank format, parse 200+ transactions, categorize each one, and post them to your ledger — ready for reconciliation.',
    mock: 'BankStatementMock',
    pillars: [
      { i: 'doc',   t: 'PDF / CSV / XLSX',     d: 'HDFC, ICICI, SBI, Axis, Kotak, Yes — 30+ banks pre-trained.' },
      { i: 'bolt',  t: 'AI categorization',    d: 'Salary, vendor payments, fuel, AWS — tagged from description.' },
      { i: 'shield', t: 'Duplicate detection', d: 'Reuploaded the same statement? We catch it.' },
      { i: 'chart', t: 'Posted to ledger',     d: 'Every transaction lands in the right ledger account.' },
    ],
    workflow: ['Upload PDF/CSV', 'Auto-parse', 'AI categorize', 'Post to ledger'],
    soon: ['Live bank API feeds (account aggregator)', 'Credit-card statement parsing'],
  },
  'expense-payment': {
    cat: 'Finance', catColor: 'var(--accent-600)', crumbsParent: { label: 'Finance', href: 'finance.html' },
    eyebrow: 'finance · expense & payment',
    title: 'Bills in. Payments out. Audit-ready.',
    sub: 'Vendor bills, recurring subscriptions, one-off claims — capture, approve, schedule, pay. Bulk NEFT/IMPS/UPI export. Every paisa traceable.',
    mock: 'ExpensePaymentMock',
    pillars: [
      { i: 'doc',   t: 'Vendor bill capture',  d: 'Email-in or upload — OCR extracts vendor, GSTIN, line items.' },
      { i: 'check', t: 'Multi-step approval',  d: 'Routes by amount: ≥1L → CFO, ≥5L → CEO.' },
      { i: 'bolt',  t: 'Bulk pay-out',         d: 'Pay 80 vendors in one ICICI/HDFC NEFT batch.' },
      { i: 'shield', t: 'Audit trail',         d: 'Every approval, edit and payment timestamped + immutable.' },
    ],
    workflow: ['Capture bill', 'Approve', 'Schedule', 'Pay + book'],
    soon: ['Vendor self-serve portal', 'TDS auto-deduction at source'],
  },
  'reconciliation': {
    cat: 'Finance', catColor: 'var(--accent-600)', crumbsParent: { label: 'Finance', href: 'finance.html' },
    eyebrow: 'finance · reconciliation',
    title: 'Reconciliation in minutes, not days.',
    sub: 'Bank statement vs ledger, GSTR vs purchase, payments vs invoices. Our matcher handles 95%+ on first run. You only review the exceptions.',
    mock: 'ReconciliationMock',
    pillars: [
      { i: 'bolt',  t: 'Auto-match (95%+)',     d: 'Amount + date + reference — three-way match in seconds.' },
      { i: 'check', t: 'Exception queue',       d: 'Only the unmatched 5% surfaces — review with one click.' },
      { i: 'plug',  t: 'GSTR 2A/2B match',      d: 'Match purchase ledger against vendor uploads. Catch missing input credits.' },
      { i: 'shield', t: 'Audit-ready logs',     d: 'Reconciliation reports stamped and archived per period.' },
    ],
    workflow: ['Import bank', 'Auto-match', 'Review unmatched', 'Close period'],
    soon: ['Inter-company reconciliation', 'AI suggested matches with confidence score'],
  },

  // ============ FIELD FORCE ============
  'routes': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · track routes',
    title: 'Live GPS trail of every rep.',
    sub: 'Battery-friendly background tracking. See every stop, idle minute, distance covered, route deviation — replay any rep\'s day from start to end.',
    mock: 'RoutesMock',
    pillars: [
      { i: 'pin',   t: 'Background GPS',         d: 'Battery-optimized — full day on a single charge.' },
      { i: 'map',   t: 'Replay any day',         d: 'Scrub through a rep\'s entire trail — useful for disputes.' },
      { i: 'chart', t: 'Distance & idle',        d: 'Total km, idle time, average speed per rep per day.' },
      { i: 'bolt',  t: 'Deviation alerts',       d: 'Notify if rep leaves the planned beat without reason.' },
    ],
    workflow: ['Start day', 'GPS tracks', 'Visit logged', 'End day · trail saved'],
    soon: ['Petrol cost auto-calc from km', 'Vehicle telematics integration'],
  },
  'ffa-reimburse': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · reimbursement',
    title: 'Field claims that prove themselves.',
    sub: 'Fuel claim auto-calculated from GPS distance. Toll receipts geo-validated. Lunch caps applied per city. No more "back of envelope" math.',
    mock: 'FFAReimburseMock',
    pillars: [
      { i: 'pin',   t: 'GPS-validated fuel',     d: 'Distance from trail × per-km rate. No more guessing.' },
      { i: 'doc',   t: 'Receipt + photo',        d: 'Snap the bill, GPS auto-attached for tolls and parking.' },
      { i: 'shield', t: 'Per-city limits',       d: 'Lunch caps for tier-1, tier-2, tier-3 — set once, enforced always.' },
      { i: 'plug',  t: 'Pay with payroll',       d: 'Approved claims flow into next salary cycle.' },
    ],
    workflow: ['Snap bill', 'Auto-validate', 'Approve', 'Paid in salary'],
    soon: ['Fuel-card direct integration', 'Per-diem auto-calculation'],
  },
  'ffa-attendance': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · attendance',
    title: 'Start day. End day. Geo-tagged.',
    sub: 'Field rep starts day with selfie + GPS. Manager sees who\'s on the road, who hasn\'t started, who left early. No more "I forgot to mark"',
    mock: 'FFAAttendanceMock',
    pillars: [
      { i: 'pin',   t: 'Geo-tagged start/end',  d: 'Latitude, longitude, timestamp, accuracy — locked to the device.' },
      { i: 'check', t: 'Selfie verification',   d: 'Optional liveness check to prevent buddy-punch.' },
      { i: 'chart', t: 'Live dashboard',        d: 'See every active/idle/offline rep on a single screen.' },
      { i: 'bolt',  t: 'Auto-alerts',           d: 'Notify manager if rep hasn\'t started by 10 am.' },
    ],
    workflow: ['Selfie + GPS', 'Day starts', 'Visits logged', 'End-day check-out'],
    soon: ['Smartwatch-only check-in', 'Offline-mode queue'],
  },
  'visits': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · visits',
    title: 'Every visit, geo-tagged & photo-proofed.',
    sub: 'Visit notes, outcome, next-step, photo of the storefront and shelf, GPS proof — all logged in 30 seconds, even on 2G.',
    mock: 'VisitsMock',
    pillars: [
      { i: 'pin',   t: 'GPS + photo proof',    d: 'No "fake visits". Every entry geo-stamped, server-verified.' },
      { i: 'check', t: 'Outcome capture',      d: 'Order placed, follow-up, no decision — pick + add notes.' },
      { i: 'cal',   t: 'Auto follow-up',       d: 'Schedules reminder for the date set during the visit.' },
      { i: 'chart', t: 'Coverage report',      d: 'Which parties covered this week, which slipping behind.' },
    ],
    workflow: ['Open visit', 'Log outcome + photo', 'Schedule follow-up', 'Synced to MIS'],
    soon: ['Voice-note visit logs', 'In-store shelf-share AI from photo'],
  },
  'collection': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · collection',
    title: 'Cash, cheque and UPI — all tracked.',
    sub: 'Rep collects, app records, manager sees in real-time. Cheque deposit reminder. UPI auto-reconciles. Cash-in-hand visible per rep.',
    mock: 'CollectionMock',
    pillars: [
      { i: 'coin',  t: 'Cash · cheque · UPI',  d: 'One workflow for any payment mode.' },
      { i: 'shield', t: 'Cash-in-hand monitor',d: 'Per-rep ledger. Catch leakage early.' },
      { i: 'cal',   t: 'Cheque deposit timer', d: 'Reminder to deposit within 48h, escalate after 72h.' },
      { i: 'plug',  t: 'Auto-reconcile UPI',   d: 'Direct match against bank UPI feed — no manual entry.' },
    ],
    workflow: ['Collect', 'Enter in app', 'Deposit/UPI', 'Reconciled to ledger'],
    soon: ['Bharat QR for direct customer pay', 'Daily cash-up summary on WhatsApp'],
  },
  'party-master': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · party master',
    title: 'One source of truth for customers.',
    sub: 'GSTIN, address, credit period, outstanding, contact persons, shop photo. Synced from Tally. Editable from the field with manager approval.',
    mock: 'PartyMasterMock',
    pillars: [
      { i: 'users', t: 'Customers · vendors · distributors', d: 'Single party model. Roles flag what they can do.' },
      { i: 'plug',  t: 'Tally two-way sync',                  d: 'Edits in PrimeHR flow to Tally and back.' },
      { i: 'shield', t: 'KYC documents',                      d: 'GSTIN, PAN, shop photo, owner ID — all in one place.' },
      { i: 'chart', t: 'Outstanding & credit',                d: 'Live AR per party. Block orders past credit limit.' },
    ],
    workflow: ['Add party', 'KYC + GST', 'Set credit', 'Visible to all reps'],
    soon: ['Bulk import from CSV with GSTIN auto-validation', 'Distributor self-onboarding portal'],
  },
  'route-plan': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · routes plan',
    title: 'Beat plans that optimize themselves.',
    sub: 'AI clusters parties by location, sequences stops to minimize km, fits in lunch breaks. Manager approves once a week — reps wake up to today\'s route.',
    mock: 'RoutePlanMock',
    pillars: [
      { i: 'map',   t: 'AI route optimization', d: 'Cluster + sequence by GPS. Saves 25–40% km on average.' },
      { i: 'cal',   t: 'Weekly beat planner',    d: 'Set frequency per party — daily/weekly/monthly.' },
      { i: 'check', t: 'Manager approval',       d: 'Lock the plan, push to all reps overnight.' },
      { i: 'chart', t: 'Plan vs actual',         d: 'Track adherence — which stops missed, which extra.' },
    ],
    workflow: ['Auto-cluster', 'Sequence', 'Approve', 'Push to reps'],
    soon: ['Traffic-aware ETAs (Google Maps API)', 'Multi-day trip planning'],
  },
  'mis': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · mis report',
    title: 'MIS in your inbox at 8 am.',
    sub: 'Yesterday\'s visits, orders, collections and gaps — by region, by rep, by SKU. WhatsApp + email + dashboard. Drill-down on any number.',
    mock: 'MISMock',
    pillars: [
      { i: 'chart', t: 'Daily / weekly / monthly', d: 'Auto-generated, no human in the loop.' },
      { i: 'bolt',  t: 'WhatsApp + email',         d: 'Sales head gets it on phone before standup.' },
      { i: 'plug',  t: 'Drill-down anywhere',      d: 'From region → rep → visit → photo, in 3 clicks.' },
      { i: 'shield', t: 'Custom dashboards',       d: 'Per-role views — CEO, sales head, rep, finance.' },
    ],
    workflow: ['Data flows in', 'AI generates', 'Pushed at 8 am', 'Drill-down on phone'],
    soon: ['Voice-query reports ("show me last week")', 'Auto-narrative summary'],
  },
  'complaint': {
    cat: 'Field Force', catColor: 'var(--rose-500)', crumbsParent: { label: 'Field Force', href: 'field-force.html' },
    eyebrow: 'field force · complaint',
    title: 'Complaints to closure on a Kanban.',
    sub: 'Customer raises ticket. System auto-assigns nearest available technician. SLA timer starts. Photo + signature on close. Customer feedback captured.',
    mock: 'ComplaintMock',
    pillars: [
      { i: 'bolt',  t: 'Auto-routing',          d: 'Skill + GPS + workload — picks the right tech.' },
      { i: 'cal',   t: 'SLA countdown',         d: 'Per-product SLA. Escalates at 75%.' },
      { i: 'check', t: 'Photo + e-sign close',  d: 'Customer signs on phone. Can\'t reopen later.' },
      { i: 'chart', t: 'CSAT capture',          d: 'Star rating + comment, rolled into rep score.' },
    ],
    workflow: ['Ticket raised', 'Auto-assigned', 'Tech resolves', 'Customer signs off'],
    soon: ['IVR ticket creation', 'Spare-parts inventory link'],
  },

  // ============ COMING SOON ============
  'performance': {
    cat: 'Coming soon · HR', catColor: 'var(--warn-500)', crumbsParent: { label: 'Solutions', href: 'solutions.html' },
    eyebrow: 'coming soon · q3 2026',
    title: 'Performance reviews that don\'t suck.',
    sub: 'AI-suggested KRAs based on role, ongoing 1:1 logs, quarterly task roll-ups, calibration meetings, and a clean appraisal letter at the end.',
    soon: true,
    pillars: [
      { i: 'target', t: 'KRA / KPI builder',     d: 'AI suggests goals from job role. Cascade from company OKRs.' },
      { i: 'users',  t: '1:1 templates',         d: 'Recurring 1:1s with shared notes, action items, history.' },
      { i: 'chart',  t: 'Quarterly calibration', d: 'Bell-curve view, manager calibration, fairness flags.' },
      { i: 'doc',    t: 'Appraisal letters',     d: 'Auto-generated with rating, hike, new CTC.' },
    ],
    workflow: ['Set KRAs', 'Continuous feedback', 'Quarterly review', 'Appraisal letter'],
  },
  'ats': {
    cat: 'Coming soon · HR', catColor: 'var(--warn-500)', crumbsParent: { label: 'Solutions', href: 'solutions.html' },
    eyebrow: 'coming soon · q3 2026',
    title: 'ATS — hire 3× faster.',
    sub: 'Post to Naukri, LinkedIn and your careers page in one click. AI ranks every applicant against your JD. Schedule interviews on Google Calendar without leaving PrimeHR.',
    soon: true,
    pillars: [
      { i: 'bolt',  t: 'Multi-channel posting', d: 'Naukri, LinkedIn, careers page, employee referrals — once.' },
      { i: 'target', t: 'AI screening',         d: 'Ranks resumes by JD-fit. Reads Github, blogs, Twitter for engineering roles.' },
      { i: 'cal',   t: 'Calendar interviews',   d: 'Auto-finds slots across panel. Sends Meet links.' },
      { i: 'plug',  t: 'Onboarding handoff',    d: 'Hired? Becomes employee record automatically.' },
    ],
    workflow: ['Post job', 'AI screens', 'Schedule', 'Offer + onboard'],
  },
  'time-tracking': {
    cat: 'Coming soon · HR', catColor: 'var(--warn-500)', crumbsParent: { label: 'Solutions', href: 'solutions.html' },
    eyebrow: 'coming soon · q4 2026',
    title: 'Time tracking — billable hours, made simple.',
    sub: 'Per-project, per-task hour logs. Idle detection. Client-billable vs internal. Auto-fill timesheets from calendar + git activity. Invoice clients without the friday scramble.',
    soon: true,
    pillars: [
      { i: 'clock', t: 'Project & task timer',  d: 'Start/stop with one tap. Tag client + billable.' },
      { i: 'bolt',  t: 'Auto-fill from signals', d: 'Pull from Google Calendar, GitHub, Jira, Linear.' },
      { i: 'doc',   t: 'Approval & invoice',    d: 'Manager signs off, hours flow into client invoice.' },
      { i: 'chart', t: 'Utilization report',    d: 'Per-team and per-project utilization for finance.' },
    ],
    workflow: ['Track time', 'Auto-fill', 'Approve', 'Bill client'],
  },
};

// ============ FEATURE PAGE ============
const FeaturePage = ({ slug }) => {
  const f = FEATURES[slug];
  if (!f) return <div style={{ padding: 60, textAlign: 'center' }}>Unknown feature</div>;
  const MockComponent = f.mock ? window[f.mock] : null;
  const allFeatureSlugs = Object.keys(FEATURES);
  const idx = allFeatureSlugs.indexOf(slug);
  const next = allFeatureSlugs[(idx + 1) % allFeatureSlugs.length];
  const prev = allFeatureSlugs[(idx - 1 + allFeatureSlugs.length) % allFeatureSlugs.length];

  return (
    <>
      <NavBar active={f.crumbsParent.label === 'HRMS' ? 'hrms' : f.crumbsParent.label === 'Field Force' ? 'ffa' : f.crumbsParent.label === 'Finance' ? 'finance' : 'soon'} />
      <PageHero
        crumbs={[{ label: 'Home', href: 'index.html' }, f.crumbsParent, { label: f.title.replace(/\.$/, '') }]}
        eyebrow={f.eyebrow}
        title={<>{f.title} {f.soon === true && <span className="soon-pill">coming soon</span>}</>}
        sub={f.sub}
        ctas={f.soon === true ? <>
          <a href="company.html#contact" className="btn btn--primary">Join the waitlist <Icon name="arrow" size={16} className="btn-arrow" /></a>
          <a href="solutions.html" className="btn btn--ghost">Browse all features</a>
        </> : <>
          <a href="pricing.html" className="btn btn--primary">Start free trial <Icon name="arrow" size={16} className="btn-arrow" /></a>
          <a href={f.crumbsParent.href} className="btn btn--ghost">All {f.crumbsParent.label} features</a>
        </>}
      />

      {/* The animated mock */}
      {MockComponent && (
        <section className="section section--soft" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <div className="container" style={{ maxWidth: 1080 }}>
            <Reveal><MockComponent /></Reveal>
          </div>
        </section>
      )}

      {/* Pillars / capabilities */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">what's inside</span>
            <h2>Built for {f.crumbsParent.label.toLowerCase()} teams that hate admin.</h2>
          </div>
          <div className="grid grid-2">
            {f.pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', height: '100%' }}>
                  <span style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--brand-50)', color: f.catColor, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Icon name={p.i} size={20} />
                  </span>
                  <div>
                    <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{p.t}</div>
                    <div style={{ fontSize: 14, color: 'var(--ink-600)', lineHeight: 1.6 }}>{p.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow strip */}
      {f.workflow && (
        <section className="section section--soft" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <div className="container">
            <div className="section-head section-head--center">
              <span className="eyebrow">workflow</span>
              <h2>From start to done.</h2>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
              {f.workflow.map((w, i) => (
                <React.Fragment key={i}>
                  <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: '20px 24px', textAlign: 'center', minWidth: 160, boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: f.catColor, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, margin: '0 auto 10px', fontFamily: 'var(--f-display)' }}>{i + 1}</div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{w}</div>
                  </div>
                  {i < f.workflow.length - 1 && (
                    <div style={{ display: 'grid', placeItems: 'center', color: 'var(--ink-300)', fontSize: 22 }}>→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming soon enhancements */}
      {f.soon !== true && Array.isArray(f.soon) && f.soon.length > 0 && (
        <section className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <div className="card" style={{ background: 'linear-gradient(160deg, var(--ink-900), var(--ink-800))', color: '#fff', padding: 36 }}>
              <span className="eyebrow eyebrow--light">on the roadmap</span>
              <h3 style={{ color: '#fff', marginTop: 10, marginBottom: 18 }}>What's next for this module</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12 }}>
                {f.soon.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span className="soon-pill">soon</span>
                    <span style={{ fontSize: 14, color: 'var(--ink-200)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prev / next */}
      <section className="section section--soft" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a href={`feature-${prev}.html`} className="card card--hover" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', textDecoration: 'none', color: 'inherit', minWidth: 240 }}>
            <span style={{ fontSize: 18, color: 'var(--ink-400)' }}>←</span>
            <div>
              <div style={{ fontSize: 11, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Previous</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{FEATURES[prev].crumbsParent.label} · {FEATURES[prev].title.replace(/\.$/,'').slice(0,30)}</div>
            </div>
          </a>
          <a href={`feature-${next}.html`} className="card card--hover" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', textDecoration: 'none', color: 'inherit', textAlign: 'right', minWidth: 240 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Next</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{FEATURES[next].crumbsParent.label} · {FEATURES[next].title.replace(/\.$/,'').slice(0,30)}</div>
            </div>
            <span style={{ fontSize: 18, color: 'var(--ink-400)' }}>→</span>
          </a>
        </div>
      </section>

      <CTABanner title={f.soon ? 'Want early access? Tell us about your team.' : `Try ${f.crumbsParent.label} free for 14 days.`} />
      <Footer />
    </>
  );
};

Object.assign(window, { FEATURES, FeaturePage });
