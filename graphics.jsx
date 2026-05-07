// Real graphic components for product UI mockups, charts, illustrations

// ============== ANIMATED HERO DASHBOARD MOCKUP ==============
const DashboardMock = () => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Background ambient glow */}
      <div className="blob" style={{ width: 400, height: 400, background: 'var(--brand-500)', top: -40, right: -60 }} />
      <div className="blob" style={{ width: 320, height: 320, background: 'var(--accent-500)', bottom: -40, left: -40 }} />

      {/* Main app frame */}
      <div style={{
        position: 'relative',
        background: '#fff',
        borderRadius: 18,
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid var(--line)',
        overflow: 'hidden',
        zIndex: 1,
      }}>
        {/* App chrome */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '12px 16px',
          borderBottom: '1px solid var(--line)',
          background: 'var(--ink-50)',
        }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-500)' }}>app.primehr.in/dashboard</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', minHeight: 460 }}>
          {/* Sidebar */}
          <div style={{ background: 'var(--ink-900)', color: '#fff', padding: '18px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
              <img src="images/primehr.svg" alt="PrimeHR" style={{ height: 22, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
            </div>
            {[
              { i: 'chart', l: 'Dashboard', active: true },
              { i: 'users', l: 'People' },
              { i: 'cal', l: 'Attendance' },
              { i: 'coin', l: 'Payroll' },
              { i: 'pin', l: 'Field Force' },
              { i: 'doc', l: 'Reports' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 10px', borderRadius: 6,
                color: item.active ? '#fff' : 'rgba(255,255,255,0.6)',
                background: item.active ? 'rgba(255,255,255,0.08)' : 'transparent',
                fontSize: 12, fontWeight: 500, marginBottom: 2,
              }}>
                <Icon name={item.i} size={15} />
                {item.l}
              </div>
            ))}
          </div>

          {/* Main panel */}
          <div style={{ padding: 20, background: '#fafbfd' }}>
            {/* Greet row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)' }}>Good morning, Priya 👋</div>
                <div style={{ fontSize: 11, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>TUE · 30 APR · 09:14</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <span className="chip"><span className="chip-dot" />142 present</span>
                <span className="chip chip--accent"><span className="chip-dot" />6 leave</span>
              </div>
            </div>

            {/* KPI row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 14 }}>
              <KPI label="Headcount"  value="148"     delta="+4" good />
              <KPI label="Payroll"    value={<><span style={{fontSize:13}}>₹</span> <span>{(28_42_500 + tick * 14320).toLocaleString('en-IN').slice(0, -1)}…</span></>} delta="ready" tickAccent />
              <KPI label="Open roles" value="12"      delta="3 hot" />
            </div>

            {/* Chart card */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 14, marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                <span style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink-700)' }}>Attendance · this week</span>
                <span style={{ fontSize: 10, color: 'var(--accent-600)', fontFamily: 'var(--f-mono)' }}>● live</span>
              </div>
              <BarsRow tick={tick} />
            </div>

            {/* Activity */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 12 }}>
              <div style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink-700)', marginBottom: 10 }}>Live activity</div>
              <ActivityList tick={tick} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating widget — payroll summary card */}
      <div className="float" style={{
        position: 'absolute',
        right: -30, top: 80,
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 14,
        boxShadow: 'var(--shadow-lg)',
        padding: 16,
        width: 220,
        zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span className="module-icon module-icon--accent" style={{ width: 36, height: 36, borderRadius: 10, marginBottom: 0 }}>
            <Icon name="coin" size={18} />
          </span>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>Apr Payroll</div>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: 18, fontWeight: 700 }}>₹ <CountUp to={28.4} decimals={1} suffix=" L" /></div>
          </div>
        </div>
        <div style={{ height: 6, background: 'var(--ink-100)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, var(--accent-500), var(--brand-500))', borderRadius: 3 }} />
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: 'var(--ink-500)' }}>92% calculated · TDS ready</div>
      </div>

      {/* Floating widget — hiring */}
      <div className="float" style={{
        position: 'absolute',
        left: -28, bottom: 60,
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 14,
        boxShadow: 'var(--shadow-lg)',
        padding: 14,
        width: 200,
        zIndex: 2,
        animationDelay: '1s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span className="module-icon module-icon--brand" style={{ width: 32, height: 32, borderRadius: 8, marginBottom: 0 }}>
            <Icon name="users" size={16} />
          </span>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>Sales Lead role</div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>{1284 + tick} applicants</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[100, 78, 56, 36, 22].map((w, i) => (
            <div key={i} style={{ flex: 1, height: 28, background: `linear-gradient(180deg, var(--brand-${i < 3 ? '500' : '700'}), var(--brand-700))`, borderRadius: 4, transform: `scaleY(${w/100})`, transformOrigin: 'bottom', transition: 'transform 0.6s' }} />
          ))}
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: 'var(--accent-600)', display: 'flex', alignItems: 'center', gap: 4 }}>
          <Icon name="spark" size={11} /> AI screened in 2 min
        </div>
      </div>
    </div>
  );
};

