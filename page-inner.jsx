// HRMS PRODUCT PAGE
const HRMSPage = () => (
  <>
    <NavBar active="hrms" />
    <PageHero
      crumbs={[{ label: 'Home', href: 'index.html' }, { label: 'HRMS & Talent' }]}
      eyebrow="01 · HRMS & Talent Management"
      title="The core engine for hire-to-retire."
      sub="Payroll with PF/ESI/TDS, AI-powered ATS, geo-fenced attendance, and performance reviews — all stitched into one timeline per employee."
      ctas={<>
        <a href="pricing.html" className="btn btn--primary">Start free trial <Icon name="arrow" size={16} className="btn-arrow" /></a>
        <a href="#" className="btn btn--ghost"><Icon name="play" size={14} /> See live demo</a>
      </>}
    />
    <section className="section">
      <div className="container">
        <div className="feature-row">
          <div>
            <span className="eyebrow">core hr & payroll</span>
            <h3 style={{ marginTop: 12 }}>Payroll that closes itself.</h3>
            <p>Salary calculations, statutory deductions, loan recovery, payslip generation and bank file export — every 30th, without you opening a spreadsheet.</p>
            <ul className="feat-list">
              {['Auto salary calc with custom CTC structures', 'Loan & advance recovery in monthly EMIs', 'Custom leave policies — sick, casual, comp-off, sabbatical', 'Geo-fenced attendance with selfie verification', 'One-click letter generation (offer/appraisal/exp)'].map(t => (
                <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
              ))}
            </ul>
          </div>
          <div><PayrollSlipGfx /></div>
        </div>
        <div className="feature-row feature-row--reverse" id="ats">
          <div>
            <span className="eyebrow">ats · applicant tracking</span>
            <h3 style={{ marginTop: 12 }}>Hire 3× faster with AI screening.</h3>
            <p>Post to Naukri, LinkedIn and your careers page in one click. AI ranks every applicant against your JD, schedules interviews on Google Calendar, and emails candidates without you lifting a finger.</p>
            <ul className="feat-list">
              {['Multi-channel posting — careers page, Naukri, LinkedIn', 'Custom application forms per role', 'AI assessment & interview evaluation', 'Automated email workflows', 'Google Calendar interviewer scheduling'].map(t => (
                <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
              ))}
            </ul>
          </div>
          <div><HiringFunnelGfx /></div>
        </div>
        <div className="feature-row">
          <div>
            <span className="eyebrow">performance & appraisals</span>
            <h3 style={{ marginTop: 12 }}>Reviews that don't suck.</h3>
            <p>AI suggests KRAs based on role, managers log feedback in 1:1s, quarterly task sheets roll up automatically into an appraisal — with attendance patterns highlighted.</p>
            <ul className="feat-list">
              {['AI-powered KRA / KPI goal-setting', '1:1 sessions with logged feedback', 'Quarterly task progress sheets', 'AI attendance pattern analysis'].map(t => (
                <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
              ))}
            </ul>
          </div>
          <div><PerfCardGfx /></div>
        </div>
      </div>
    </section>
    <CTABanner title="Ready to run HR on autopilot?" />
    <Footer />
  </>
);

