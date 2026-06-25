// src/pages/employee/Welcome.jsx
import { Link } from 'react-router-dom'
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function Welcome() {
  return (
    <>
      <PageHeader
        eyebrow="Employee Help Center"
        title="Getting Started with WorkGuard"
        description="Welcome to WorkGuard. This help center covers everything you need to use the system — from checking in every morning to viewing your monthly report."
      />

      <div className="wg-section">
        <h2>Setting Up Your Account</h2>
        <ol className="wg-steps">
          <li>Check your email for an activation link from WorkGuard</li>
          <li>Click the link (valid for 24 hours) and set your password</li>
          <li>Log in to the WorkGuard app on your phone</li>
          <li>Your first check-in will automatically register your device</li>
        </ol>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>If your activation link has expired, contact your administrator — they can resend it from your profile page.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Quick Links</h2>
        <div className="wg-feature-grid">
          {[
            { icon: '📍', label: 'Check In & Check Out', desc: 'How to record your daily attendance', path: '/employee/check-in-out' },
            { icon: '📅', label: 'Attendance Status', desc: 'Understand your daily attendance records', path: '/employee/attendance-status' },
            { icon: '🌴', label: 'Leave Requests', desc: 'Submit and track your leave', path: '/employee/leaves' },
            { icon: '🌐', label: 'Remote Work', desc: 'Check in from outside the office', path: '/employee/remote-work' },
            { icon: '📱', label: 'My Devices', desc: 'Manage your registered devices', path: '/employee/devices' },
            { icon: '📊', label: 'My Reports', desc: 'View your monthly payroll report', path: '/employee/reports' },
          ].map((item) => (
            <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
              <div className="wg-feature-card">
                <div className="wg-feature-card__icon">{item.icon}</div>
                <h3 className="wg-feature-card__title">{item.label}</h3>
                <p className="wg-feature-card__desc">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Things to Know</h2>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div><strong>Your device matters.</strong> You can only check in from a registered, approved device. Your first device is approved automatically. Any additional devices need admin approval.</div>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div><strong>Location is verified.</strong> Check-in requires you to be within your branch's GPS radius. Make sure your phone has a good GPS signal before checking in.</div>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div><strong>Always check out.</strong> If you forget to check out, your record may be automatically closed. You'll receive an email notification if this happens.</div>
        </div>
      </div>
    </>
  )
}