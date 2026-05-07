// HOME PAGE
const HomePage = () => (
  <>
    <NavBar active="home" />
    <Hero />
    <LogoStrip />
    <ProductGrid />
    <FeatureSpotlight />
    <StatsSection />
    <IntegrationsSection />
    <Testimonials />
    <CTABanner />
    <Footer />
  </>
);

const Hero = () => (
  <section className="hero section--mesh">
    <div className="blob" style={{ width: 500, height: 500, background: 'var(--brand-500)', top: -200, left: -120 }} />
    <div className="blob" style={{ width: 400, height: 400, background: 'var(--accent-500)', top: 200, right: -100 }} />
    <div className="container hero-grid">
      <div>
        <span className="chip" style={{ marginBottom: 20 }}>
          <Icon name="spark" size={12} /> AI-powered HRMS · Built for India
        </span>
        <h1>
          Run your <span style={{ background: 'linear-gradient(135deg, var(--brand-600), var(--accent-500))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>entire people business</span> on one platform.
        </h1>
        <p className="hero-sub">
          PrimeHR folds payroll, hiring, attendance, field-force tracking and accounting into one Indian-built workspace — with Tally sync, statutory filings and AI screening that actually works.
        </p>
        <div className="row" style={{ marginBottom: 24 }}>
          <a href="pricing.html" className="btn btn--primary">Start 30-day free trial <Icon name="arrow" size={16} className="btn-arrow" /></a>
          <a href="#" className="btn btn--ghost"><Icon name="play" size={14} /> Watch 2-min tour</a>
        </div>
        <div className="row" style={{ gap: 24, color: 'var(--ink-500)', fontSize: 13 }}>
          <span><Icon name="check" size={14} style={{ color: 'var(--accent-500)' }} /> No credit card</span>
          <span><Icon name="check" size={14} style={{ color: 'var(--accent-500)' }} /> Live in 48 hrs</span>
          <span><Icon name="check" size={14} style={{ color: 'var(--accent-500)' }} /> Tally-ready</span>
        </div>
      </div>
      <div><DashboardMock /></div>
    </div>
  </section>
);

const ProductGrid = () => {
  const items = [
    { icon: 'users', tone: 'brand', tag: '01 · HRMS', title: 'HRMS & Talent Management',
      desc: 'Hire-to-retire on autopilot. Payroll, ATS, performance & compliance — built for Indian statutory needs.',
      bullets: ['Payroll with PF/ESI/TDS', 'AI-powered ATS', 'Geo-fenced attendance', 'Performance reviews'],
      href: 'hrms.html' },
    { icon: 'pin', tone: 'accent', tag: '02 · Field Force', title: 'Field Force Automation',
      desc: 'Live GPS tracking, geotagged visits, expense claims and order pipelines — for mobile workforces.',
      bullets: ['Live map command', 'Smart visit reports', 'Order & collection tracking', 'Complaint Kanban'],
      href: 'field-force.html' },
    { icon: 'coin', tone: 'warn', tag: '03 · Finance', title: 'Finance & Accounting',
      desc: 'Multi-currency invoicing, two-way Tally sync, automated MIS — connected to payroll & field expenses.',
      bullets: ['Multi-currency invoicing', '2-way Tally sync', 'Bank reconciliation', 'Automated MIS reports'],
      href: 'finance.html' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">three modules · one platform</span>
          <h2>Stop paying for <span style={{ color: 'var(--brand-600)' }}>five tools</span> that don't talk to each other.</h2>
          <p>Most Indian businesses run HR on Excel, attendance on WhatsApp, payroll in a CA's email, and field reports on paper. PrimeHR replaces all of it.</p>
        </div>
        <div className="grid grid-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 100}>
              <a href={it.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div className="card card--hover" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <span className={`module-icon module-icon--${it.tone}`}><Icon name={it.icon} size={26} /></span>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-500)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>{it.tag}</div>
                  <h3 style={{ fontSize: 22, marginBottom: 10 }}>{it.title}</h3>
                  <p style={{ color: 'var(--ink-600)', fontSize: 14, marginBottom: 16, flex: 1 }}>{it.desc}</p>
                  <ul className="feat-list" style={{ marginBottom: 18, gap: 6 }}>
                    {it.bullets.map(b => (
                      <li key={b} style={{ fontSize: 13 }}><Icon name="check" size={14} style={{ color: 'var(--accent-500)' }} /> {b}</li>
                    ))}
                  </ul>
                  <span style={{ color: 'var(--brand-600)', fontWeight: 600, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Explore module <Icon name="arrow" size={14} className="btn-arrow" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSpotlight = () => (
  <section className="section section--soft">
    <div className="container">
      <div className="feature-row">
        <div>
          <span className="eyebrow">payroll automation</span>
          <h3 style={{ marginTop: 12 }}>Payroll that closes itself, every 30th.</h3>
          <p>Salary calculations, statutory deductions (PF, ESI, PT, TDS), loan recovery, payslip generation and bank file export — without you opening a spreadsheet.</p>
          <ul className="feat-list">
            {['Auto salary calc with custom CTC structures','Loan & advance recovery in monthly EMIs','Custom leave policies — sick, casual, comp-off','One-click offer / appraisal / experience letters','Direct bank disbursement files'].map(t => (
              <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
            ))}
          </ul>
          <a href="hrms.html" className="btn btn--ghost" style={{ marginTop: 24 }}>See HRMS details <Icon name="arrow" size={14} className="btn-arrow" /></a>
        </div>
        <div><PayrollSlipGfx /></div>
      </div>
      <div className="feature-row feature-row--reverse">
        <div>
          <span className="eyebrow">field force automation</span>
          <h3 style={{ marginTop: 12 }}>See every executive on a single live map.</h3>
          <p>Real-time GPS tracking with color-coded status pins. Find the closest staff to a client in seconds. Geotagged visit reports with photo proof — straight to your dashboard.</p>
          <ul className="feat-list">
            {['Live count of active staff & pending visits','Radius search to assign nearest executive','Geotagged attendance with selfie verification','Smart visit reports with photo proof','Order & collection sync to office ledger'].map(t => (
              <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
            ))}
          </ul>
          <a href="field-force.html" className="btn btn--ghost" style={{ marginTop: 24 }}>See Field Force details <Icon name="arrow" size={14} className="btn-arrow" /></a>
        </div>
        <div><FieldMapGfx /></div>
      </div>
      <div className="feature-row">
        <div>
          <span className="eyebrow">ai recruiting</span>
          <h3 style={{ marginTop: 12 }}>Hire 3× faster with AI screening.</h3>
          <p>Post to Naukri, LinkedIn and your careers page in one click. AI ranks every applicant, schedules interviews on Google Calendar, and emails candidates without you lifting a finger.</p>
          <ul className="feat-list">
            {['Multi-channel posting & custom forms','AI screening + interview evaluation','Google Calendar scheduling','Automated email workflows','Candidate scorecards per role'].map(t => (
              <li key={t}><Icon name="check" size={18} style={{ color: 'var(--accent-500)' }} />{t}</li>
            ))}
          </ul>
          <a href="hrms.html#ats" className="btn btn--ghost" style={{ marginTop: 24 }}>See ATS details <Icon name="arrow" size={14} className="btn-arrow" /></a>
        </div>
        <div><HiringFunnelGfx /></div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="section section--ink">
    <div className="container">
      <div className="section-head section-head--center">
        <span className="eyebrow eyebrow--light">by the numbers</span>
        <h2>Built for scale. Trusted by India.</h2>
        <p>From 12-person startups to 4,000-employee enterprises — running on the same platform.</p>
      </div>
      <div className="grid grid-4">
        {[
          { num: 1284, suffix: '+', label: 'Indian businesses on PrimeHR' },
          { num: 47,   suffix: 'M+', label: 'Payroll runs processed', prefix: '₹' },
          { num: 96.4, suffix: '%', label: 'Statutory filings on-time', decimals: 1 },
          { num: 14,   suffix: ' days', label: 'Average time-to-hire' },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="stat-card">
              <div className="stat-num"><CountUp to={s.num} prefix={s.prefix || ''} suffix={s.suffix} decimals={s.decimals || 0} /></div>
              <div className="stat-label">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const IntegrationsSection = () => {
  const items = [
    { n: 'Tally', c: '#1f4ec1' }, { n: 'Razorpay', c: '#3395ff' }, { n: 'Naukri', c: '#1e6cf0' }, { n: 'LinkedIn', c: '#0a66c2' },
    { n: 'Google', c: '#ea4335' }, { n: 'WhatsApp', c: '#25d366' }, { n: 'HDFC Bank', c: '#004c8f' }, { n: 'ICICI', c: '#b02a30' },
    { n: 'Zoho', c: '#e42527' }, { n: 'M365', c: '#d83b01' }, { n: 'Slack', c: '#611f69' }, { n: 'GST Portal', c: '#0f766e' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">integrations</span>
          <h2>Plays nicely with your existing stack.</h2>
          <p>Two-way Tally sync ships day one. Bank statements reconcile themselves. SMS, email and WhatsApp workflows fire from the same place.</p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gap: 14 }}>
          {items.map((it, i) => (
            <div key={it.n} className="card card--hover" style={{ padding: 18, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 44, height: 44, borderRadius: 10, background: `${it.c}15`, color: it.c, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 16, fontFamily: 'var(--f-display)' }}>
                {it.n[0]}
              </span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{it.n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const quotes = [
    { q: "We shut down four spreadsheets and a WhatsApp group on day one. Payroll closes in 22 minutes flat now.", who: "Anjali R.", role: "Head of HR", co: "Surya Pharma" },
    { q: "Our 80-person field team finally has structure. Visit proofs, expenses, attendance — all in one app.", who: "Karthik V.", role: "Sales Director", co: "BlueWave Retail" },
    { q: "Tally sync just works. CA stopped sending us angry Saturday emails. That's the real ROI.", who: "Pradeep M.", role: "Founder", co: "Patel & Co." },
  ];
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">customers</span>
          <h2>Real teams. Real Saturdays back.</h2>
        </div>
        <div className="grid grid-3">
          {quotes.map((qq, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--brand-500)', marginBottom: 12 }}>
                  {[...Array(5)].map((_, j) => <Icon key={j} name="spark" size={14} style={{ display: 'inline' }} />)}
                </div>
                <p style={{ fontSize: 16, color: 'var(--ink-700)', flex: 1, marginBottom: 18 }}>"{qq.q}"</p>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-500), var(--brand-700))', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>
                    {qq.who.split(' ').map(s => s[0]).join('')}
                  </div>
                  <div style={{ fontSize: 13 }}>
                    <div style={{ fontWeight: 700 }}>{qq.who}</div>
                    <div style={{ color: 'var(--ink-500)' }}>{qq.role} · {qq.co}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HomePage });
