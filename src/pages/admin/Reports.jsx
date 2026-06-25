// src/pages/admin/Reports.jsx
import PageHeader from '../../components/PageHeader'

export default function Reports() {
  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Reports"
        description="WorkGuard generates detailed reports for individual employees, company-wide monthly summaries, and full-year overviews. All reports export to PDF and Excel."
      />

      <div className="wg-section">
        <h2>Employee Monthly Report</h2>
        <p>A complete monthly breakdown for one employee.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Section</th><th>What's Included</th></tr></thead>
            <tbody>
              <tr><td>Profile summary</td><td>Name, role, branch, shift settings, salary at the time of payroll</td></tr>
              <tr><td>Payroll summary</td><td>Base salary, all deductions itemized, overtime, bonuses, net salary</td></tr>
              <tr><td>Attendance stats</td><td>Working days, absent days, late days, total late minutes, perfect-attendance days</td></tr>
              <tr><td>Daily attendance</td><td>Status and full details for every day of the month</td></tr>
              <tr><td>Leave records</td><td>All approved and pending leave for the period</td></tr>
              <tr><td>Overtime entries</td><td>Each OT entry with type, hours, rate, and amount</td></tr>
              <tr><td>Leave balances</td><td>Annual, sick, and unpaid day counts remaining</td></tr>
              <tr><td>Feedback notes</td><td>All performance notes and formal warnings for the period</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Company Monthly Report</h2>
        <p>A summary across all employees or a filtered group.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Section</th><th>What's Included</th></tr></thead>
            <tbody>
              <tr><td>Company totals</td><td>Total salary, deductions, overtime, and attendance summary across all employees</td></tr>
              <tr><td>Per-employee breakdown</td><td>Individual payroll and attendance row for each employee</td></tr>
              <tr><td>Rankings</td><td>Top employees by OT hours, most absent, most late minutes, and highest/lowest net salary</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Company Yearly Report</h2>
        <p>A full-year view combining all 12 months:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Month-by-month trend for salary, deductions, and attendance</div></li>
          <li><span className="wg-priority-num">→</span><div>Annual totals per employee across the whole year</div></li>
          <li><span className="wg-priority-num">→</span><div>Company-wide yearly rankings</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Access Control</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Role</th><th>Can Generate</th></tr></thead>
            <tbody>
              <tr><td>Global Admin</td><td>Reports for all employees and branches</td></tr>
              <tr><td>Branch Admin</td><td>Reports for employees in their assigned branches only</td></tr>
              <tr><td>Employee</td><td>Their own monthly report only (from their account)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Export Formats</h2>
        <div className="wg-comparison">
          <div className="wg-comparison__col">
            <div className="wg-comparison__header">📄 PDF</div>
            <div className="wg-comparison__body">
              <div className="wg-comparison__row">Formatted for printing or archiving</div>
              <div className="wg-comparison__row">Best for sharing with employees</div>
              <div className="wg-comparison__row">Includes all sections in a clean layout</div>
            </div>
          </div>
          <div className="wg-comparison__col">
            <div className="wg-comparison__header">📊 Excel</div>
            <div className="wg-comparison__body">
              <div className="wg-comparison__row">Multiple sheets per report type</div>
              <div className="wg-comparison__row">Best for analysis and filtering</div>
              <div className="wg-comparison__row">Can be imported into accounting software</div>
            </div>
          </div>
        </div>

        <h3>Excel Sheets — Employee Report</h3>
        <p>Summary · Leave · Overtime &amp; Bonus · Attendance · Feedback</p>

        <h3>Excel Sheets — Company Report</h3>
        <p>Dashboard · Summary · Employees · Rankings · Monthly Trend (yearly only)</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Report Filters</h2>
        <p>Filter by branch or department. By default, company reports only include employees with <strong>approved payroll</strong> for that period — ensuring all figures are final. Toggle this off to include employees regardless of payroll status.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>For a company report to be accurate, approve all employee payroll runs for the month before generating it.</div>
        </div>
      </div>
    </>
  )
}