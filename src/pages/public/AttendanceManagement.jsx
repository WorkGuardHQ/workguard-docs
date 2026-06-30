// src/pages/public/AttendanceManagement.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'
import CheckInOut from '../../assets/screenshots/check-in-out.png'
import AttendanceDetails 
 from '../../assets/screenshots/EmpAtt-details.png'
 import AttendanceRepairCenter 
 from '../../assets/screenshots/AttendanceRepairCenter.png'
export default function AttendanceManagement() {
  return (
    // <DocsLayout type="public">
    <>
      <PageHeader
        eyebrow="Core Features"
        title="Attendance Tracking"
        description="WorkGuard tracks attendance through GPS location, registered devices, and shift rules. Every check-in and check-out automatically updates the employee's daily attendance record."
      />

      <div className="wg-section">
        {/* <h2>How Check-In Works</h2>
        <ol className="wg-steps">
          <li>Employee opens the WorkGuard app and selects their branch</li>
          <li>The app verifies their registered device is approved</li>
          <li>GPS location is checked against the branch radius</li>
          <li>If all checks pass, attendance is recorded instantly</li>
        </ol>

<div className='img-small'>
    <img
      src={CheckInOut}
      alt="Change Employment Status"
      className="wg-doc-image"
    />
  </div>

    <p className="wg-image-caption">
     Employee attendance check-in and check-out screen.
    </p> */}
<h2>How Check-In Works</h2>

<div className="wg-side-image">
  <div className="wg-side-image__content">
    <ol className="wg-steps">
      <li>Employee opens the WorkGuard app and selects their branch</li>
      <li>The app verifies their registered device is approved</li>
      <li>GPS location is checked against the branch radius</li>
      <li>If all checks pass, attendance is recorded instantly</li>
    </ol>
  </div>

  <div className="wg-side-image__image">
    <img
      src={CheckInOut}
      alt="Employee check in and check out screen"
      className="wg-doc-image"
    />

    <p className="wg-image-caption">
      Employee attendance check-in and check-out screen.
    </p>
  </div>
</div>
        <h3>Check-In Conditions</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Situation</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Poor GPS signal (accuracy &gt; 300 m)</td><td>❌ Rejected — must find better signal</td></tr>
              <tr><td>Employee has Remote Permission for today</td><td>✅ Approved — all location checks bypassed</td></tr>
              <tr><td>Branch Emergency Mode is active</td><td>✅ WiFi check bypassed — GPS still required</td></tr>
              <tr><td>Within branch radius</td><td>✅ Approved</td></tr>
              <tr><td>Outside branch radius</td><td>❌ Rejected</td></tr>
              <tr><td>Not connected to branch WiFi (when required)</td><td>❌ Rejected</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>If an employee checks in <strong>after their shift end time</strong>, the check-in is recorded but flagged as invalid and won't count toward working hours.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Daily Attendance Status</h2>
        <p>WorkGuard assigns every employee a status for each day automatically, based on attendance records, approved leaves, holidays, and employment status.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--green">Working Day</span></td><td>Employee was present with valid attendance</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Absent</span></td><td>Working day with no valid attendance recorded</td></tr>
              <tr><td><span className="wg-badge wg-badge--teal">Public Holiday</span></td><td>Declared holiday — no attendance expected</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Day Off</span></td><td>Not a scheduled working day for this employee</td></tr>
              <tr><td><span className="wg-badge wg-badge--blue">Paid Leave</span></td><td>Approved paid leave for this day</td></tr>
              <tr><td><span className="wg-badge wg-badge--yellow">Unpaid Leave</span></td><td>Approved unpaid leave for this day</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">No Data</span></td><td>Outside the employee's employment period</td></tr>
            </tbody>
          </table>
        </div>
      
<img
  src={AttendanceDetails}
  alt="Attendance Details"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Employee attendance details including worked hours, lateness, overtime, and deductions.
</p>
</div>


<hr className="wg-divider" />

<div className="wg-section">
  <h2>Absent Days</h2>

  <p>
    WorkGuard automatically calculates absence days based on attendance records,
    approved leave requests, holidays, employment status, and working schedules.
  </p>

  <ul className="wg-priority-list">
    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Employees with no valid attendance on a scheduled working day are marked as absent.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Approved leave requests and holidays automatically prevent absence deductions.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Administrators can review absence history and investigate attendance issues when needed.
      </div>
    </li>
  </ul>

  <div className="wg-callout wg-callout--tip">
    <span className="wg-callout__icon">💡</span>
    <div>
      Absence calculations are updated automatically whenever attendance records or leave requests change.
    </div>
  </div>
</div>
      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Late Arrival</h2>
        <p>Late arrival is calculated from the first valid check-in. A <strong>grace period</strong> (configured in the attendance policy) is applied before any deduction starts.</p>
        <p>When an employee moves between branches on the same day, WorkGuard accounts for transit time before calculating lateness.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Break Time</h2>
        <p>When an employee checks out and back in at the <em>same branch</em>, the gap is tracked as break time. The attendance policy includes a daily break allowance — time within the allowance is free, anything beyond it is tracked as a deduction.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Multi-Branch Days</h2>
        <p>If an employee works at more than one branch on the same day, WorkGuard tracks travel time between them separately from break time. Each type of deduction has its own configured rate.</p>
      </div>

<hr className="wg-divider" />

<div className="wg-section">
  <h2>Work Modes</h2>

  <div className="wg-table-wrap">
    <table className="wg-table">
      <thead>
        <tr>
          <th>Mode</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <span className="wg-badge wg-badge--blue">
              On-Site
            </span>
          </td>

          <td>
            Standard attendance from the employee's assigned branch.
          </td>
        </tr>

        <tr>
          <td>
            <span className="wg-badge wg-badge--teal">
              Remote
            </span>
          </td>

          <td>
            Attendance recorded using an approved Remote Work Permission.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    If any attendance record during the day is remote, the entire day is flagged as
    <strong> Remote </strong>
    in attendance reports.
  </p>
</div>
      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Holidays &amp; Attendance</h2>
        <p>
          For employees assigned to a single branch, that branch's holidays apply automatically.
          For employees assigned to multiple branches, WorkGuard intelligently determines holiday status based on which branches they actually attended — so they're never unfairly marked absent on a holiday.
        </p>
        <p>Working on a declared holiday is recorded and flagged for admin review. Holiday overtime may apply if configured.</p>
      </div>

      <hr className="wg-divider" />

      {/* <div className="wg-section">
        <h2>Admin Controls</h2>
        <h3>Day Override</h3>
        <p>Admins can manually correct an employee's attendance status for a specific day.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Override</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td>Count as Working Day</td><td>Forces the day to count as a regular working day</td></tr>
              <tr><td>Keep Leave</td><td>Confirms an approved leave takes priority</td></tr>
            </tbody>
          </table>
        </div>
        <p>All overrides are logged with the admin's name, timestamp, and reason.</p>

        <h3>Bulk Operations</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Operation</th><th>What It Does</th></tr></thead>
            <tbody>
              <tr><td>Bulk Recalculate</td><td>Updates attendance summaries for all employees on a given date</td></tr>
              <tr><td>Bulk Close Open Records</td><td>Force-closes any missed checkouts for a given date</td></tr>
            </tbody>
          </table>
        </div>
        <p>Both operations automatically skip employees whose payroll has been approved for that period.</p> 
      </div>*/}
      
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
       </div>
      </>
    // </DocsLayout>
  )
}