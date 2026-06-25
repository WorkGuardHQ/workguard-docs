// src/pages/admin/DepartmentManagement.jsx

import PageHeader from '../../components/PageHeader'

export default function DepartmentManagement() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Department Management"
        description="Departments let you group employees for policy scoping, reporting, and filtering. Employees can belong to one or more departments."
      />

      <div className="wg-section">
        <h2>What Departments Are Used For</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Use Case</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Policy scoping</td><td>Attendance, leave, overtime, and bonus policies can be scoped to a department</td></tr>
              <tr><td>Report filtering</td><td>Company reports can be filtered to show only one department</td></tr>
              <tr><td>Payroll filtering</td><td>Bulk payroll generation and approval can be filtered by department</td></tr>
              <tr><td>Bulk operations</td><td>Bulk close open records and bulk recalculate can be filtered by department</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Department Policy Scope</h2>
        <p>Department-level policies sit between branch-level and individual-level in the priority chain:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">4</span><div><strong>Individual Employee</strong></div></li>
          <li><span className="wg-priority-num">3</span><div><strong>Role</strong></div></li>
          <li><span className="wg-priority-num">2.5</span><div><strong>Department</strong> (for overtime &amp; bonus policies)</div></li>
          <li><span className="wg-priority-num">2</span><div><strong>Branch</strong></div></li>
          <li><span className="wg-priority-num">1</span><div><strong>Company-wide</strong></div></li>
        </ul>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Employees assigned to multiple departments are not subject to department-level overtime or bonus policies.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Creating &amp; Managing Departments</h2>
        <p>Departments are simple containers with a name and optional description. You can create as many as needed. To assign employees to a department, update their profile's department field.</p>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Deleting a department does not affect employees — they will remain in the system but will no longer have a department assignment.</div>
        </div>
      </div>
    </>
  )
}