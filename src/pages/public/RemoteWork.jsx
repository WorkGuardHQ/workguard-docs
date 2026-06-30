// src/pages/public/RemoteWork.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function RemoteWork() {
  return (
    <>
      <PageHeader
        eyebrow="Core Features"
        title="Remote Work Permission"
        description="Admins can authorize specific employees to check in from any location on a specific date — without needing to be at the branch or on branch WiFi."
      />

      <div className="wg-section">
        <h2>How It Works</h2>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>A remote permission is an <strong>authorization</strong>, not automatic attendance. The employee must still check in and check out through the app. If they don't, the day counts as an absence.</div>
        </div>
        <p>Remote Work Permission bypasses both GPS location and WiFi checks for the authorized employee on the granted date. They can check in from anywhere in the world.</p>

        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">💡</span>
  <div>
    Device verification and biometric authentication (if enabled)
    are still required even when remote permission is granted.
  </div>
</div>
      </div>

      

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Managing Remote Attendance</h2>
        <h3>Single Permission</h3>
        <ol className="wg-steps">
          <li>Go to <strong>Remote Permissions</strong> in the admin panel</li>
          <li>Select the employee and the date</li>
          <li>Optionally restrict to a specific branch</li>
          <li>Save — the employee receives an email confirmation with date, branch, and reason</li>
        </ol>

        <h3>Bulk Permission</h3>
        <ol className="wg-steps">
          <li>Choose the employees or select all employees at a branch</li>
          <li>Set the date range (up to 30 days)</li>
          <li>Save — each employee receives a personalized email listing their granted dates</li>
          <li>Duplicate permissions are automatically skipped</li>
        </ol>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Permission Status</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Future date, not yet revoked</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Expired</span></td><td>Permitted date has already passed</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Revoked</span></td><td>Cancelled by admin before the date</td></tr>
            </tbody>
          </table>
        </div>
        <p>Active permissions can be revoked at any time. The employee is notified by email when their permission is revoked. Expired permissions cannot be revoked.</p>
      </div>
    </>
  )
}