const KPI = ({ label, value, delta, good = false, tickAccent = false }) => (
  <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 10, padding: 12 }}>
    <div style={{ fontSize: 10, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</div>
    <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18, color: 'var(--ink-900)' }}>{value}</div>
    <div style={{ fontSize: 11, color: good ? 'var(--accent-600)' : tickAccent ? 'var(--brand-600)' : 'var(--ink-500)', marginTop: 2, fontWeight: 500 }}>{delta}</div>
  </div>
);

const BarsRow = ({ tick }) => {
  const heights = [70, 85, 60, 92, 78, 45];
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80, borderBottom: '1px solid var(--ink-100)' }}>
        {heights.map((base, i) => {
          const offset = ((tick + i) % 5 - 2) * 4;
          const h = Math.max(20, Math.min(95, base + offset));
          const isActive = i === (tick % 6);
          return (
            <div key={i} style={{
              flex: 1,
              height: `${h}%`,
              background: isActive
                ? 'linear-gradient(180deg, var(--brand-500), var(--brand-700))'
                : 'linear-gradient(180deg, var(--ink-300), var(--ink-200))',
              borderRadius: '4px 4px 0 0',
              transition: 'height 0.6s ease, background 0.4s',
            }} />
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
        {['Mon','Tue','Wed','Thu','Fri','Sat'].map((d, i) => (
          <span key={i} style={{ flex: 1, textAlign: 'center', fontSize: 9, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>{d}</span>
        ))}
      </div>
    </div>
  );
};

const ActivityList = ({ tick }) => {
  const items = [
    { who: 'RS', name: 'Rahul', what: 'clocked in', where: 'Vijay Nagar', t: '9:12am', color: 'var(--brand-500)' },
    { who: 'AI', name: 'AI Screen', what: 'shortlisted 3 for Sales Lead', where: '', t: '9:08am', color: 'var(--accent-500)', spark: true },
    { who: 'MK', name: 'Meera', what: 'submitted ₹2,400 expense', where: 'Pithampur', t: '8:55am', color: 'var(--warn-500)' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          display: 'flex', gap: 10, alignItems: 'center',
          padding: '6px 8px', borderRadius: 6,
          background: i === (tick % items.length) ? 'var(--brand-50)' : 'transparent',
          transition: 'background 0.4s',
        }}>
          <span style={{ width: 24, height: 24, borderRadius: 6, background: it.color, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700 }}>
            {it.spark ? <Icon name="spark" size={12} /> : it.who}
          </span>
          <div style={{ flex: 1, fontSize: 11 }}>
            <b>{it.name}</b> <span style={{ color: 'var(--ink-600)' }}>{it.what}</span> {it.where && <span style={{ color: 'var(--ink-500)' }}>· {it.where}</span>}
          </div>
          <span style={{ fontSize: 10, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>{it.t}</span>
        </div>
      ))}
    </div>
  );
};

// ============== HIRING FUNNEL ==============
const HiringFunnelGfx = () => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT(x => x + 1), 1800);
    return () => clearInterval(id);
  }, []);
  const stages = [
    { label: 'Applied',     count: 1284, w: 100, color: 'var(--brand-200)' },
    { label: 'AI Screened', count:  412, w: 80,  color: 'var(--brand-500)', ai: true },
    { label: 'Interview',   count:   86, w: 60,  color: 'var(--brand-600)' },
    { label: 'Offer',       count:   18, w: 38,  color: 'var(--brand-700)' },
    { label: 'Hired',       count:    9, w: 22,  color: 'var(--accent-500)' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', padding: 24, position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
        <div>
          <span className="eyebrow">ATS · live funnel</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 4 }}>Sales Lead — Indore</div>
        </div>
        <span className="chip chip--accent"><Icon name="spark" size={12} /> AI auto-screen</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', position: 'relative' }}>
        {stages.map((s, i) => (
          <div key={s.label} style={{
            width: `${s.w}%`,
            background: s.color,
            color: i > 1 ? '#fff' : 'var(--ink-900)',
            padding: '12px 18px',
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: i === stages.length - 1 ? '0 8px 20px -8px rgba(16, 185, 129, 0.5)' : 'none',
            transform: i === (t % stages.length) ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.5s',
          }}>
            <span style={{ fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
              {s.ai && <Icon name="spark" size={13} />}
              {s.label}
            </span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 13, fontWeight: 600 }}>{s.count.toLocaleString('en-IN')}</span>
          </div>
        ))}
        {/* Flowing dots */}
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} style={{
            position: 'absolute',
            left: `${48 + (i % 3 - 1) * 3}%`,
            top: 0,
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--accent-500)',
            boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.2)',
            animation: `funnel-fall 4s ${i * 0.6}s ease-in infinite`,
            opacity: 0,
          }} />
        ))}
      </div>
      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, fontSize: 12, color: 'var(--ink-600)' }}>
        <div><Icon name="clock" size={13} /> 14 days time-to-hire</div>
        <div><Icon name="spark" size={13} /> 62 hrs saved</div>
        <div><Icon name="cal" size={13} /> Interview at 3pm</div>
      </div>
      <style>{`@keyframes funnel-fall { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(220px); opacity: 0; } }`}</style>
    </div>
  );
};

