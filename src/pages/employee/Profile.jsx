// src/pages/employee/Profile.jsx
import PageHeader from '../../components/PageHeader'

import EmployeeProfileImg from '../../assets/screenshots/EmpProfile.png'
export default function Profile() {
  return (
    <>
      <PageHeader
        eyebrow="My Account"
        title="Profile"
        description="Your WorkGuard profile contains your work schedule, branch assignment, and salary information — all of which affect how your attendance and payroll are calculated."
      />
<img
  src={EmployeeProfileImg}
  alt="Employee Profile"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
View your personal information, working schedule, monthly attendance summary,
feedback, leave records, and employment details from a single profile page.
</p>
      <div className="wg-section">
        <h2>Profile Information</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>What It Affects</th></tr></thead>
            <tbody>
              <tr><td>Shift Start &amp; End</td><td>When your working hours begin and end each day</td></tr>
              <tr><td>Working Days</td><td>Which days of the week you're expected to work</td></tr>
              <tr><td>Timezone</td><td>Determines when your shift starts on the calendar — important if you work in a different timezone than your branch</td></tr>
              <tr><td>Branch Assignment</td><td>Where you can check in</td></tr>
              <tr><td>Department</td><td>Which policies may apply to you</td></tr>
              <tr><td>Base Salary</td><td>Used for all payroll calculations</td></tr>
            </tbody>
          </table>
        </div>

        <p>
Your profile displays the information configured by your administrator,
including your assigned branches, department, work schedule, and
employment details.
</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>If any of your profile details look incorrect — especially your shift times or timezone — contact your administrator. Incorrect settings can affect your attendance records and payroll.</div>
        </div>
      </div>

     

<hr className="wg-divider" />

<div className="wg-section">
  <h2>Leaves & Absence</h2>

  <p>
    Your profile provides quick access to your leave requests, balances, and absence history without leaving the profile page.
  </p>
</div>
<hr className="wg-divider" />

<div className="wg-section">
  <h2>Feedback & Warnings</h2>

  <p>
    If your administrator marks a feedback entry as visible to employees, it
    will appear in the Feedback & Warnings section of your profile together with
    its creation date and details.
  </p>
</div>


 <hr className="wg-divider" />
      <div className="wg-section">
  <h2>Monthly Overview</h2>

  <p>
    Select any month to review your attendance summary, including working days,
    absences, leave, late minutes, early leave, transit deductions, and
    invalid attendance records.
  </p>

  <div className="wg-table-wrap">
    <table className="wg-table">
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Working Days</td>
          <td>Total completed working days</td>
        </tr>

        <tr>
          <td>Absences</td>
          <td>Days marked as absent</td>
        </tr>

        <tr>
          <td>Leave</td>
          <td>Paid and unpaid leave totals</td>
        </tr>

        <tr>
          <td>Late Minutes</td>
          <td>Total accumulated late arrival minutes</td>
        </tr>

        <tr>
          <td>Early Leave</td>
          <td>Total early departure minutes</td>
        </tr>

        <tr>
          <td>Transit Deduction</td>
          <td>Minutes deducted according to attendance policies</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr className="wg-divider" />

<div className="wg-section">
  <h2>Daily Attendance History</h2>

  <p>
    Each working day includes your attendance status, check-in and check-out
    times, leave information, penalties, and detailed attendance records for
    that date.
  </p>
</div>


 <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Employment Status</h2>
        <p>Your employment status determines whether attendance is tracked for you. Attendance records are only generated for days when your status is <strong>Active</strong>. Days outside an active period appear as "No Data."</p>
      </div>
    </>
  )
}