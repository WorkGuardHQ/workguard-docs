// // src/pages/admin/OvertimeBonusPolicies.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function OvertimeBonusPolicies() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Payroll & Compensation"
//         title="Overtime & Bonus Policies"
//         description="Configure overtime rules and bonus policies. Both follow the same scope and priority structure as attendance and leave policies."
//       />

//       <div className="wg-section">
//         <h2>Policy Scope &amp; Priority</h2>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">4</span><div><strong>Individual Employee</strong> — highest priority</div></li>
//           <li><span className="wg-priority-num">3</span><div><strong>Department</strong></div></li>
//           <li><span className="wg-priority-num">2</span><div><strong>Branch</strong></div></li>
//           <li><span className="wg-priority-num">1</span><div><strong>Company-wide</strong> — default fallback</div></li>
//         </ul>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Employees assigned to multiple branches or departments are not subject to branch or department-level policies.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Overtime Types</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Type</th><th>When It Applies</th></tr></thead>
//             <tbody>
//               <tr><td>Before Shift</td><td>Employee arrived earlier than their shift start</td></tr>
//               <tr><td>After Shift (Day)</td><td>Employee stayed late — daytime hours</td></tr>
//               <tr><td>After Shift (Night)</td><td>Employee stayed late — nighttime hours</td></tr>
//               <tr><td>Public Holiday</td><td>Employee worked on a declared holiday</td></tr>
//               <tr><td>Day Off</td><td>Employee worked on their scheduled day off</td></tr>
//               <tr><td>Exceptional</td><td>Manually added one-time by an admin — always paid in full</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Overtime Rule Settings</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Setting</th><th>Description</th></tr></thead>
//             <tbody>
//               <tr><td>Enable / Disable</td><td>Turn this overtime type on or off</td></tr>
//               <tr><td>Minimum minutes</td><td>Minimum OT before it counts (e.g. only count if &gt; 15 min)</td></tr>
//               <tr><td>Maximum hours</td><td>Cap per entry for this type (not the monthly cap)</td></tr>
//               <tr><td>Calculation method</td><td><strong>Multiplier</strong> (based on salary) or <strong>Fixed rate</strong> (flat per hour)</td></tr>
//               <tr><td>Multiplier</td><td><code>1.25</code> = 25% premium, <code>1.5</code> = 50%, <code>2.0</code> = double pay</td></tr>
//               <tr><td>Fixed rate</td><td>A flat amount paid per OT hour regardless of salary</td></tr>
//             </tbody>
//           </table>
//         </div>

//         <h3>Calculation Examples</h3>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>
//             <strong>Multiplier:</strong> Employee earns 50 EGP/hour × 2h OT × 1.5 multiplier = <strong>150 EGP</strong><br /><br />
//             <strong>Fixed rate:</strong> Fixed 80 EGP/hour × 2h OT = <strong>160 EGP</strong>
//           </div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Monthly Overtime Cap</h2>
//         <p>Set a maximum number of paid OT hours per month. Overtime beyond the cap is tracked but payment is adjusted proportionally across all overtime entries for the month.</p>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Exceptional (manually added) overtime entries are always paid in full and are never reduced by the monthly cap.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Bonus Types</h2>

//         <h3>Attendance Bonus</h3>
//         <p>Awarded when an employee meets all monthly attendance conditions. You configure the thresholds:</p>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Condition</th><th>Description</th></tr></thead>
//             <tbody>
//               <tr><td>Max absence days</td><td>Employee must not exceed this number of absent days</td></tr>
//               <tr><td>Max late days</td><td>Employee must not exceed this number of days with late arrival</td></tr>
//               <tr><td>Max late minutes</td><td>Total late minutes must not exceed this number</td></tr>
//               <tr><td>Max unpaid leave days</td><td>Employee must not exceed this number of unpaid leave days</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <p>The bonus amount can be a fixed value or a percentage of the employee's base salary.</p>

//         <h3>Fixed Monthly Bonus</h3>
//         <p>A recurring monthly bonus. Configure when it pays:</p>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Mode</th><th>When It's Paid</th></tr></thead>
//             <tbody>
//               <tr><td>Always</td><td>Every month regardless of attendance</td></tr>
//               <tr><td>Active Only</td><td>Only when the employee has zero unpaid leave days that month</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <p>Like the attendance bonus, the amount can be fixed or a salary percentage.</p>

