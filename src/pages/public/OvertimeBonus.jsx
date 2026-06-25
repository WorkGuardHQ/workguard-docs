// src/pages/public/OvertimeBonus.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function OvertimeBonus() {
  return (
    <>
      <PageHeader
        eyebrow="Payroll & Compliance"
        title="Overtime & Bonus"
        description="WorkGuard automatically tracks and calculates overtime and bonus pay based on the policies you configure. Policies can apply company-wide, per branch, department, role, or for a specific employee."
      />

      <div className="wg-section">
        <h2>Overtime Types</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Type</th><th>When It Applies</th></tr></thead>
            <tbody>
              <tr><td>Before Shift</td><td>Employee arrived earlier than their shift start</td></tr>
              <tr><td>After Shift (Day)</td><td>Employee stayed late during daytime hours</td></tr>
              <tr><td>After Shift (Night)</td><td>Employee stayed late during nighttime hours</td></tr>
              <tr><td>Public Holiday</td><td>Employee worked on a declared holiday</td></tr>
              <tr><td>Day Off</td><td>Employee worked on their scheduled day off</td></tr>
              <tr><td>Exceptional</td><td>Manually added one-time by an admin</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Configuring Overtime Rules</h2>
        <p>Each overtime type can be individually configured.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Option</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Enable / Disable</td><td>Turn this overtime type on or off</td></tr>
              <tr><td>Minimum minutes</td><td>Minimum overtime needed before it counts (e.g. only count if &gt; 15 min)</td></tr>
              <tr><td>Maximum hours</td><td>Cap on how much overtime counts for this type</td></tr>
              <tr><td>Calculation method</td><td><strong>Multiplier</strong> (based on salary) or <strong>Fixed rate</strong> (flat per hour)</td></tr>
              <tr><td>Multiplier</td><td><code>1.25</code> = 25% premium · <code>1.5</code> = 50% bonus · <code>2.0</code> = double pay</td></tr>
              <tr><td>Fixed rate per hour</td><td>A flat amount per overtime hour regardless of salary</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Calculation Examples</h3>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>
            <strong>Multiplier method:</strong> Employee earns 50 EGP/hour, works 2 hours OT at 1.5× rate → <strong>150 EGP</strong>
            <br /><br />
            <strong>Fixed rate method:</strong> Fixed rate = 80 EGP/hour, 2 hours OT → <strong>160 EGP</strong>
          </div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Monthly Overtime Cap</h2>
        <p>You can set a maximum number of paid overtime hours per month. Any overtime beyond the cap is still tracked but payment is adjusted proportionally across all entries.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Exceptional (manually added) overtime is always paid in full and is never reduced by the cap.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Bonus Policy</h2>
        <p>WorkGuard supports three bonus types, all following the same scope and priority structure as overtime policies.</p>

        <h3>Attendance Bonus</h3>
        <p>Awarded when an employee meets all configured monthly conditions — maximum absence days, late days, total late minutes, and unpaid leave days. Can be paid as a fixed amount or a percentage of base salary.</p>

        <h3>Fixed Monthly Bonus</h3>
        <p>A recurring monthly bonus. Can be set to pay <strong>always</strong> (every month regardless of attendance) or only for <strong>active employees</strong> (zero unpaid leave days that month).</p>

        <h3>Exceptional Bonus</h3>
        <p>A one-time, manually entered bonus added by an admin. Always paid in full — never subject to the monthly overtime cap.</p>
      </div>
    </>
  )
}