// // src/pages/admin/Payroll.jsx

// import PageHeader from '../../components/PageHeader'

// export default function Payroll() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Payroll & Compensation"
//         title="Payroll"
//         description="Calculate and approve monthly payroll for all employees. WorkGuard combines base salary with attendance deductions, overtime, and bonuses automatically."
//       />

//       <div className="wg-section">
//         <h2>What Goes Into Payroll</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Input</th><th>Where It Comes From</th></tr></thead>
//             <tbody>
//               <tr><td>Base salary</td><td>Employee profile</td></tr>
//               <tr><td>Expected working days</td><td>Counted from the employee's working days for that month</td></tr>
//               <tr><td>Actual working days</td><td>Days the employee was present and counted as working</td></tr>
//               <tr><td>Late minutes</td><td>Total late minutes across the month</td></tr>
//               <tr><td>Early leave minutes</td><td>Total early departure minutes</td></tr>
//               <tr><td>Transit deduction minutes</td><td>Excess travel time between branches</td></tr>
//               <tr><td>Break deduction minutes</td><td>Excess break time beyond the daily allowance</td></tr>
//               <tr><td>Absence days</td><td>Days marked absent or on unpaid leave</td></tr>
//               <tr><td>Overtime</td><td>Approved overtime entries for the month</td></tr>
//               <tr><td>Bonuses</td><td>Calculated from the active bonus policy</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Salary Breakdown</h2>
//         <div className="wg-formula">Daily salary = Base salary ÷ Expected working days this month</div>
//         <div className="wg-formula">Hourly salary = Daily salary ÷ Working hours per day</div>
//         <p>Night shift employees have their end time correctly placed on the next calendar day for this calculation.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Deductions</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Deduction Type</th><th>Formula</th></tr></thead>
//             <tbody>
//               <tr><td>Late arrival</td><td>Total late minutes × hourly salary × late rate</td></tr>
//               <tr><td>Early departure</td><td>Total early minutes × hourly salary × early leave rate</td></tr>
//               <tr><td>Transit excess</td><td>Total excess transit minutes × hourly salary × transit rate</td></tr>
//               <tr><td>Excess breaks</td><td>Total excess break minutes × hourly salary × break rate</td></tr>
//               <tr><td>Absence</td><td>Daily salary × absence day rate × number of absent days</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="wg-callout wg-callout--danger">
//           <span className="wg-callout__icon">🚨</span>
//           <div>All deduction rates are decimal fractions — e.g. <code>0.02</code> = 2%. Entering <code>2</code> instead of <code>0.02</code> causes severe payroll errors.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Overtime Cap Example</h2>
//         <p>If the monthly cap is 10 hours and an employee earned 20 OT hours (4h before shift + 16h after shift):</p>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>
//             Pay ratio = 10 ÷ 20 = <strong>50%</strong><br />
//             Before-shift OT (200 EGP earned) → <strong>100 EGP paid</strong><br />
//             After-shift OT (800 EGP earned) → <strong>400 EGP paid</strong><br />
//             Total paid: <strong>500 EGP</strong>
//           </div>
//         </div>
//         <p>Manually added Exceptional overtime is always paid in full and is never subject to the cap.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Net Salary</h2>
//         <div className="wg-formula">Net Salary = Base Salary − Total Deductions + Overtime Pay + Bonuses</div>
//         <p>Net salary cannot go below zero.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Payroll Run Statuses</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Status</th><th>Description</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--yellow">Draft</span></td><td>Generated but not yet approved — can be regenerated or edited</td></tr>
//               <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>Finalized and locked — attendance for that period cannot be changed</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Employee Profile Snapshot</h2>
//         <p>When a payroll run is generated, the system saves a complete snapshot of the employee's profile at that moment — including salary, shift settings, and branch assignments. Changes to the employee's profile after payroll is generated don't affect that run.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Bulk Payroll Operations</h2>
//         <h3>Generate Payroll for All Employees</h3>
//         <p>Calculates payroll for all employees at once for a given month. Skips employees who already have a run for that period. Can be filtered by branch or department. Processes up to 200 employees per request.</p>

//         <h3>Approve All Draft Runs</h3>
//         <p>Approves all pending draft payroll runs for a given month in one click. Only processes drafts — already-approved runs are not affected. Can be filtered by branch or department.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Policy Audit Trail</h2>
//         <p>Each payroll run includes a timeline of which attendance policies were in effect on different days throughout the month. This makes it easy to audit why a specific deduction was applied on a specific date.</p>
//       </div>
//     </>
//   )
// }

// src/pages/admin/Payroll.jsx

import PageHeader from '../../components/PageHeader'