// FIELD FORCE PAGE
const FieldForcePage = () => (
  <>
    <NavBar active="ffa" />
    <PageHero
      crumbs={[{ label: 'Home', href: 'index.html' }, { label: 'Field Force' }]}
      eyebrow="02 · Field Force Automation"
      title="Bridge office and field, in real-time."
      sub="For sales reps, service technicians, delivery teams and on-ground auditors. Live GPS, geotagged visits, photo-proofed expenses — all from a mobile-first app."
      ctas={<>
        <a href="pricing.html" className="btn btn--primary">Start free trial <Icon name="arrow" size={16} className="btn-arrow" /></a>
        <a href="#" className="btn btn--ghost"><Icon name="play" size={14} /> See live demo</a>
      </>}
    />
    <section className="section">
      <div className="container">
        <div className="feature-row">
          <div>
            <span className="eyebrow">live operations</span>
            <h3 style={{ marginTop: 12 }}>Command dashboard for your field team.</h3>
            <p>See every active executive on a single map. Find the closest person to a client. Spot the idle ones. Re-route on the fly.</p>
            <ul className="feat-list">
              {['Live count of active staff & pending visits', 'Color-coded pins (Active/Idle/Offline)', 'Radius search to assign nearest staff', 'Geo-fencing for client-only check-ins'].map(t => (
                <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
              ))}
            </ul>
          </div>
          <div><FieldMapGfx /></div>
        </div>
        <div className="feature-row feature-row--reverse">
          <div>
            <span className="eyebrow">field activities</span>
            <h3 style={{ marginTop: 12 }}>Visits, orders & collections — geotagged.</h3>
            <p>Every visit logs with GPS, photo proof, client outcome and follow-up date. Field orders flow into a pipeline. Cash collections sync to the office ledger before the rep gets back.</p>
            <ul className="feat-list">
              {['Smart visit reports with photo + GPS proof', 'Order management with pipeline tracking', 'Collection tracking with bank deposit sync', 'Mobile-first expense claims'].map(t => (
                <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
              ))}
            </ul>
          </div>
          <div><KanbanGfx /></div>
        </div>
        <div className="feature-row">
          <div>
            <span className="eyebrow">administration</span>
            <h3 style={{ marginTop: 12 }}>Mobile-first approvals.</h3>
            <p>Expense claims with urgency flags. Complaint Kanban. Geotagged "Start Day / End Day" attendance with optional selfie. Approve from your phone in two taps.</p>
            <ul className="feat-list">
              {['Mobile expense claims with photo + urgency', 'Complaint Kanban (Open → In progress → Resolved)', 'Start/End day geotagged attendance', 'Manager push-approval flows'].map(t => (
                <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
              ))}
            </ul>
          </div>
          <div><DashboardMock /></div>
        </div>
      </div>
    </section>
    <CTABanner title="Bring your field team online." />
    <Footer />
  </>
);

// FINANCE PAGE
const FinancePage = () => (
  <>
    <NavBar active="finance" />
    <PageHero
      crumbs={[{ label: 'Home', href: 'index.html' }, { label: 'Finance' }]}
      eyebrow="03 · Finance & Accounting"
      title="Where payroll, field & ledger finally meet."
      sub="Multi-currency invoicing, real-time expense tracking, two-way Tally sync and automated MIS reports — your CFO's idea of a good time."
      ctas={<>
        <a href="pricing.html" className="btn btn--primary">Start free trial <Icon name="arrow" size={16} className="btn-arrow" /></a>
        <a href="#" className="btn btn--ghost"><Icon name="play" size={14} /> See live demo</a>
      </>}
    />
    <section className="section">
      <div className="container">
        <div className="feature-row">
          <div>
            <span className="eyebrow">invoicing</span>
            <h3 style={{ marginTop: 12 }}>Multi-currency, GST-ready invoices.</h3>
            <p>Bill clients in INR, USD, AED — with FX captured at issue date. e-Invoice with IRN built in. Scheduled reminders. Payment links. One-click Tally sync.</p>
            <ul className="feat-list">
              {['Multi-currency with auto FX rates', 'GST-compliant + e-Invoice IRN', 'Razorpay/Stripe payment links', 'Recurring & milestone billing'].map(t => (
                <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
              ))}
            </ul>
          </div>
          <div><InvoiceGfx /></div>
        </div>
        <div className="feature-row feature-row--reverse">
          <div>
            <span className="eyebrow">reporting & mis</span>
            <h3 style={{ marginTop: 12 }}>Real-time P&amp;L and cash flow.</h3>
            <p>Every payroll, expense and invoice flows to one ledger. Bank statement uploads reconcile themselves. One-click statutory exports for tax & audit.</p>
            <ul className="feat-list">
              {['Real-time ledger across all modules', 'Bank statement reconciliation', 'Direct payroll → TDS / PF / GST exports', 'Profit & loss + cash flow MIS'].map(t => (
                <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
              ))}
            </ul>
          </div>
          <div><CashFlowChart /></div>
        </div>
      </div>
    </section>
    <CTABanner title="Connect your books. Skip the chaos." />
    <Footer />
  </>
);

