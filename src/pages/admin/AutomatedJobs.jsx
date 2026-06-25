// // src/pages/admin/AutomatedJobs.jsx

// import PageHeader from '../../components/PageHeader'

// export default function AutomatedJobs() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Operations"
//         title="Automated Jobs"
//         description="WorkGuard runs a set of scheduled jobs automatically every day. These handle record maintenance, holiday archiving, and payroll-related tasks without any manual action."
//       />

//       <div className="wg-section">
//         <h2>Daily Jobs</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Job</th><th>What It Does</th><th>When It Runs</th></tr></thead>
//             <tbody>
//               <tr>
//                 <td><strong>Close Open Records</strong></td>
//                 <td>Automatically closes any open check-ins from the previous day for employees who forgot to check out</td>
//                 <td>Daily — early morning</td>
//               </tr>
//               <tr>
//                 <td><strong>Archive Holidays</strong></td>
//                 <td>Moves any active holidays whose end date has passed to "Archived" status</td>
//                 <td>Daily</td>
//               </tr>
//               <tr>
//                 <td><strong>Yearly Leave Reset</strong></td>
//                 <td>Resets annual and sick leave balances based on each employee's leave policy</td>
//                 <td>January 1 each year</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Close Open Records — Details</h2>
//         <p>When an employee checks in but never checks out, the system automatically closes their record at the end of the shift day. The record is marked as having a missed checkout.</p>
//         <p>The employee receives an email notification informing them of the automatic closure. These records are flagged in the attendance report for review.</p>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">💡</span>
//           <div>Admins can also trigger this operation manually for a specific date using <strong>Bulk Close Open Records</strong> in Attendance Management.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Archive Holidays — Details</h2>
//         <p>Any holiday or holiday plan that has fully passed is automatically moved to Archived status. This keeps your active holiday list clean and up to date without manual maintenance.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Yearly Leave Reset — Details</h2>
//         <p>Every January 1, for all active employees, the system:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">→</span><div>Calculates unused annual leave days</div></li>
//           <li><span className="wg-priority-num">→</span><div>Carries forward the lesser of unused days or the carryover limit</div></li>
//           <li><span className="wg-priority-num">→</span><div>Resets sick leave to the full annual allocation</div></li>
//           <li><span className="wg-priority-num">→</span><div>Clears the used-day counters for both leave types</div></li>
//         </ul>
//         <p>Admins can preview the reset before it runs from the Leave Management section.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Missed Checkout Emails</h2>
//         <p>When the close-open-records job runs, every affected employee receives a notification email that includes their check-in time, the branch they were at, and a note that their record was automatically closed. The email advises them to contact their manager if there's an issue.</p>
//       </div>
//     </>
//   )
// }

// src/pages/admin/AutomatedJobs.jsx

import PageHeader from '../../components/PageHeader'

export default function AutomatedJobs() {
  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Automated Jobs & System Tasks"
        description="WorkGuard runs several automated background tasks to keep attendance records accurate, notify employees, and maintain the system. Here's what runs automatically and when."
      />

      <div className="wg-section">
        <h2>Scheduled Tasks Overview</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Task</th><th>Schedule</th><th>What It Does</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Close Missed Checkouts</strong></td>
                <td>Every hour</td>
                <td>Finds and closes attendance records where checkout was never recorded</td>
              </tr>
              <tr>
                <td><strong>Ensure Daily Summaries</strong></td>
                <td>3:00 AM UTC daily</td>
                <td>Makes sure every employee has an attendance record for the previous day</td>
              </tr>
              <tr>
                <td><strong>Archive Expired Holidays</strong></td>
                <td>12:05 AM UTC daily</td>
                <td>Archives holidays whose end date has passed</td>
              </tr>
              <tr>
                <td><strong>Auto-Generate Payroll</strong></td>
                <td>6:00 AM UTC daily</td>
                <td>Generates payroll runs automatically (if enabled)</td>
              </tr>
              <tr>
                <td><strong>Yearly Leave Reset</strong></td>
                <td>January 1, 12:00 AM UTC</td>
                <td>Resets and carries over leave balances for the new year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Close Missed Checkouts</h2>
        <p>If an employee checks in but doesn't check out before a certain period after their shift ends, WorkGuard automatically handles this:</p>
        <ol className="wg-steps">
          <li>The system waits for the shift end time plus a configurable grace period (default: <strong>5 hours</strong>)</li>
          <li>If no checkout is recorded by then, the employee receives an <strong>email warning</strong> — giving them a chance to manually check out before invalidation</li>
          <li>If they still haven't checked out, the attendance record is <strong>automatically closed and invalidated</strong></li>
          <li>After invalidation, the admin receives a report of all affected employees</li>
        </ol>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div><strong>Why does this run every hour?</strong> Different branches and employees have shifts ending at different local times. Running hourly ensures no one is missed regardless of their timezone.</div>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Admins can also trigger this operation manually for a specific date using <strong>Bulk Close Open Records</strong> in Attendance Management.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Checkout Reminder</h2>
        <p>When an employee checks in, a timer starts automatically. If the employee hasn't checked out by their shift end time plus a short grace period (default: <strong>30 minutes</strong>), a reminder email is sent.</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>This works correctly for night shift employees — the reminder fires the next day at the correct local time</div></li>
          <li><span className="wg-priority-num">→</span><div>If the check-in happens after the reminder time would have already passed, the reminder fires immediately</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Daily Attendance Catch-Up</h2>
        <p>Every night at <strong>3:00 AM UTC</strong>, the system ensures every active employee has an attendance record for the previous day. If any record is missing (e.g. due to an employee having no activity), the system creates it automatically.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>By 3 AM UTC, even employees in the latest timezones (UTC+14) have completed their calendar day — so no records are ever missed.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Archive Expired Holidays</h2>
        <p>Every night at <strong>12:05 AM UTC</strong>, the system checks for any active holidays whose end date has passed and archives them automatically. This keeps your holiday list clean and ensures outdated holidays don't affect attendance calculations.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Yearly Leave Reset</h2>
        <p>On <strong>January 1</strong> each year at 12:00 AM UTC, leave balances are automatically reset for all active employees:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Unused annual leave is carried over up to each employee's configured carryover limit</div></li>
          <li><span className="wg-priority-num">→</span><div>Sick leave resets to the full annual allocation (no carryover)</div></li>
          <li><span className="wg-priority-num">→</span><div>Used-day counters are cleared</div></li>
        </ul>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Employees with <strong>approved payroll</strong> for the target year are skipped in the reset to protect finalized data. The reset processes employees in batches and creates a complete log entry when finished.</div>
        </div>
        <p>A preview of the reset is available from the Leave Management section before it runs.</p>
      </div>
    </>
  )
}