// src/pages/employee/Devices.jsx

import PageHeader from '../../components/PageHeader'

export default function Devices() {
  return (
    <>
      <PageHeader
        eyebrow="My Account"
        title="My Devices"
        description="WorkGuard requires check-ins to come from a registered, approved device. Here's how device registration works."
      />

      <div className="wg-section">
        <h2>Registering a Device</h2>
        <ol className="wg-steps">
          <li>Open WorkGuard on a new device and attempt to check in</li>
          <li>The device is automatically registered on your first attempt</li>
          <li>Your <strong>first device</strong> is approved automatically — no waiting needed</li>
          <li>Any <strong>additional devices</strong> are placed in "Pending" and must be approved by an admin</li>
        </ol>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>You can have up to <strong>3 registered devices</strong> by default. If you need more, ask your administrator.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Device Statuses</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Can Check In?</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--yellow">Pending</span></td><td>❌ No</td><td>Waiting for admin approval</td></tr>
              <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>✅ Yes</td><td>Active and ready to use</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Disabled</span></td><td>❌ No</td><td>Deactivated by an admin — contact them if needed</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Shared Devices</h2>
        <p>Each device can only be registered to one active employee at a time. If you try to register a device that's already in use by someone else, the registration will be blocked. Contact your administrator to resolve this.</p>
      </div>
    </>
  )
}