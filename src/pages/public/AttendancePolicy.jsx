// src/pages/public/AttendancePolicy.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function AttendancePolicy() {
  return (
    // <DocsLayout type="public">
    <>
      <PageHeader
        eyebrow="Core Features"
        title="Attendance Policy"
        description="Attendance Policies define how grace periods and deductions are applied. Policies can be set at the company, branch, role, or individual employee level — the most specific one always applies."
      />

      <div className="wg-section">
        <h2>Policy Scope &amp; Priority</h2>
        <p>WorkGuard resolves which policy applies to an employee using this priority chain — the most specific match wins.</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">4</span><div><strong>Individual Employee</strong> — highest priority, overrides everything</div></li>
          <li><span className="wg-priority-num">3</span><div><strong>Role</strong> — applies to all Staff or all Admins</div></li>
          <li><span className="wg-priority-num">2</span><div><strong>Branch</strong> — applies to all employees at a specific branch</div></li>
          <li><span className="wg-priority-num">1</span><div><strong>Company-wide</strong> — the default fallback</div></li>
        </ul>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Employees assigned to <strong>multiple branches</strong> are not subject to branch-level policies. Company-wide, role, or individual policies apply instead.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Grace Periods</h2>
        <p>Grace periods give employees a buffer before deductions start.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td>Late grace (minutes)</td><td>Arriving within this window is not deducted</td></tr>
              <tr><td>Early leave grace (minutes)</td><td>Leaving this many minutes early before shift end is not deducted</td></tr>
              <tr><td>Daily break allowance (minutes)</td><td>Total break time per day that is not deducted</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Attendance Deductions</h2>
        <p>WorkGuard automatically calculates attendance deductions according to your organization's active attendance policies. Organizations can configure deduction rules for late arrivals, early departures, absence, excess break time, and inter-branch transit time.</p>
        <p>All deduction calculations are applied automatically and reflected in payroll reports.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Absence Settings</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>What It Controls</th></tr></thead>
            <tbody>
              <tr><td>Deduct from salary</td><td>Whether absence days reduce monthly pay</td></tr>
              <tr><td>Paid absence</td><td>If enabled, absence is considered paid — no deduction</td></tr>
              <tr><td>Day rate</td><td>How much of a daily salary to deduct per absent day (0 to 1, where 1 = full day)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Policy Date Range</h2>
        <p>Each policy has a start date and an optional end date. Two policies of the same scope cannot have overlapping date ranges — the system prevents this automatically.</p>
        <p>Attendance policies can be activated, updated, or replaced over time. WorkGuard automatically ensures the correct policy is applied. Historical records remain accurate even when policies change.</p>
      </div>
    {/* </DocsLayout> */}</>
  )
}