// ============== FFA MAP ==============
const FieldMapGfx = () => {
  const [pulse, setPulse] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPulse(p => p + 1), 1800);
    return () => clearInterval(id);
  }, []);
  const pins = [
    { x: 110, y: 90,  status: 'active', label: 'RA' },
    { x: 230, y: 160, status: 'active', label: 'MK' },
    { x: 380, y: 110, status: 'idle',   label: 'VR' },
    { x: 470, y: 220, status: 'active', label: 'AN' },
    { x: 320, y: 280, status: 'offline', label: 'SM' },
  ];
  const colorOf = (s) => s === 'active' ? '#10b981' : s === 'idle' ? '#f59e0b' : '#94a3b8';
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div>
          <span className="eyebrow">field force · live map</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 4 }}>Indore region</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Legend dot="#10b981" label="Active 12" />
          <Legend dot="#f59e0b" label="Idle 3" />
        </div>
      </div>
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(180deg, #f8fafc, #eef2ff)' }}>
        <svg viewBox="0 0 600 360" style={{ width: '100%', display: 'block' }}>
          <defs>
            <pattern id="grid-bg" patternUnits="userSpaceOnUse" width="24" height="24">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
            </pattern>
            <radialGradient id="zone1"><stop offset="0%" stopColor="rgba(99,102,241,0.12)" /><stop offset="100%" stopColor="transparent" /></radialGradient>
          </defs>
          <rect width="600" height="360" fill="url(#grid-bg)" />
          {/* zones */}
          <circle cx="200" cy="120" r="120" fill="url(#zone1)" />
          <circle cx="430" cy="170" r="130" fill="url(#zone1)" />
          {/* roads */}
          <path d="M 20 80 Q 200 60 380 110 T 580 90" stroke="rgba(99,102,241,0.25)" strokeWidth="3" fill="none" />
          <path d="M 60 320 Q 220 240 320 280 T 560 240" stroke="rgba(99,102,241,0.25)" strokeWidth="3" fill="none" />
          <path d="M 280 20 Q 300 160 270 360" stroke="rgba(99,102,241,0.25)" strokeWidth="3" fill="none" />
          {/* courier path */}
          <path id="cpath" d="M 110 90 Q 200 130 230 160 Q 290 200 320 280" stroke="#4f46e5" strokeWidth="2.5" fill="none" strokeDasharray="6 6" strokeLinecap="round" />
          <circle r="7" fill="#4f46e5" stroke="#fff" strokeWidth="2">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 110 90 Q 200 130 230 160 Q 290 200 320 280" />
          </circle>
          {/* radius search */}
          <circle cx="230" cy="160" r="80" stroke="#10b981" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.7" />
          <text x="230" y="78" textAnchor="middle" fontSize="11" fontWeight="600" fill="#059669" fontFamily="var(--f-mono)">5km radius</text>
          {/* pins */}
          {pins.map((p, i) => (
            <g key={i} transform={`translate(${p.x}, ${p.y})`}>
              {p.status === 'active' && (
                <circle r="14" fill={colorOf(p.status)} opacity="0.4" style={{ transformOrigin: 'center', animation: `pulse-ring 2s ${i*0.3}s ease-out infinite` }} />
              )}
              <circle r="11" fill="#fff" stroke={colorOf(p.status)} strokeWidth="2.5" />
              <text textAnchor="middle" y="3" fontSize="9" fontWeight="700" fill={colorOf(p.status)}>{p.label}</text>
            </g>
          ))}
        </svg>
        {/* live info card */}
        <div style={{
          position: 'absolute',
          bottom: 12, right: 12,
          background: '#fff',
          border: '1px solid var(--line)',
          borderRadius: 10,
          padding: 10,
          fontSize: 12,
          minWidth: 180,
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <b>Meera K.</b>
            <span style={{ color: 'var(--accent-600)', fontFamily: 'var(--f-mono)', fontSize: 10 }}>● live</span>
          </div>
          <div style={{ color: 'var(--ink-500)', fontSize: 11 }}>Visit #{4 + (pulse % 9)} · 2.3 km away</div>
          <div style={{ marginTop: 6, paddingTop: 6, borderTop: '1px dashed var(--line)', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ink-600)' }}>
            <span>📍 geotagged</span>
            <span>📷 photo proof</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Legend = ({ dot, label }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--ink-600)' }}>
    <span style={{ width: 8, height: 8, borderRadius: '50%', background: dot, boxShadow: `0 0 0 3px ${dot}33` }} />
    {label}
  </span>
);

// ============== PAYROLL SLIP ==============
const PayrollSlipGfx = () => {
  const [run, setRun] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setRun(true); }), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  React.useEffect(() => {
    if (!run) return;
    if (step >= 8) { const id = setTimeout(() => setStep(0), 3500); return () => clearTimeout(id); }
    const id = setTimeout(() => setStep(s => s + 1), 420);
    return () => clearTimeout(id);
  }, [run, step]);
  const lines = [
    { l: 'Basic',                a:  45000, sign: '+' },
    { l: 'HRA',                  a:  18000, sign: '+' },
    { l: 'Special Allowance',    a:  12500, sign: '+' },
    { l: 'PF (employee)',        a:  -5400, sign: '−' },
    { l: 'Professional Tax',     a:   -200, sign: '−' },
    { l: 'TDS',                  a:  -3850, sign: '−' },
    { l: 'Loan EMI',             a:  -2500, sign: '−' },
  ];
  return (
    <div ref={ref} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', padding: 24, maxWidth: 460, position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <div>
          <span className="eyebrow">payslip · apr 2026</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 19, marginTop: 4 }}>Priya Sharma</div>
        </div>
        <span className="chip chip--accent"><Icon name="bolt" size={11} /> auto-calc</span>
      </div>
      <div style={{ fontSize: 11, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)', marginBottom: 14 }}>EMP-0142 · UAN 100xxxxx789</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {lines.map((ln, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '8px 12px',
            background: step > i ? (ln.a < 0 ? '#fef3c7' : '#dcfce7') : 'transparent',
            borderRadius: 6,
            opacity: step > i ? 1 : 0,
            transform: step > i ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 0.35s ease',
          }}>
            <span style={{ fontSize: 13, color: 'var(--ink-700)' }}>
              <span style={{ display: 'inline-block', width: 14, color: ln.a < 0 ? '#d97706' : '#059669', fontWeight: 700 }}>{ln.sign}</span>
              {ln.l}
            </span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 13, fontWeight: 600 }}>₹ {Math.abs(ln.a).toLocaleString('en-IN')}</span>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 14,
        padding: '16px 18px',
        background: step >= 7 ? 'linear-gradient(135deg, var(--brand-600), var(--brand-800))' : 'var(--ink-100)',
        color: step >= 7 ? '#fff' : 'var(--ink-500)',
        borderRadius: 12,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        transition: 'all 0.5s',
      }}>
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18 }}>Net pay</span>
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 24 }}>
          ₹ {step >= 7 ? <CountUp to={63550} /> : '—'}
        </span>
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 10, fontSize: 11, color: 'var(--ink-500)' }}>
        <span>✓ Statutory ready</span>
        <span>✓ TDS filed</span>
        <span>✓ Tally sync</span>
      </div>
    </div>
  );
};

