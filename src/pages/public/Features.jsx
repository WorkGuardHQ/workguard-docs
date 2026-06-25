// src/pages/public/Features.jsx
import { Link } from 'react-router-dom'
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'
import FeatureCard from '../../components/FeatureCard'

const features = [
  { icon: '👥', title: 'Employee Management', desc: 'Full employee profiles with shift schedules, timezone support, and employment lifecycle tracking.', path: '/public/employee-management' },
  { icon: '📍', title: 'GPS Attendance', desc: 'Location-verified check-ins through the mobile app. No manual timesheets.', path: '/public/attendance' },
  { icon: '📋', title: 'Flexible Policies', desc: 'Grace periods and deduction rules configurable at company, branch, role, or individual level.', path: '/public/attendance-policies' },
  { icon: '🗓️', title: 'Holiday Plans', desc: 'Group holidays into annual plans. Set company-wide, per-branch, or individual holidays.', path: '/public/holidays' },
  { icon: '🌐', title: 'Remote Work', desc: 'Admin-authorized remote check-ins that bypass location checks on specific dates.', path: '/public/remote-work' },
  { icon: '📱', title: 'Device Control', desc: 'Each check-in must come from a registered, approved device.', path: '/public/devices' },
  { icon: '🏢', title: 'Multi-Branch', desc: 'Support for employees working across multiple locations with transit time tracking.', path: '/public/branches' },
  { icon: '💰', title: 'Automated Payroll', desc: 'Monthly payroll calculated automatically from real attendance data.', path: '/public/payroll' },
  { icon: '🌴', title: 'Leave Tracking', desc: 'Full leave lifecycle with automatic balance management and yearly resets.', path: '/public/leave' },
  { icon: '⏱️', title: 'Overtime & Bonuses', desc: 'Six overtime types with multiplier or fixed-rate calculation. Three bonus policy types.', path: '/public/overtime-bonus' },
  { icon: '📊', title: 'Reports', desc: 'Employee, company, and yearly reports exported to PDF or Excel.', path: '/public/reports' },
  { icon: '🔒', title: 'Security', desc: 'Biometric verification, role-based access control, and full audit logging.', path: '/public/security' },
 { icon: '📝', title: 'Feedback & Notes', desc: "Admins can add performance notes and formal warnings to an employee's profile. Notes can be kept internal or shared with the employee directly.", path: '/public/feedback' },
]

export default function Features() {
  return (
    <>
      <PageHeader
        eyebrow="Getting Started"
        title="Features"
        description="Everything WorkGuard offers — from attendance tracking to automated payroll."
      />
      <div className="wg-feature-grid">
        {features.map((f) => (
          <Link key={f.path} to={f.path} style={{ textDecoration: 'none' }}>
            <FeatureCard icon={f.icon} title={f.title} description={f.desc} />
          </Link>
        ))}
      </div>
    </>
  )
}