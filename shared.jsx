// Shared icons (inline SVG, currentColor)
const Icon = ({ name, size = 20, ...rest }) => {
  const paths = {
    check: <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
    play: <path d="M8 5v14l11-7z" fill="currentColor" />,
    spark: <path d="M12 3l1.8 5.5L19 10l-5.2 1.5L12 17l-1.8-5.5L5 10l5.2-1.5z" fill="currentColor" />,
    users: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 19c0-3 3-5 6-5s6 2 6 5" /><path d="M14 19c0-2.4 2-4 4-4s3.5 1.2 3.5 3" /></g>,
    map: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></g>,
    coin: <g stroke="currentColor" strokeWidth="1.8" fill="none"><circle cx="12" cy="12" r="9" /><path d="M9 9h5a2 2 0 0 1 0 4H9m0 0h5.5a2 2 0 0 1 0 4H9m1-9v11" strokeLinecap="round" /></g>,
    chart: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><rect x="6" y="11" width="3" height="6" /><rect x="11" y="7" width="3" height="10" /><rect x="16" y="13" width="3" height="4" /></g>,
    shield: <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />,
    clock: <g stroke="currentColor" strokeWidth="1.8" fill="none"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" /></g>,
    pin: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></g>,
    zap: <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />,
    doc: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"><path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5M9 13h8M9 17h6" strokeLinecap="round" /></g>,
    cal: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" strokeLinecap="round" /></g>,
    bolt: <path d="M14 2l-9 12h6l-1 8 9-12h-6l1-8z" fill="currentColor" />,
    plug: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6z" /><path d="M12 18v4" /></g>,
    lock: <g stroke="currentColor" strokeWidth="1.8" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></g>,
    wave: <path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />,
    target: <g stroke="currentColor" strokeWidth="1.8" fill="none"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.6" fill="currentColor" /></g>,
    layers: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></g>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />,
    globe: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" strokeLinecap="round" /></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
      {paths[name] || null}
    </svg>
  );
};

// Reveal-on-scroll
const Reveal = ({ children, delay = 0, as = 'div', className = '', style = {} }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add('is-in'), delay); io.unobserve(el); }
    }), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const T = as;
  return <T ref={ref} className={`reveal ${className}`} style={style}>{children}</T>;
};

