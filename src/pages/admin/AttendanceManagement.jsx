// // src/pages/admin/AttendanceManagement.jsx

// import PageHeader from '../../components/PageHeader'

// export default function AttendanceManagement() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Attendance"
//         title="Attendance Management"
//         description="Monitor and manage employee attendance records. Every check-in and check-out automatically updates the employee's daily record."
//       />

//       <div className="wg-section">
//         <h2>How Attendance Is Recorded</h2>
//         <ol className="wg-steps">
//           <li>Employee opens the app and selects their branch</li>
//           <li>Their registered device is verified</li>
//           <li>GPS location is checked against the branch radius</li>
//           <li>If all checks pass, the attendance record is created and the day's summary updated</li>
//         </ol>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Check-In Conditions</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Situation</th><th>Result</th></tr></thead>
//             <tbody>
//               <tr><td>GPS accuracy &gt; 300 m</td><td>❌ Rejected</td></tr>
//               <tr><td>Employee has Remote Permission for today</td><td>✅ All location checks bypassed</td></tr>
//               <tr><td>Branch Emergency Mode is on</td><td>✅ WiFi bypassed — GPS still required</td></tr>
//               <tr><td>Within branch radius</td><td>✅ Approved</td></tr>
//               <tr><td>Outside branch radius</td><td>❌ Rejected</td></tr>
//               <tr><td>Not on branch WiFi (when required)</td><td>❌ Rejected</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Invalid Attendance Records</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Reason</th><th>When It Happens</th></tr></thead>
//             <tbody>
//               <tr><td>Checked in after shift ended</td><td>Employee checked in after the shift end time</td></tr>
//               <tr><td>Outside shift window</td><td>The check-in/out times don't overlap with the scheduled shift</td></tr>
//               <tr><td>Manually invalidated</td><td>An admin explicitly invalidated the record</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <p>If all records for a day are invalid, the day is treated as an absence.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Late Arrival Calculation</h2>
//         <p>Late minutes are calculated from the first valid check-in. When moving between branches, WorkGuard uses this transit time priority:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">1</span><div>Employee's personal transit time (if set)</div></li>
//           <li><span className="wg-priority-num">2</span><div>Previous branch's transit threshold</div></li>
//           <li><span className="wg-priority-num">3</span><div>New branch's transit threshold</div></li>
//           <li><span className="wg-priority-num">4</span><div>Company default (60 minutes)</div></li>
//         </ul>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Multi-Branch Days</h2>
//         <p>When an employee works at more than one branch during the same day, travel time between branches is tracked separately as transit time. Transit deductions use a different rate than break deductions. Overtime on multi-branch days is evaluated at the company-wide level, not per branch.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Admin Day Override</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Override</th><th>Effect</th></tr></thead>
//             <tbody>
//               <tr><td>Count as Working Day</td><td>Forces the day to count as a regular working day</td></tr>
//               <tr><td>Keep Leave</td><td>Confirms that approved leave takes priority and clears any conflict</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="wg-callout wg-callout--warning">
//           <span className="wg-callout__icon">⚠️</span>
//           <div>Overrides cannot be applied to payroll-locked periods. All overrides are logged with your name, timestamp, and reason.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Bulk Operations</h2>
//         <h3>Bulk Recalculate</h3>
//         <p>Recalculates attendance summaries for all employees on a given date. Can be filtered by branch, department, or run company-wide. Automatically skips employees with approved payroll for that period.</p>

//         <h3>Bulk Close Open Records</h3>
//         <p>Forces checkout on all employees who checked in but never checked out on a given date. Requires filtering by at least one of: specific employee, branch, or department. Automatically skips payroll-approved periods.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Payroll Lock</h2>
//         <p>Once a payroll run is approved for a given month, that period is locked — attendance records cannot be changed, leave cannot be approved for those days without override, and any edits to locked records are blocked. This protects the integrity of finalized payroll.</p>
//       </div>
//     </>
//   )
// }




// src/pages/admin/AttendanceManagement.jsx

import PageHeader from '../../components/PageHeader'
import CheckInOut from '../../assets/screenshots/check-in-out.png'

