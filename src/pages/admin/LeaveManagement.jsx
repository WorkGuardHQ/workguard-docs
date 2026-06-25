// // src/pages/admin/LeaveManagement.jsx

// import PageHeader from '../../components/PageHeader'

// export default function LeaveManagement() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Time Off & Scheduling"
//         title="Leave Management"
//         description="Manage the full leave lifecycle — approval, rejection, cancellation — with automatic balance tracking and payroll integration."
//       />

//       <div className="wg-section">
//         <h2>Leave Types</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Type</th><th>Description</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--blue">Annual Leave</span></td><td>Paid — deducted from the employee's annual balance</td></tr>
//               <tr><td><span className="wg-badge wg-badge--teal">Sick Leave</span></td><td>Paid — deducted from the sick leave balance</td></tr>
//               <tr><td><span className="wg-badge wg-badge--yellow">Unpaid Leave</span></td><td>No salary payment — balance is not deducted</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Leave Policy Scope</h2>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">4</span><div><strong>Individual Employee</strong> — highest priority</div></li>
//           <li><span className="wg-priority-num">3</span><div><strong>Role</strong> — applies to all Staff or all Admins</div></li>
//           <li><span className="wg-priority-num">2</span><div><strong>Branch</strong> — applies to all employees at a specific branch</div></li>
//           <li><span className="wg-priority-num">1</span><div><strong>Company-wide</strong> — default fallback</div></li>
//         </ul>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Employees assigned to multiple branches are not subject to branch-level leave policies.</div>
//         </div>

//         <h3>Leave Policy Settings</h3>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Setting</th><th>Description</th></tr></thead>
//             <tbody>
//               <tr><td>Annual days</td><td>Total paid annual leave days per year (default: 21)</td></tr>
//               <tr><td>Sick days</td><td>Total sick leave days per year (default: 10)</td></tr>
//               <tr><td>Unpaid leave allowed</td><td>Whether employees can request unpaid leave</td></tr>
//               <tr><td>Days accrued per year</td><td>Used when calculating leave balance resets</td></tr>
//               <tr><td>Carryover limit</td><td>Maximum unused annual days that roll over to the next year</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Submitting Leave</h2>
//         <p>When a leave request is submitted (by employee or admin), the system:</p>
//         <ol className="wg-steps">
//           <li>Checks for overlap with existing pending or approved leave</li>
//           <li>Confirms the leave type is allowed by the policy</li>
//           <li>Verifies there's sufficient balance available</li>
//           <li>Excludes weekends and public holidays from the effective count</li>
//           <li>Confirms at least one working day falls in the requested period</li>
//           <li>Creates the request in <strong>pending</strong> status</li>
//         </ol>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Admins can submit leave for <strong>past dates</strong>. Employees can only submit future leave.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Approving Leave</h2>
//         <p>When you approve a leave request:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">→</span><div>Only future days in the leave period are processed — past days are skipped</div></li>
//           <li><span className="wg-priority-num">→</span><div>Public holidays and non-working days are not counted against the balance</div></li>
//           <li><span className="wg-priority-num">→</span><div>If the period includes payroll-locked days, you'll be prompted to confirm</div></li>
//           <li><span className="wg-priority-num">→</span><div>Paid leave days are deducted from the employee's balance</div></li>
//           <li><span className="wg-priority-num">→</span><div>If balance runs out, remaining days become unpaid (if policy allows)</div></li>
//           <li><span className="wg-priority-num">→</span><div>Each approved day updates the employee's daily attendance summary</div></li>
//         </ul>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Rejecting Leave</h2>
//         <p>A rejection reason is required. The employee is notified by email. No balance changes occur.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Cancelling Leave</h2>
//         <h3>Cancelling a Pending Request</h3>
//         <p>Either the employee or an admin can cancel a pending request. No balance changes.</p>

//         <h3>Cancelling Approved Leave (Admin Only)</h3>
//         <ol className="wg-steps">
//           <li>Specify a <strong>cancel-from date</strong></li>
//           <li>Preview the changes before committing</li>
//           <li>Days before the cancel date remain approved</li>
//           <li>Days from that date onward are cancelled and balance is restored</li>
//           <li>Payroll-locked days require an additional confirmation</li>
//         </ol>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Yearly Leave Reset</h2>
//         <p>On <strong>January 1</strong> each year, the system automatically resets leave balances:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">→</span><div>Unused annual leave is carried over up to the configured carryover limit</div></li>
//           <li><span className="wg-priority-num">→</span><div>Sick leave resets to the full annual allocation (no carryover)</div></li>
//           <li><span className="wg-priority-num">→</span><div>Used-day counters are cleared</div></li>
//         </ul>
//         <p>A preview of the reset is available before it runs. You can also manually adjust any employee's leave balance at any time — all adjustments are logged with your name, timestamp, and reason.</p>
//       </div>
//     </>
//   )
// }

// src/pages/admin/LeaveManagement.jsx

import PageHeader from '../../components/PageHeader'