// ============== INVOICE / FINANCE MOCK ==============
const InvoiceGfx = () => (
  <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', padding: 28, maxWidth: 480 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
      <div>
        <div style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 22, color: 'var(--brand-700)' }}>INVOICE</div>
        <div style={{ fontSize: 12, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>WH-2026-0481</div>
      </div>
      <span className="chip chip--accent">Paid · 2 hrs ago</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18, fontSize: 12 }}>
      <div>
        <div style={{ color: 'var(--ink-500)', textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.06em', marginBottom: 4 }}>Bill to</div>
        <div style={{ fontWeight: 600 }}>Surya Pharma Pvt Ltd</div>
        <div style={{ color: 'var(--ink-500)' }}>GSTIN 27AABCS1234A1Z5</div>
      </div>
      <div>
        <div style={{ color: 'var(--ink-500)', textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.06em', marginBottom: 4 }}>Issued</div>
        <div>30 Apr 2026</div>
        <div style={{ color: 'var(--ink-500)' }}>Due: 30 May 2026</div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '12px 0' }}>
      {[
        { l: 'PrimeHR Growth · 80 emp × 12 mo', amt: 8_54_400 },
        { l: 'FFA module · 25 field staff',      amt: 1_50_000 },
        { l: 'Tally premium connector',           amt: 24_000 },
      ].map((row, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13 }}>
          <span>{row.l}</span>
          <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 600 }}>₹ {row.amt.toLocaleString('en-IN')}</span>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 0', fontSize: 13 }}>
      <Row k="Subtotal" v="₹ 10,28,400" />
      <Row k="GST 18%" v="₹ 1,85,112" />
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '2px solid var(--ink-900)', marginTop: 6 }}>
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 16 }}>Total</span>
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 20, color: 'var(--brand-700)' }}>₹ 12,13,512</span>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
      <span className="chip"><Icon name="plug" size={12} /> Tally synced</span>
      <span className="chip"><Icon name="doc" size={12} /> e-Invoice + IRN</span>
    </div>
  </div>
);