import EmployeeAttendanceManag 
 from '../../assets/screenshots/EmpsAtt-Management.png'

 import AttendanceDetails 
 from '../../assets/screenshots/EmpAtt-details.png'

 import AttendanceRepairCenter 
 from '../../assets/screenshots/AttendanceRepairCenter.png'

 import CurrentlyCheckedIn
  from '../../assets/screenshots/Currently-Checked-In.png'

  import AbsenceDetails
  from '../../assets/screenshots/Leave-Profile-absence.png'

export default function AttendanceManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Attendance"
        title="Attendance Management"
        description="Monitor and manage employee attendance records. Every check-in and check-out automatically validates location, device, and shift rules — then updates the employee's daily record."
      />
<div className="wg-attendance-intro">
  <div className="wg-attendance-intro__text">
    <h2>How Attendance Is Recorded</h2>

    <ol className="wg-steps">
      <li>Employee opens the app and selects their branch</li>
      <li>Their registered device is verified</li>
      <li>GPS location is checked against the branch radius</li>
      <li>If all checks pass, the attendance record is created</li>
      <li>The day's attendance summary is updated automatically</li>
    </ol>
  </div>

  <div className="wg-attendance-intro__image">
    <img
      src={CheckInOut}
      alt="Attendance Check In Out"
      className="wg-doc-image"
    />

    <p className="wg-image-caption">
      Employee check-in and check-out screen.
    </p>
  </div>
</div>
      {/* <div className="wg-section">
        <h2>How Attendance Is Recorded</h2>
        <ol className="wg-steps">
          <li>Employee opens the app and selects their branch</li>
          <li>Their registered device is verified</li>
          <li>GPS location is checked against the branch radius</li>
          <li>If all checks pass, the attendance record is created</li>
          <li>The day's attendance summary is updated automatically</li>
        </ol>

        <div className='img-small'>
            <img
              src={CheckInOut}
              alt="Change Employment Status"
              className="wg-doc-image"
            />
          </div>
        
            <p className="wg-image-caption">
              Attendance check in-out
            </p>
      </div> */}

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Check-In Conditions</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Situation</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>GPS accuracy &gt; 300 m</td><td>❌ Rejected — employee must find a better signal</td></tr>
              <tr><td>Employee has Remote Permission for today</td><td>✅ Approved — all location and WiFi checks bypassed</td></tr>
              <tr><td>Branch Emergency Mode is on</td><td>✅ WiFi check bypassed — GPS still required</td></tr>
              <tr><td>Employee is within branch radius</td><td>✅ Approved</td></tr>
              <tr><td>Employee is outside branch radius</td><td>❌ Rejected</td></tr>
              <tr><td>Not on branch WiFi (when required)</td><td>❌ Rejected</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Daily Attendance Status</h2>
        <p>WorkGuard assigns every employee a status for each day automatically. The system checks each day in this order — the first applicable status wins:</p>
        <ol className="wg-steps">
          <li>Employment status — is the employee active on this day?</li>
          <li>Holidays — is there a declared holiday for this employee's branch?</li>
          <li>Day-off schedule — is this day in their working days list?</li>
          <li>Approved leave — is there an approved leave request covering this day?</li>
          <li>Attendance records — did the employee check in and out with valid records?</li>
        </ol>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--green">Working Day</span></td><td>Employee was present and attendance is valid</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Absent</span></td><td>Working day with no valid attendance recorded</td></tr>
              <tr><td><span className="wg-badge wg-badge--teal">Public Holiday</span></td><td>Declared holiday — no attendance expected</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Day Off</span></td><td>Not a scheduled working day for this employee</td></tr>
              <tr><td><span className="wg-badge wg-badge--blue">Paid Leave</span></td><td>Approved paid leave for this day</td></tr>
              <tr><td><span className="wg-badge wg-badge--yellow">Unpaid Leave</span></td><td>Approved unpaid leave for this day</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">No Data</span></td><td>Outside the employee's employment period</td></tr>
            </tbody>
          </table>
        </div>

        <div>
    <img
      src={EmployeeAttendanceManag}
      alt="Change Employment Status"
      className="wg-doc-image"
    />
  </div>

    <p className="wg-image-caption">
       Attendance Management Page
    </p>
      </div>

      <hr className="wg-divider" />


 {/* Real-Time Branch Presence  */}

<hr className="wg-divider" />