export default function LeaveManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Time Off & Scheduling"
        title="Leave Management"
        description="Manage the full leave lifecycle — approval, rejection, and cancellation — with automatic balance tracking and payroll integration."
      />

      <div className="wg-section">
        <h2>Leave Types</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--blue">Annual Leave</span></td><td>Paid — deducted from the employee's annual balance</td></tr>
              <tr><td><span className="wg-badge wg-badge--teal">Sick Leave</span></td><td>Paid — deducted from the sick leave balance</td></tr>
              <tr><td><span className="wg-badge wg-badge--yellow">Unpaid Leave</span></td><td>No salary payment — balance is not deducted</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Leave Policy Scope &amp; Priority</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Priority</th><th>Scope</th></tr></thead>
            <tbody>
              <tr><td>1 (Lowest)</td><td>Company-wide</td></tr>
              <tr><td>2</td><td>Branch</td></tr>
              <tr><td>3</td><td>Role</td></tr>
              <tr><td>4 (Highest)</td><td>Individual Employee</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Employees assigned to multiple branches are not subject to branch-level leave policies.</div>
        </div>

        <h3>Leave Policy Settings</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Annual days</td><td>Total paid annual leave days per year (default: 21)</td></tr>
              <tr><td>Sick days</td><td>Total sick leave days per year (default: 10)</td></tr>
              <tr><td>Unpaid leave allowed</td><td>Whether employees can request unpaid leave</td></tr>
              <tr><td>Days accrued per year</td><td>Used when calculating leave balance resets</td></tr>
              <tr><td>Carryover limit</td><td>Maximum unused annual days that roll over to the next year</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Submitting a Leave Request</h2>
        <p>When a leave request is submitted (by employee or admin), the system automatically:</p>
        <ol className="wg-steps">
          <li>Checks for overlap with existing pending or approved leave</li>
          <li>Confirms the leave type is allowed by the policy</li>
          <li>Verifies there's sufficient balance available</li>
          <li>Excludes weekends and public holidays from the effective count</li>
          <li>Confirms at least one working day falls in the requested period</li>
          <li>Creates the request in <strong>pending</strong> status</li>
        </ol>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Admins can submit leave for <strong>past dates</strong>. Employees can only submit future leave.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Approving Leave</h2>
        <p>When you approve a leave request:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Only <strong>future days</strong> in the leave period are processed — past days in the range are skipped</div></li>
          <li><span className="wg-priority-num">→</span><div>Public holidays and non-working days are not counted against the leave balance</div></li>
          <li><span className="wg-priority-num">→</span><div>If the period includes <strong>payroll-locked days</strong>, you'll be prompted to confirm before proceeding</div></li>
          <li><span className="wg-priority-num">→</span><div>Paid leave days are deducted from the employee's balance</div></li>
          <li><span className="wg-priority-num">→</span><div>If the employee's balance runs out, remaining days are converted to unpaid leave (if policy allows)</div></li>
          <li><span className="wg-priority-num">→</span><div>Each approved day is reflected in the employee's daily attendance summary</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Rejecting Leave</h2>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>A <strong>rejection reason is required</strong></div></li>
          <li><span className="wg-priority-num">→</span><div>The employee is notified by email automatically</div></li>
          <li><span className="wg-priority-num">→</span><div>No balance change occurs</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Cancelling Leave</h2>
        <h3>Cancelling a Pending Request</h3>
        <p>Either the employee or an admin can cancel a pending request. No balance changes occur.</p>

        <h3>Cancelling Approved Leave (Admin Only)</h3>
        <ol className="wg-steps">
          <li>Specify a <strong>cancel-from date</strong></li>
          <li>Review the <strong>preview</strong> — see exactly which days will be cancelled and what balance will be restored</li>
          <li>Days before that date remain approved</li>
          <li>Days from that date onward are cancelled and balance is restored</li>
          <li>If the period includes payroll-locked days, an additional confirmation is required</li>
        </ol>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Leave Balances Dashboard</h2>
        <p>Each employee's leave balance is tracked in a dedicated record per year:</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Balance Field</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td>Annual total</td><td>Total annual days available (including carryover from last year)</td></tr>
              <tr><td>Annual used</td><td>Paid annual days already taken</td></tr>
              <tr><td>Annual remaining</td><td>Available annual days left</td></tr>
              <tr><td>Sick total</td><td>Total sick days allocated</td></tr>
              <tr><td>Sick used</td><td>Sick days already taken</td></tr>
              <tr><td>Sick remaining</td><td>Available sick days left</td></tr>
              <tr><td>Absent days</td><td>Days marked as absent without permission (updated automatically)</td></tr>
              <tr><td>Unpaid leave days</td><td>Days on approved unpaid leave</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Yearly Leave Reset</h2>
        <p>On <strong>January 1</strong> each year, leave balances are automatically reset:</p>
        <ol className="wg-steps">
          <li>Any unused annual leave is carried over up to the configured carryover limit</li>
          <li>The new year's annual balance = fresh annual days + carried-over days</li>
          <li>Sick leave resets to the full allocation (no carryover for sick leave)</li>
          <li>Used-day counters are cleared</li>
        </ol>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Employees with <strong>approved payroll</strong> for the target year are skipped in the reset to protect finalized data.</div>
        </div>
        <p>A <strong>preview</strong> is available before the reset runs — showing exactly what each employee's new balance will be.</p>

        <h3>Manual Balance Adjustment</h3>
        <p>Admins can manually add to, deduct from, or set an employee's leave balance at any time. All manual adjustments are recorded with the admin's name, timestamp, and a required reason.</p>
      </div>
    </>
  )
}