// PRICING PAGE
const PricingPage = () => {
  const plans = [
    {
      name: 'Starter', price: '49', sub: 'per employee / month', best: false,
      features: ['Up to 25 employees', 'Core HR & Payroll', 'Attendance & Leave', 'Custom letters', 'Email support'],
      cta: 'Start free'
    },
    {
      name: 'Growth', price: '89', sub: 'per employee / month', best: true,
      features: ['Unlimited employees', 'Everything in Starter', 'ATS + AI screening', 'Field Force module', 'Tally + bank sync', 'Priority chat support'],
      cta: 'Start 30-day trial'
    },
    {
      name: 'Scale', price: 'Custom', sub: 'talk to sales', best: false,
      features: ['1,000+ employees', 'Everything in Growth', 'Custom workflows', 'Dedicated CSM', 'SLA + SSO', 'On-prem option'],
      cta: 'Contact sales'
    },
  ];
  return (
    <>
      <NavBar active="pricing" />
      <PageHero
        crumbs={[{ label: 'Home', href: 'index.html' }, { label: 'Pricing' }]}
        eyebrow="pricing"
        title={<>Simple, <span style={{ background: 'linear-gradient(135deg, var(--brand-600), var(--accent-500))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>per-employee pricing.</span></>}
        sub="No setup fees. No per-module add-ons. No long-term lock-in. Migrate from any legacy HRMS in under a week."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ alignItems: 'stretch' }}>
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="card" style={{
                  height: '100%', display: 'flex', flexDirection: 'column',
                  position: 'relative',
                  border: p.best ? '2px solid var(--brand-500)' : '1px solid var(--line)',
                  boxShadow: p.best ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                  background: p.best ? 'linear-gradient(180deg, #fff 0%, var(--brand-50) 100%)' : '#fff',
                }}>
                  {p.best && <span className="chip" style={{ position: 'absolute', top: -12, right: 24, background: 'var(--brand-600)', color: '#fff', borderColor: 'var(--brand-700)' }}><Icon name="spark" size={12} /> Most popular</span>}
                  <h3 style={{ fontSize: 22, marginBottom: 8 }}>{p.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                    {p.price !== 'Custom' && <span style={{ fontSize: 18, color: 'var(--ink-500)' }}>₹</span>}
                    <span style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 48, color: 'var(--ink-900)' }}>{p.price}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-500)', marginBottom: 22 }}>{p.sub}</div>
                  <ul className="feat-list" style={{ flex: 1, marginBottom: 24 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ fontSize: 14 }}><Icon name="check" size={16} style={{ color: 'var(--accent-500)' }} />{f}</li>
                    ))}
                  </ul>
                  <a href="#" className={p.best ? 'btn btn--primary' : 'btn btn--ghost'} style={{ justifyContent: 'center' }}>{p.cta}</a>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="card" style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, padding: 32 }}>
            {[
              { i: 'shield', t: 'Bank-grade Security', s: '256-bit encryption' },
              { i: 'lock', t: 'Data sovereignty', s: 'Stored in India' },
              { i: 'clock', t: '99.95% uptime', s: 'SLA guaranteed' },
              { i: 'plug', t: 'Free migration', s: 'From any HRMS' },
            ].map(b => (
              <div key={b.t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--brand-50)', color: 'var(--brand-600)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <Icon name={b.i} size={18} />
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{b.t}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-500)' }}>{b.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection />
      <Footer />
    </>
  );
};