//         <h3>Exceptional Bonus</h3>
//         <p>A one-time, manually entered bonus added by an admin for a specific employee and month. Always paid in full — never subject to the monthly overtime cap.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Policy Date Range</h2>
//         <p>Each policy has a start date and an optional end date. Two policies of the same scope cannot have overlapping date ranges. Historical records remain accurate even when policies change.</p>
//       </div>
//     </>
//   )
// }


// src/pages/admin/OvertimeBonusPolicies.jsx

import PageHeader from '../../components/PageHeader'

export default function OvertimeBonusPolicies() {
  return (
    <>
      <PageHeader
        eyebrow="Payroll & Compensation"
        title="Overtime & Bonus Policies"
        description="Configure overtime rules and bonus policies. Both follow the same scope and priority structure, with an additional department level."
      />

      <div className="wg-section">
        <h2>Policy Scope &amp; Priority</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Priority</th><th>Scope</th></tr></thead>
            <tbody>
              <tr><td>1 (Lowest)</td><td>Company-wide</td></tr>
              <tr><td>2</td><td>Branch</td></tr>
              <tr><td>3</td><td>Department</td></tr>
              <tr><td>4</td><td>Role</td></tr>
              <tr><td>5 (Highest)</td><td>Individual Employee</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>
            <strong>Multi-branch days:</strong> If an employee works at more than one branch on the same day, branch-level and department-level policies don't apply for that day — the system falls back to role or company-wide policy.<br /><br />
            <strong>Multi-department employees:</strong> Department-level policies don't apply to employees assigned to more than one department. Role or company-wide policy is used instead.
          </div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Overtime Types</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Type</th><th>When It Applies</th><th>Subject to Monthly Cap?</th></tr></thead>
            <tbody>
              <tr><td>Before Shift</td><td>Employee arrived earlier than their shift start time</td><td>✅ Yes</td></tr>
              <tr><td>After Shift (Day)</td><td>Employee stayed later during daytime hours</td><td>✅ Yes</td></tr>
              <tr><td>After Shift (Night)</td><td>Employee stayed later during nighttime hours</td><td>✅ Yes</td></tr>
              <tr><td>Public Holiday</td><td>Employee worked on a declared public holiday</td><td>✅ Yes</td></tr>
              <tr><td>Day Off</td><td>Employee worked on their scheduled day off</td><td>✅ Yes</td></tr>
              <tr><td>Exceptional</td><td>Manually entered by an admin (one-time)</td><td>❌ No — always paid in full</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Overtime Rule Configuration</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Option</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Enable / Disable</td><td>Turn this overtime type on or off</td></tr>
              <tr><td>Minimum minutes</td><td>Minimum overtime needed to qualify (e.g. only count if &gt; 15 min)</td></tr>
              <tr><td>Maximum hours</td><td>Cap on how much overtime counts for this type per entry</td></tr>
              <tr><td>Rate type</td><td><strong>Multiplier</strong> (based on hourly salary) or <strong>Fixed</strong> (flat rate per hour)</td></tr>
              <tr><td>Multiplier</td><td><code>1.25</code> = 25% bonus · <code>1.5</code> = 50% bonus · <code>2.0</code> = double pay</td></tr>
              <tr><td>Fixed rate per hour</td><td>A flat amount per overtime hour — ignores the employee's salary entirely</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Overtime Calculation</h2>
        <h3>Multiplier Method</h3>
        <div className="wg-formula">Overtime pay = (overtime hours) × hourly salary × multiplier</div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div><strong>Example:</strong> 2 hours overtime, hourly salary = 50 EGP, multiplier = 1.5<br />→ 2 × 50 × 1.5 = <strong>150 EGP</strong></div>
        </div>
        <p>The multiplier is applied to full hours, not minute-by-minute. This reflects industry-standard overtime calculation.</p>

        <h3>Fixed Rate Method</h3>
        <div className="wg-formula">Overtime pay = (overtime hours) × fixed rate per hour</div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div><strong>Example:</strong> 2 hours overtime, fixed rate = 80 EGP/hour<br />→ 2 × 80 = <strong>160 EGP</strong></div>
        </div>
        <p>The fixed rate completely ignores the employee's salary — useful for standardized overtime pay across teams.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Night Shift Detection for Overtime</h2>
        <p>When an employee works late, the system determines whether the overtime falls within <strong>daytime</strong> or <strong>nighttime</strong> hours based on the night shift window you define in the overtime policy.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>
            <strong>Example night window:</strong> 10:00 PM to 6:00 AM<br />
            An employee leaving at 11:30 PM → <strong>nighttime overtime</strong><br />
            An employee leaving at 6:30 PM → <strong>daytime overtime</strong>
          </div>
        </div>
        <p>Night/day determination is based on the timezone of the specific branch where the employee checked out — ensuring accuracy for employees at different locations.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Monthly Overtime Cap</h2>
        <p>Set a maximum number of paid overtime hours per month. Overtime beyond the cap is still tracked and recorded — payment is reduced proportionally across all overtime entries.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>
            <strong>Example:</strong> Cap = 10 hours, employee worked 20 hours OT (4h before shift + 16h after shift):<br />
            Pay ratio = 10 ÷ 20 = <strong>50%</strong><br />
            Before-shift OT (200 EGP earned) → <strong>100 EGP paid</strong><br />
            After-shift OT (800 EGP earned) → <strong>400 EGP paid</strong><br />
            Total paid: <strong>500 EGP</strong>
          </div>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Exceptional (manually added) overtime is <strong>never capped</strong> — it's always paid in full.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Bonus Policy Scope &amp; Priority</h2>
        <p>Bonus policies follow the same scope and priority as overtime policies (Company → Branch → Department → Role → Individual). The same multi-branch and multi-department rules apply.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Attendance Bonus</h2>
        <p>Awarded when an employee meets <strong>all</strong> configured monthly attendance conditions:</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Condition</th><th>Default When Not Configured</th></tr></thead>
            <tbody>
              <tr><td>Maximum absence days</td><td><strong>0</strong> — must be set explicitly; defaults to zero absences allowed</td></tr>
              <tr><td>Maximum late days</td><td>Unlimited — not enforced if left empty</td></tr>
              <tr><td>Maximum total late minutes</td><td>Unlimited — not enforced if left empty</td></tr>
              <tr><td>Maximum unpaid leave days</td><td>Unlimited — not enforced if left empty</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Enter <code>0</code> to set a strict "zero allowed" limit. Enter a number (e.g. <code>5</code>) to allow up to that amount. Leave the field empty to not enforce that condition at all.</div>
        </div>

        <h3>Bonus Reward Calculation</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Method</th><th>Formula</th><th>Example</th></tr></thead>
            <tbody>
              <tr>
                <td>Fixed amount</td>
                <td>Bonus = the configured fixed value</td>
                <td>Configured = 500 → employee receives <strong>500 EGP</strong></td>
              </tr>
              <tr>
                <td>Percentage of salary</td>
                <td>Bonus = base salary × (value ÷ 100)</td>
                <td>Salary = 10,000 EGP, value = 5 → <strong>500 EGP</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Enter the percentage as a plain number (e.g. enter <code>5</code> for 5%). The system handles the division automatically. This is different from deduction rates which use decimal fractions like <code>0.02</code>.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Fixed Monthly Bonus</h2>
        <p>A recurring bonus applied automatically each month:</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Mode</th><th>When It's Paid</th></tr></thead>
            <tbody>
              <tr><td><strong>Always</strong></td><td>Every month regardless of attendance</td></tr>
              <tr><td><strong>Active employees only</strong></td><td>Only paid if the employee had zero unpaid leave days that month</td></tr>
            </tbody>
          </table>
        </div>
        <p>The amount can be a fixed value or a percentage of base salary — same calculation as the attendance bonus reward.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Exceptional Bonus</h2>
        <p>Manually entered one-time bonuses added by an admin. These:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Appear in both the overtime section and bonus section of the payroll run</div></li>
          <li><span className="wg-priority-num">→</span><div>Are <strong>always paid in full</strong> — never subject to the monthly overtime cap</div></li>
          <li><span className="wg-priority-num">→</span><div>Can include a note explaining the reason</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Policy Date Range</h2>
        <p>Each policy has a start date and an optional end date. Two policies of the same scope cannot have overlapping date ranges. Historical records remain accurate even when policies change — each payroll run stores a snapshot of which policy applied on each day.</p>
      </div>
    </>
  )
}