<div className="wg-section">
  <h2>Real-Time Branch Presence</h2>

  <p>
  WorkGuard allows administrators to monitor employees who are currently checked in at each branch in real time.
  This feature is available directly from the Branch Management module and helps managers understand workforce availability across locations.
</p>

  <ul className="wg-priority-list">
    <li>
      <span className="wg-priority-num">→</span>
      <div>
        View employees currently checked in at a specific branch.
      </div>
    </li>
<li>
  <span className="wg-priority-num">→</span>
  <div>
    Accessible directly from the Branch Management page for each branch.
  </div>
</li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Display employee usernames, departments, and check-in times.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Global Admins can view all branches, while Branch Admins can only access branches within their assigned scope.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Presence information updates automatically as employees check in or check out.
      </div>
    </li>
  </ul>

  <div className="wg-callout wg-callout--tip">
    <span className="wg-callout__icon">💡</span>
    <div>
      This feature provides a live overview of workforce distribution across company branches.
    </div>
  </div>

  <img
    src={CurrentlyCheckedIn}
    alt="Employees currently checked in"
    className="wg-doc-image"
  />

  <p className="wg-image-caption">
  Employees currently checked in at a branch, viewed from the Branch Management module.
</p>
</div>


      <div className="wg-section">
        <h2>Invalid Attendance Records</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Reason</th><th>When It Happens</th></tr></thead>
            <tbody>
              <tr><td>Checked in after shift ended</td><td>Employee checked in after the shift end time</td></tr>
              <tr><td>Outside shift window</td><td>The check-in/out times don't overlap with the employee's scheduled shift</td></tr>
              <tr><td>Manually invalidated</td><td>An admin explicitly invalidated the record</td></tr>
            </tbody>
          </table>
        </div>
        <p>If <strong>all</strong> records for a day are invalid, that day is treated as an absence.</p>
      </div>

      <hr className="wg-divider" />
<hr className="wg-divider" />

<div className="wg-section">
  <h2>Absent Days Management</h2>

  <p>
    WorkGuard automatically tracks employee absences based on attendance records,
    approved leave requests, holidays, and working schedules.
    Administrators can review absence history for any employee by selecting a specific month and year.
  </p>

  <ul className="wg-priority-list">
    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Review absence history for individual employees.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Filter absence records by employee, month, and year.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Absences are calculated automatically from attendance, leave requests, holidays, and work schedules.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Absence totals are automatically reflected in payroll calculations according to the employee's effective attendance policy.
      </div>
    </li>
  </ul>

  <div className="wg-callout wg-callout--tip">
    <span className="wg-callout__icon">💡</span>
    <div>
      If attendance records are corrected, administrators can use the Attendance Repair Center to recalculate absences immediately.
    </div>
  </div>

  <img
    src={AbsenceDetails}
    alt="Employee absence history"
    className="wg-doc-image"
  />

  <p className="wg-image-caption">
    Employee absence history filtered by month and year in the employee profile.
  </p>
</div>

 <hr className="wg-divider" />
      <div className="wg-section">
        <h2>Late Arrival Calculation</h2>
        <p>Late minutes are calculated from the first valid check-in of the day.</p>
        <p><strong>Standard case:</strong> Late minutes = check-in time − shift start time − grace period.</p>
        <p><strong>When moving between branches:</strong> If an employee just checked out of one branch and is checking into another, the system calculates late minutes based on the travel time — not from the original shift start. The transit time allowance is resolved using this priority:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">1</span><div>Employee's personal transit time (if set)</div></li>
          <li><span className="wg-priority-num">2</span><div>Previous branch's transit threshold</div></li>
          <li><span className="wg-priority-num">3</span><div>New branch's transit threshold</div></li>
          <li><span className="wg-priority-num">4</span><div>Company default (60 minutes)</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Break / Gap Deductions</h2>
        <p>When an employee checks out and back into the <strong>same branch</strong>, the gap is tracked as break time. The attendance policy includes a daily break allowance. Time exceeding the allowance is subject to a deduction.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div><strong>Example:</strong> Allowance = 30 minutes. Employee takes a 55-minute break. Deductible gap = 55 − 30 = <strong>25 minutes</strong>.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Multi-Branch Days</h2>
        <p>When an employee works at more than one branch during the same day:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Travel time between branches is tracked separately as <strong>transit time</strong></div></li>
          <li><span className="wg-priority-num">→</span><div>Transit deductions use a different rate from break deductions and are calculated independently</div></li>
          <li><span className="wg-priority-num">→</span><div>Overtime on that day is evaluated at the company-wide level, not per branch</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Holidays &amp; Multi-Branch Employees</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Scenario</th><th>Holiday Status</th></tr></thead>
            <tbody>
              <tr><td>Single-branch employee</td><td>Holiday if their branch has a declared holiday</td></tr>
              <tr><td>Multi-branch — was present</td><td>Holiday only if <strong>all</strong> branches they attended have a holiday</td></tr>
              <tr><td>Multi-branch — was absent</td><td>Holiday if <strong>any</strong> of their assigned branches has a holiday</td></tr>
              <tr><td>Worked on a holiday</td><td>Attendance recorded and flagged for admin review — holiday OT may apply</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />


