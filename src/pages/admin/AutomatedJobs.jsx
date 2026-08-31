// // src/pages/admin/AutomatedJobs.jsx

// import PageHeader from '../../components/PageHeader'

// export default function AutomatedJobs() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Operations"
//         title="Automated Jobs & System Tasks"
//         description="WorkGuard runs several automated background tasks to keep attendance records accurate, notify employees, and maintain the system. Here's what runs automatically and when."
//       />
// <div className="wg-callout wg-callout--tip">
//   <span className="wg-callout__icon">⚙️</span>
//   <div>
//     These jobs run automatically in the background. No administrator action is
//     required unless a manual operation is available for a specific task.
//   </div>
// </div>
//       <div className="wg-section">
//         <h2>Scheduled Tasks Overview</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Task</th><th>Schedule</th><th>What It Does</th></tr></thead>
//             <tbody>
//               <tr>
//                 <td><strong>Close Missed Checkouts</strong></td>
//                 <td>Every hour</td>
//                 <td>Finds and closes attendance records where checkout was never recorded</td>
//               </tr>
//               <tr>
//                 <td><strong>Ensure Daily Summaries</strong></td>
//                 <td>3:00 AM UTC daily</td>
//                 <td>Makes sure every employee has an attendance record for the previous day</td>
//               </tr>
//               <tr>
//                 <td><strong>Archive Expired Holidays</strong></td>
//                 <td>12:05 AM UTC daily</td>
//                 <td>Archives holidays whose end date has passed</td>
//               </tr>
//               <tr>
//                 <td><strong>Auto-Generate Payroll</strong></td>
//                 <td>6:00 AM UTC daily</td>
//                 <td>Generates payroll runs automatically (if enabled)</td>
//               </tr>
//               <tr>
//                 <td><strong>Yearly Leave Reset</strong></td>
//                 <td>January 1, 12:00 AM UTC</td>
//                 <td>Resets and carries over leave balances for the new year</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Close Missed Checkouts</h2>
//         <p>If an employee checks in but doesn't check out before a certain period after their shift ends, WorkGuard automatically handles this:</p>
//         <ol className="wg-steps">
//           <li>The system waits for the shift end time plus a configurable grace period (default: <strong>5 hours</strong>)</li>
//           <li>If no checkout is recorded by then, the employee receives an <strong>email warning</strong> — giving them a chance to manually check out before invalidation</li>
//           <li>If they still haven't checked out, the attendance record is <strong>automatically closed and invalidated</strong></li>
//           <li>After invalidation, the admin receives a report of all affected employees</li>
//         </ol>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">💡</span>
//           <div><strong>Why does this run every hour?</strong> Different branches and employees have shifts ending at different local times. Running hourly ensures no one is missed regardless of their timezone.</div>
//         </div>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Admins can also trigger this operation manually for a specific date using <strong>Bulk Close Open Records</strong> in Attendance Management.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Checkout Reminder</h2>
//         <p>When an employee checks in, a timer starts automatically. If the employee hasn't checked out by their shift end time plus a short grace period (default: <strong>30 minutes</strong>), a reminder email is sent.</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">→</span><div>This works correctly for night shift employees — the reminder fires the next day at the correct local time</div></li>
//           <li><span className="wg-priority-num">→</span><div>If the check-in happens after the reminder time would have already passed, the reminder fires immediately</div></li>
//         </ul>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Daily Attendance Catch-Up</h2>
//         <p>Every night at <strong>3:00 AM UTC</strong>, the system ensures every active employee has an attendance record for the previous day. If any record is missing (e.g. due to an employee having no activity), the system creates it automatically.</p>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">💡</span>
//           <div>By 3 AM UTC, even employees in the latest timezones (UTC+14) have completed their calendar day — so no records are ever missed.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Archive Expired Holidays</h2>
//         <p>Every night at <strong>12:05 AM UTC</strong>, the system checks for any active holidays whose end date has passed and archives them automatically. This keeps your holiday list clean and ensures outdated holidays don't affect attendance calculations.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Yearly Leave Reset</h2>
//         <p>On <strong>January 1</strong> each year at 12:00 AM UTC, leave balances are automatically reset for all active employees:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">→</span><div>Unused annual leave is carried over up to each employee's configured carryover limit</div></li>
//           <li><span className="wg-priority-num">→</span><div>Sick leave resets to the full annual allocation (no carryover)</div></li>
//           <li><span className="wg-priority-num">→</span><div>Used-day counters are cleared</div></li>
//         </ul>
//         <div className="wg-callout wg-callout--warning">
//           <span className="wg-callout__icon">⚠️</span>
//           <div>Employees with <strong>approved payroll</strong> for the target year are skipped in the reset to protect finalized data. The reset processes employees in batches and creates a complete log entry when finished.</div>
//         </div>
//         <p>A preview of the reset is available from the Leave Management section before it runs.</p>
//       </div>

