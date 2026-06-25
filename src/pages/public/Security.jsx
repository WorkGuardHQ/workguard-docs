// src/pages/public/Security.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function Security() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="Security"
        description="WorkGuard is built with security at every layer — from biometric verification at check-in to role-based access control across the entire platform."
      />

      <div className="wg-section">
        <h2>Role-Based Access Control</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Role</th><th>Access Level</th></tr></thead>
            <tbody>
              <tr><td>Employee</td><td>Their own attendance, leave, devices, and reports</td></tr>
              <tr><td>Branch Admin</td><td>All data within their assigned branches</td></tr>
              <tr><td>Global Admin</td><td>Full access to everything in the company</td></tr>
            </tbody>
          </table>
        </div>
        <p>Access is enforced automatically — you can only see and do what your role allows.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Biometric Verification</h2>
        <p>If biometric verification is enabled for an employee, they must complete a biometric check on every check-in and check-out. Admins can reset an employee's biometric data from their profile — the employee will be prompted to re-register on their next check-in. All biometric resets are logged automatically.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Device Security</h2>
        <p>Every check-in must come from a registered, approved device. Devices are identified by a combination of device ID and browser fingerprint, preventing unauthorized access even with valid credentials.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Account Security</h2>
        <p>Passwords are securely stored using industry-standard encryption — your actual password is never stored. Rate limiting protects login and API endpoints from brute-force attacks. Input validation protects the system from injection attacks. All requests are authenticated and checked for authorization before any data is returned.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Audit Trail</h2>
        <p>WorkGuard maintains detailed audit logs throughout the platform: all admin overrides are logged with name, timestamp, and reason; biometric resets are logged; device approvals and disablements are tracked; leave and payroll approvals maintain full histories.</p>
      </div>
    </>
  )
}