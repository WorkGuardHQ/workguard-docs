// src/pages/admin/EmployeeManagement.jsx

import PageHeader from '../../components/PageHeader'

import addEmployeeImg from '../../assets/screenshots/add-emp (2).png'

import employeeDirectoryImg from '../../assets/screenshots/employeeDirectoryImg.png'

import EmpStatus from '../../assets/screenshots/emp-status.png'

import changestatus from '../../assets/screenshots/change-emp-status.png'
import Biometrics from '../../assets/screenshots/Biometrics.png'

import AdminRoles from '../../assets/screenshots/userrole-profile.png'

import EmployeeProfileImg from '../../assets/screenshots/profile-.png'

export default function EmployeeManagement() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Employee Management"
        description="The Employee Management module is the starting point for everything in WorkGuard. Before any other feature can work correctly, each employee's profile must be fully and accurately set up."
      />

      <div className="wg-section">
        <h2>Employee Profile Fields</h2>

 <img
  src={addEmployeeImg}
  alt="Add Employee Form"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
   Employee profile form showing personal information, employment dates,
  workforce status, assignments, work schedule, salary, and permissions.
</p>

        <h3>Identity &amp; Contact</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Name</td><td>Employee's full name</td></tr>
              <tr><td>Email</td><td>Used for login and all system notifications — must be unique within your company</td></tr>
              <tr><td>Phone</td><td>Contact number</td></tr>
              <tr><td>Address</td><td>Physical address</td></tr>
              <tr><td>Role</td><td><code>staff</code> (regular employee) or <code>admin</code> (manager/administrator)</td></tr>
            </tbody>
          </table>
        </div>


<h3>Employment Dates</h3>

<div className="wg-table-wrap">
  <table className="wg-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Description</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Employment Start Date</td>
        <td>
          The first actual workday for the employee in WorkGuard.
          This date determines when the employee's active employment
          period begins and when attendance tracking starts.
        </td>
      </tr>

      <tr>
        <td>Original Hire Date</td>
        <td>
          The employee's original joining date with the company.
          Leave this field empty for new hires. It can be used when
          migrating an existing employee into WorkGuard who joined
          the company before their WorkGuard start date.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">📌</span>
  <div>
    <strong>Important:</strong> Employment Start Date represents the
    employee's actual starting point in WorkGuard. Original Hire Date
    preserves the employee's historical company hire date and may be
    earlier than the WorkGuard start date.
  </div>
</div>


<h3>Workforce Status</h3>

<div className="wg-table-wrap">
  <table className="wg-table">
    <thead>
      <tr>
        <th>Option</th>
        <th>Description</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Included in Attendance &amp; Payroll</td>
        <td>
          The account is treated as part of the workforce and is included
          in attendance tracking, payroll calculations, and workforce reports.
        </td>
      </tr>

      <tr>
        <td>View &amp; Control Only</td>
        <td>
          The account can access and manage the system but is not treated
          as an employee. It is excluded from attendance, payroll,
          and workforce reports.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div className="wg-callout wg-callout--warning">
  <span className="wg-callout__icon">⚠️</span>

  <div>
    <strong>View &amp; Control Only</strong> means the account is intended
    for system management and operational control rather than workforce
    participation. This account is not counted as an employee in
    attendance, payroll, or workforce reports.
  </div>
</div>



        <h3>Work Schedule</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Shift Start Time</td><td>The time the employee's shift begins — e.g. <code>09:00</code></td></tr>
              <tr><td>Shift End Time</td><td>The time the shift ends — e.g. <code>18:00</code></td></tr>
              <tr><td>Working Days</td><td>The days of the week this employee is expected to work</td></tr>
              <tr><td>Working Hours Per Day</td><td>Used to calculate hourly salary for deductions</td></tr>
              <tr><td>Night Shift</td><td>Enable if the shift crosses midnight (e.g. 10 PM to 6 AM)</td></tr>
              <tr><td>Personal Timezone</td><td>Overrides the branch timezone for this employee's shift calculations</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Always confirm the correct timezone for each employee, especially for employees working across different cities or countries. An incorrect timezone causes incorrect late/early calculations.</div>
        </div>



        <h3>Branch &amp; Department</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Branches</td><td>The office location(s) the employee is assigned to</td></tr>
              <tr><td>Departments</td><td>The organizational department(s) the employee belongs to</td></tr>
            </tbody>
          </table>
        </div>


        
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>An employee can be assigned to more than one branch or department. However, multi-branch employees have some policy restrictions — they are not subject to branch-level attendance, leave, or overtime policies.</div>

          
        </div>
<img
  src={employeeDirectoryImg}
  alt="Employee Directory"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Employee Directory showing employee accounts, filters, statuses, and actions.
