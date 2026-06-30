// src/pages/admin/DeviceManagement.jsx
import PageHeader from '../../components/PageHeader'

import DeviceControlImg
  from '../../assets/screenshots/device-control.png'

import EmployeeDevicesImg
  from '../../assets/screenshots/employee-devices.png'

export default function DeviceManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Infrastructure"
        title="Device Management"
        description="Every check-in and check-out must come from a registered, approved device. Manage employee devices to prevent unauthorized access and buddy-punching."
      />
 <img
        src={DeviceControlImg}
        alt="Device Management"
        className="wg-doc-image"
      />

      <p className="wg-image-caption">
        Device Management page showing registered devices,
        approval status, filters, and available admin actions.
      </p>
      <div className="wg-section">
        <h2>Registration Flow</h2>
        <ol className="wg-steps">
          <li>Employee opens WorkGuard on a new device and attempts to check in</li>
          <li>The device is automatically registered on the first attempt</li>
          <li>The <strong>first device is auto-approved</strong> — no admin action needed</li>
          <li>All <strong>subsequent devices</strong> are placed in Pending status and require admin approval</li>
          <li>The employee cannot check in from a pending device until it's approved</li>
        </ol>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Device Statuses</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Can Check In?</th><th>Admin Actions</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--yellow">Pending</span></td><td>❌ No</td><td>Approve or Remove</td></tr>
              <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>✅ Yes</td><td>Disable or Remove</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Disabled</span></td><td>❌ No</td><td>Re-enable or Remove</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Shared Device Rule</h2>
        <p>A device is identified by its device ID and browser fingerprint. Each device can only be registered to <strong>one active employee</strong> at a time. If a new employee tries to register a device already in use, the registration is blocked.</p>
        <p>If the previous employee is no longer active or the device was deactivated, it can be re-registered to a new employee.</p>
        <div className="wg-callout wg-callout--warning">
  <span className="wg-callout__icon">⚠️</span>
  <div>
    A single active device cannot be assigned to multiple employees
    at the same time.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Device Limit</h2>
        <p>Each employee can have up to <strong>3 registered devices</strong> by default. Global Admins can adjust this limit per employee. Attempting to register beyond the limit will show an error.</p>
        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">💡</span>
  <div>
    Device limits help reduce account sharing and improve attendance security.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Managing Devices (Admin)</h2>
        <p>From the admin panel, you can:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>View all registered devices with their current status</div></li>
          <li><span className="wg-priority-num">→</span><div>Search and filter by employee name or email</div></li>
          <li><span className="wg-priority-num">→</span><div>Approve pending devices</div></li>
          <li><span className="wg-priority-num">→</span><div>Enable or disable approved devices</div></li>
          <li><span className="wg-priority-num">→</span><div>Remove a device from the system entirely</div></li>
        </ul>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Branch Admins can only manage devices for employees within their assigned branches. Global Admins can manage devices for any employee.</div>
        </div>
        <img
  src={EmployeeDevicesImg}
  alt="Employee Devices"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Admins can also manage devices directly from the employee profile,
  including disabling or removing registered devices.
</p>
      </div>
    </>
  )
}