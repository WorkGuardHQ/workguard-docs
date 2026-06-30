// // src/pages/public/Payroll.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function Payroll() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Payroll & Compliance"
//         title="Payroll"
//         description="WorkGuard calculates each employee's net salary every month by combining their base salary with attendance deductions, overtime pay, and bonuses."
//       />

//       <div className="wg-section">
//         <h2>What Affects Payroll</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Factor</th><th>Effect</th></tr></thead>
//             <tbody>
//               <tr><td>Base salary</td><td>Starting point for all calculations</td></tr>
//               <tr><td>Working days this month</td><td>Determines the daily and hourly salary rates</td></tr>
//               <tr><td>Late arrivals</td><td>Deducted based on minutes late and the policy rate</td></tr>
//               <tr><td>Early departures</td><td>Deducted based on minutes early and the policy rate</td></tr>
//               <tr><td>Absence days</td><td>Deducted based on the absence policy settings</td></tr>
//               <tr><td>Overtime</td><td>Added based on the overtime policy</td></tr>
//               <tr><td>Bonuses</td><td>Added based on the bonus policy</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Net Salary Formula</h2>
//         <div className="wg-formula">Net Salary = Base Salary − Total Deductions + Overtime + Bonuses</div>
//         <p>Net salary can never go below zero.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Overtime Pay</h2>
//         <p>Overtime is generated automatically when employees arrive early, stay late, or work on holidays or scheduled days off. The amount depends on your overtime policy settings.</p>
//         <h3>Monthly Overtime Cap</h3>
//         <p>If a monthly cap is configured, overtime beyond the cap is tracked but not paid. The payment is proportionally adjusted across all overtime entries for the month.</p>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Manually added (Exceptional) bonuses are never capped — they are always paid in full.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Payroll Status</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Status</th><th>Description</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--yellow">Draft</span></td><td>Calculated and ready for review — can be regenerated</td></tr>
//               <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>Finalized and locked — no further changes allowed</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <p>Once a payroll run is approved, attendance records for that period are locked. This protects finalized payroll from accidental changes.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Bulk Payroll Operations</h2>
//         <h3>Generate for All Employees</h3>
//         <p>Calculate payroll for everyone in one operation. Can be filtered by branch or department. Automatically skips employees who already have a run for that period.</p>
//         <h3>Approve All Draft Runs</h3>
//         <p>Approve all pending payroll runs for a given month in a single click. Only processes draft runs — already-approved runs are not affected.</p>
//       </div>
//     </>
//   )
// }


// src/pages/public/Payroll.jsx

import PageHeader from '../../components/PageHeader'

export default function Payroll() {
  return (
    <>
      <PageHeader
        eyebrow="Payroll & Compliance"
        title="Payroll"
        description="WorkGuard calculates each employee's net salary every month by combining their base salary with attendance deductions, overtime pay, and bonuses."
      />

      <div className="wg-section">
        <h2>What Affects Payroll</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Factor</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td>Base salary</td><td>Starting point for all calculations</td></tr>
              <tr><td>Working days this month</td><td>Determines the daily and hourly salary rates</td></tr>
              <tr><td>Late arrivals</td><td>Deducted based on minutes late and the policy rate</td></tr>
              <tr><td>Early departures</td><td>Deducted based on minutes early and the policy rate</td></tr>
              <tr><td>Transit deduction minutes</td><td>Excess travel time between branches</td></tr>
              <tr><td>Break deduction minutes</td><td>Excess break time beyond the daily allowance</td></tr>
              <tr><td>Absence days</td><td>Deducted based on the absence policy settings</td></tr>
              <tr><td>Overtime</td><td>Added based on the overtime policy</td></tr>
              <tr><td>Bonuses</td><td>Added based on the bonus policy</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Net Salary Formula</h2>
        <div className="wg-formula">Net Salary = Base Salary − Total Deductions + Overtime + Bonuses</div>
        <p>Net salary can never go below zero.</p>

        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">💡</span>
  <div>
    Payroll calculations always use the attendance policies that were active
    during the payroll period, ensuring accurate historical results.
  </div>
</div>

      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Overtime Pay</h2>
        <p>Overtime is generated automatically when employees arrive early, stay late, or work on holidays or scheduled days off. The amount depends on your overtime policy settings.</p>
        <h3>Monthly Overtime Cap</h3>
        <p>If a monthly cap is configured, overtime beyond the cap is tracked but not paid. The payment is proportionally adjusted across all overtime entries for the month.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Manually added exceptional bonuses are never affected by the monthly overtime cap and are always paid in full.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Payroll Status</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--yellow">Draft</span></td><td>Calculated and ready for review — can be regenerated</td></tr>
              <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>Finalized and locked — no further changes allowed</td></tr>
            </tbody>
          </table>
        </div>
        <p>Once a payroll run is approved, attendance records for that period are locked. This protects finalized payroll from accidental changes.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">

        <h2>Payroll Processing</h2>

<p>
Payroll can be generated for individual employees or for the entire organization.
WorkGuard automatically skips payroll records that already exist for the selected period,
allowing payroll to be processed safely without creating duplicates.
</p>

        {/* <h2>Bulk Payroll Operations</h2>
        <h3>Generate for All Employees</h3>
        <p>Calculate payroll for everyone in one operation. Can be filtered by branch or department. Automatically skips employees who already have a run for that period.</p>
        <h3>Approve All Draft Runs</h3>
        <p>Approve all pending payroll runs for a given month in a single click. Only processes draft runs — already-approved runs are not affected.</p> */}
      </div>
      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Policy Audit Trail</h2>
        <p>WorkGuard keeps a complete history of payroll calculations, making every deduction and payment fully traceable and auditable.</p>
      </div>
    </>
  )
}