//       <hr className="wg-divider" />

// <div className="wg-section">
//   <h2>Manual Alternatives</h2>

//   <div className="wg-table-wrap">
//     <table className="wg-table">
//       <thead>
//         <tr>
//           <th>Automatic Job</th>
//           <th>Manual Alternative</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Close Missed Checkouts</td>
//           <td>Bulk Close Open Records</td>
//         </tr>
//         <tr>
//           <td>Payroll Generation</td>
//           <td>Generate Payroll</td>
//         </tr>
//         <tr>
//           <td>Yearly Leave Reset</td>
//           <td>Preview & Run from Leave Management</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>
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
        description="WorkGuard runs automated background processes to maintain attendance, payroll, leave, and workforce data. Global Admins can configure supported job schedules while execution remains controlled by the WorkGuard backend."
      />

      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <div className="wg-callout wg-callout--tip">
        <span className="wg-callout__icon">⚙️</span>

        <div>
          <strong>Background automation</strong>

          <p style={{ margin: '6px 0 0' }}>
            Automated jobs run on the WorkGuard server without requiring
            administrator action. The scheduling interface displays the
            configuration provided by the backend and allows Global Admins
            to change supported scheduling settings.
          </p>
        </div>
      </div>


      {/* =========================================================
          AUTOMATED JOB SCHEDULING
      ========================================================= */}

      <div className="wg-section">
        <h2>Automated Job Scheduling</h2>

        <p>
          WorkGuard provides server-controlled scheduling for selected
          automated background jobs. Each job has an effective execution
          time and frequency determined by the WorkGuard backend.
        </p>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Job</th>
                <th>Purpose</th>
                <th>Frequency</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Daily Attendance Summary</strong>
                </td>

                <td>
                  Recalculates and maintains daily attendance summaries.
                </td>

                <td>Daily</td>
              </tr>

              <tr>
                <td>
                  <strong>Automatic Payroll</strong>
                </td>

                <td>
                  Generates payroll runs automatically for eligible employees.
                </td>

                <td>Monthly</td>
              </tr>

              <tr>
                <td>
                  <strong>Yearly Leave Reset</strong>
                </td>

                <td>
                  Creates the annual leave year and resets yearly leave balances.
                </td>

                <td>Yearly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          WHO CAN CONFIGURE
      ========================================================= */}

      <div className="wg-section">
        <h2>Schedule Control & Permissions</h2>

        <p>
          Automated job scheduling is controlled at the server level.
          Only the <strong>Global Admin</strong> can modify the scheduling
          configuration.
        </p>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Access</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Global Admin</strong>
                </td>

                <td>
                  Can view and modify supported job scheduling settings.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Other Admins</strong>
                </td>

                <td>
                  Can view the scheduling information but cannot change
                  the configuration.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          SERVER CONTROLLED
      ========================================================= */}

      <div className="wg-section">
        <h2>Server-Controlled Scheduling</h2>

        <p>
          The scheduling page does not calculate the actual execution
          schedule itself. The WorkGuard backend provides the values used
          by the interface.
        </p>

        <ul className="wg-priority-list">
          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Effective Time</strong> — the execution time currently
              used by the job.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Frequency</strong> — how often the automated job runs.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Next Run</strong> — the next execution determined by
              the backend.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Processing Period</strong> — the period that the job
              processes during its execution.
            </div>
          </li>
        </ul>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">🛡️</span>

          <div>
            <strong>Backend is the source of truth</strong>

            <p style={{ margin: '6px 0 0' }}>
              The displayed schedule reflects the values supplied by the
              WorkGuard backend. The documentation interface does not
              independently calculate or execute automated jobs.
            </p>
          </div>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          PRODUCTION DEFAULT
      ========================================================= */}

      <div className="wg-section">
        <h2>Production Default Schedule</h2>

        <p>
          Each supported automated job has a WorkGuard Production Default
          schedule defined by the server.
        </p>

        <p>
          When no custom schedule hour is configured, the job uses the
          server-side Production Default.
        </p>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">🔄</span>

          <div>
            <strong>Restoring the default</strong>

            <p style={{ margin: '6px 0 0' }}>
              Clearing a custom schedule restores the WorkGuard
              Production Default. The administrator does not need to
              manually enter the default execution time.
            </p>
          </div>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          CUSTOM SCHEDULE
      ========================================================= */}

      <div className="wg-section">
        <h2>Custom Schedule</h2>

        <p>
          A Global Admin can configure a custom execution hour for supported
          automated jobs.
        </p>

        <ul className="wg-priority-list">
          <li>
            <span className="wg-priority-num">01</span>
            <div>
              The administrator selects an execution hour from
              <strong> 00 to 23</strong>.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">02</span>
            <div>
              The selected hour is used as the job's custom schedule.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">03</span>
            <div>
              Minutes are fixed at <strong>:00</strong>.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">04</span>
            <div>
              The backend determines the resulting next execution.
            </div>
          </li>
        </ul>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          TENANT TIMEZONE
      ========================================================= */}

      <div className="wg-section">
        <h2>Tenant Timezone</h2>

        <p>
          Custom schedule hours are interpreted using the company's
          configured tenant timezone.
        </p>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">🌍</span>

          <div>
            <strong>Example</strong>

            <p style={{ margin: '6px 0 0' }}>
              If a tenant is configured with the timezone
              <strong> Africa/Cairo</strong> and a custom schedule hour is
              configured as <strong>06</strong>, the effective schedule is
              displayed as <strong>06:00</strong> according to that tenant
              timezone.
            </p>
          </div>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          PROCESSING PERIOD
      ========================================================= */}

      <div className="wg-section">
        <h2>Processing Period</h2>

        <p>
          Automated jobs operate on a defined processing period. The period
          displayed in the scheduling interface is determined by the
          backend.
        </p>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Example</th>
                <th>Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Previous Business Day</strong>
                </td>

                <td>
                  The job processes the previous business day.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Previous Month</strong>
                </td>

                <td>
                  The job processes the previous month.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Current Year</strong>
                </td>

                <td>
                  The job processes the current year.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          ATTENDANCE INVALIDATION CONFIGURATION
      ========================================================= */}

      <div className="wg-section">
        <h2>Automatic Attendance Invalidation</h2>

        <p>
          WorkGuard can automatically handle attendance records that remain
          open after the expected checkout period.
        </p>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Grace Period</strong>
                </td>

                <td>
                  Defines the amount of time allowed after the expected
                  checkout before an open attendance record can be
                  automatically invalidated.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Warning Before Invalidation</strong>
                </td>

                <td>
                  Defines how long before automatic invalidation the
                  employee receives a warning.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>

          <div>
            <strong>Configuration guidance</strong>

            <p style={{ margin: '6px 0 0' }}>
              The grace period should take expected overtime into account.
              A period that is too short may cause an open attendance
              record to be invalidated before the employee has a reasonable
              opportunity to check out.
            </p>
          </div>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          EXISTING AUTOMATED TASKS
      ========================================================= */}

      <div className="wg-section">
        <h2>Scheduled Tasks Overview</h2>

        <p>
          The following automated background tasks are handled by
          WorkGuard.
        </p>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Schedule</th>
                <th>What It Does</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Close Missed Checkouts</strong>
                </td>

                <td>Every hour</td>

                <td>
                  Finds and closes attendance records where checkout was
                  never recorded.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Ensure Daily Summaries</strong>
                </td>

                <td>3:00 AM UTC daily</td>

                <td>
                  Makes sure every employee has an attendance record for
                  the previous day.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Archive Expired Holidays</strong>
                </td>

                <td>12:05 AM UTC daily</td>

                <td>
                  Archives holidays whose end date has passed.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Auto-Generate Payroll</strong>
                </td>

                <td>6:00 AM UTC daily</td>

                <td>
                  Generates payroll runs automatically if enabled.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Yearly Leave Reset</strong>
                </td>

                <td>January 1, 12:00 AM UTC</td>

                <td>
                  Resets and carries over leave balances for the new year.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">ℹ️</span>

          <div>
            The schedules shown in this overview describe the automated
            background processes documented for WorkGuard. For configurable
            scheduling, the effective time and next execution displayed in
            the scheduling interface are provided by the backend.
          </div>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          CLOSE MISSED CHECKOUTS
      ========================================================= */}

      <div className="wg-section">
        <h2>Close Missed Checkouts</h2>

        <p>
          If an employee checks in but does not check out before the
          configured period after their shift ends, WorkGuard automatically
          handles the open attendance record.
        </p>

        <ol className="wg-steps">
          <li>
            The system waits for the shift end time plus the configured
            grace period.
          </li>

          <li>
            If no checkout is recorded, the employee receives an email
            warning before invalidation.
          </li>

          <li>
            If the attendance record remains open, it is automatically
            closed and invalidated.
          </li>

          <li>
            After invalidation, the admin receives a report of affected
            employees.
          </li>
        </ol>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>

          <div>
            <strong>Why does this run every hour?</strong>

            <p style={{ margin: '6px 0 0' }}>
              Different branches and employees can have shifts ending at
              different local times. Running the process hourly helps ensure
              that open records are handled regardless of their shift timing
              and timezone.
            </p>
          </div>
        </div>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>

          <div>
            Admins can also trigger this operation manually for a specific
            date using <strong>Bulk Close Open Records</strong> in
            Attendance Management.
          </div>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          CHECKOUT REMINDER
      ========================================================= */}

      <div className="wg-section">
        <h2>Checkout Reminder</h2>

        <p>
          When an employee checks in, a timer starts automatically. If the
          employee has not checked out by their shift end time plus the
          configured reminder period, a reminder email is sent.
        </p>

        <ul className="wg-priority-list">
          <li>
            <span className="wg-priority-num">→</span>

            <div>
              This works correctly for night-shift employees, with the
              reminder firing at the correct local time.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">→</span>

            <div>
              If the check-in happens after the reminder time would already
              have passed, the reminder fires immediately.
            </div>
          </li>
        </ul>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          DAILY ATTENDANCE CATCH-UP
      ========================================================= */}

      <div className="wg-section">
        <h2>Daily Attendance Catch-Up</h2>

        <p>
          Every night at <strong>3:00 AM UTC</strong>, the system ensures
          every active employee has an attendance record for the previous
          day. If a record is missing, the system creates it automatically.
        </p>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>

          <div>
            By 3:00 AM UTC, even employees in the latest timezones
            have completed their calendar day, helping ensure that
            attendance records are not missed.
          </div>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          ARCHIVE HOLIDAYS
      ========================================================= */}

      <div className="wg-section">
        <h2>Archive Expired Holidays</h2>

        <p>
          Every night at <strong>12:05 AM UTC</strong>, the system checks
          for active holidays whose end date has passed and archives them
          automatically.
        </p>

        <p>
          This keeps the holiday list clean and prevents outdated holidays
          from affecting attendance calculations.
        </p>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          YEARLY LEAVE RESET
      ========================================================= */}

      <div className="wg-section">
        <h2>Yearly Leave Reset</h2>

        <p>
          On <strong>January 1</strong> each year at
          <strong> 12:00 AM UTC</strong>, leave balances are automatically
          reset for active employees.
        </p>

        <ul className="wg-priority-list">
          <li>
            <span className="wg-priority-num">→</span>

            <div>
              Unused annual leave is carried over up to each employee's
              configured carryover limit.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">→</span>

            <div>
              Sick leave resets to the full annual allocation with no
              carryover.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">→</span>

            <div>
              Used-day counters are cleared.
            </div>
          </li>
        </ul>

        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>

          <div>
            Employees with <strong>approved payroll</strong> for the target
            year are skipped to protect finalized data. The reset processes
            employees in batches and creates a complete log entry when
            finished.
          </div>
        </div>

        <p>
          A preview of the reset is available from the Leave Management
          section before it runs.
        </p>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          MANUAL ALTERNATIVES
      ========================================================= */}

      <div className="wg-section">
        <h2>Manual Alternatives</h2>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Automatic Job</th>
                <th>Manual Alternative</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Close Missed Checkouts</td>
                <td>Bulk Close Open Records</td>
              </tr>

              <tr>
                <td>Payroll Generation</td>
                <td>Generate Payroll</td>
              </tr>

              <tr>
                <td>Yearly Leave Reset</td>
                <td>Preview &amp; Run from Leave Management</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <hr className="wg-divider" />


      {/* =========================================================
          IMPORTANT NOTE
      ========================================================= */}

      <div className="wg-section">
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">🛡️</span>

          <div>
            <strong>Important</strong>

            <p style={{ margin: '6px 0 0' }}>
              Automated jobs execute in the WorkGuard backend. The scheduling
              interface is used to configure supported schedules and display
              the effective configuration returned by the server. The backend
              remains responsible for determining when each job becomes due
              and what processing period it uses.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}