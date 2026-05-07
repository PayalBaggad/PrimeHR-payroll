// =============================================================
// FIELD FORCE FEATURE GRAPHICS (9)
// =============================================================

const useTickFF = (interval = 1800) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setT(x => x + 1), interval); return () => clearInterval(id); }, [interval]);
  return t;
};

const FBar = ({ url }) => (
  <div className="mock-bar">
    <span className="dot" style={{ background: '#ff5f56' }} /><span className="dot" style={{ background: '#ffbd2e' }} /><span className="dot" style={{ background: '#27c93f' }} />
    <span style={{ flex: 1, textAlign: 'center' }}>{url}</span>
  </div>
);

// 1. TRACK ROUTES — animated GPS breadcrumb trail
const RoutesMock = () => (
  <div className="mock">
    <FBar url="app.primehr.in/ffa/routes/RAHUL-2026-04-30" />
    <div style={{ padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <span className="eyebrow">today's trail · rahul s.</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>74.2 km · 8 stops</div>
        </div>
        <span className="chip chip--accent"><span className="chip-dot" />Live</span>
      </div>
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(180deg,#f8fafc,#eef2ff)' }}>
        <svg viewBox="0 0 600 320" style={{ width: '100%', display: 'block' }}>
          <defs>
            <pattern id="rgrid" patternUnits="userSpaceOnUse" width="24" height="24">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="600" height="320" fill="url(#rgrid)" />
          {/* roads */}
          <path d="M 20 60 Q 200 40 380 80 T 580 60" stroke="rgba(99,102,241,0.2)" strokeWidth="3" fill="none" />
          <path d="M 60 280 Q 220 200 320 240 T 560 200" stroke="rgba(99,102,241,0.2)" strokeWidth="3" fill="none" />
          {/* breadcrumb path */}
          <path d="M 50 80 L 130 110 L 200 90 L 280 150 L 360 130 L 430 200 L 510 180 L 560 250"
                stroke="#4f46e5" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="800" strokeDashoffset="800"
                style={{ animation: 'draw-stroke 4s ease forwards infinite' }} />
          {/* stops */}
          {[[50,80,'9:14'],[200,90,'10:22'],[280,150,'11:48'],[360,130,'13:05'],[430,200,'14:30'],[510,180,'15:42'],[560,250,'16:55']].map(([x,y,t],i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="#fff" stroke="#4f46e5" strokeWidth="2.5" />
              <text x={x} y={y - 12} textAnchor="middle" fontSize="9" fontFamily="var(--f-mono)" fill="#4338ca">{t}</text>
            </g>
          ))}
          {/* live courier */}
          <circle r="8" fill="#10b981" stroke="#fff" strokeWidth="2">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 50 80 L 130 110 L 200 90 L 280 150 L 360 130 L 430 200 L 510 180 L 560 250" />
          </circle>
        </svg>
      </div>
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, fontSize: 11 }}>
        {[['Distance','74.2 km'],['Stops','8'],['Idle','22 min'],['Speed avg','38 km/h']].map(([k,v]) => (
          <div key={k} style={{ background: 'var(--ink-50)', padding: '8px 10px', borderRadius: 6 }}>
            <div style={{ color: 'var(--ink-500)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k}</div>
            <div style={{ fontFamily: 'var(--f-mono)', fontWeight: 700, fontSize: 13 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 2. FFA REIMBURSEMENT
const FFAReimburseMock = () => (
  <div className="mock">
    <FBar url="app.primehr.in/ffa/reimbursement" />
    <div style={{ padding: 22 }}>
      <span className="eyebrow">field claims · this week</span>
      <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6, marginBottom: 14 }}>₹ 24,860 from 18 reps</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 14 }}>
        {[
          { i: '⛽', l: 'Fuel', amt: 14200, n: 32 },
          { i: '🍱', l: 'Meals', amt: 6400, n: 18 },
          { i: '🅿️', l: 'Toll/Park', amt: 4260, n: 24 },
        ].map(c => (
          <div key={c.l} style={{ background: 'var(--ink-50)', padding: 12, borderRadius: 10 }}>
            <div style={{ fontSize: 22 }}>{c.i}</div>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18 }}>₹ {c.amt.toLocaleString('en-IN')}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>{c.l} · {c.n} claims</div>
          </div>
        ))}
      </div>
      {[
        { who: 'Rahul', what: 'Fuel · Vijay Nagar → Super Corridor', amt: 480, gps: '✓ GPS', photo: '✓ Bill' },
        { who: 'Meera', what: 'Lunch · Client visit',    amt: 320, gps: '✓ GPS', photo: '✓ Bill' },
        { who: 'Karthik', what: 'Toll · Pithampur trip',      amt: 280, gps: '✓ GPS', photo: '—' },
      ].map((r,i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1.6fr 0.8fr 0.6fr 0.6fr', gap: 10, alignItems: 'center', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, marginBottom: 6, fontSize: 12 }}>
          <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--brand-500)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 11 }}>{r.who[0]}</span>
          <span><b>{r.who}</b> · {r.what}</span>
          <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 700, textAlign: 'right' }}>₹ {r.amt}</span>
          <span style={{ fontSize: 10, color: 'var(--accent-600)' }}>{r.gps}</span>
          <span style={{ fontSize: 10, color: r.photo === '—' ? '#94a3b8' : 'var(--accent-600)' }}>{r.photo}</span>
        </div>
      ))}
    </div>
  </div>
);

