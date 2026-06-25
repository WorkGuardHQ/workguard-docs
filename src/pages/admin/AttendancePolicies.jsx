// src/pages/admin/AttendancePolicies.jsx

import PageHeader from '../../components/PageHeader'

export default function AttendancePolicies() {
  return (
    <>
      <PageHeader
        eyebrow="Attendance"
        title="Attendance Policies"
        description="Configure grace periods and deduction rates that govern how attendance is evaluated. Policies can be scoped to the company, a branch, a role, or a specific employee."
      />

      <div className="wg-section">
        <h2>Policy Scope &amp; Priority</h2>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">4</span><div><strong>Individual Employee</strong> — highest priority</div></li>
          <li><span className="wg-priority-num">3</span><div><strong>Role</strong> — applies to all Staff or all Admins</div></li>
          <li><span className="wg-priority-num">2</span><div><strong>Branch</strong> — applies to all employees at a specific branch</div></li>
          <li><span className="wg-priority-num">1</span><div><strong>Company-wide</strong> — default fallback</div></li>
        </ul>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Employees assigned to <strong>multiple branches</strong> are not subject to branch-level policies. Only company-wide, role, or individual policies apply to them.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Grace Periods</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>What It Controls</th></tr></thead>
            <tbody>
              <tr><td>Late grace period</td><td>Minutes late before any deduction starts</td></tr>
              <tr><td>Early leave grace period</td><td>Minutes before shift end that departure is considered on-time</td></tr>
              <tr><td>Daily break allowance</td><td>Total daily break time before deductions start</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Deduction Rates</h2>
        <p>Deduction rates control how much salary is deducted per minute of late arrival, early departure, transit time, or excess break time.</p>
        <div className="wg-callout wg-callout--danger">
          <span className="wg-callout__icon">🚨</span>
          <div><strong>Rates are entered as decimal fractions.</strong> To set a 2% deduction rate, enter <code>0.02</code>. Never enter <code>2</code> — this would apply an extreme deduction and cause serious payroll errors.</div>
        </div>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Rate</th><th>Example Value</th><th>What It Deducts</th></tr></thead>
            <tbody>
              <tr><td>Late arrival rate</td><td><code>0.02</code></td><td>Per minute of late arrival</td></tr>
              <tr><td>Early departure rate</td><td><code>0.02</code></td><td>Per minute of early departure</td></tr>
              <tr><td>Transit rate</td><td><code>0.01</code></td><td>Per minute of excess travel between branches</td></tr>
              <tr><td>Break/gap rate</td><td><code>0.01</code></td><td>Per minute of excess break time</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Absence Settings</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>What It Controls</th></tr></thead>
            <tbody>
              <tr><td>Deduct from salary</td><td>Whether absence days reduce the employee's monthly pay</td></tr>
              <tr><td>Paid absence</td><td>If enabled, absence is considered paid — no salary deduction</td></tr>
              <tr><td>Day rate</td><td>How much of a daily salary to deduct per absent day (0 to 1, where 1 = full day)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Policy Date Range</h2>
        <p>Each policy has a start date and an optional end date. Two policies of the same scope cannot have overlapping date ranges — the system prevents this automatically. Historical records remain accurate even when policies change, because each day stores a snapshot of the exact policy that applied.</p>
      </div>
    </>
  )
}