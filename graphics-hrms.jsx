// =============================================================
// FEATURE GRAPHICS — one detailed animated mock per feature.
// Each component renders inside a "mock" frame with realistic UI.
// =============================================================

// ---------- Helpers ----------
const useTick = (interval = 1800) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setT(x => x + 1), interval); return () => clearInterval(id); }, [interval]);
  return t;
};
const MockBar = ({ url }) => (
  <div className="mock-bar">
    <span className="dot" style={{ background: '#ff5f56' }} />
    <span className="dot" style={{ background: '#ffbd2e' }} />
    <span className="dot" style={{ background: '#27c93f' }} />
    <span style={{ flex: 1, textAlign: 'center' }}>{url}</span>
  </div>
);
const Avatar = ({ s, color = 'var(--brand-500)', size = 28 }) => (
  <span style={{ width: size, height: size, borderRadius: '50%', background: color, color: '#fff', display: 'inline-grid', placeItems: 'center', fontWeight: 700, fontSize: size * 0.4, flexShrink: 0 }}>{s}</span>
);

// ============== HRMS · PAYROLL ==============
const PayrollMock = () => {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setStep(s => (s + 1) % 5), 1400); return () => clearInterval(id); }, []);
  const stages = ['Sync attendance', 'Calculate gross', 'Apply deductions', 'Generate payslips', 'Disburse'];
  return (
    <div className="mock">
      <MockBar url="app.primehr.in/payroll/april-2026" />
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div>
            <span className="eyebrow">payroll run · april 2026</span>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22, marginTop: 6 }}>148 employees · ₹ 28,42,500</div>
          </div>
          <span className="chip chip--accent"><span className="chip-dot" />Auto-running</span>
        </div>
        {/* Pipeline */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
          {stages.map((s, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div style={{ height: 6, borderRadius: 3, background: i <= step ? 'var(--accent-500)' : 'var(--ink-100)', transition: 'all 0.4s' }} />
              <div style={{ fontSize: 10, color: i === step ? 'var(--ink-900)' : 'var(--ink-500)', marginTop: 6, fontWeight: i === step ? 700 : 500 }}>{s}</div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div style={{ border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', padding: '10px 14px', background: 'var(--ink-50)', fontSize: 11, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <span>Employee</span><span>Gross</span><span>PF</span><span>TDS</span><span style={{ textAlign: 'right' }}>Net</span>
          </div>
          {[
            { n: 'Priya S.', c: 'var(--brand-500)', g: 75500, pf: 5400, tds: 3850 },
            { n: 'Rahul K.', c: 'var(--accent-500)', g: 64200, pf: 4600, tds: 2900 },
            { n: 'Meera J.', c: 'var(--warn-500)', g: 58000, pf: 4200, tds: 2400 },
            { n: 'Anish M.', c: 'var(--rose-500)', g: 92000, pf: 6500, tds: 6800 },
          ].map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', padding: '12px 14px', alignItems: 'center', fontSize: 13, borderTop: '1px solid var(--line)', background: step >= 3 ? '#f0fdf4' : '#fff', transition: 'background 0.4s' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Avatar s={r.n.split(' ').map(x => x[0]).join('')} color={r.c} size={22} /> {r.n}</span>
              <span style={{ fontFamily: 'var(--f-mono)' }}>{r.g.toLocaleString('en-IN')}</span>
              <span style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink-500)' }}>−{r.pf}</span>
              <span style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink-500)' }}>−{r.tds}</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 700, textAlign: 'right' }}>{(r.g - r.pf - r.tds).toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span className="chip"><Icon name="check" size={11} /> PF challan ready</span>
          <span className="chip"><Icon name="check" size={11} /> TDS Form 24Q</span>
          <span className="chip chip--accent"><Icon name="bolt" size={11} /> Tally synced</span>
        </div>
      </div>
    </div>
  );
};

// ============== HRMS · ATTENDANCE ==============
const AttendanceMock = () => {
  const t = useTick(2000);
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <div className="mock">
      <MockBar url="app.primehr.in/attendance" />
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div>
            <span className="eyebrow">attendance · this week</span>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>96.4% on-time rate</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span className="chip chip--accent"><span className="chip-dot" />142 in</span>
            <span className="chip">6 leave</span>
          </div>
        </div>
        {/* Calendar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, marginBottom: 18 }}>
          {Array.from({ length: 28 }).map((_, i) => {
            const status = [0, 6, 13, 20, 27].includes(i) ? 'off' : i === 24 ? 'leave' : i < 22 ? 'present' : 'future';
            const colors = { present: '#10b981', off: '#cbd5e1', leave: '#f59e0b', future: '#e2e8f0' };
            return (
              <div key={i} style={{
                aspectRatio: 1, borderRadius: 6,
                background: colors[status],
                opacity: status === 'future' ? 0.4 : 1,
                transform: i === (t * 3) % 28 && status === 'present' ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s',
                display: 'grid', placeItems: 'center',
                color: '#fff', fontSize: 10, fontWeight: 600,
              }}>{i + 1}</div>
            );
          })}
        </div>
        {/* Live clock-in feed */}
        <div style={{ background: 'var(--ink-50)', borderRadius: 10, padding: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Live clock-ins</div>
          {[
            { n: 'Rahul S.', loc: 'Vijay Nagar HQ · geo-fence ✓', t: '9:12 am', c: 'var(--accent-500)' },
            { n: 'Priya M.', loc: 'WFH · selfie ✓', t: '9:08 am', c: 'var(--brand-500)' },
            { n: 'Karthik V.', loc: 'Pithampur branch · IP ✓', t: '9:01 am', c: 'var(--warn-500)' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 0', borderBottom: i < 2 ? '1px solid var(--line)' : 'none' }}>
              <Avatar s={r.n.split(' ').map(x => x[0]).join('')} color={r.c} size={26} />
              <div style={{ flex: 1, fontSize: 13 }}><b>{r.n}</b><div style={{ fontSize: 11, color: 'var(--ink-500)' }}>{r.loc}</div></div>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-500)' }}>{r.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============== HRMS · LEAVE ==============
const LeaveMock = () => {
  const t = useTick(1800);
  return (
    <div className="mock">
      <MockBar url="app.primehr.in/leave" />
      <div style={{ padding: 22 }}>
        <span className="eyebrow">leave management</span>
        <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6, marginBottom: 16 }}>Priya's balance</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 18 }}>
          {[
            { l: 'Casual', used: 4, total: 12, c: '#10b981' },
            { l: 'Sick', used: 2, total: 8, c: '#f59e0b' },
            { l: 'Earned', used: 6, total: 21, c: '#4f46e5' },
            { l: 'Comp-off', used: 1, total: 4, c: '#f43f5e' },
          ].map((b, i) => {
            const pct = (b.used / b.total) * 100;
            const r = 22, c = 2 * Math.PI * r;
            return (
              <div key={i} style={{ background: 'var(--ink-50)', borderRadius: 10, padding: 12, textAlign: 'center' }}>
                <svg width="60" height="60" viewBox="0 0 60 60" style={{ display: 'block', margin: '0 auto' }}>
                  <circle cx="30" cy="30" r={r} stroke="var(--ink-100)" strokeWidth="5" fill="none" />
                  <circle cx="30" cy="30" r={r} stroke={b.c} strokeWidth="5" fill="none" strokeLinecap="round"
                    strokeDasharray={c} strokeDashoffset={c - (c * pct / 100)}
                    transform="rotate(-90 30 30)" style={{ transition: 'stroke-dashoffset 1s' }} />
                  <text x="30" y="34" textAnchor="middle" fontFamily="var(--f-display)" fontWeight="700" fontSize="13" fill="var(--ink-900)">{b.total - b.used}</text>
                </svg>
                <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6 }}>{b.l}</div>
                <div style={{ fontSize: 10, color: 'var(--ink-500)' }}>{b.used} of {b.total} used</div>
              </div>
            );
          })}
        </div>
        {/* Pending requests */}
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Pending approvals</div>
        {[
          { n: 'Anish M.', reason: 'Casual · 2 days · Wedding', d: 'Apr 24–25', s: 'pending' },
          { n: 'Meera J.', reason: 'Sick · 1 day', d: 'Apr 30', s: 'approved' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, marginBottom: 6, background: r.s === 'approved' && t % 2 === 1 ? '#f0fdf4' : '#fff', transition: 'background 0.5s' }}>
            <Avatar s={r.n.split(' ').map(x => x[0]).join('')} size={28} />
            <div style={{ flex: 1, fontSize: 13 }}><b>{r.n}</b> <span style={{ color: 'var(--ink-600)' }}>· {r.reason}</span><div style={{ fontSize: 11, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>{r.d}</div></div>
            {r.s === 'pending'
              ? <div style={{ display: 'flex', gap: 4 }}><button style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid var(--accent-500)', color: 'var(--accent-600)', background: '#fff', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Approve</button></div>
              : <span className="chip chip--accent"><Icon name="check" size={11} /> Approved</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

// ============== HRMS · REIMBURSEMENT ==============
const ReimbursementMock = () => (
  <div className="mock">
    <MockBar url="app.primehr.in/reimbursement" />
    <div style={{ padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
        <div>
          <span className="eyebrow">reimbursement claims</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>₹ 48,250 pending</div>
        </div>
        <span className="chip">12 to review</span>
      </div>
      {[
        { who: 'Rahul', cat: 'Travel', amt: 12400, item: 'Indore → Bhopal client visit', date: 'Apr 28', icon: '✈️' },
        { who: 'Meera', cat: 'Meals', amt: 2400, item: 'Team dinner with client', date: 'Apr 26', icon: '🍽️' },
        { who: 'Anish', cat: 'Telecom', amt: 1200, item: 'Mobile bill · April', date: 'Apr 25', icon: '📱' },
        { who: 'Priya', cat: 'Office supplies', amt: 850, item: 'Stationery for offsite', date: 'Apr 24', icon: '📦' },
      ].map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr auto auto', gap: 12, alignItems: 'center', padding: '12px 14px', border: '1px solid var(--line)', borderRadius: 10, marginBottom: 6 }}>
          <span style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--brand-50)', display: 'grid', placeItems: 'center', fontSize: 18 }}>{r.icon}</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{r.who} · {r.cat}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>{r.item} · {r.date}</div>
          </div>
          <span style={{ fontFamily: 'var(--f-mono)', fontSize: 14, fontWeight: 700 }}>₹ {r.amt.toLocaleString('en-IN')}</span>
          <span style={{ fontSize: 11, color: 'var(--accent-600)', display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="doc" size={12} /> receipt</span>
        </div>
      ))}
      <div style={{ marginTop: 14, padding: '12px 16px', background: 'linear-gradient(135deg, var(--accent-500), var(--accent-600))', color: '#fff', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 600 }}>Approve all 4 above (₹ 16,850)</span>
        <button style={{ padding: '6px 14px', borderRadius: 6, border: 'none', background: '#fff', color: 'var(--accent-600)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Approve & pay</button>
      </div>
    </div>
  </div>
);

// ============== HRMS · ASSETS ==============
const AssetsMock = () => (
  <div className="mock">
    <MockBar url="app.primehr.in/assets" />
    <div style={{ padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div>
          <span className="eyebrow">company assets</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>284 items tracked</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span className="chip">261 allocated</span>
          <span className="chip chip--accent">23 in stock</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 14 }}>
        {[
          { i: '💻', l: 'Laptops', n: 142, c: '#4f46e5' },
          { i: '📱', l: 'Phones', n: 86, c: '#10b981' },
          { i: '🖥️', l: 'Monitors', n: 38, c: '#f59e0b' },
          { i: '🚗', l: 'Vehicles', n: 18, c: '#f43f5e' },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--ink-50)', borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 22 }}>{c.i}</div>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22, marginTop: 4, color: c.c }}>{c.n}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>{c.l}</div>
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', padding: '10px 14px', background: 'var(--ink-50)', fontSize: 11, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          <span>Asset</span><span>Serial</span><span>Assigned to</span><span>Status</span>
        </div>
        {[
          { a: 'MacBook Pro 14"', s: 'C02XK9...', who: 'Priya S.', st: 'In use', c: '#10b981' },
          { a: 'Dell Latitude 5420', s: 'DL5420...', who: 'Rahul K.', st: 'In use', c: '#10b981' },
          { a: 'iPhone 14', s: 'IMEI 358...', who: 'Anish M.', st: 'In use', c: '#10b981' },
          { a: 'ThinkPad X1', s: 'PF2X8...', who: '—', st: 'In stock', c: '#94a3b8' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', padding: '10px 14px', fontSize: 13, borderTop: '1px solid var(--line)', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>{r.a}</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-500)' }}>{r.s}</span>
            <span>{r.who}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: r.c }} />{r.st}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============== HRMS · TASKS ==============
const TasksMock = () => {
  const t = useTick(2200);
  const tasks = [
    { t: 'Send offer letter to Rahul', who: 'Priya', due: 'Today', done: t > 0 },
    { t: 'Run PF challan for April', who: 'Anish', due: 'Apr 30', done: t > 1 },
    { t: 'Schedule 1:1 with Meera', who: 'Karthik', due: 'May 2', done: false },
    { t: 'Approve 4 expense claims', who: 'You', due: 'Apr 29', done: false, urgent: true },
    { t: 'Onboard 3 new joiners', who: 'HR Team', due: 'May 5', done: false },
  ];
  return (
    <div className="mock">
      <MockBar url="app.primehr.in/tasks" />
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <div>
            <span className="eyebrow">my todos · today</span>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>{tasks.filter(x => !x.done).length} open · {tasks.filter(x => x.done).length} done</div>
          </div>
          <span className="chip chip--accent">+ Add task</span>
        </div>
        {tasks.map((task, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', border: '1px solid var(--line)', borderRadius: 8, marginBottom: 6, background: task.done ? 'var(--ink-50)' : '#fff' }}>
            <span style={{
              width: 20, height: 20, borderRadius: 6,
              border: `2px solid ${task.done ? 'var(--accent-500)' : 'var(--ink-300)'}`,
              background: task.done ? 'var(--accent-500)' : 'transparent',
              display: 'grid', placeItems: 'center', flexShrink: 0,
              transition: 'all 0.4s',
            }}>
              {task.done && <Icon name="check" size={12} style={{ color: '#fff' }} />}
            </span>
            <div style={{ flex: 1, fontSize: 13, textDecoration: task.done ? 'line-through' : 'none', color: task.done ? 'var(--ink-500)' : 'var(--ink-900)' }}>
              {task.t}
              {task.urgent && <span className="chip" style={{ marginLeft: 8, background: '#fef2f2', color: '#b91c1c', borderColor: '#fecaca' }}>Urgent</span>}
            </div>
            <span style={{ fontSize: 11, color: 'var(--ink-500)' }}>{task.who}</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-500)', minWidth: 50, textAlign: 'right' }}>{task.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============== HRMS · LETTERS ==============
const LettersMock = () => (
  <div className="mock">
    <MockBar url="app.primehr.in/letters/generate" />
    <div style={{ padding: 22, display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 18 }}>
      <div>
        <span className="eyebrow">letter type</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
          {[
            { n: 'Offer Letter', icon: '📨', active: true },
            { n: 'Appointment Letter', icon: '✍️' },
            { n: 'Appraisal Letter', icon: '📈' },
            { n: 'Experience Letter', icon: '🎓' },
            { n: 'Relieving Letter', icon: '🚪' },
            { n: 'Salary Hike Letter', icon: '💰' },
          ].map((l, i) => (
            <div key={i} style={{ padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 13, fontWeight: 500, display: 'flex', gap: 10, alignItems: 'center', background: l.active ? 'var(--brand-50)' : '#fff', borderColor: l.active ? 'var(--brand-200)' : 'var(--line)', color: l.active ? 'var(--brand-700)' : 'var(--ink-700)' }}>
              <span>{l.icon}</span>{l.n}
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 10, padding: 18, fontSize: 11, lineHeight: 1.7, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 6 }}>
          <span className="chip chip--accent"><Icon name="bolt" size={10} /> auto-filled</span>
        </div>
        <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 13, color: 'var(--brand-700)', marginBottom: 4 }}>Prime HR</div>
        <div style={{ color: 'var(--ink-500)', fontSize: 9, marginBottom: 14 }}>Gopur Square, Indore 452009 · CIN U72200MP2023PTC</div>
        <div style={{ marginBottom: 6 }}>30 April 2026</div>
        <div style={{ marginBottom: 6 }}>Dear <span style={{ background: '#fef3c7', padding: '0 4px' }}>Rahul Sharma</span>,</div>
        <div style={{ marginBottom: 6 }}>We are pleased to offer you the position of <span style={{ background: '#fef3c7', padding: '0 4px' }}>Senior Sales Lead</span> at our <span style={{ background: '#fef3c7', padding: '0 4px' }}>Indore</span> office.</div>
        <div style={{ marginBottom: 6 }}>Your CTC will be <span style={{ background: '#fef3c7', padding: '0 4px' }}>₹ 12,00,000</span> per annum, with a joining date of <span style={{ background: '#fef3c7', padding: '0 4px' }}>15 May 2026</span>.</div>
        <div style={{ marginTop: 14, color: 'var(--ink-500)' }}>This offer is subject to background verification...</div>
        <div style={{ marginTop: 18, paddingTop: 12, borderTop: '1px dashed var(--line)', color: 'var(--ink-500)' }}>Sincerely,<br /><b style={{ color: 'var(--ink-900)' }}>HR Team</b></div>
      </div>
    </div>
  </div>
);

Object.assign(window, { PayrollMock, AttendanceMock, LeaveMock, ReimbursementMock, AssetsMock, TasksMock, LettersMock });