</p>
        <h3>Salary &amp; Permissions</h3>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Base Salary</td><td>Monthly base salary — used for all payroll calculations</td></tr>
              {/* <tr><td>Allow Remote Absence</td><td>Allows the employee to self-report an absence from anywhere</td></tr> */}
              <tr><td>Personal Transit Time</td><td>Custom travel time allowance between branches (overrides company default)</td></tr>
              <tr><td>Require Biometrics</td><td>If enabled, employee must complete biometric verification at each check-in and check-out</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Admin Roles &amp; Scope</h2>
        <div className="wg-comparison">
          <div className="wg-comparison__col">
            <div className="wg-comparison__header">🌐 Global Admin</div>
            <div className="wg-comparison__body">
              <div className="wg-comparison__row">Full access to all employees, branches, and data</div>
              <div className="wg-comparison__row">Creates and manages all policy types</div>
              <div className="wg-comparison__row">Approves payroll for all employees</div>
              <div className="wg-comparison__row">Can adjust device limits per employee</div>
            </div>
          </div>
          <div className="wg-comparison__col">
            <div className="wg-comparison__header">🏢 Branch Admin</div>
            <div className="wg-comparison__body">
              <div className="wg-comparison__row">Limited to assigned branches only</div>
              <div className="wg-comparison__row">Cannot view data from other branches</div>
              <div className="wg-comparison__row">Manages employees within their scope</div>
              <div className="wg-comparison__row">Must have at least one branch assigned</div>
            </div>
          </div>
        </div>

<img
  src={AdminRoles}
  alt="Admin Roles"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
Admin permissions and scope settings configured from the employee profile.
</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Employment Status</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Currently employed and able to use the system</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Resigned</span></td><td>Employment ended by the employee's own choice</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Terminated</span></td><td>Employment ended by the company</td></tr>
              <tr><td><span className="wg-badge wg-badge--yellow">Suspended</span></td><td>Temporarily on hold</td></tr>
            </tbody>
          </table>
        </div>
        <p>When an employee is marked as resigned or terminated, their employment end date is recorded automatically and their access is revoked. When an employee is <strong>rehired</strong>, a new active period starts and they can use the system again. Attendance records are only generated for days that fall within an active employment period. Days outside this range are automatically shown as "No Data."</p>
        <div className='img-small'>
        
          <div>
            <img
              src={EmpStatus}
              alt="Employment Status"
              className="wg-doc-image"
            />
        
            <p className="wg-image-caption">
              Complete employment status history for an employee.
            </p>
          </div>
        
          <div>
            <img
              src={changestatus}
              alt="Change Employment Status"
              className="wg-doc-image"
            />
        
            <p className="wg-image-caption">
              Admin changing an employee's employment status from the employee profile.
            </p>
          </div></div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Working Days Per Month</h2>
        <p>WorkGuard calculates how many working days an employee has in each month <strong>dynamically</strong>, based on their configured working days list (e.g. Monday through Friday).</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div><strong>Example:</strong> If an employee works Monday–Friday and the current month has 23 such weekdays, their expected working days = 23, and their daily salary = base salary ÷ 23. This ensures salary calculations are always accurate regardless of how many weekdays fall in each month.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Timezone Priority</h2>
        <p>WorkGuard resolves which timezone applies to an employee using this priority chain:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">1</span><div><strong>Employee's personal timezone</strong> — overrides everything if set</div></li>
          <li><span className="wg-priority-num">2</span><div><strong>Branch timezone</strong></div></li>
          <li><span className="wg-priority-num">3</span><div><strong>Company timezone</strong></div></li>
          <li><span className="wg-priority-num">4</span><div><strong>UTC</strong> — fallback</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Account Activation</h2>
        <ol className="wg-steps">
          <li>An activation email is sent automatically when you create a new employee account</li>
          <li>The email contains a unique link valid for <strong>24 hours</strong></li>
          <li>The employee clicks the link, sets their password, and their account is activated</li>
          <li>Until activation, the employee cannot check in or access the system</li>
        </ol>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>If the link expires, you can resend the activation email from the Employee Directory page.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Biometric Management</h2>
        {/* <p>If biometric verification is enabled for an employee, you can reset their biometric data from their profile. The employee will be prompted to re-register on their next check-in. All biometric resets are logged automatically.</p> */}
        <p>When biometric verification is enabled, employees must complete biometric verification during every check-in and check-out. Admins can enable or disable this setting from the employee's profile.</p>

        <div className='img-small'>
            <img
              src={Biometrics}
              alt="Change Employment Status"
              className="wg-doc-image"
            />
          </div>
        
            <p className="wg-image-caption">
             Biometric verification settings configured from the employee profile.
            </p>



      </div>

            <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Employee Profile Overview</h2>

        <p>
          The employee profile page acts as a central workspace for managing
          all employee-related information. Administrators can quickly review
          personal details, attendance statistics, payroll information,
          employment status, devices, and other employee records from a
          single screen.
        </p>

        <img
          src={EmployeeProfileImg}
          alt="Employee Profile Overview"
          className="wg-doc-image"
        />

        <p className="wg-image-caption">
          Employee profile page showing personal information, attendance
          overview, and employee management sections.
        </p>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>
            Some sections available on the employee profile page — such as
            <strong> Payroll History</strong>,
            <strong> Feedback &amp; Warnings</strong>,
            <strong> Attendance Policies</strong>, and
            <strong> Registered Devices</strong> — are explained in detail in
            their dedicated documentation pages.
          </div>
        </div>
      </div>
    </>
  )
}