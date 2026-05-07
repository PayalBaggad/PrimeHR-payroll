// =============================================================
// FINANCE FEATURE GRAPHICS
// =============================================================

const useTickF = (interval = 1800) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setT(x => x + 1), interval); return () => clearInterval(id); }, [interval]);
  return t;
};

// ============== INVOICE BUILDER ==============
const InvoiceMock = () => (
  <div className="mock">
    <div className="mock-bar">
      <span className="dot" style={{ background: '#ff5f56' }} /><span className="dot" style={{ background: '#ffbd2e' }} /><span className="dot" style={{ background: '#27c93f' }} />
      <span style={{ flex: 1, textAlign: 'center' }}>app.primehr.in/invoices/new</span>
    </div>
    <div style={{ padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 22, color: 'var(--brand-700)' }}>INVOICE</div>
          <div style={{ fontSize: 11, color: 'var(--ink-500)', fontFamily: 'var(--f-mono)' }}>WH-2026-0481 · IRN ✓</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span className="chip">USD</span>
          <span className="chip chip--accent"><span className="chip-dot" />Sent</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16, fontSize: 12 }}>
        <div>
          <div style={{ color: 'var(--ink-500)', textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.06em', marginBottom: 4 }}>Bill to</div>
          <div style={{ fontWeight: 700 }}>Surya Pharma Pvt Ltd</div>
          <div style={{ color: 'var(--ink-500)' }}>GSTIN 27AABCS1234A1Z5</div>
          <div style={{ color: 'var(--ink-500)' }}>Indore, Madhya Pradesh</div>
        </div>
        <div>
          <div style={{ color: 'var(--ink-500)', textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.06em', marginBottom: 4 }}>Issued / Due</div>
          <div>30 Apr 2026</div>
          <div style={{ color: 'var(--ink-500)' }}>30 May 2026 · Net-30</div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        {[
          { d: 'PrimeHR Growth · 80 emp × 12 mo', q: 80, r: 1068, a: 854400 },
          { d: 'FFA module · 25 field staff',      q: 25, r: 6000, a: 150000 },
          { d: 'Tally premium connector',          q: 1,  r: 24000, a: 24000 },
        ].map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.7fr 0.4fr 0.6fr 0.7fr', gap: 8, padding: '10px 0', fontSize: 12, borderTop: i > 0 ? '1px dashed var(--line)' : 'none' }}>
            <span>{r.d}</span>
            <span style={{ fontFamily: 'var(--f-mono)', textAlign: 'center' }}>{r.q}</span>
            <span style={{ fontFamily: 'var(--f-mono)', textAlign: 'right' }}>₹ {r.r.toLocaleString('en-IN')}</span>
            <span style={{ fontFamily: 'var(--f-mono)', textAlign: 'right', fontWeight: 700 }}>₹ {r.a.toLocaleString('en-IN')}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        {[['Subtotal', '10,28,400'], ['CGST 9%', '92,556'], ['SGST 9%', '92,556']].map(([k,v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-600)', padding: '3px 0' }}><span>{k}</span><span style={{ fontFamily: 'var(--f-mono)' }}>₹ {v}</span></div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '2px solid var(--ink-900)', marginTop: 6 }}>
          <span style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 15 }}>Total</span>
          <span style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 18, color: 'var(--brand-700)' }}>₹ 12,13,512</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
        <span className="chip"><Icon name="plug" size={11} /> Tally synced</span>
        <span className="chip"><Icon name="doc" size={11} /> e-Invoice IRN</span>
        <span className="chip chip--accent"><Icon name="zap" size={11} /> Razorpay link</span>
      </div>
    </div>
  </div>
);

// ============== BANK STATEMENT UPLOAD ==============
const BankStatementMock = () => {
  const t = useTickF(1400);
  const stages = ['Uploading', 'Parsing', 'Categorizing', 'Ready'];
  const stage = Math.min(3, t % 5);
  return (
    <div className="mock">
      <div className="mock-bar"><span className="dot" style={{ background: '#ff5f56' }} /><span className="dot" style={{ background: '#ffbd2e' }} /><span className="dot" style={{ background: '#27c93f' }} /><span style={{ flex: 1, textAlign: 'center' }}>app.primehr.in/banking/import</span></div>
      <div style={{ padding: 22 }}>
        <span className="eyebrow">bank statement upload</span>
        <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6, marginBottom: 16 }}>HDFC · April 2026.pdf</div>
        {/* Drop zone */}
        <div style={{ border: '2px dashed var(--brand-200)', borderRadius: 10, padding: 18, background: 'var(--brand-50)', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <span style={{ width: 44, height: 44, borderRadius: 10, background: '#fff', display: 'grid', placeItems: 'center', color: 'var(--brand-600)', fontSize: 20 }}>📄</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>HDFC_Statement_Apr2026.pdf</div>
            <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>2.4 MB · 184 transactions detected</div>
            <div style={{ marginTop: 6, height: 4, background: 'var(--ink-100)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${((stage + 1) / 4) * 100}%`, background: 'linear-gradient(90deg, var(--brand-500), var(--accent-500))', transition: 'width 0.5s' }} />
            </div>
          </div>
          <span className="chip chip--accent">{stages[stage]}…</span>
        </div>
        {/* Parsed transactions */}
        <div style={{ border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.6fr 0.8fr 0.7fr', padding: '8px 14px', background: 'var(--ink-50)', fontSize: 10, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <span>Date</span><span>Description</span><span>Category</span><span style={{ textAlign: 'right' }}>Amount</span>
          </div>
          {[
            { d: '28 Apr', desc: 'NEFT-SURYAPHA-INV0481', cat: 'Sales · Receipt', amt: 1213512, sign: '+' },
            { d: '27 Apr', desc: 'UPI-AWS-MAR-INFRA',     cat: 'Cloud · Hosting', amt: 84500, sign: '−' },
            { d: '26 Apr', desc: 'IMPS-PAYROLL-APR-BAT1', cat: 'Payroll',         amt: 1842300, sign: '−' },
            { d: '25 Apr', desc: 'CHQ-RAJ-OFFICE-RENT',   cat: 'Rent · Office',   amt: 95000, sign: '−' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.6fr 0.8fr 0.7fr', padding: '10px 14px', fontSize: 12, borderTop: '1px solid var(--line)', alignItems: 'center', opacity: stage >= 2 ? 1 : 0.4, transition: 'opacity 0.5s' }}>
              <span style={{ fontFamily: 'var(--f-mono)' }}>{r.d}</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11 }}>{r.desc}</span>
              <span><span className="chip" style={{ fontSize: 10, padding: '2px 6px' }}>{r.cat}</span></span>
              <span style={{ fontFamily: 'var(--f-mono)', textAlign: 'right', fontWeight: 700, color: r.sign === '+' ? 'var(--accent-600)' : 'var(--ink-700)' }}>{r.sign} ₹ {r.amt.toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============== EXPENSE & PAYMENT ==============
const ExpensePaymentMock = () => (
  <div className="mock">
    <div className="mock-bar"><span className="dot" style={{ background: '#ff5f56' }} /><span className="dot" style={{ background: '#ffbd2e' }} /><span className="dot" style={{ background: '#27c93f' }} /><span style={{ flex: 1, textAlign: 'center' }}>app.primehr.in/payments/queue</span></div>
    <div style={{ padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div>
          <span className="eyebrow">payment queue · friday batch</span>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>₹ 4,18,560 ready to pay</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span className="chip">8 vendors</span>
          <span className="chip chip--accent">All approved</span>
        </div>
      </div>
      {[
        { v: 'AWS India', cat: 'Cloud', amt: 84500, due: 'Apr 30', mode: 'NEFT' },
        { v: 'Indrajit Realty (Rent)', cat: 'Office', amt: 95000, due: 'May 1', mode: 'Cheque' },
        { v: 'Tally Solutions', cat: 'Software', amt: 24000, due: 'May 1', mode: 'UPI' },
        { v: 'Naukri.com', cat: 'Recruitment', amt: 48000, due: 'May 2', mode: 'NEFT' },
      ].map((p, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1.6fr 1fr 0.8fr 0.7fr', gap: 12, alignItems: 'center', padding: '12px 14px', border: '1px solid var(--line)', borderRadius: 8, marginBottom: 6 }}>
          <span style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--brand-50)', color: 'var(--brand-700)', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14 }}>{p.v[0]}</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{p.v}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>{p.cat} · Due {p.due}</div>
          </div>
          <span style={{ fontFamily: 'var(--f-mono)', fontSize: 14, fontWeight: 700 }}>₹ {p.amt.toLocaleString('en-IN')}</span>
          <span className="chip">{p.mode}</span>
          <button style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid var(--brand-600)', background: 'var(--brand-600)', color: '#fff', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Pay now</button>
        </div>
      ))}
    </div>
  </div>
);

// ============== RECONCILIATION ==============
const ReconciliationMock = () => {
  const t = useTickF(1500);
  return (
    <div className="mock">
      <div className="mock-bar"><span className="dot" style={{ background: '#ff5f56' }} /><span className="dot" style={{ background: '#ffbd2e' }} /><span className="dot" style={{ background: '#27c93f' }} /><span style={{ flex: 1, textAlign: 'center' }}>app.primehr.in/reconcile</span></div>
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <div>
            <span className="eyebrow">reconciliation · auto-match</span>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginTop: 6 }}>184 of 188 matched (97.8%)</div>
          </div>
          <span className="chip chip--accent"><Icon name="bolt" size={11} /> AI matched</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: 0, alignItems: 'stretch' }}>
          {/* Bank side */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', marginBottom: 8 }}>Bank statement</div>
            {[
              { d: 'NEFT-SURYAPHA-INV0481', amt: 1213512 },
              { d: 'IMPS-PAYROLL-APR',      amt: 1842300 },
              { d: 'UPI-AWS-MAR',           amt: 84500 },
            ].map((b, i) => (
              <div key={i} style={{ padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, marginBottom: 6, fontSize: 12, borderColor: t % 3 === i ? 'var(--accent-500)' : 'var(--line)', background: t % 3 === i ? '#f0fdf4' : '#fff', transition: 'all 0.4s' }}>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11 }}>{b.d}</div>
                <div style={{ fontFamily: 'var(--f-mono)', fontWeight: 700 }}>₹ {b.amt.toLocaleString('en-IN')}</div>
              </div>
            ))}
          </div>
          {/* Connector */}
          <div style={{ display: 'grid', placeItems: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', paddingTop: 30 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: t % 3 === i ? 'var(--accent-500)' : 'var(--ink-200)',
                  color: '#fff', display: 'grid', placeItems: 'center',
                  transition: 'all 0.4s',
                  boxShadow: t % 3 === i ? '0 0 0 4px rgba(16,185,129,0.2)' : 'none',
                }}>
                  <Icon name="check" size={12} />
                </span>
              ))}
            </div>
          </div>
          {/* Ledger side */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-500)', textTransform: 'uppercase', marginBottom: 8 }}>PrimeHR ledger</div>
            {[
              { d: 'Invoice #WH-0481 · Surya Pharma', amt: 1213512 },
              { d: 'Payroll Run · Apr 2026',          amt: 1842300 },
              { d: 'AWS · Cloud hosting · Mar',        amt: 84500 },
            ].map((b, i) => (
              <div key={i} style={{ padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, marginBottom: 6, fontSize: 12, borderColor: t % 3 === i ? 'var(--accent-500)' : 'var(--line)', background: t % 3 === i ? '#f0fdf4' : '#fff', transition: 'all 0.4s' }}>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11 }}>{b.d}</div>
                <div style={{ fontFamily: 'var(--f-mono)', fontWeight: 700 }}>₹ {b.amt.toLocaleString('en-IN')}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 14, padding: '10px 14px', background: '#fef3c7', borderRadius: 8, fontSize: 12, color: '#92400e' }}>
          ⚠️ 4 transactions need manual review — possible duplicate entries.
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { InvoiceMock, BankStatementMock, ExpensePaymentMock, ReconciliationMock });
