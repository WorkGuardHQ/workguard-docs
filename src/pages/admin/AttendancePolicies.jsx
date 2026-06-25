// // src/pages/admin/AttendancePolicies.jsx

// import PageHeader from '../../components/PageHeader'

// export default function AttendancePolicies() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Attendance"
//         title="Attendance Policies"
//         description="Configure grace periods and deduction rates that govern how attendance is evaluated. Policies can be scoped to the company, a branch, a role, or a specific employee."
//       />

//       <div className="wg-section">
//         <h2>Policy Scope &amp; Priority</h2>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">4</span><div><strong>Individual Employee</strong> — highest priority</div></li>
//           <li><span className="wg-priority-num">3</span><div><strong>Role</strong> — applies to all Staff or all Admins</div></li>
//           <li><span className="wg-priority-num">2</span><div><strong>Branch</strong> — applies to all employees at a specific branch</div></li>
//           <li><span className="wg-priority-num">1</span><div><strong>Company-wide</strong> — default fallback</div></li>
//         </ul>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Employees assigned to <strong>multiple branches</strong> are not subject to branch-level policies. Only company-wide, role, or individual policies apply to them.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Grace Periods</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Setting</th><th>What It Controls</th></tr></thead>
//             <tbody>
//               <tr><td>Late grace period</td><td>Minutes late before any deduction starts</td></tr>
//               <tr><td>Early leave grace period</td><td>Minutes before shift end that departure is considered on-time</td></tr>
//               <tr><td>Daily break allowance</td><td>Total daily break time before deductions start</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Deduction Rates</h2>
//         <p>Deduction rates control how much salary is deducted per minute of late arrival, early departure, transit time, or excess break time.</p>
//         <div className="wg-callout wg-callout--danger">
//           <span className="wg-callout__icon">🚨</span>
//           <div><strong>Rates are entered as decimal fractions.</strong> To set a 2% deduction rate, enter <code>0.02</code>. Never enter <code>2</code> — this would apply an extreme deduction and cause serious payroll errors.</div>
//         </div>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Rate</th><th>Example Value</th><th>What It Deducts</th></tr></thead>
//             <tbody>
//               <tr><td>Late arrival rate</td><td><code>0.02</code></td><td>Per minute of late arrival</td></tr>
//               <tr><td>Early departure rate</td><td><code>0.02</code></td><td>Per minute of early departure</td></tr>
//               <tr><td>Transit rate</td><td><code>0.01</code></td><td>Per minute of excess travel between branches</td></tr>
//               <tr><td>Break/gap rate</td><td><code>0.01</code></td><td>Per minute of excess break time</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Absence Settings</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Setting</th><th>What It Controls</th></tr></thead>
//             <tbody>
//               <tr><td>Deduct from salary</td><td>Whether absence days reduce the employee's monthly pay</td></tr>
//               <tr><td>Paid absence</td><td>If enabled, absence is considered paid — no salary deduction</td></tr>
//               <tr><td>Day rate</td><td>How much of a daily salary to deduct per absent day (0 to 1, where 1 = full day)</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Policy Date Range</h2>
//         <p>Each policy has a start date and an optional end date. Two policies of the same scope cannot have overlapping date ranges — the system prevents this automatically. Historical records remain accurate even when policies change, because each day stores a snapshot of the exact policy that applied.</p>
//       </div>
//     </>
//   )
// }


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
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Priority</th><th>Scope</th><th>Who It Applies To</th></tr></thead>
            <tbody>
              <tr><td>1 (Lowest)</td><td>Company-wide</td><td>All employees — acts as the default</td></tr>
              <tr><td>2</td><td>Branch</td><td>All employees at a specific branch</td></tr>
              <tr><td>3</td><td>Role</td><td>All employees with a specific role (staff or admin)</td></tr>
              <tr><td>4 (Highest)</td><td>Individual Employee</td><td>One specific person — overrides everything else</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Employees assigned to <strong>multiple branches</strong> are not subject to branch-level policies. Only company-wide, role-based, or individual policies apply to them.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Grace Periods</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td>Late grace (minutes)</td><td>Employee can arrive this many minutes late without any deduction. E.g. 10 minutes means arriving 9 minutes late is fine.</td></tr>
              <tr><td>Early leave grace (minutes)</td><td>Employee can leave this many minutes early without a deduction</td></tr>
              <tr><td>Daily break allowance (minutes)</td><td>Total break time per day that is not deducted. Time beyond this is subject to deduction.</td></tr>
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
          <div>
            <strong>Rates are entered as decimal fractions, not percentages.</strong><br />
            To deduct <strong>2%</strong> of the hourly salary per minute → enter <code>0.02</code><br />
            <strong>Do NOT enter <code>2</code></strong> — this would deduct 200% of the hourly salary per minute, which is a major payroll error.
          </div>
        </div>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Enter In UI</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td>Late deduction rate</td><td><code>0.02</code></td><td>2% of hourly salary deducted per minute of late arrival</td></tr>
              <tr><td>Early leave rate</td><td><code>0.02</code></td><td>2% of hourly salary deducted per minute of early departure</td></tr>
              <tr><td>Transit rate</td><td><code>0.01</code></td><td>1% of hourly salary deducted per minute of excess travel between branches</td></tr>
              <tr><td>Break/gap rate</td><td><code>0.01</code></td><td>1% of hourly salary deducted per minute of excess break time</td></tr>
            </tbody>
          </table>
        </div>

        <h3>How the Deduction Is Calculated</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Step</th><th>Formula</th></tr></thead>
            <tbody>
              <tr><td>Hourly salary</td><td>Base salary ÷ Expected working days ÷ Working hours per day</td></tr>
              <tr><td>Deduction per minute</td><td>Hourly salary × rate value</td></tr>
              <tr><td>Total deduction</td><td>Deduction per minute × number of deducted minutes</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>
            <strong>Example:</strong> Employee earns 10,000 EGP/month, works 22 days/month, 8 hours/day, late rate = 0.02:<br />
            Hourly salary = 10,000 ÷ 22 ÷ 8 = <strong>56.82 EGP/hour</strong><br />
            Deduction per late minute = 56.82 × 0.02 ÷ 60 = <strong>0.019 EGP/minute</strong><br />
            Employee was 42 minutes late: 0.019 × 42 = <strong>0.80 EGP deducted</strong>
          </div>
        </div>
        <p>Transit deductions (between branches) and break deductions (same branch) use separate rates and are calculated independently.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Absence Settings</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Deduct from salary</td><td>Whether an absence day reduces the employee's salary</td></tr>
              <tr><td>Paid absence</td><td>If enabled, absence is paid — no salary deduction even if "deduct" is on</td></tr>
              <tr><td>Day rate</td><td>How much of the daily salary to deduct per absent day (0 to 1, where 1 = full day, 0.5 = half day)</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Deduction Logic (in order)</h3>
        <ol className="wg-steps">
          <li>If deductions are disabled → no deduction</li>
          <li>If absence is paid → no deduction</li>
          <li>Otherwise → deduction = daily salary × day rate</li>
        </ol>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Policy Date Range</h2>
        <p>Each policy has a <strong>start date</strong> (required) and an <strong>end date</strong> (leave empty for no expiry). Two active policies of the same scope cannot overlap in their date ranges — the system will block you from creating or saving an overlapping policy.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Policy Activation</h2>
        <p>Only <strong>active</strong> policies are applied when calculating attendance. When you activate a new policy, any previously active policy of the same scope is automatically deactivated. The system keeps a full history of when each policy was activated and deactivated.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Historical Accuracy</h2>
        <p>Every daily attendance record stores a complete <strong>snapshot</strong> of the attendance policy that was in effect at the time of calculation. This means:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>If you change a policy, <strong>past records are not affected</strong></div></li>
          <li><span className="wg-priority-num">→</span><div>You can always review a past record and see exactly which policy applied on that day</div></li>
          <li><span className="wg-priority-num">→</span><div>The payroll run includes a <strong>policy timeline</strong> showing which policy applied on each day of the month</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Timezones in Policies</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Policy Scope</th><th>Timezone Used</th></tr></thead>
            <tbody>
              <tr><td>Branch-scoped policies</td><td>The branch timezone</td></tr>
              <tr><td>Company-wide, role, or individual policies</td><td>The company timezone</td></tr>
            </tbody>
          </table>
        </div>
        <p>Policy start and end dates are interpreted in the timezone of their scope.</p>
      </div>
    </>
  )
}