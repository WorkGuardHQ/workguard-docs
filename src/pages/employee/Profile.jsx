// src/pages/employee/Profile.jsx
import PageHeader from '../../components/PageHeader'

export default function Profile() {
  return (
    <>
      <PageHeader
        eyebrow="My Account"
        title="Profile"
        description="Your WorkGuard profile contains your work schedule, branch assignment, and salary information — all of which affect how your attendance and payroll are calculated."
      />

      <div className="wg-section">
        <h2>Your Profile Information</h2>
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
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>If any of your profile details look incorrect — especially your shift times or timezone — contact your administrator. Incorrect settings can affect your attendance records and payroll.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Employment Status</h2>
        <p>Your employment status determines whether attendance is tracked for you. Attendance records are only generated for days when your status is <strong>Active</strong>. Days outside an active period appear as "No Data."</p>
      </div>
    </>
  )
}