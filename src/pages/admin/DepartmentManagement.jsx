// // src/pages/admin/DepartmentManagement.jsx

// import PageHeader from '../../components/PageHeader'

// export default function DepartmentManagement() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="People"
//         title="Department Management"
//         description="Departments let you group employees for policy scoping, reporting, and filtering. Employees can belong to one or more departments."
//       />

//       <div className="wg-section">
//         <h2>What Departments Are Used For</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Use Case</th><th>Description</th></tr></thead>
//             <tbody>
//               <tr><td>Policy scoping</td><td>Attendance, leave, overtime, and bonus policies can be scoped to a department</td></tr>
//               <tr><td>Report filtering</td><td>Company reports can be filtered to show only one department</td></tr>
//               <tr><td>Payroll filtering</td><td>Bulk payroll generation and approval can be filtered by department</td></tr>
//               <tr><td>Bulk operations</td><td>Bulk close open records and bulk recalculate can be filtered by department</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Department Policy Scope</h2>
//         <p>Department-level policies sit between branch-level and individual-level in the priority chain:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">4</span><div><strong>Individual Employee</strong></div></li>
//           <li><span className="wg-priority-num">3</span><div><strong>Role</strong></div></li>
//           <li><span className="wg-priority-num">2.5</span><div><strong>Department</strong> (for overtime &amp; bonus policies)</div></li>
//           <li><span className="wg-priority-num">2</span><div><strong>Branch</strong></div></li>
//           <li><span className="wg-priority-num">1</span><div><strong>Company-wide</strong></div></li>
//         </ul>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Employees assigned to multiple departments are not subject to department-level overtime or bonus policies.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Creating &amp; Managing Departments</h2>
//         <p>Departments are simple containers with a name and optional description. You can create as many as needed. To assign employees to a department, update their profile's department field.</p>
//         <div className="wg-callout wg-callout--warning">
//           <span className="wg-callout__icon">⚠️</span>
//           <div>Deleting a department does not affect employees — they will remain in the system but will no longer have a department assignment.</div>
//         </div>
//       </div>
//     </>
//   )
// }


// src/pages/admin/DepartmentManagement.jsx

import PageHeader from '../../components/PageHeader'

import DepartmentManagementImg from '../../assets/screenshots/DepartmentManag.png'
import CreateDepartmentFormImg from '../../assets/screenshots/CreateDepartmentForm.png'

export default function DepartmentManagement() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Department Management"
        description="Departments are organizational units that group employees across one or more branches. They can be used to filter reports, payroll, and to apply overtime and bonus policies at the department level."
      />
<img
  src={DepartmentManagementImg}
  alt="Department Management"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
Manage company departments, assign managers, monitor employee counts,
and activate or deactivate departments from a single dashboard.
</p>
      <div className="wg-section">
        <h2>Department Settings</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Name</td><td>Must be unique within your company (case-insensitive)</td></tr>
              <tr><td>Description</td><td>Optional — helps clarify the department's purpose</td></tr>
              <tr><td>Branches</td><td>The branches this department is associated with</td></tr>
              <tr><td>Manager</td><td>An optional employee designated as the department manager</td></tr>
              <tr><td>Active / Inactive</td><td>Inactive departments are hidden from most views but employees remain assigned</td></tr>
              <tr>
  <td>Employee assignments</td>
  <td>Employees are assigned separately after the department is created</td>
</tr>
            </tbody>
          </table>
        </div>


<div className="img-small">
        <img
  src={CreateDepartmentFormImg}
  alt="Create Department"
  className="wg-doc-image"
/>
</div>
<p className="wg-image-caption">
Create a new department by entering its basic information, assigning one or
more branches, and optionally selecting a department manager.
</p>

      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>What Departments Are Used For</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Use Case</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Policy scoping</td><td>Overtime and bonus policies can be scoped to a specific department</td></tr>
              <tr><td>Report filtering</td><td>Company reports can be filtered to show only one department</td></tr>
              <tr><td>Payroll filtering</td><td>Bulk payroll generation and approval can be filtered by department</td></tr>
              <tr><td>Bulk operations</td><td>Bulk close open records and bulk recalculate can be filtered by department</td></tr>
              <tr>
  <td>Employee organization</td>
  <td>Group employees for management, filtering, and reporting</td>
</tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Live Employee Count</h2>
        <p>The departments list displays the current number of active employees assigned
to each department. The count updates automatically as employee assignments
change.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Assigning Employees</h2>
        <p>Admins can assign multiple employees to a department at once by selecting them from a list. An employee can belong to more than one department.</p>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Employees assigned to <strong>multiple departments</strong> are not subject to department-scoped overtime or bonus policies. Company-wide or role-based policies will apply instead.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Branch Admin Access</h2>
        <p>Branch Admins can only view departments that include at least one of their assigned branches. Departments that are entirely outside their scope are not visible to them.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Deactivating vs. Deleting a Department</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Action</th><th>What Happens</th></tr></thead>
            <tbody>
              <tr><td><strong>Deactivate</strong></td><td>Department is hidden from most views — employees remain assigned and historical data is preserved</td></tr>
              <tr><td><strong>Delete</strong></td><td>Department is permanently removed and all employees are unassigned automatically</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}