const Row = ({ k, v }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-600)' }}>
    <span>{k}</span><span style={{ fontFamily: 'var(--f-mono)' }}>{v}</span>
  </div>
);

// ============== CASH FLOW CHART ==============
const CashFlowChart = () => {
  const data = [
    { m: 'Jan', inc: 84, exp: 62 },
    { m: 'Feb', inc: 92, exp: 68 },
    { m: 'Mar', inc: 78, exp: 71 },
    { m: 'Apr', inc: 110, exp: 74 },
    { m: 'May', inc: 124, exp: 82 },
    { m: 'Jun', inc: 138, exp: 88 },
  ];
  const max = 150;
  const w = 480, h = 220, pad = 30;
  const xStep = (w - pad * 2) / (data.length - 1);
  const yOf = v => h - pad - (v / max) * (h - pad * 2);
  const line = (key) => data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${pad + i * xStep} ${yOf(d[key])}`).join(' ');
  const area = (key) => `${line(key)} L ${pad + (data.length-1) * xStep} ${h - pad} L ${pad} ${h - pad} Z`;

  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div>
          <span className="eyebrow">cash flow · h1 2026</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22, marginTop: 4 }}>+ ₹ 28.4 L surplus</div>
        </div>
        <div style={{ display: 'flex', gap: 12, fontSize: 12, color: 'var(--ink-600)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#10b981' }} />Income</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#f43f5e' }} />Expenses</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', display: 'block' }}>
        <defs>
          <linearGradient id="incG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.4" /><stop offset="100%" stopColor="#10b981" stopOpacity="0" /></linearGradient>
          <linearGradient id="expG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" /><stop offset="100%" stopColor="#f43f5e" stopOpacity="0" /></linearGradient>
        </defs>
        {/* gridlines */}
        {[0.25, 0.5, 0.75].map(g => (
          <line key={g} x1={pad} y1={pad + g * (h - pad * 2)} x2={w - pad} y2={pad + g * (h - pad * 2)} stroke="var(--ink-100)" strokeWidth="1" />
        ))}
        <path d={area('inc')} fill="url(#incG)" />
        <path d={line('inc')} stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="800" strokeDashoffset="800" style={{ animation: 'draw-stroke 2s 0.3s ease forwards' }} />
        <path d={area('exp')} fill="url(#expG)" />
        <path d={line('exp')} stroke="#f43f5e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="800" strokeDashoffset="800" style={{ animation: 'draw-stroke 2s 0.6s ease forwards' }} />
        {data.map((d, i) => (
          <g key={i}>
            <circle cx={pad + i * xStep} cy={yOf(d.inc)} r="4" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
            <text x={pad + i * xStep} y={h - 8} textAnchor="middle" fontSize="11" fill="var(--ink-500)" fontFamily="var(--f-mono)">{d.m}</text>
          </g>
        ))}
      </svg>
      <style>{`@keyframes draw-stroke { to { stroke-dashoffset: 0; } }`}</style>
    </div>
  );
};

// ============== KANBAN ==============
const KanbanGfx = () => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setTick(t => t + 1), 2400); return () => clearInterval(id); }, []);
  const cols = [
    { name: 'Open', color: '#94a3b8', cards: [{ t: 'AC repair · Bhawarkua', urgent: true, sla: '2h' }, { t: 'Demo · Surya Pharma', sla: '4h' }, { t: 'Order delivery · Super Corridor', sla: '6h' }] },
    { name: 'In progress', color: '#4f46e5', cards: [{ t: 'Site survey · Palasia', urgent: true, sla: '1h' }, { t: 'Collection · Vijay Nagar', sla: '3h' }] },
    { name: 'Resolved', color: '#10b981', cards: [{ t: 'Service · Rau', sla: '✓' }, { t: 'Inspection · Pithampur', sla: '✓' }, { t: 'Demo · HQ', sla: '✓' }] },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', padding: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <span className="eyebrow">complaint board · today</span>
        <span style={{ fontSize: 11, color: 'var(--ink-500)' }}>auto-routes via SLA</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {cols.map((c, ci) => (
          <div key={c.name} style={{ background: 'var(--ink-50)', borderRadius: 10, padding: 10, minHeight: 220 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.color }} />{c.name}
              </span>
              <span style={{ fontSize: 11, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>{c.cards.length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {c.cards.map((card, ji) => (
                <div key={ji} style={{
                  background: '#fff',
                  border: '1px solid var(--line)',
                  borderLeft: `3px solid ${card.urgent ? '#f43f5e' : c.color}`,
                  borderRadius: 6,
                  padding: '8px 10px',
                  fontSize: 12,
                  transform: (ci === 1 && ji === 0 && tick % 3 === 0) ? 'translateX(3px)' : 'translateX(0)',
                  transition: 'transform 0.5s',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{card.t}</span>
                    <span style={{ fontSize: 10, color: card.urgent ? '#f43f5e' : 'var(--ink-500)', fontFamily: 'var(--f-mono)', fontWeight: 600 }}>{card.sla}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============== PERFORMANCE CARD ==============
const PerfCardGfx = () => (
  <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', padding: 24 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
      <div>
        <span className="eyebrow">Q2 · appraisal</span>
        <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 4 }}>Rahul Sharma · Sales</div>
      </div>
      <div style={{ width: 64, height: 64, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'conic-gradient(var(--accent-500) 0 86%, var(--ink-100) 86%)' }}>
        <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 16 }}>4.3</div>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { k: 'Revenue target', s: 88, c: 'var(--accent-500)' },
        { k: 'Customer NPS',   s: 72, c: 'var(--brand-500)' },
        { k: 'Pipeline hygiene', s: 95, c: 'var(--accent-500)' },
        { k: 'Team mentoring', s: 60, c: 'var(--warn-500)' },
      ].map((k, i) => (
        <div key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
            <span style={{ fontWeight: 500 }}>{k.k}</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 600 }}>{k.s}%</span>
          </div>
          <div style={{ height: 6, background: 'var(--ink-100)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${k.s}%`, background: k.c, borderRadius: 3, transition: 'width 1.2s ease' }} />
          </div>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 16, padding: '10px 12px', background: 'var(--brand-50)', borderRadius: 8, fontSize: 12, color: 'var(--ink-700)', display: 'flex', gap: 8 }}>
      <Icon name="spark" size={14} style={{ color: 'var(--brand-600)', flexShrink: 0, marginTop: 2 }} />
      <span><b style={{ color: 'var(--brand-700)' }}>AI insight:</b> Punctuality up 18% vs Q1. Suggest stretch goal on team mentoring.</span>
    </div>
  </div>
);

