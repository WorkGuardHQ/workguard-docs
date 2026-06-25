import { Link } from "react-router-dom";
import addEmployeeImg from "../../assets/screenshots/userrole-add-emp.png";
import profileScopeImg from "../../assets/screenshots/userrole-profile.png";
export default function UserRoles() {
  return (
    <div className="container-fluid">

      {/* Breadcrumb */}
      <nav className="mb-4">
        <small className="text-muted">
          Getting Started / User Roles
        </small>
      </nav>

      {/* Hero */}
      <section className="mb-5">

        <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm border">

          <span className="badge bg-primary mb-3">
            Getting Started
          </span>

          <h1 className="display-5 fw-bold mb-3">
            User Roles & Access Control
          </h1>

          <p className="lead text-muted mb-0">
            WorkGuard uses a role-based access control model (RBAC)
            to ensure users can only access the data, operations,
            and administrative functions relevant to their responsibilities.
          </p>

        </div>

      </section>

      {/* Overview */}
      <section className="mb-5">

        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">

            <h2 className="h4 fw-bold mb-3">
              Overview
            </h2>

            <p>
              Roles are assigned when creating a new employee and may
              be updated later by authorized administrators through
              the Employee Directory.
            </p>

            <div className="table-responsive mt-4">

              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Access Scope</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <span className="badge bg-secondary">
                        Staff
                      </span>
                    </td>

                    <td>
                      Personal workforce information and self-service operations
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Branch Admin
                      </span>
                    </td>

                    <td>
                      Administrative access limited to assigned branches
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="badge bg-danger">
                        Super Admin
                      </span>
                    </td>

                    <td>
                      Full platform access across the organization
                    </td>
                  </tr>

                </tbody>
              </table>

            </div>

          </div>
        </div>

      </section>

      {/* Roles */}
      <section className="mb-5">

        <div className="row g-4">

          {/* Staff */}
          <div className="col-xl-4">

            <div className="card h-100 shadow-sm border-0">

              <div className="card-body p-4">

                <h3 className="fw-bold">
                  Staff
                </h3>

                <p className="text-muted">
                  Regular employees with access to their own workforce
                  information and self-service operations.
                </p>

                <hr />

                <h6 className="fw-bold">
                  Available Features
                </h6>

                <ul>
                  <li>Check In / Check Out</li>
                  <li>View Attendance Records</li>
                  <li>View Attendance History</li>
                  <li>Submit Leave Requests</li>
                  <li>Track Leave Requests</li>
                  <li>View Leave Balances</li>
                  <li>View Leave History</li>
                  <li>View Absence Records</li>
                  <li>Access Personal Profile Information</li>
                </ul>

                <div className="alert alert-light border mt-3">
                  Staff users can access only their own data.
                </div>

              </div>

            </div>

          </div>

          {/* Branch Admin */}
          <div className="col-xl-4">

            <div className="card h-100 shadow-sm border-0">

              <div className="card-body p-4">

                <h3 className="fw-bold">
                  Branch Admin
                </h3>

                <p className="text-muted">
                  Administrative access restricted to assigned branches.
                </p>

                <hr />

                <h6 className="fw-bold">
                  Responsibilities
                </h6>

                <ul>
                  <li>Manage assigned branches</li>
                  <li>Create employees</li>
                  <li>Edit employee information</li>
                  <li>Manage attendance operations</li>
                  <li>Manage leave operations</li>
                  <li>Generate branch reports</li>
                  <li>Monitor workforce activity</li>
                </ul>

                <h6 className="fw-bold mt-4">
                  Restrictions
                </h6>

                <ul>
                  <li>Cannot create administrator accounts</li>
                  <li>Cannot manage administrator accounts</li>
                  <li>Cannot assign administrator permissions</li>
                  <li>Cannot delete employees</li>
                  <li>Cannot access unauthorized branches</li>
                  <li>Cannot generate company-wide reports</li>
                </ul>

              </div>

            </div>

          </div>



<div className="col-12">

  <div className="card border-0 shadow-sm">

    <div className="card-body p-4">

      <h4 className="fw-bold mb-3">
        Role Assignment & Administrative Permissions
      </h4>

      <p className="text-muted mb-4">
        Administrative access is configured during employee creation.
        Administrators may be assigned as Super Admins with
        organization-wide access or as Branch Admins restricted
        to selected branches.
      </p>

      <img
        src={addEmployeeImg}
        alt="Role Assignment and Admin Permissions"
        className="img-fluid rounded border"
      />

    </div>

  </div>

</div>

          {/* Super Admin */}
          <div className="col-xl-4">

            <div className="card h-100 shadow-sm border-0">

              <div className="card-body p-4">

                <h3 className="fw-bold">
                  Super Admin
                </h3>

                <p className="text-muted">
                  Full administrative authority across the organization.
                </p>

                <hr />

                <h6 className="fw-bold">
                  Examples of Responsibilities
                </h6>

                <ul>
                  <li>Manage administrators and permissions</li>
                  <li>Manage all branches</li>
                  <li>Manage all employees</li>
                  <li>Access organization-wide reports</li>
                  <li>Configure global workforce policies</li>
                  <li>Perform organization-level actions</li>
                </ul>

                <div className="alert alert-danger mt-3">
                  Highest privilege level in WorkGuard.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Branch Security */}
      <section className="mb-5">

        <div className="card shadow-sm border-0">

          <div className="card-body p-4">

            <h2 className="h4 fw-bold mb-3">
              Branch-Based Access Control
            </h2>

            <p>
              WorkGuard enforces strict branch-level access restrictions.
            </p>

            <div className="alert alert-info">

              Branch Administrators can only access employees,
              attendance records, reports, and workforce operations
              related to their assigned branches.

            </div>

            <h5 className="fw-bold mt-4">
              Employee Transfers
            </h5>

            <p>
              Branch Administrators may transfer employees only
              between branches that belong to their assigned scope.
            </p>

            <p className="mb-0">
              Transfers involving branches outside the administrator's
              authorized scope require Super Admin privileges.
            </p>
<hr className="my-4" />

<h5 className="fw-bold mb-3">
  Branch Admin Scope Example
</h5>

<p className="text-muted mb-4">
  Employee profiles display administrator scope and assigned
  branches, providing visibility into branch-level administrative
  responsibilities.
</p>
<div className="alert alert-secondary mb-4">
  Employees and workforce data outside the administrator's assigned
  branches are not visible to Branch Administrators.
</div>
<img
  src={profileScopeImg}
  alt="Branch Admin Scope"
  className="img-fluid rounded border"
/>
          </div>

        </div>

      </section>

      {/* Next Page */}
      <section>

        <div className="d-flex justify-content-end">

          <Link
            to="../admin/EmployeeManagement.jsx"
            className="btn btn-primary"
          >
            Next: Employee Management →
          </Link>

        </div>

      </section>

    </div>
  );
}