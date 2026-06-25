// src/pages/employee/Reports.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function Reports() {
  return (
    <>
      <PageHeader
        eyebrow="My Account"
        title="My Reports"
        description="WorkGuard generates a detailed monthly report for you, covering your attendance, payroll, leave, and overtime."
      />

      <div className="wg-section">
        <h2>What's in Your Monthly Report</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Section</th><th>What's Included</th></tr></thead>
            <tbody>
              <tr><td>Profile summary</td><td>Your name, role, branch, and shift settings</td></tr>
              <tr><td>Payroll summary</td><td>Base salary, all deductions, overtime, bonuses, and net salary</td></tr>
              <tr><td>Attendance stats</td><td>Total working days, absences, late minutes, and perfect attendance days</td></tr>
              <tr><td>Daily breakdown</td><td>Status and details for every day of the month</td></tr>
              <tr><td>Leave records</td><td>All approved and pending leave for the month</td></tr>
              <tr><td>Overtime entries</td><td>Each overtime entry with type, hours, and amount</td></tr>
              <tr><td>Leave balances</td><td>Remaining annual, sick, and unpaid day counts</td></tr>
              <tr><td>Feedback notes</td><td>Performance notes visible to you</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Net Salary Formula</h2>
        <div className="wg-formula">Net Salary = Base Salary − Deductions + Overtime + Bonuses</div>
        <p>Your net salary can never go below zero.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Export Formats</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Format</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td><strong>PDF</strong></td><td>Printing, archiving, or sharing your report</td></tr>
              <tr><td><strong>Excel</strong></td><td>Reviewing and filtering your data in a spreadsheet</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}