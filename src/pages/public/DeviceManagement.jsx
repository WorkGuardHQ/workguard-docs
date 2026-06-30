// // src/pages/public/DeviceManagement.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function DeviceManagement() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Core Features"
//         title="Device Management"
//         description="WorkGuard requires every check-in and check-out to come from a registered, approved device — preventing buddy-punching where one employee checks in on behalf of another."
//       />

//       <div className="wg-section">
//         <h2>How Device Registration Works</h2>
//         <ol className="wg-steps">
//           <li>Employee opens WorkGuard on a new device</li>
//           <li>On their first check-in attempt, the device is automatically registered</li>
//           <li>The device is registered according to your organization's security configuration</li>
//           <li>Additional approval steps may be required before the device can be used</li>
//         </ol>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Device Statuses</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Status</th><th>Can Check In?</th><th>Description</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--yellow">Pending</span></td><td>❌ No</td><td>Registered but waiting for admin approval</td></tr>
//               <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>✅ Yes</td><td>Fully active and ready to use</td></tr>
//               <tr><td><span className="wg-badge wg-badge--red">Disabled</span></td><td>❌ No</td><td>Deactivated by an admin — can be re-enabled</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Shared Device Rule</h2>
//         <p>A device is identified by a combination of its device ID and browser fingerprint. Each device can only be registered to <strong>one active employee at a time</strong>. If someone tries to register a device that's already in use by another employee, the registration will be blocked.</p>
//         <p>If the previous employee is no longer active, or if the device was deactivated, it can be re-registered to a new employee.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Device Limit</h2>
//         <p>Each employee can have up to <strong>3 registered devices</strong> by default. This limit can be adjusted per employee by a Global Admin. Attempting to register beyond the limit will show an error.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Admin Management</h2>
//         <p>From the admin panel, you can view all registered devices, approve pending ones, enable or disable approved devices, and remove devices from the system entirely.</p>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>Branch Admins can only manage devices for employees within their assigned branches.</div>
//         </div>
//       </div>
//     </>
//   )
// }


// src/pages/public/DeviceManagement.jsx

import PageHeader from '../../components/PageHeader'


import DeviceControlImg
  from '../../assets/screenshots/device-control.png'
  
export default function DeviceManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Core Features"
        title="Device Management"
        description="WorkGuard requires every check-in and check-out to come from a registered, approved device — preventing buddy-punching where one employee checks in on behalf of another."
      />
<img
  src={DeviceControlImg}
  alt="Device Management"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Device Management page showing device approvals, statuses,
  filters, and administrative controls.
</p>
      <div className="wg-section">
        <h2>How Device Registration Works</h2>
        <ol className="wg-steps">
          <li>An employee opens WorkGuard on a new device</li>
          <li>On their first check-in attempt, the device is automatically registered</li>
          <li>The device is registered according to your organization's security configuration</li>
          <li>Additional approval steps may be required before the device can be used for attendance</li>
        </ol>


      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Device Statuses</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Can Check In?</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--yellow">Pending</span></td><td>❌ No</td><td>Registered but waiting for admin approval</td></tr>
              <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>✅ Yes</td><td>Fully active and ready to use</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Disabled</span></td><td>❌ No</td><td>Deactivated by an admin — can be re-enabled</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Shared Device Rule</h2>
        <p>A device is identified by a combination of its device ID and browser fingerprint. Each device can only be registered to <strong>one active employee at a time</strong>. If someone tries to register a device that's already in use by another employee, the registration will be blocked.</p>
        <p>If the previous employee is no longer active, or if the device was deactivated, it can be re-registered to a new employee.</p>

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
        <p>Each employee can have up to <strong>3 registered devices</strong> by default. This limit can be adjusted per employee by a Global Admin. Attempting to register beyond the limit will show an error.</p>

        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">📌</span>
  <div>
    Device limits help organizations reduce account sharing and
    improve attendance security.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Admin Management</h2>

        <p>
  Administrators can monitor registered devices, approve or
  disable them, and remove devices when access should no longer
  be allowed.
</p>
        {/* <p>From the admin panel, you can view all registered devices, approve pending ones, enable or disable approved devices, and remove devices from the system entirely.</p> */}
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Branch Admins can only manage devices for employees within their assigned branches.</div>
        </div>
      </div>
    </>
  )
}