import PayrollManagementImg from '../../assets/screenshots/runpayroll-manag.png'
export default function Payroll() {
  return (
    <>
      <PageHeader
        eyebrow="Payroll & Compensation"
        title="Payroll"
        description="Calculate and approve monthly payroll for all employees. WorkGuard combines base salary with attendance deductions, overtime, and bonuses automatically."
      />
<img
  src={PayrollManagementImg}
  alt="Payroll Runs Management"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Generate, approve, and review payroll runs for employees using branch,
  department, and status filters.
</p>
      <div className="wg-section">
        <h2>What Goes Into Payroll</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Input</th><th>Where It Comes From</th></tr></thead>
            <tbody>
              <tr><td>Base salary</td><td>Employee profile</td></tr>
              <tr><td>Expected working days</td><td>Counted from the employee's working days for that specific month</td></tr>
              <tr><td>Actual working days</td><td>Days the employee was present and counted as working</td></tr>
              <tr><td>Late minutes</td><td>Total minutes late across the month</td></tr>
              <tr><td>Early leave minutes</td><td>Total early departure minutes</td></tr>
              <tr><td>Transit deduction minutes</td><td>Excess travel time between branches</td></tr>
              <tr><td>Break deduction minutes</td><td>Excess break time beyond the daily allowance</td></tr>
              <tr><td>Absence days</td><td>Days marked as absent or on unpaid leave</td></tr>
              <tr><td>Overtime</td><td>Approved overtime entries for the month</td></tr>
              <tr><td>Bonuses</td><td>Calculated from the active bonus policy</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Salary Breakdown</h2>
        <div className="wg-formula">Daily salary = Base salary ÷ Expected working days this month</div>
        <div className="wg-formula">Hourly salary = Daily salary ÷ Working hours per day</div>
        <p>If shift start and end times are configured, the system uses the actual shift duration. Night shift employees have their end time correctly placed on the next calendar day for this calculation.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Deductions</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Deduction Type</th><th>Formula</th></tr></thead>
            <tbody>
              <tr><td>Late arrival</td><td>Total late minutes × hourly salary × late rate</td></tr>
              <tr><td>Early departure</td><td>Total early minutes × hourly salary × early leave rate</td></tr>
              <tr><td>Transit excess</td><td>Total excess transit minutes × hourly salary × transit rate</td></tr>
              <tr><td>Excess breaks</td><td>Total excess break minutes × hourly salary × break rate</td></tr>
              <tr><td>Absence</td><td>Daily salary × absence day rate × number of absent days</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--danger">
          <span className="wg-callout__icon">🚨</span>
          <div>All deduction rates are decimal fractions — e.g. <code>0.02</code> = 2%. Entering <code>2</code> instead of <code>0.02</code> causes severe payroll errors. See Attendance Policies for full details.</div>
        </div>
        <p>Total deductions = sum of all the above.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Net Salary</h2>
        <div className="wg-formula">Net Salary = Base Salary − Total Deductions + Overtime Pay + Bonuses</div>
        <p>Net salary cannot go below zero.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Monthly Overtime Cap</h2>
        <p>If a monthly overtime cap is configured, overtime hours beyond the cap are tracked but not paid. Payment is adjusted proportionally across all overtime entries.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>
            <strong>Example:</strong> Cap = 10 hours. Employee earned 20 hours of OT (4h before shift + 16h after shift):<br />
            Pay ratio = 10 ÷ 20 = <strong>50%</strong><br />
            Before-shift OT (200 EGP earned) → <strong>100 EGP paid</strong><br />
            After-shift OT (800 EGP earned) → <strong>400 EGP paid</strong><br />
            Total paid: <strong>500 EGP</strong>
          </div>
        </div>
        <p>Manually added exceptional bonuses are never affected by the monthly overtime cap and are always paid in full.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Payroll Run Statuses</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--yellow">Draft</span></td><td>Generated but not yet approved — can be regenerated or edited</td></tr>
              <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>Finalized and locked — attendance for that period cannot be changed</td></tr>
            </tbody>
          </table>
        </div>
        <p>
  Approved payroll runs become read-only. Attendance records and payroll
  calculations for that period are locked until the payroll is regenerated
  before approval or a new payroll period begins.
</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Employee Profile Snapshot</h2>
        <p>When a payroll run is generated, the system saves a complete <strong>snapshot</strong> of the employee's profile at that moment — including their salary, shift settings, and branch assignments. This means:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Changes to the employee's profile after payroll is generated don't affect that run</div></li>
          <li><span className="wg-priority-num">→</span><div>You can always review historical payroll and see exactly what settings applied at the time</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Bulk Payroll Operations</h2>
        <h3>Generate Payroll for All Employees</h3>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Calculates payroll for all employees at once for a given month</div></li>
          <li><span className="wg-priority-num">→</span><div>Skips employees who already have a run for that period</div></li>
          <li><span className="wg-priority-num">→</span><div>Can be filtered by branch or department</div></li>
          <li><span className="wg-priority-num">→</span><div>Processes up to 200 employees per request</div></li>
        </ul>

        <h3>Approve All Draft Runs</h3>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Approves all pending (draft) payroll runs for a given month in one click</div></li>
          <li><span className="wg-priority-num">→</span><div>Only processes draft runs — already-approved runs are not affected</div></li>
          <li><span className="wg-priority-num">→</span><div>Can be filtered by branch or department</div></li>
        </ul>
      </div>

<hr className="wg-divider" />

<div className="wg-section">
  <h2>Generate Payroll for a Single Employee</h2>

  <p>
  Payroll can also be generated or approved directly from an employee's
  profile instead of running payroll for the entire organization.
  This is useful when reviewing, recalculating, or approving payroll
  for a single employee without affecting anyone else.
</p>
</div>
      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Policy Audit Trail</h2>


        <p>Each payroll run includes a timeline of which attendance policies were in effect on different days throughout the month. This makes it easy to audit why a specific deduction was applied on a specific date.</p>
      </div>
    </>
  )
}