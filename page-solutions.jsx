// =============================================================
// SOLUTIONS INDEX PAGE — browse all features in one place
// =============================================================

const SolutionsPage = () => (
  <>
    <NavBar active="hrms" />
    <PageHero
      crumbs={[{ label: 'Home', href: 'index.html' }, { label: 'Solutions' }]}
      eyebrow="solutions · all modules"
      title={<>One platform. <span style={{ background: 'linear-gradient(135deg, var(--brand-600), var(--accent-500))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Three product suites.</span> 20+ modules.</>}
      sub="PrimeHR replaces 7+ disjointed tools with one workspace — HRMS, Finance & Accounting, and Field Force Automation. New modules ship every quarter."
      ctas={<>
        <a href="pricing.html" className="btn btn--primary">See pricing <Icon name="arrow" size={16} className="btn-arrow" /></a>
        <a href="#hrms-section" className="btn btn--ghost">Browse modules</a>
      </>}
    />

    {/* HRMS */}
    <section className="section" id="hrms-section">
      <div className="container">
        <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', maxWidth: '100%', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow">01 · hrms</span>
            <h2 style={{ marginTop: 12 }}>HRMS & Talent</h2>
            <p style={{ marginTop: 8 }}>Run people operations on autopilot — from payroll to letters.</p>
          </div>
          <a href="hrms.html" className="btn btn--ghost">HRMS overview <Icon name="arrow" size={14} className="btn-arrow" /></a>
        </div>
        <div className="feat-grid">
          {SOLUTIONS.hrms.items.map(it => (
            <Reveal key={it.slug}>
              <a href={`feature-${it.slug}.html`} className="feat-card">
                <span className="fi"><Icon name={it.icon} size={20} /></span>
                <div>
                  <div className="ft">{it.t}</div>
                  <div className="fd">{it.d}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Finance */}
    <section className="section section--soft">
      <div className="container">
        <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', maxWidth: '100%', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow">02 · finance & accounting</span>
            <h2 style={{ marginTop: 12 }}>Finance & Accounting</h2>
            <p style={{ marginTop: 8 }}>Bills, banks, books — connected. Tally-friendly, audit-ready.</p>
          </div>
          <a href="finance.html" className="btn btn--ghost">Finance overview <Icon name="arrow" size={14} className="btn-arrow" /></a>
        </div>
        <div className="feat-grid">
          {SOLUTIONS.finance.items.map(it => (
            <Reveal key={it.slug}>
              <a href={`feature-${it.slug}.html`} className="feat-card">
                <span className="fi" style={{ background: 'rgba(16,185,129,0.10)', color: 'var(--accent-600)' }}><Icon name={it.icon} size={20} /></span>
                <div>
                  <div className="ft">{it.t}</div>
                  <div className="fd">{it.d}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Field Force */}
    <section className="section">
      <div className="container">
        <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', maxWidth: '100%', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow">03 · field force</span>
            <h2 style={{ marginTop: 12 }}>Field Force Automation</h2>
            <p style={{ marginTop: 8 }}>For sales reps, service techs, delivery teams — every visit, geo-tagged.</p>
          </div>
          <a href="field-force.html" className="btn btn--ghost">Field Force overview <Icon name="arrow" size={14} className="btn-arrow" /></a>
        </div>
        <div className="feat-grid">
          {SOLUTIONS.ffa.items.map(it => (
            <Reveal key={it.slug}>
              <a href={`feature-${it.slug}.html`} className="feat-card">
                <span className="fi" style={{ background: 'rgba(244,63,94,0.10)', color: 'var(--rose-500)' }}><Icon name={it.icon} size={20} /></span>
                <div>
                  <div className="ft">{it.t}</div>
                  <div className="fd">{it.d}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Coming soon */}
    <section className="section section--ink">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow eyebrow--light">on the roadmap</span>
          <h2>Coming soon to PrimeHR.</h2>
          <p>Three new modules in active development. Join the waitlist for early access.</p>
        </div>
        <div className="grid grid-3">
          {SOLUTIONS.soon.items.map(it => (
            <Reveal key={it.slug}>
              <a href={`feature-${it.slug}.html`} className="card card--dark card--hover" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>
                <span className="fi" style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(245,158,11,0.15)', color: 'var(--warn-500)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <Icon name={it.icon} size={20} />
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>{it.t} <span className="soon-pill">soon</span></div>
                  <div style={{ fontSize: 13, color: 'var(--ink-300)' }}>{it.d}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="Replace 7+ tools. One platform, one bill." />
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<SolutionsPage />);