// CountUp number
const CountUp = ({ to, prefix = '', suffix = '', duration = 1600, decimals = 0 }) => {
  const ref = React.useRef(null);
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setV(to * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const fmt = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-IN');
  return <span ref={ref}>{prefix}{fmt}{suffix}</span>;
};

// Brand logo mark
const Logo = ({ size = 20 }) => (
  <img src="images/prime.svg" alt="PrimeHR" width={size} height={size} style={{ display: 'block' }} />
);

// Top nav
const NavBar = ({ active = '' }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const closeTimer = React.useRef(null);
  const openMega = () => { clearTimeout(closeTimer.current); setMegaOpen(true); };
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 120); };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeMobile = () => setMobileOpen(false);
  // Close mobile nav on resize to desktop
  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <>
      <nav className="nav" style={scrolled ? { boxShadow: 'var(--shadow-sm)' } : {}}>
        <div className="nav-inner">
          <a className="nav-logo" href="index.html">
            <img src="images/primehr.svg" alt="PrimeHR" style={{ height: 32, width: 'auto', display: 'block' }} />
          </a>
          <div className="nav-links">
            <a href="index.html" className={`nav-link ${active === 'home' ? 'is-active' : ''}`}>Home</a>
            <div className="has-mega" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <a href="solutions.html" className={`nav-link ${['hrms', 'ffa', 'finance', 'soon'].includes(active) ? 'is-active' : ''}`}>Solutions ▾</a>
              <SolutionsMega open={megaOpen} />
            </div>
            <a href="pricing.html" className={`nav-link ${active === 'pricing' ? 'is-active' : ''}`}>Pricing</a>
            <a href="company.html" className={`nav-link ${active === 'company' ? 'is-active' : ''}`}>About Us</a>
            <a href="contact.html" className={`nav-link ${active === 'contact' ? 'is-active' : ''}`}>Contact</a>
          </div>
          <div className="nav-actions">
            <a href="#" className="btn btn--ghost" style={{ padding: '8px 14px', fontSize: 14 }}>Sign in</a>
            <a href="#" className="btn btn--primary" style={{ padding: '8px 16px', fontSize: 14 }}>Start free <Icon name="arrow" size={16} className="btn-arrow" /></a>
          </div>
          {/* Hamburger toggle */}
          <button
            className={`nav-toggle ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {/* Mobile nav drawer */}
      <div className={`nav-mobile ${mobileOpen ? 'is-open' : ''}`}>
        <a href="index.html" className={`nav-link ${active === 'home' ? 'is-active' : ''}`} onClick={closeMobile}>Home</a>
        <a href="solutions.html" className={`nav-link ${['hrms', 'ffa', 'finance', 'soon'].includes(active) ? 'is-active' : ''}`} onClick={closeMobile}>Solutions</a>
        <a href="hrms.html" className="nav-link" onClick={closeMobile} style={{ paddingLeft: 28, fontSize: 14, color: 'var(--ink-500)' }}>↳ HRMS &amp; Payroll</a>
        <a href="field-force.html" className="nav-link" onClick={closeMobile} style={{ paddingLeft: 28, fontSize: 14, color: 'var(--ink-500)' }}>↳ Field Force</a>
        <a href="finance.html" className="nav-link" onClick={closeMobile} style={{ paddingLeft: 28, fontSize: 14, color: 'var(--ink-500)' }}>↳ Finance</a>
        <a href="pricing.html" className={`nav-link ${active === 'pricing' ? 'is-active' : ''}`} onClick={closeMobile}>Pricing</a>
        <a href="company.html" className={`nav-link ${active === 'company' ? 'is-active' : ''}`} onClick={closeMobile}>About Us</a>
        <a href="contact.html" className={`nav-link ${active === 'contact' ? 'is-active' : ''}`} onClick={closeMobile}>Contact</a>
        <div className="nav-actions">
          <a href="#" className="btn btn--ghost" onClick={closeMobile}>Sign in</a>
          <a href="#" className="btn btn--primary" onClick={closeMobile}>Start free <Icon name="arrow" size={16} className="btn-arrow" /></a>
        </div>
      </div>
    </>
  );
};


// Footer
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="grid" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <a href="index.html" style={{ display: 'inline-block', marginBottom: 14 }}>
            <img src="images/primehr.svg" alt="PrimeHR" style={{ height: 26, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
          </a>
          <p style={{ color: 'var(--ink-300)', fontSize: 14, marginTop: 10, maxWidth: 280 }}>
            One platform for HRMS, Field Force and Finance. Built in Indore for Indian businesses.
          </p>
          <div style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-400)', fontFamily: 'var(--f-mono)' }}>
            256-bit encryption · AWS ap-south-1
          </div>
        </div>
        <div>
          <h4>Product</h4>
          <a href="hrms.html">HRMS &amp; Payroll</a>
          <a href="field-force.html">Field Force</a>
          <a href="finance.html">Finance</a>
          <a href="pricing.html">Pricing</a>
        </div>
        <div>
          <h4>Solutions</h4>
          <a href="#">For SMBs</a>
          <a href="#">For Mid-market</a>
          <a href="#">For Enterprise</a>
          <a href="#">Field operations</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="company.html">About Us</a>
          <a href="company.html#customers">Customers</a>
          <a href="company.html#careers">Careers</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#">Help center</a>
          <a href="#">API docs</a>
          <a href="#">Migration guide</a>
          <a href="#">Status</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 PrimeHR · Made in India</span>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 16, paddingTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <span style={{ fontSize: 12, color: 'var(--ink-400)' }}>Powered by</span>
        <a href="https://techstuff.cloud" target="_blank" rel="noopener noreferrer">
          <img src="images/Techstuff-Colored-png.png" alt="Techstuff Pvt Ltd" style={{ height: 22, width: 'auto', opacity: 0.85, display: 'block' }} />
        </a>
      </div>
    </div>
  </footer>
);

// Page hero (for inner pages)
const PageHero = ({ crumbs, eyebrow, title, sub, ctas, children }) => (
  <section className="page-hero">
    <div className="container">
      <div className="crumbs">
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="crumbs-sep">/</span>}
            {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
          </React.Fragment>
        ))}
      </div>
      {eyebrow && <span className="eyebrow" style={{ marginBottom: 6 }}>{eyebrow}</span>}
      <h1>{title}</h1>
      <p>{sub}</p>
      {ctas && <div className="row" style={{ marginTop: 28 }}>{ctas}</div>}
      {children && <div style={{ marginTop: 40 }}>{children}</div>}
    </div>
  </section>
);

// CTA banner
const CTABanner = ({ title = "Ready to consolidate your stack?", sub = "Start a 30-day free trial. No credit card. Tally migration assistance included.", primary = "Start free trial", secondary = "Book a demo" }) => (
  <section className="section">
    <div className="container">
      <div className="cta-banner">
        <span className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>get started</span>
        <h2 style={{ marginTop: 12 }}>{title}</h2>
        <p>{sub}</p>
        <div className="row" style={{ justifyContent: 'center' }}>
          <a href="#" className="btn btn--accent">{primary} <Icon name="arrow" size={16} className="btn-arrow" /></a>
          <a href="#" className="btn btn--light">{secondary}</a>
        </div>
        {/* decorative dots */}
        <svg style={{ position: 'absolute', top: 20, right: 20, opacity: 0.15 }} width="120" height="120" viewBox="0 0 120 120">
          <defs><pattern id="dots" patternUnits="userSpaceOnUse" width="14" height="14"><circle cx="2" cy="2" r="1.4" fill="#fff" /></pattern></defs>
          <rect width="120" height="120" fill="url(#dots)" />
        </svg>
      </div>
    </div>
  </section>
);

// Logo strip
const LogoStrip = ({ label = "Trusted by 1,200+ teams" }) => (
  <section className="section--xtight" style={{ padding: '48px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: '#fff' }}>
    <div className="container">
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 600, color: 'var(--ink-500)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 24 }}>{label}</div>
      <div className="logo-strip">
        <span>ACME · Logistics</span>
        <span>Surya Pharma</span>
        <span>BlueWave</span>
        <span>Nimbus Fin</span>
        <span>Patel &amp; Co.</span>
        <span>Kavya Foods</span>
      </div>
    </div>
  </section>
);

// Mega-dropdown for Solutions
const SOLUTIONS = {
  hrms: {
    label: 'HRMS',
    items: [
      { slug: 'payroll', icon: 'coin', t: 'Payroll', d: 'Auto salary, statutory, payslips' },
      { slug: 'attendance', icon: 'cal', t: 'Attendance', d: 'Geo-fenced clock-ins, shifts' },
      { slug: 'leave', icon: 'wave', t: 'Leave management', d: 'Policies, balances, approvals' },
      { slug: 'reimbursement', icon: 'doc', t: 'Reimbursement', d: 'Claims, receipts, approvals' },
      { slug: 'assets', icon: 'layers', t: 'Assets management', d: 'Laptops, devices, allocations' },
      { slug: 'tasks', icon: 'target', t: 'Task — todos', d: 'Daily tasks, SLAs, reminders' },
      { slug: 'letters', icon: 'doc', t: 'Letter generation', d: 'Offer, appraisal, experience' },
    ]
  },
  finance: {
    label: 'Finance & Accounting',
    items: [
      { slug: 'invoice', icon: 'doc', t: 'Invoice', d: 'GST, multi-currency, e-invoice' },
      { slug: 'bank-statement', icon: 'chart', t: 'Bank statement upload', d: 'Auto-parse PDF/CSV/XLSX' },
      { slug: 'expense-payment', icon: 'coin', t: 'Expense & Payment', d: 'Bills, vendor payouts, UPI' },
      { slug: 'reconciliation', icon: 'plug', t: 'Reconciliation', d: 'Bank ↔ ledger auto-match' },
    ]
  },
  ffa: {
    label: 'Field Force',
    items: [
      { slug: 'routes', icon: 'pin', t: 'Track routes', d: 'GPS breadcrumb trail' },
      { slug: 'ffa-reimburse', icon: 'coin', t: 'Reimbursement', d: 'Travel, food, fuel claims' },
      { slug: 'ffa-attendance', icon: 'cal', t: 'Attendance', d: 'Geo-tagged start/end day' },
      { slug: 'visits', icon: 'check', t: 'Visits', d: 'Photo + GPS proof' },
      { slug: 'collection', icon: 'coin', t: 'Collection', d: 'Cash & cheque tracking' },
      { slug: 'party-master', icon: 'users', t: 'Party master', d: 'Customer & vendor database' },
      { slug: 'route-plan', icon: 'map', t: 'Routes plan', d: 'Auto-optimized beat plans' },
      { slug: 'mis', icon: 'chart', t: 'MIS report', d: 'Daily/weekly snapshots' },
      { slug: 'complaint', icon: 'bolt', t: 'Complaint', d: 'Ticket Kanban with SLA' },
    ]
  },
  soon: {
    label: 'Coming soon',
    items: [
      { slug: 'performance', icon: 'target', t: 'Performance', d: 'KRA/KPI, 1:1, appraisals', soon: true },
      { slug: 'ats', icon: 'users', t: 'ATS', d: 'AI screening, interviews', soon: true },
      { slug: 'time-tracking', icon: 'clock', t: 'Time tracking', d: 'Timesheets, billable hrs', soon: true },
    ]
  },
};

const SolutionsMega = ({ open }) => (
  <div className={`mega ${open ? 'is-open' : ''}`}>
    {['hrms', 'finance', 'ffa'].map(g => (
      <div key={g} className="mega-col">
        <h5>{SOLUTIONS[g].label}</h5>
        {SOLUTIONS[g].items.map(it => (
          <a key={it.slug} href={`feature-${it.slug}.html`} className="mega-link">
            <span className="mi"><Icon name={it.icon} size={16} /></span>
            <div>
              <div className="mt">{it.t}</div>
              <div className="ms">{it.d}</div>
            </div>
          </a>
        ))}
      </div>
    ))}
    <div className="mega-col">
      <h5>{SOLUTIONS.soon.label}</h5>
      {SOLUTIONS.soon.items.map(it => (
        <a key={it.slug} href={`feature-${it.slug}.html`} className="mega-link is-soon">
          <span className="mi"><Icon name={it.icon} size={16} /></span>
          <div>
            <div className="mt">{it.t} <span className="mega-soon-tag">soon</span></div>
            <div className="ms">{it.d}</div>
          </div>
        </a>
      ))}
      <div className="mega-promo" style={{ marginTop: 12 }}>
        <div>
          <h6>All modules. One price.</h6>
          <p>Per-employee billing, no add-on fees, free Tally migration.</p>
        </div>
        <a href="pricing.html">See pricing →</a>
      </div>
    </div>
  </div>
);

Object.assign(window, { Icon, Reveal, CountUp, Logo, NavBar, Footer, PageHero, CTABanner, LogoStrip, SOLUTIONS, SolutionsMega });
