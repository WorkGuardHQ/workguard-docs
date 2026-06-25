// import PageHeader from "../../components/PageHeader";

// export default function EmployeeManagement() {
//   return (
//     <>
//       <PageHeader
//         title="Employee Management"
//         description="Manage employee profiles, branches, departments, and permissions."
//       />

//       <p>Documentation content goes here...</p>
//     </>
//   );
// }

// src/pages/public/EmployeeManagement.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function EmployeeManagement() {
  return (
    <>
    {/* <DocsLayout type="public"> */}
      <PageHeader
        eyebrow="Core Features"
        title="Employee Management"
        description="Employee Management is the foundation of WorkGuard. Every feature — attendance, payroll, leave, overtime — depends on each employee's profile being complete and accurate."
      />

      <div className="wg-section">
        <h2>Employee Profile</h2>
        <p>When adding a new employee, you configure four areas of their profile.</p>

        <h3>Basic Information</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Full Name</td><td>Appears in all reports and notifications</td></tr>
              <tr><td>Email</td><td>Used for login and all system emails — must be unique within your company</td></tr>
              <tr><td>Phone</td><td>Contact number</td></tr>
              <tr><td>Role</td><td><code>Staff</code> for regular employees, <code>Admin</code> for managers</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Work Schedule</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Shift Start &amp; End</td><td>The employee's daily working hours</td></tr>
              <tr><td>Working Days</td><td>Which days of the week this employee works</td></tr>
              <tr><td>Night Shift</td><td>Enable if the shift crosses midnight (e.g. 10 PM to 6 AM)</td></tr>
              <tr><td>Timezone</td><td>Set a personal timezone if the employee works in a different location than their branch</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div><strong>Why timezone matters:</strong> WorkGuard uses each employee's timezone to determine when their shift starts and ends. Setting the correct timezone ensures late arrival, early departure, and attendance records are always accurate.</div>
        </div>

        <h3>Assignment &amp; Salary</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Branch(es)</td><td>The office location(s) the employee works at</td></tr>
              <tr><td>Department(s)</td><td>The organizational department(s) they belong to</td></tr>
              <tr><td>Base Salary</td><td>Monthly base salary used for all payroll calculations</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Permissions</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Remote Absence</td><td>Allows the employee to self-report an absence from any location</td></tr>
              <tr><td>Biometric Verification</td><td>Requires biometric check on every check-in and check-out</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Admin Roles</h2>
        <p>WorkGuard has two levels of administrative access.</p>
        <div className="wg-comparison">
          <div className="wg-comparison__col">
            <div className="wg-comparison__header">🌐 Global Admin</div>
            <div className="wg-comparison__body">
              <div className="wg-comparison__row">Full access to all employees and data</div>
              <div className="wg-comparison__row">Manages all branches and departments</div>
              <div className="wg-comparison__row">Creates and manages all policy types</div>
              <div className="wg-comparison__row">Approves payroll for all employees</div>
            </div>
          </div>
          <div className="wg-comparison__col">
            <div className="wg-comparison__header">🏢 Branch Admin</div>
            <div className="wg-comparison__body">
              <div className="wg-comparison__row">Limited to their assigned branches</div>
              <div className="wg-comparison__row">Cannot see other branches' data</div>
              <div className="wg-comparison__row">Manages employees within their scope</div>
              <div className="wg-comparison__row">Must have at least one branch assigned</div>
            </div>
          </div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Employment Status</h2>
        <p>WorkGuard tracks the full history of each employee's employment status. Attendance records are only generated for days when the employee has an <strong>Active</strong> status.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Currently employed — full system access</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Resigned</span></td><td>Left the company voluntarily</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Terminated</span></td><td>Employment ended by the company</td></tr>
              <tr><td><span className="wg-badge wg-badge--yellow">Suspended</span></td><td>Temporarily on hold</td></tr>
            </tbody>
          </table>
        </div>
        <p>Days outside an active employment period are automatically shown as "No Data" — they never count as absences.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Account Activation</h2>
        <p>When a new employee is added to WorkGuard, the system automatically sends them an activation email.</p>
        <ol className="wg-steps">
          <li>Employee receives an activation email with a unique link</li>
          <li>The link is valid for <strong>24 hours</strong></li>
          <li>Employee clicks the link, sets their password, and gains access</li>
          <li>Until activation, they cannot log in or check in</li>
        </ol>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>If the activation link expires, a Global or Branch Admin can resend it from the employee's profile page.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Working Days Per Month</h2>
        <p>
          WorkGuard dynamically calculates the number of expected working days each month based on the employee's configured working days (e.g. Monday–Friday). This ensures salary calculations are always accurate regardless of how days fall in any given month.
        </p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div><strong>Example:</strong> If an employee works Monday–Friday and the month has 23 such weekdays, their expected working days = 23, and their daily salary = base salary ÷ 23.</div>
        </div>
      </div>
    {/* </DocsLayout> */}
    </>
  )
}