<div className="wg-section">
  <h2>Attendance Policy Summary</h2>

  <p>
    Each employee has an effective attendance policy that governs
    grace periods and deduction rates. See Attendance Policies
    for full configuration details.
  </p>

  

  <div className="wg-table-wrap">
    <table className="wg-table">
      <thead>
        <tr>
          <th>Setting</th>
          <th>What It Controls</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Late grace period</td>
          <td>How many minutes late before deductions start</td>
        </tr>

        <tr>
          <td>Early leave grace period</td>
          <td>How many minutes early before deductions start</td>
        </tr>

        <tr>
          <td>Break allowance</td>
          <td>Total daily break time before deductions start</td>
        </tr>

        <tr>
          <td>Deduction rates</td>
          <td>
            How much is deducted per late, early, transit,
            or break minute
          </td>
        </tr>

        <tr>
          <td>Absence deduction</td>
          <td>Whether and how much absence affects salary</td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
<div >
    <img
      src={AttendanceDetails}
      alt="Change Employment Status"
      className="wg-doc-image"
    />
  </div>

    <p className="wg-image-caption">
      Attendance Details
    </p>

</div>

<hr className="wg-divider" />

      <div className="wg-section">
        <h2>Payroll Lock</h2>
        <p>Once a payroll run has been <strong>approved</strong> for a given month, that period is locked:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Attendance records for that month cannot be changed or recalculated</div></li>
          <li><span className="wg-priority-num">→</span><div>Leave cannot be approved for days in that period without admin override</div></li>
          <li><span className="wg-priority-num">→</span><div>Any edits to locked records are blocked</div></li>
        </ul>
        <p>This protects the integrity of finalized payroll from accidental changes.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Admin Day Override</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Override Option</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td>Count as Working Day</td><td>Forces the day to count as a regular working day</td></tr>
              <tr><td>Keep Leave</td><td>Confirms that an approved leave takes priority and clears any conflict — this day will not be automatically recalculated again</td></tr>
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
  <h2>Attendance Repair Center</h2>

  <p>
    Although WorkGuard automatically performs daily attendance maintenance through scheduled system jobs,
    administrators can also run these operations manually whenever immediate corrections are required.
  </p>

  <div className="wg-callout wg-callout--tip">
    <span className="wg-callout__icon">ℹ️</span>
    <div>
      Automatic system jobs handle attendance recalculation and open-record processing every day.
      The Attendance Repair Center allows administrators to trigger the same operations manually without waiting for the next scheduled run.
    </div>
  </div>

  <h3>Attendance Recalculation</h3>

  <ul className="wg-priority-list">
    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Recalculate attendance summaries for all employees on a selected date.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Recalculate attendance for a specific employee after attendance records are repaired or modified.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Operations can be filtered by employee, branch, department, or run company-wide.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Payroll-approved periods are automatically skipped.
      </div>
    </li>
  </ul>

  <h3>Close Open Records</h3>

  <ul className="wg-priority-list">
    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Automatically closes attendance records that contain a check-in without a matching check-out.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Can be executed for all matching employees or for a single employee only.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Supports filtering by employee, branch, or department.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Closed records are automatically recalculated after processing.
      </div>
    </li>
  </ul>
</div>
      

      <div>
    <img
      src={AttendanceRepairCenter}
      alt="Change Employment Status"
      className="wg-doc-image"
    />
  </div>

    <p className="wg-image-caption">
     Attendance Repair Center Page
    </p>
    </>
  )
}