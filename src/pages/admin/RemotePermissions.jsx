// src/pages/admin/RemotePermissions.jsx

import PageHeader from '../../components/PageHeader'

export default function RemotePermissions() {
  return (
    <>
      <PageHeader
        eyebrow="Attendance"
        title="Remote Permissions"
        description="Authorize specific employees to check in from any location on a specific date, bypassing GPS and WiFi checks."
      />

      <div className="wg-section">
        <h2>What Remote Permission Does</h2>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Granting remote permission does <strong>not</strong> automatically record attendance. The employee must still check in and check out through the app. If they don't, the day counts as an absence.</div>
        </div>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th></th><th>Remote Permission</th><th>Emergency Mode</th></tr></thead>
            <tbody>
              <tr><td>Bypasses WiFi check</td><td>✅ Yes</td><td>✅ Yes</td></tr>
              <tr><td>Bypasses GPS check</td><td>✅ Yes — employee can be anywhere</td><td>❌ No — must be at branch</td></tr>
              <tr><td>Who it affects</td><td>One specific employee</td><td>All employees at the branch</td></tr>
              <tr><td>Duration</td><td>One specific date only</td><td>Until manually disabled</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Granting a Single Permission</h2>
        <ol className="wg-steps">
          <li>Go to <strong>Remote Permissions</strong> in the admin panel</li>
          <li>Select the employee and the date</li>
          <li>Optionally restrict to a specific branch, or leave open for any branch</li>
          <li>Save — the employee receives an email confirmation with date, branch, timezone, and reason</li>
        </ol>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Bulk Permission</h2>
        <ol className="wg-steps">
          <li>Select the employees (or all employees at a branch)</li>
          <li>Set the date range (up to 30 days)</li>
          <li>Save — each employee receives an email listing their individual granted dates</li>
          <li>The system automatically skips any dates that already have a permission</li>
        </ol>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Permission Statuses</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Description</th><th>Can Revoke?</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Future date, not yet revoked</td><td>✅ Yes</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Expired</span></td><td>Permitted date has passed</td><td>❌ No</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Revoked</span></td><td>Manually cancelled before the date</td><td>N/A</td></tr>
            </tbody>
          </table>
        </div>
        <p>When you revoke a permission, the employee is notified by email with the date and reason. The revocation is logged with your name and timestamp.</p>
      </div>
    </>
  )
}