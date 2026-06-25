// src/pages/admin/AutomatedJobs.jsx

import PageHeader from '../../components/PageHeader'

export default function AutomatedJobs() {
  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Automated Jobs"
        description="WorkGuard runs a set of scheduled jobs automatically every day. These handle record maintenance, holiday archiving, and payroll-related tasks without any manual action."
      />

      <div className="wg-section">
        <h2>Daily Jobs</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Job</th><th>What It Does</th><th>When It Runs</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Close Open Records</strong></td>
                <td>Automatically closes any open check-ins from the previous day for employees who forgot to check out</td>
                <td>Daily — early morning</td>
              </tr>
              <tr>
                <td><strong>Archive Holidays</strong></td>
                <td>Moves any active holidays whose end date has passed to "Archived" status</td>
                <td>Daily</td>
              </tr>
              <tr>
                <td><strong>Yearly Leave Reset</strong></td>
                <td>Resets annual and sick leave balances based on each employee's leave policy</td>
                <td>January 1 each year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Close Open Records — Details</h2>
        <p>When an employee checks in but never checks out, the system automatically closes their record at the end of the shift day. The record is marked as having a missed checkout.</p>
        <p>The employee receives an email notification informing them of the automatic closure. These records are flagged in the attendance report for review.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>Admins can also trigger this operation manually for a specific date using <strong>Bulk Close Open Records</strong> in Attendance Management.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Archive Holidays — Details</h2>
        <p>Any holiday or holiday plan that has fully passed is automatically moved to Archived status. This keeps your active holiday list clean and up to date without manual maintenance.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Yearly Leave Reset — Details</h2>
        <p>Every January 1, for all active employees, the system:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Calculates unused annual leave days</div></li>
          <li><span className="wg-priority-num">→</span><div>Carries forward the lesser of unused days or the carryover limit</div></li>
          <li><span className="wg-priority-num">→</span><div>Resets sick leave to the full annual allocation</div></li>
          <li><span className="wg-priority-num">→</span><div>Clears the used-day counters for both leave types</div></li>
        </ul>
        <p>Admins can preview the reset before it runs from the Leave Management section.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Missed Checkout Emails</h2>
        <p>When the close-open-records job runs, every affected employee receives a notification email that includes their check-in time, the branch they were at, and a note that their record was automatically closed. The email advises them to contact their manager if there's an issue.</p>
      </div>
    </>
  )
}