// 3. FFA ATTENDANCE — geo-tagged start day
const FFAAttendanceMock = () => {
  const t = useTickFF(2200);
  return (
    <div className="mock">
      <FBar url="app.primehr.in/ffa/attendance/today" />
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <span className="eyebrow">field attendance · live</span>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>62 of 68 started day</div>
          </div>
          <span className="chip chip--accent">91% on time</span>
        </div>
        {[
          { who: 'Rahul S.', loc: 'Vijay Nagar · 22.7533,75.8937', t: '8:42 am', status: 'started', selfie: true },
          { who: 'Meera K.', loc: 'Bhawarkua · 22.6953,75.8653',     t: '8:51 am', status: 'started', selfie: true },
          { who: 'Karthik V.', loc: 'Pithampur SEZ',              t: '8:58 am', status: 'started', selfie: true },
          { who: 'Anish M.', loc: '— not started',                  t: '—',      status: 'pending' },
        ].map((r,i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 80px 70px', gap: 10, alignItems: 'center', padding: '12px', borderRadius: 8, marginBottom: 6, background: r.status === 'pending' ? '#fef3c7' : '#fff', border: '1px solid var(--line)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: r.selfie ? 'linear-gradient(135deg,var(--brand-500),var(--accent-500))' : 'var(--ink-200)', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 16 }}>📷</div>
            <span style={{ fontWeight: 600, fontSize: 13 }}>{r.who}</span>
            <span style={{ fontSize: 11, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>📍 {r.loc}</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, fontWeight: 600 }}>{r.t}</span>
            <span className={r.status === 'started' ? 'chip chip--accent' : 'chip'} style={{ fontSize: 10, animation: r.status === 'pending' && t % 2 === 0 ? 'blink 1s infinite' : 'none' }}>{r.status === 'started' ? '✓ In' : 'Pending'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. VISITS
const VisitsMock = () => (
  <div className="mock">
    <FBar url="app.primehr.in/ffa/visits/today" />
    <div style={{ padding: 22 }}>
      <span className="eyebrow">today's visits · 24 logged</span>
      <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6, marginBottom: 14 }}>18 successful · 4 follow-ups · 2 missed</div>
      {[
        { c: 'Surya Pharma', who: 'Rahul', out: 'Order placed · ₹ 84k', at: '10:22 am', tag: 'success', icon: '✓' },
        { c: 'BlueWave Retail', who: 'Meera', out: 'Demo done · follow-up Tue', at: '11:48 am', tag: 'follow', icon: '↻' },
        { c: 'Patel Stores', who: 'Karthik', out: 'Collection ₹ 12,400 · cheque', at: '13:05 pm', tag: 'success', icon: '✓' },
        { c: 'Nimbus Foods', who: 'Anish', out: 'Owner not available', at: '14:30 pm', tag: 'missed', icon: '✗' },
      ].map((v,i) => {
        const colors = { success: 'var(--accent-500)', follow: 'var(--warn-500)', missed: 'var(--rose-500)' };
        return (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1.6fr 1fr 80px 100px', gap: 12, alignItems: 'center', padding: '12px 14px', border: '1px solid var(--line)', borderLeft: `3px solid ${colors[v.tag]}`, borderRadius: 8, marginBottom: 6 }}>
            <span style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--brand-50)', color: 'var(--brand-700)', display: 'grid', placeItems: 'center', fontWeight: 700 }}>{v.c[0]}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{v.c}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>by {v.who} · 📍 GPS · 📷 photo</div>
            </div>
            <span style={{ fontSize: 12 }}>{v.out}</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-500)' }}>{v.at}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999, background: `${colors[v.tag]}1a`, color: colors[v.tag], fontSize: 11, fontWeight: 700 }}>{v.icon} {v.tag}</span>
          </div>
        );
      })}
    </div>
  </div>
);

// 5. COLLECTION
const CollectionMock = () => {
  const t = useTickFF(1500);
  return (
    <div className="mock">
      <FBar url="app.primehr.in/ffa/collection" />
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <span className="eyebrow">cash collection · today</span>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22, marginTop: 6 }}>₹ <CountUp to={284600} /></div>
          </div>
          <span className="chip chip--accent"><Icon name="bolt" size={11} /> Synced to ledger</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 14 }}>
          {[
            { l: 'Cash', a: 84600, c: '#10b981' },
            { l: 'Cheque', a: 142000, c: '#4f46e5' },
            { l: 'UPI', a: 58000, c: '#f59e0b' },
          ].map((m,i) => (
            <div key={i} style={{ background: 'var(--ink-50)', padding: 12, borderRadius: 10, borderLeft: `3px solid ${m.c}` }}>
              <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>{m.l}</div>
              <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18, color: m.c }}>₹ {m.a.toLocaleString('en-IN')}</div>
            </div>
          ))}
        </div>
        {[
          { c: 'Surya Pharma', amt: 124000, mode: 'Cheque #482301', by: 'Rahul', dep: 'HDFC' },
          { c: 'Patel Stores', amt: 12400, mode: 'Cash', by: 'Karthik', dep: 'Pending deposit' },
          { c: 'Anand Mart', amt: 38000, mode: 'UPI', by: 'Meera', dep: 'Auto · ICICI' },
        ].map((r,i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr 0.9fr 0.7fr 1fr', gap: 12, alignItems: 'center', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, marginBottom: 6, fontSize: 12, background: t % 3 === i ? '#f0fdf4' : '#fff', transition: 'background 0.4s' }}>
            <span style={{ fontWeight: 600 }}>{r.c}</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 700 }}>₹ {r.amt.toLocaleString('en-IN')}</span>
            <span style={{ fontSize: 11, color: 'var(--ink-600)' }}>{r.mode}</span>
            <span style={{ fontSize: 11, color: 'var(--ink-500)' }}>by {r.by}</span>
            <span style={{ fontSize: 11, color: 'var(--accent-600)' }}>📦 {r.dep}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 6. PARTY MASTER
const PartyMasterMock = () => (
  <div className="mock">
    <FBar url="app.primehr.in/ffa/parties" />
    <div style={{ padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <span className="eyebrow">party master · 1,284 records</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>Customers, vendors, distributors</div>
        </div>
        <input placeholder="🔍  Search by name, GSTIN, phone…" style={{ padding: '8px 14px', border: '1px solid var(--line-strong)', borderRadius: 8, fontSize: 12, width: 240 }} />
      </div>
      <div style={{ border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.9fr 1fr 0.8fr 0.7fr 0.8fr', padding: '10px 14px', background: 'var(--ink-50)', fontSize: 10, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          <span>Party</span><span>Type</span><span>GSTIN</span><span>City</span><span>Cr days</span><span>Outstanding</span>
        </div>
        {[
          { n: 'Surya Pharma Pvt Ltd', t: 'Customer', g: '27AABCS1234A1Z5', c: 'Indore', cd: 30, os: 248000 },
          { n: 'BlueWave Retail',      t: 'Customer', g: '27AAACBL890K1ZP', c: 'Indore', cd: 45, os: 0 },
          { n: 'Patel & Sons (Distrib)', t: 'Distrib', g: '24AABCP4521K1ZQ', c: 'Ujjain', cd: 21, os: 84500 },
          { n: 'Nimbus Foods',         t: 'Customer', g: '29AAFCN9012L1ZA', c: 'Bhopal', cd: 30, os: 0 },
          { n: 'Krishna Logistics',    t: 'Vendor',   g: '07AAACK4567P1ZX', c: 'Gwalior', cd: 15, os: 124000 },
        ].map((p,i) => {
          const colors = { Customer: 'var(--brand-500)', Distrib: 'var(--accent-500)', Vendor: 'var(--warn-500)' };
          return (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.9fr 1fr 0.8fr 0.7fr 0.8fr', padding: '10px 14px', fontSize: 12, borderTop: '1px solid var(--line)', alignItems: 'center' }}>
              <span style={{ fontWeight: 600 }}>{p.n}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: colors[p.t] }} />{p.t}</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--ink-500)' }}>{p.g}</span>
              <span style={{ fontSize: 11 }}>{p.c}</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11 }}>{p.cd}d</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, fontWeight: 700, color: p.os > 0 ? 'var(--rose-500)' : 'var(--ink-500)' }}>{p.os > 0 ? `₹ ${p.os.toLocaleString('en-IN')}` : '—'}</span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// 7. ROUTE PLAN
const RoutePlanMock = () => (
  <div className="mock">
    <FBar url="app.primehr.in/ffa/route-plan" />
    <div style={{ padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <span className="eyebrow">beat plan · monday</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>Indore North — 12 stops</div>
        </div>
        <span className="chip chip--accent"><Icon name="bolt" size={11} /> AI optimized · saved 38 km</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 16 }}>
        {/* Route list */}
        <div>
          {[
            { t: '9:30', c: 'Surya Pharma', loc: 'Vijay Nagar' },
            { t: '10:15', c: 'BlueWave Retail', loc: 'AB Road' },
            { t: '11:00', c: 'Patel Stores', loc: 'Geeta Bhawan' },
            { t: '12:30', c: 'Anand Mart', loc: 'Bhawarkua' },
            { t: '14:00', c: 'Nimbus Foods', loc: 'Rajwada' },
            { t: '15:30', c: 'Kavya Pharma', loc: 'Scheme 54' },
            { t: '17:00', c: 'Coastal Build', loc: 'Annapurna' },
          ].map((s,i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 10, padding: '8px 0', borderBottom: i < 6 ? '1px dashed var(--line)' : 'none' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--brand-700)', fontWeight: 700, paddingTop: 2 }}>{s.t}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{i+1}. {s.c}</div>
                <div style={{ fontSize: 10, color: 'var(--ink-500)' }}>📍 {s.loc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Mini map */}
        <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', background: 'linear-gradient(180deg,#f8fafc,#eef2ff)' }}>
          <svg viewBox="0 0 300 320" style={{ width: '100%', display: 'block' }}>
            <defs><pattern id="rpgrid" patternUnits="userSpaceOnUse" width="20" height="20"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1" /></pattern></defs>
            <rect width="300" height="320" fill="url(#rpgrid)" />
            <path d="M 60 40 L 100 70 L 80 130 L 150 170 L 200 140 L 230 220 L 180 280" stroke="#4f46e5" strokeWidth="2" fill="none" strokeDasharray="5 5" strokeLinecap="round" />
            {[[60,40],[100,70],[80,130],[150,170],[200,140],[230,220],[180,280]].map(([x,y],i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="11" fill="#4f46e5" />
                <text x={x} y={y+3} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">{i+1}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  </div>
);

// 8. MIS REPORT
const MISMock = () => (
  <div className="mock">
    <FBar url="app.primehr.in/ffa/mis" />
    <div style={{ padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <span className="eyebrow">mis report · week 17</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>Sales · West region</div>
        </div>
        <div className="tabs" style={{ fontSize: 11 }}>
          <button className="tab">Day</button>
          <button className="tab is-active">Week</button>
          <button className="tab">Month</button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 14 }}>
        {[
          { l: 'Visits', v: 384, d: '+12%', c: 'var(--accent-600)' },
          { l: 'Orders', v: 184, d: '+8%', c: 'var(--accent-600)' },
          { l: 'Revenue', v: '₹ 24.8L', d: '+18%', c: 'var(--accent-600)' },
          { l: 'Collection', v: '₹ 19.2L', d: '−4%', c: 'var(--rose-500)' },
        ].map((k,i) => (
          <div key={i} style={{ background: 'var(--ink-50)', padding: 12, borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.l}</div>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18 }}>{k.v}</div>
            <div style={{ fontSize: 11, color: k.c, fontWeight: 600 }}>{k.d} vs prev wk</div>
          </div>
        ))}
      </div>
      {/* Bar chart by rep */}
      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 10, padding: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Top reps · revenue</div>
        {[
          { n: 'Rahul S.', v: 92, amt: '4.8L' },
          { n: 'Meera K.', v: 78, amt: '4.1L' },
          { n: 'Karthik V.', v: 65, amt: '3.4L' },
          { n: 'Anish M.', v: 52, amt: '2.7L' },
          { n: 'Priya M.', v: 38, amt: '2.0L' },
        ].map((r,i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0' }}>
            <span style={{ fontSize: 12, width: 80 }}>{r.n}</span>
            <div style={{ flex: 1, height: 16, background: 'var(--ink-100)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${r.v}%`, background: 'linear-gradient(90deg, var(--brand-500), var(--accent-500))', borderRadius: 8, transition: 'width 1s' }} />
            </div>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, fontWeight: 700, width: 50, textAlign: 'right' }}>₹ {r.amt}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 9. COMPLAINT
const ComplaintMock = () => {
  const t = useTickFF(2400);
  const cols = [
    { name: 'Open', c: '#94a3b8', cards: [{ t: 'AC repair · Bhawarkua', urgent: true, sla: '2h', sla_color: '#f43f5e' }, { t: 'Demo · Surya Pharma', sla: '4h' }, { t: 'Order delivery · Super Corridor', sla: '6h' }] },
    { name: 'In progress', c: '#4f46e5', cards: [{ t: 'Site survey · Palasia', urgent: true, sla: '1h', sla_color: '#f43f5e' }, { t: 'Collection · Vijay Nagar', sla: '3h' }] },
    { name: 'Resolved', c: '#10b981', cards: [{ t: 'Service · Rau', sla: '✓' }, { t: 'Inspection · Pithampur', sla: '✓' }, { t: 'Demo · HQ', sla: '✓' }] },
  ];
  return (
    <div className="mock">
      <FBar url="app.primehr.in/ffa/complaints" />
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <div>
            <span className="eyebrow">complaint board · today</span>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18, marginTop: 6 }}>SLA-routed to nearest tech</div>
          </div>
          <span className="chip">94% resolved in SLA</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {cols.map((col,ci) => (
            <div key={col.name} style={{ background: 'var(--ink-50)', padding: 10, borderRadius: 10, minHeight: 230 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: col.c }} />{col.name}</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-500)' }}>{col.cards.length}</span>
              </div>
              {col.cards.map((c,ji) => (
                <div key={ji} style={{
                  background: '#fff', border: '1px solid var(--line)',
                  borderLeft: `3px solid ${c.urgent ? '#f43f5e' : col.c}`,
                  borderRadius: 6, padding: '8px 10px', fontSize: 12, marginBottom: 6,
                  transform: ci === 1 && ji === 0 && t % 3 === 0 ? 'translateX(3px)' : 'translateX(0)',
                  transition: 'transform 0.5s',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{c.t}</span>
                    <span style={{ fontSize: 10, fontFamily: 'var(--f-mono)', fontWeight: 700, color: c.sla_color || 'var(--ink-500)' }}>{c.sla}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { RoutesMock, FFAReimburseMock, FFAAttendanceMock, VisitsMock, CollectionMock, PartyMasterMock, RoutePlanMock, MISMock, ComplaintMock });