// ============== ABOUT US MOCK ==============
const AboutUsMock = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div className="blob" style={{ width: 400, height: 400, background: 'var(--brand-500)', top: -40, right: -60 }} />
      <div className="blob" style={{ width: 320, height: 320, background: 'var(--accent-500)', bottom: -40, left: -40 }} />

      <div style={{ position: 'relative', background: '#fff', borderRadius: 18, boxShadow: 'var(--shadow-xl)', border: '1px solid var(--line)', overflow: 'hidden', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderBottom: '1px solid var(--line)', background: 'var(--ink-50)' }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-500)' }}>admin.primehr.in/directory</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', minHeight: 460 }}>
          <div style={{ background: 'var(--ink-900)', color: '#fff', padding: '18px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
              <span style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 18, color: '#fff' }}>PrimeHR</span>
            </div>
            {[
              { i: 'users', l: 'Directory', active: true },
              { i: 'chart', l: 'Company Stats' },
              { i: 'pin', l: 'Office Locations' },
              { i: 'shield', l: 'Compliance' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 6,
                color: item.active ? '#fff' : 'rgba(255,255,255,0.6)',
                background: item.active ? 'rgba(255,255,255,0.08)' : 'transparent',
                fontSize: 12, fontWeight: 500, marginBottom: 2,
              }}>
                <Icon name={item.i} size={15} />
                {item.l}
              </div>
            ))}
          </div>

          <div style={{ padding: 20, background: '#fafbfd' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)' }}>Company Overview</div>
                <div style={{ fontSize: 11, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>TUE · 30 APR · 09:14</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <span className="chip"><span className="chip-dot" style={{background:'var(--brand-500)'}}/>Active Status</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 14 }}>
              <KPI label="Employees"  value="1,284"     delta="+42 this month" good />
              <KPI label="Departments"    value="12" delta="across 3 offices" />
              <KPI label="Uptime" value="99.9%"      delta="All systems go" tickAccent />
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 14, marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                <span style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink-700)' }}>Department Headcount</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 60, borderBottom: '1px solid var(--ink-100)' }}>
                {[80, 60, 45, 90, 50].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(180deg, var(--brand-500), var(--brand-700))', borderRadius: '4px 4px 0 0' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                {['Eng','Sales','HR','Ops','Fin'].map((d, i) => (
                  <span key={i} style={{ flex: 1, textAlign: 'center', fontSize: 9, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>{d}</span>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 12 }}>
              <div style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink-700)', marginBottom: 10 }}>Company Updates</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { icon: 'spark', name: 'New AI feature deployed', t: '1h ago', c: 'var(--accent-500)' },
                  { icon: 'users', name: 'Onboarded 12 new engineers', t: '3h ago', c: 'var(--brand-500)' },
                  { icon: 'target', name: 'Q2 Goals successfully met', t: '1d ago', c: 'var(--ink-500)' },
                ].map((it, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 8px', borderRadius: 6 }}>
                    <span style={{ width: 24, height: 24, borderRadius: 6, background: it.c, color: '#fff', display: 'grid', placeItems: 'center' }}>
                      <Icon name={it.icon} size={12} />
                    </span>
                    <div style={{ flex: 1, fontSize: 11, fontWeight: 600 }}>{it.name}</div>
                    <span style={{ fontSize: 10, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>{it.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { DashboardMock, HiringFunnelGfx, FieldMapGfx, PayrollSlipGfx, InvoiceGfx, CashFlowChart, KanbanGfx, PerfCardGfx, AboutUsMock });
