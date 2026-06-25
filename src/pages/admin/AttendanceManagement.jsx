// src/pages/admin/AttendanceManagement.jsx

import PageHeader from '../../components/PageHeader'

export default function AttendanceManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Attendance"
        title="Attendance Management"
        description="Monitor and manage employee attendance records. Every check-in and check-out automatically updates the employee's daily record."
      />

      <div className="wg-section">
        <h2>How Attendance Is Recorded</h2>
        <ol className="wg-steps">
          <li>Employee opens the app and selects their branch</li>
          <li>Their registered device is verified</li>
          <li>GPS location is checked against the branch radius</li>
          <li>If all checks pass, the attendance record is created and the day's summary updated</li>
        </ol>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Check-In Conditions</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Situation</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>GPS accuracy &gt; 300 m</td><td>❌ Rejected</td></tr>
              <tr><td>Employee has Remote Permission for today</td><td>✅ All location checks bypassed</td></tr>
              <tr><td>Branch Emergency Mode is on</td><td>✅ WiFi bypassed — GPS still required</td></tr>
              <tr><td>Within branch radius</td><td>✅ Approved</td></tr>
              <tr><td>Outside branch radius</td><td>❌ Rejected</td></tr>
              <tr><td>Not on branch WiFi (when required)</td><td>❌ Rejected</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Invalid Attendance Records</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Reason</th><th>When It Happens</th></tr></thead>
            <tbody>
              <tr><td>Checked in after shift ended</td><td>Employee checked in after the shift end time</td></tr>
              <tr><td>Outside shift window</td><td>The check-in/out times don't overlap with the scheduled shift</td></tr>
              <tr><td>Manually invalidated</td><td>An admin explicitly invalidated the record</td></tr>
            </tbody>
          </table>
        </div>
        <p>If all records for a day are invalid, the day is treated as an absence.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Late Arrival Calculation</h2>
        <p>Late minutes are calculated from the first valid check-in. When moving between branches, WorkGuard uses this transit time priority:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">1</span><div>Employee's personal transit time (if set)</div></li>
          <li><span className="wg-priority-num">2</span><div>Previous branch's transit threshold</div></li>
          <li><span className="wg-priority-num">3</span><div>New branch's transit threshold</div></li>
          <li><span className="wg-priority-num">4</span><div>Company default (60 minutes)</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Multi-Branch Days</h2>
        <p>When an employee works at more than one branch during the same day, travel time between branches is tracked separately as transit time. Transit deductions use a different rate than break deductions. Overtime on multi-branch days is evaluated at the company-wide level, not per branch.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Admin Day Override</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Override</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td>Count as Working Day</td><td>Forces the day to count as a regular working day</td></tr>
              <tr><td>Keep Leave</td><td>Confirms that approved leave takes priority and clears any conflict</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Overrides cannot be applied to payroll-locked periods. All overrides are logged with your name, timestamp, and reason.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Bulk Operations</h2>
        <h3>Bulk Recalculate</h3>
        <p>Recalculates attendance summaries for all employees on a given date. Can be filtered by branch, department, or run company-wide. Automatically skips employees with approved payroll for that period.</p>

        <h3>Bulk Close Open Records</h3>
        <p>Forces checkout on all employees who checked in but never checked out on a given date. Requires filtering by at least one of: specific employee, branch, or department. Automatically skips payroll-approved periods.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Payroll Lock</h2>
        <p>Once a payroll run is approved for a given month, that period is locked — attendance records cannot be changed, leave cannot be approved for those days without override, and any edits to locked records are blocked. This protects the integrity of finalized payroll.</p>
      </div>
    </>
  )
}