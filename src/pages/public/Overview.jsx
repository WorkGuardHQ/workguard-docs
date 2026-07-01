// import FeatureCard from "../../components/FeatureCard";

// export default function Overview() {
//   return (
//     <div>

//       <section className="mb-5">

//         <h1 className="display-4 fw-bold mb-3">
//           WorkGuard Documentation
//         </h1>

//         <p className="lead text-muted">
//           Everything you need to manage your workforce,
//           attendance, payroll, leave, and employee operations.
//         </p>

//       </section>

//       <section className="row g-4">

//         <div className="col-md-6 col-lg-4">
//           <FeatureCard
//             title="Employee Management"
//             description="Manage employees, profiles, branches, and departments."
//           />
//         </div>

//         <div className="col-md-6 col-lg-4">
//           <FeatureCard
//             title="Attendance Tracking"
//             description="Track employee attendance with GPS, WiFi, and biometric verification."
//           />
//         </div>

//         <div className="col-md-6 col-lg-4">
//           <FeatureCard
//             title="Payroll"
//             description="Automatically calculate salaries, deductions, overtime, and bonuses."
//           />
//         </div>

//         <div className="col-md-6 col-lg-4">
//           <FeatureCard
//             title="Leave Management"
//             description="Manage leave requests, approvals, balances, and policies."
//           />
//         </div>

//         <div className="col-md-6 col-lg-4">
//           <FeatureCard
//             title="Reports & Analytics"
//             description="Generate detailed monthly and yearly workforce reports."
//           />
//         </div>

//         <div className="col-md-6 col-lg-4">
//           <FeatureCard
//             title="Security"
//             description="Secure authentication, role-based access, and device verification."
//           />
//         </div>

//       </section>

//     </div>
//   );
// }

// src/pages/public/Overview.jsx
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

import dashboardImg from '../../assets/screenshots/dashboard (2).png'
const features = [
  { icon: '👥', title: 'Employee Management', desc: 'Complete employee profiles, roles, shifts, and lifecycle tracking.', path: '/public/employee-management' },
  { icon: '📍', title: 'Attendance Tracking', desc: 'GPS + device-based check-in with real-time status for every employee.', path: '/public/attendance' },
  { icon: '📋', title: 'Attendance Policies', desc: 'Configurable grace periods and deduction rules at every level.', path: '/public/attendance-policies' },
  { icon: '🗓️', title: 'Holiday Management', desc: 'Company, branch, and individual holiday plans with full lifecycle.', path: '/public/holidays' },
  { icon: '🌐', title: 'Remote Work', desc: 'Date-specific remote permissions with GPS bypass for approved employees.', path: '/public/remote-work' },
  { icon: '📱', title: 'Device Management', desc: 'Registered-device check-ins prevent buddy-punching.', path: '/public/devices' },
  { icon: '🏢', title: 'Branch Management', desc: 'Multi-location support with per-branch radius, WiFi, and timezone.', path: '/public/branches' },
  { icon: '💰', title: 'Payroll', desc: 'Automated monthly payroll with deductions, overtime, and bonuses.', path: '/public/payroll' },
  { icon: '🌴', title: 'Leave Management', desc: 'Annual, sick, and unpaid leave with automatic balance tracking.', path: '/public/leave' },
  { icon: '⏱️', title: 'Overtime & Bonus', desc: 'Flexible overtime multipliers and three bonus policy types.', path: '/public/overtime-bonus' },
  { icon: '📊', title: 'Reports', desc: 'Employee and company reports exportable to PDF and Excel.', path: '/public/reports' },
  { icon: '🔒', title: 'Security', desc: 'Role-based access, biometrics, and encrypted credentials.', path: '/public/security' },
   { icon: '📝', title: 'Feedback & Notes',   desc: 'Manage employee feedback, performance records, and formal warnings.',
path: '/public/feedback' },
]