const FAQSection = () => {
  const [open, setOpen] = React.useState(0);
  const faqs = [
    { q: 'How long does setup take?', a: 'Most teams are live in 48 hours. Tally sync is configured on day one. Employee data import (from Excel, Keka, GreytHR or Zoho People) ships out-of-the-box.' },
    { q: 'Can we run payroll for multiple legal entities?', a: 'Yes. Each entity gets its own payroll, statutory profile and Tally book — but employee, attendance and performance data sit in a unified workspace.' },
    { q: 'Does the field-force app work offline?', a: 'Yes. Visit reports, expense claims and attendance work offline and sync the moment connectivity returns.' },
    { q: 'Is our data stored in India?', a: 'All customer data is stored securely in AWS (ap-south-1). Data is encrypted at rest and in transit.' },
    { q: 'How does AI screening work?', a: 'For every JD, our model ranks applicants on skill match, experience and writing quality. You stay in the loop — AI shortlists, you decide.' },
    { q: 'What happens after the trial?', a: 'Your data stays. Pick a plan, or export everything (CSV + JSON) and we close the account — no penalties.' },
  ];
  return (
    <section className="section section--soft">
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="section-head section-head--center">
          <span className="eyebrow">questions</span>
          <h2>Things CFOs ask us.</h2>
        </div>
        <div className="col" style={{ gap: 12 }}>
          {faqs.map((f, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)}
                style={{ width: '100%', textAlign: 'left', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)' }}>
                <span>{f.q}</span>
                <span style={{ width: 28, height: 28, borderRadius: '50%', background: open === i ? 'var(--brand-600)' : 'var(--ink-100)', color: open === i ? '#fff' : 'var(--ink-700)', display: 'grid', placeItems: 'center', transition: 'all 0.2s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)', fontSize: 18 }}>+</span>
              </button>
              {open === i && <div style={{ padding: '0 24px 22px', color: 'var(--ink-600)', fontSize: 15 }}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// COMPANY (About / Contact)
const CompanyPage = () => (
  <>
    <NavBar active="company" />
    
    {/* HERO SECTION - Minimalist focus */}
    <section className="hero section--mesh" style={{ paddingTop: 160, paddingBottom: 120, textAlign: 'center' }}>
      <div className="blob" style={{ width: 600, height: 600, background: 'var(--brand-500)', top: -300, left: -150 }} />
      <div className="blob" style={{ width: 500, height: 500, background: 'var(--accent-500)', top: 200, right: -120 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="crumbs" style={{ marginBottom: 32, justifyContent: 'center' }}>
          <a href="index.html">Home</a> <span className="crumbs-sep">/</span> <span>About Us</span>
        </div>
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 72px)', lineHeight: 1, letterSpacing: '-0.04em', fontWeight: 900, marginBottom: 24 }}>
          Simplify. <span style={{ background: 'linear-gradient(135deg, var(--brand-600), var(--accent-500))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Thrive.</span> Succeed.
        </h1>
        <p className="hero-sub" style={{ fontSize: 20, maxWidth: 720, margin: '0 auto' }}>
          We believe managing people should be simple, smart, and stress free. PrimeHR is the modern platform built to empower the Indian workforce.
        </p>
      </div>
    </section>

    {/* ABOUT STORY + IMAGE */}
    <section className="section">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: 80 }}>
          <div style={{ position: 'relative' }}>
            <img src="images/team_collab.png" alt="PrimeHR Team" style={{ width: '100%', borderRadius: 24, boxShadow: 'var(--shadow-xl)' }} />
            <div style={{ position: 'absolute', bottom: -30, right: -30, width: 200, height: 200, background: 'var(--brand-600)', borderRadius: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', boxShadow: 'var(--shadow-lg)' }}>
              <span style={{ fontSize: 48, fontWeight: 900, lineHeight: 1 }}>150+</span>
              <span style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>Clients</span>
            </div>
          </div>
          <div>
            <span className="eyebrow" style={{ color: 'var(--brand-600)' }}>our story</span>
            <h2 style={{ fontSize: 36, marginTop: 12, marginBottom: 24 }}>Built in Indore, for the world.</h2>
            <p style={{ fontSize: 17, color: 'var(--ink-600)', marginBottom: 20, lineHeight: 1.7 }}>
              Founded with a vision to eliminate manual HR hurdles, PrimeHR brings every HR function together into one powerful platform. From attendance tracking and payroll to recruitment and performance monitoring.
            </p>
            <p style={{ fontSize: 17, color: 'var(--ink-600)', lineHeight: 1.7 }}>
              We understand the nuances of the Indian workplace. Our mission is to help organizations build efficient, transparent, and employee-friendly workplaces through smart automation and real-time insights.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* STATS STRIP */}
    <section className="section" style={{ background: 'var(--ink-50)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <div className="grid grid-3" style={{ textAlign: 'center' }}>
          {[
            { v: '2.5L+', l: 'Employees Managed Monthly' },
            { v: '20k+', l: 'Daily Active Users' },
            { v: '99.9%', l: 'Uptime Reliability' }
          ].map((s, i) => (
            <div key={i} style={{ borderRight: i < 2 ? '1px solid var(--line)' : 'none', padding: '20px 0' }}>
              <div style={{ fontSize: 52, fontWeight: 900, color: 'var(--ink-900)', marginBottom: 4 }}>{s.v}</div>
              <div style={{ fontSize: 13, color: 'var(--brand-600)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* OUR PURPOSE - Bold statement inspired by reference */}
    <section className="section section--soft" style={{ background: 'linear-gradient(180deg, #fff, var(--accent-50))' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 1000 }}>
        <span className="eyebrow">our purpose</span>
        <h2 style={{ fontSize: 44, marginTop: 20, marginBottom: 60, lineHeight: 1.1 }}>
          "Help a new wave of entrepreneurs to unleash their ambitions and help them succeed for everyone."
        </h2>
        <div className="grid grid-4" style={{ gap: 24 }}>
          {[
            { i: 'users', t: 'People First', d: 'Businesses become big because of a big dream and the people behind them.' },
            { i: 'heart', t: 'Truly Change', d: 'We believe that we can truly change the world of work.' },
            { i: 'zap', t: 'Innovation', d: 'Relentless innovation is a way to be, not a choice.' },
            { i: 'globe', t: 'Connections', d: 'Human connections and partnerships help break boundaries.' }
          ].map((b, i) => (
            <div key={i} className="card" style={{ padding: 24, textAlign: 'left', background: '#fff' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-100)', color: 'var(--accent-700)', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                <Icon name={b.i} size={20} />
              </div>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>{b.t}</div>
              <p style={{ fontSize: 13, color: 'var(--ink-600)', lineHeight: 1.5 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CORE VALUES */}
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">our values</span>
          <h2>What we live by every day.</h2>
        </div>
        <div className="grid grid-3">
          {[
            { i: 'target', t: 'Improve Every Day', d: 'Growth is not set it and forget it. We strive to be better every day, as a business and as individuals.' },
            { i: 'shield', t: 'Deliver Excellence', d: 'Excellence, both in our products and customer success, is our North Star.' },
            { i: 'zap', t: 'Focus on Impact', d: 'As a business, the impact we create for our customers and solving their problems is our KPI.' },
            { i: 'users', t: 'Customer Success', d: 'Listen and treat every interaction with our customers as an opportunity to create a relationship.' },
            { i: 'heart', t: 'Inclusive Culture', d: 'We champion diversity and inclusion in everything we do.' },
            { i: 'globe', t: 'Continuous Learning', d: 'We thrive in an environment of mutual trust, shared learning, and continuous improvement.' }
          ].map((v, i) => (
            <div key={i} className="card card--hover" style={{ padding: 40, textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--brand-50)', color: 'var(--brand-600)', display: 'grid', placeItems: 'center', margin: '0 auto 24px' }}>
                <Icon name={v.i} size={28} />
              </div>
              <h4 style={{ fontSize: 18, marginBottom: 12 }}>{v.t}</h4>
              <p style={{ fontSize: 14, color: 'var(--ink-600)', lineHeight: 1.5 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="Ready to upgrade your HR operations?" />
    <Footer />
  </>
);

// CONTACT PAGE
const ContactPage = () => (
  <>
    <NavBar active="contact" />
    <PageHero
      crumbs={[{ label: 'Home', href: 'index.html' }, { label: 'Contact Us' }]}
      eyebrow="get in touch"
      title={<>We'd love to <span style={{ background: 'linear-gradient(135deg, var(--brand-600), var(--accent-500))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>hear from you.</span></>}
      sub="Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions."
    />
    <section className="section" id="contact">
      <div className="container">
        <div className="grid grid-2" style={{ gap: 56 }}>
          <div>
            <span className="eyebrow">get in touch</span>
            <h2 style={{ fontSize: 40, margin: '12px 0 18px' }}>Let's talk.</h2>
            <p style={{ color: 'var(--ink-600)', fontSize: 17, marginBottom: 28 }}>Sales, support, partnerships, press — we read every email.</p>
            <div className="col" style={{ gap: 18 }}>
              {[
                { l: 'Sales', v: 'sales@primehr.in', s: 'Replies in &lt; 4 hrs (IST business hrs)' },
                { l: 'Support', v: 'support@primehr.in', s: '24×7 chat for paid plans' },
                { l: 'Office', v: '95-C, Aaradhya Heights, Gopur Square, Indore 452009' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 14 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--brand-50)', color: 'var(--brand-600)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Icon name={i === 2 ? 'pin' : 'doc'} size={18} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{c.l}</div>
                    <div style={{ color: 'var(--ink-700)' }}>{c.v}</div>
                    {c.s && <div style={{ fontSize: 12, color: 'var(--ink-500)' }} dangerouslySetInnerHTML={{ __html: c.s }} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: 22, marginBottom: 18 }}>Book a 20-min demo</h3>
            <div className="col" style={{ gap: 14 }}>
              {[
                { l: 'Full name', t: 'text', p: 'Priya Sharma' },
                { l: 'Work email', t: 'email', p: 'priya@company.in' },
                { l: 'Company', t: 'text', p: 'Surya Pharma' },
                { l: 'Team size', t: 'select', opts: ['1–25', '26–100', '101–500', '500+'] },
              ].map((f, i) => (
                <label key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-700)' }}>{f.l}</span>
                  {f.t === 'select'
                    ? <select style={{ padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 8, fontSize: 14, fontFamily: 'inherit', background: '#fff' }}>{f.opts.map(o => <option key={o}>{o}</option>)}</select>
                    : <input type={f.t} placeholder={f.p} style={{ padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 8, fontSize: 14, fontFamily: 'inherit' }} />}
                </label>
              ))}
              <button className="btn btn--primary" style={{ marginTop: 8, justifyContent: 'center' }}>Request demo <Icon name="arrow" size={16} className="btn-arrow" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

Object.assign(window, { HRMSPage, FieldForcePage, FinancePage, PricingPage, CompanyPage, ContactPage });
