import { Link } from "react-router-dom";

import FeatureCard from "../../components/FeatureCard";

export default function Welcome() {
return ( <div className="container-fluid">

  {/* Hero Section */}
  <section className="py-4">
    <div className="row align-items-center">

      <div className="col-lg-8">
        <h1 className="display-4 fw-bold mb-3">
          Welcome to WorkGuard
        </h1>

        <h3 className="text-primary mb-4">
          Workforce Management & Control Platform
        </h3>

        <p className="lead">
          WorkGuard is a comprehensive workforce management platform
          designed to help organizations manage attendance,
          payroll, workforce policies, employee operations,
          branch management, approvals, reporting, and workforce
          visibility through one centralized system.
        </p>

        <p className="text-muted">
          Built for organizations operating across multiple
          branches, departments, attendance policies,
          workforce structures, and distributed teams.
        </p>
      </div>

      <div className="col-lg-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <h5 className="fw-bold mb-3">
              Core Modules
            </h5>

            <ul className="mb-0">
              <li>Attendance Management</li>
              <li>Payroll Management</li>
              <li>Leave Management</li>
              <li>Attendance Policy Engine</li>
              <li>Overtime & Bonus Policies</li>
              <li>Branch Management</li>
              <li>Department Management</li>
              <li>Device Control</li>
              <li>Remote Permissions</li>
              <li>Reports & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Why WorkGuard */}
  <section className="py-4">

    <div className="text-center mb-4">
      <h2 className="fw-bold">
        Why WorkGuard?
      </h2>

      <p className="text-muted">
        Built to provide complete workforce visibility,
        operational control, policy-driven workforce management,
        and secure attendance validation.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-lg-4 col-md-6">
        <FeatureCard
          title="Secure Attendance Verification"
          description="Attendance validation through GPS location, device verification, IP validation, biometric authentication, branch Wi-Fi verification, and remote permission controls."
        />
      </div>

      <div className="col-lg-4 col-md-6">
        <FeatureCard
          title="Multi-Branch Workforce Management"
          description="Manage multiple branches, shared employees, branch assignments, and workforce movement across organizational locations."
        />
      </div>

      <div className="col-lg-4 col-md-6">
        <FeatureCard
          title="Attendance Policy Engine"
          description="Configure attendance rules, grace periods, deductions, absence policies, break controls, transit allowances, and policy prioritization."
        />
      </div>

      <div className="col-lg-4 col-md-6">
        <FeatureCard
          title="Payroll & Compensation"
          description="Process payroll, salary calculations, deductions, overtime compensation, bonus policies, and payroll history."
        />
      </div>

      <div className="col-lg-4 col-md-6">
        <FeatureCard
          title="Workflow Automation"
          description="Automate leave requests, approvals, rejections, notifications, attendance actions, and workforce-related workflows."
        />
      </div>

      <div className="col-lg-4 col-md-6">
        <FeatureCard
          title="Reports & Analytics"
          description="Generate operational reports, workforce insights, attendance analytics, payroll reports, and Excel exports."
        />
      </div>

    </div>

  </section>

  {/* Platform Highlights */}
  <section className="py-5">

    <div className="text-center mb-4">
      <h2 className="fw-bold">
        Platform Highlights
      </h2>

      <p className="text-muted">
        Advanced workforce management capabilities designed for
        organizations that require visibility, compliance,
        flexibility, and operational control.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-lg-3 col-md-6">
        <FeatureCard
          title="Advanced Attendance Verification"
          description="Multi-layer attendance validation using GPS, IP Address, Biometrics, Branch Wi-Fi, Registered Devices, and Remote Permissions."
        />
      </div>

      <div className="col-lg-3 col-md-6">
        <FeatureCard
          title="Smart Policy Engine"
          description="Support for attendance policies, overtime rules, bonus policies, leave rules, deductions, policy priorities, and scope-based configurations."
        />
      </div>

      <div className="col-lg-3 col-md-6">
        <FeatureCard
          title="Workforce Monitoring"
          description="Monitor active employees, branch attendance activity, missing check-outs, workforce presence, and branch occupancy in real time."
        />
      </div>

      <div className="col-lg-3 col-md-6">
        <FeatureCard
          title="Workforce Security"
          description="Unique device assignment, attendance validation controls, branch restrictions, and workforce compliance management."
        />
      </div>

    </div>

  </section>
 <section>

        <div className="d-flex justify-content-end">

          <Link
            to="./UserRoles.jsx"
            className="btn btn-primary"
          >
            Next: User Roles →
          </Link>

        </div>

      </section>
</div>


);
}