export default function Overview() {

    const {
    isAdmin,
    isStaff,
  } = useAuth();

  return (
    // <DocsLayout type="public">
        <>
      <PageHeader
        eyebrow="Product Documentation"
        title="WorkGuard Documentation"
        description="WorkGuard is a workforce management platform that helps companies track attendance, run payroll, manage leave, and enforce overtime policies — accurately and transparently."
      />

      <div className="wg-section">
        <h2>What is WorkGuard?</h2>



  
        <p>
          WorkGuard gives businesses everything they need to manage a distributed workforce. From the moment an employee is onboarded to their monthly payslip, every step is tracked, calculated, and auditable.
        </p>
        <p>
          The platform works through a mobile app that uses GPS and registered devices to verify attendance — no manual timesheets, no spreadsheets. Payroll is calculated automatically from real attendance data. Leave balances update instantly when requests are approved.
        </p>
      </div>




  <div className="wg-section">
<h2>Administrator Dashboard</h2>

<p>
The administrator dashboard provides quick access to every major WorkGuard
module, including employee management, attendance, payroll, reports,
departments, branches, and company settings.
</p>

  <div className="wg-showcase">
    <img
      src={dashboardImg}
      alt="WorkGuard Dashboard"
      className="wg-doc-image"
    />
    <p className="wg-image-caption">
  Main administrator dashboard showing quick actions,
  employee management modules, payroll, attendance, and reports.
</p>
  </div>
  
</div>



      <div className="wg-section">
        <h2>Three Documentation Sections</h2>
        <div className="wg-comparison">
          <div className="wg-comparison__col">
            <div className="wg-comparison__header" style={{ color: 'var(--wg-blue)', background: 'var(--wg-blue-pale)' }}>
              👤 Employee Help Center
            </div>
            <div className="wg-comparison__body">
              <div className="wg-comparison__row">How to check in and out</div>
              <div className="wg-comparison__row">Submitting leave requests</div>
              <div className="wg-comparison__row">Registering your devices</div>
              <div className="wg-comparison__row">Viewing your reports</div>
             {(isStaff || isAdmin) && (
  <div className="wg-comparison__row">
    <Link
      to="/employee/welcome"
      style={{
        color: 'var(--wg-blue)',
        fontSize: '0.8125rem',
        fontWeight: 600
      }}
    >
      Go to Employee Help Center →
    </Link>
  </div>
)}
            </div>
          </div>
          <div className="wg-comparison__col">
            <div className="wg-comparison__header" style={{ color: '#7c3aed', background: '#f5f3ff' }}>
              🛡️ Admin Help Center
            </div>
            <div className="wg-comparison__body">
              <div className="wg-comparison__row">Managing employees &amp; policies</div>
              <div className="wg-comparison__row">Running and approving payroll</div>
              <div className="wg-comparison__row">Configuring branches &amp; devices</div>
              <div className="wg-comparison__row">Viewing company reports</div>
            {isAdmin && (
  <div className="wg-comparison__row">
    <Link
      to="/admin/employee-management"
      style={{
        color: '#7c3aed',
        fontSize: '0.8125rem',
        fontWeight: 600
      }}
    >
      Go to Admin Help Center →
    </Link>
  </div>
)}
            </div>
          </div>
        </div>
      </div>

      <div className="wg-section">
        <h2>All Features</h2>
        <div className="wg-feature-grid">
          {features.map((f) => (
            <Link key={f.path} to={f.path} style={{ textDecoration: 'none' }}>
              <div className="wg-feature-card">
                <div className="wg-feature-card__icon">{f.icon}</div>
                <h3 className="wg-feature-card__title">{f.title}</h3>
                <p className="wg-feature-card__desc">{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="wg-section">
  <h2>Need More Information?</h2>

  <p>
    Interested in using WorkGuard for your organization, requesting a demo,
    or looking for partnership opportunities?
  </p>

  <Link to="/public/about" className="wg-btn wg-btn--primary">
    Learn More About WorkGuard →
  </Link>
</div>
      </>
    // </DocsLayout>
  )
}