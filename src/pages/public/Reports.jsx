// // src/pages/public/Reports.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function Reports() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Payroll & Compliance"
//         title="Reports"
//         description="WorkGuard provides detailed reports for individual employees and company-wide summaries. All reports can be exported to PDF or Excel."
//       />

//       <div className="wg-section">
//         <h2>Employee Monthly Report</h2>
//         <p>A complete monthly breakdown for one employee.</p>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Section</th><th>What's Included</th></tr></thead>
//             <tbody>
//               <tr><td>Profile summary</td><td>Name, role, branch, shift settings</td></tr>
//               <tr><td>Payroll</td><td>Base salary, all deductions, overtime, bonuses, net salary</td></tr>
//               <tr><td>Attendance stats</td><td>Working days, absences, late minutes, perfect attendance</td></tr>
//               <tr><td>Daily attendance</td><td>Status and details for every day of the month</td></tr>
//               <tr><td>Leave records</td><td>All approved and pending leave</td></tr>
//               <tr><td>Overtime entries</td><td>Each OT entry with type, hours, and amount</td></tr>
//               <tr><td>Leave balances</td><td>Annual, sick, and unpaid day counts</td></tr>
//               <tr><td>Performance notes</td><td>Admin feedback and warnings</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Company Monthly Report</h2>
//         <p>A summary across all employees (or a filtered group) for one month.</p>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Section</th><th>What's Included</th></tr></thead>
//             <tbody>
//               <tr><td>Company totals</td><td>Salary, deductions, overtime, and attendance summary</td></tr>
//               <tr><td>Per-employee data</td><td>Individual payroll and attendance for each employee</td></tr>
//               <tr><td>Rankings</td><td>Employees ranked by overtime, absence, late minutes, and net salary</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Company Yearly Report</h2>
//         <p>A full-year view combining all 12 months — month-by-month trends, annual totals per employee, and company-wide yearly rankings.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Access Control</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Role</th><th>Can Access</th></tr></thead>
//             <tbody>
//               <tr><td>Global Admin</td><td>All employees and branches</td></tr>
//               <tr><td>Branch Admin</td><td>Employees in their assigned branches only</td></tr>
//               <tr><td>Employee</td><td>Their own monthly report only</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Export Options</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Format</th><th>Best For</th></tr></thead>
//             <tbody>
//               <tr><td><strong>PDF</strong></td><td>Sharing, printing, and archiving formatted reports</td></tr>
//               <tr><td><strong>Excel</strong></td><td>Analysis, filtering, and working with data in spreadsheets</td></tr>
//             </tbody>
//           </table>
//         </div>

//         <h3>Excel Sheets — Employee Report</h3>
//         <p>Summary · Leave · Overtime &amp; Bonus · Attendance · Feedback</p>

//         <h3>Excel Sheets — Company Report</h3>
//         <p>Dashboard · Summary · Employees · Rankings · Monthly Trend (yearly)</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Report Filters</h2>
//         <p>Filter by branch or department. By default, reports only include employees with approved payroll — ensuring totals are final. Toggle this off to include all employees regardless of payroll status.</p>
//       </div>
//     </>
//   )
// }

// src/pages/public/Reports.jsx

import PageHeader from '../../components/PageHeader'

export default function Reports() {
  return (
    <>
      <PageHeader
        eyebrow="Payroll & Compliance"
        title="Reports"
        description="WorkGuard provides detailed reports for individual employees and company-wide summaries. All reports can be exported to PDF or Excel."
      />

      <div className="wg-section">
        <h2>Employee Monthly Report</h2>
        <p>A complete monthly breakdown for one employee:</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Section</th><th>What's Included</th></tr></thead>
            <tbody>
              <tr><td>Profile summary</td><td>Name, role, branch, shift settings</td></tr>
              <tr><td>Payroll</td><td>Base salary, all deductions, overtime, bonuses, net salary</td></tr>
              <tr><td>Attendance stats</td><td>Working days, absences, late minutes, perfect attendance</td></tr>
              <tr><td>Daily attendance</td><td>Status and details for every day of the month</td></tr>
              <tr><td>Leave records</td><td>All approved and pending leave</td></tr>
              <tr><td>Overtime entries</td><td>Each OT entry with type, hours, and amount</td></tr>
              <tr><td>Leave balances</td><td>Annual, sick, and unpaid day counts</td></tr>
              <tr><td>Performance notes</td><td>Admin feedback and warnings</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Company Monthly Report</h2>
        <p>A summary across all employees (or a filtered group) for one month:</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Section</th><th>What's Included</th></tr></thead>
            <tbody>
              <tr><td>Company totals</td><td>Salary, deductions, overtime, and attendance summary</td></tr>
              <tr><td>Per-employee data</td><td>Individual payroll and attendance for each employee</td></tr>
              <tr><td>Rankings</td><td>Employees ranked by overtime, absence, late minutes, and net salary</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Company Yearly Report</h2>
        <p>A full-year view combining all 12 months — month-by-month trends, annual totals per employee, and company-wide yearly rankings.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Report Timezones</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>What</th><th>Timezone Used</th></tr></thead>
            <tbody>
              <tr><td>All report summaries and totals</td><td>Your <strong>company timezone</strong></td></tr>
              <tr><td>Individual check-in/check-out times in attendance records</td><td>The <strong>branch timezone</strong> where the check-in occurred</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Multi-Branch Employees in Reports</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Report Type</th><th>How Multi-Branch Employees Appear</th></tr></thead>
            <tbody>
              <tr><td>Company-wide reports</td><td>Each employee appears <strong>once</strong> — their data is not duplicated across branches</td></tr>
              <tr><td>Branch-filtered reports</td><td>Multi-branch employees appear for <strong>any branch they belong to</strong>. Their full payroll data is shown, not split by branch.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Access Control</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Role</th><th>Can Access</th></tr></thead>
            <tbody>
              <tr><td>Global Admin</td><td>All employees and branches</td></tr>
              <tr><td>Branch Admin</td><td>Employees in their assigned branches only</td></tr>
              <tr><td>Employee</td><td>Their own monthly report only</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Export Options</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Format</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td><strong>PDF</strong></td><td>Sharing, printing, and archiving formatted reports</td></tr>
              <tr><td><strong>Excel</strong></td><td>Analysis, filtering, and working with data in spreadsheets</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Excel Sheets — Employee Report</h3>
        <p>Summary · Leave · Overtime &amp; Bonus · Attendance · Feedback</p>

        <h3>Excel Sheets — Company Report</h3>
        <p>Dashboard · Summary · Employees · Rankings · Monthly Trend (yearly report)</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Report Filters</h2>
        <p>Filter by branch or department. By default, reports only include employees with <strong>approved payroll</strong> — ensuring totals are final. Toggle this off to include all employees regardless of payroll status.</p>
      </div>
    </>
  )
}