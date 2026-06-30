// src/pages/employee/Devices.jsx

import PageHeader from '../../components/PageHeader'
import CheckInOutImg
  from '../../assets/screenshots/check-in-out.png'
export default function Devices() {
  return (
    <>
      <PageHeader
        eyebrow="My Account"
        title="My Devices"
        description="Learn how WorkGuard automatically registers and approves devices used for attendance."
      />
   
      <div className="wg-section">
         <div className="wg-attendance-intro__text">

         
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
          <div className="wg-attendance-intro__image">
<img
  src={CheckInOutImg}
  alt="Check In Page"
 className="wg-doc-image"
/>

<p className="wg-image-caption">
  Device registration happens automatically when you attempt to check in from a new device.
</p></div>  

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
  <h2>Pending Devices</h2>

  <p>
    If your device is pending approval, you will not be able to
    check in or check out until an administrator approves it.
  </p>

  <div className="wg-callout wg-callout--tip">
    <span className="wg-callout__icon">💡</span>
    <div>
      Contact your administrator if your device remains pending.
    </div>
  </div>
</div>
 <hr className="wg-divider" />
      <div className="wg-section">
  <h2>Changing Devices</h2>

  <p>
    If you replace your phone or laptop, simply sign in and
    attempt to check in from the new device. Depending on your
    organization's policy, administrator approval may be required.
  </p>
  <div className="wg-callout wg-callout--warning">
  <span className="wg-callout__icon">⚠️</span>
  <div>
    If you cannot check in after changing your device, contact your administrator for assistance.
  </div>
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