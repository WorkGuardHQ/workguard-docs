// src/pages/admin/BranchManagement.jsx
import PageHeader from '../../components/PageHeader'
import BranchManagementImg
  from '../../assets/screenshots/branches-mangment.png'

import CreateBranchImg
  from '../../assets/screenshots/createbranch.png'
export default function BranchManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Infrastructure"
        title="Branch Management"
        description="Configure the physical locations where employees work. Branch settings control check-in radius, WiFi restrictions, timezone, and transit thresholds."
      />
<img
  src={BranchManagementImg}
  alt="Branch Management"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Branch Management page showing configured branches, location maps,
  transit thresholds, and emergency mode controls.
</p>
      <div className="wg-section">
        <h2>Branch Settings</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Name</td><td>The branch's display name</td></tr>
              <tr><td>GPS Location</td><td>Center point (latitude/longitude) — used for all location checks</td></tr>
              <tr><td>Check-in Radius</td><td>Distance in meters within which check-in is allowed</td></tr>
              <tr><td>Timezone</td><td>Controls shift calculations, holiday matching, and day boundaries for this branch</td></tr>
              <tr><td>Allowed WiFi IPs</td><td>IP addresses for the branch WiFi — employees must be connected to check in</td></tr>
              <tr><td>Transit Threshold</td><td>Max allowed travel time to/from this branch before a transit deduction applies</td></tr>
              <tr><td>Emergency Mode</td><td>Bypasses WiFi check for all employees — GPS still required</td></tr>
            </tbody>
          </table>
        </div>


        <img
  src={CreateBranchImg}
  alt="Create Branch"
  className="wg-doc-image--narrow"
/>

<p className="wg-image-caption">
  Create or edit branch settings including GPS location, allowed WiFi IPs,
  timezone, transit threshold, and check-in radius.
</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Location Check Rules</h2>
        <p>The employee's GPS coordinates are compared to the branch center. If the distance exceeds the configured radius, check-in is rejected. GPS accuracy must be <strong>300 meters or better</strong>. Employees with an active Remote Permission skip this check entirely.</p>
        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">📍</span>
  <div>
    Employees must be physically located within the configured branch
    radius unless they have an active Remote Permission.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>WiFi Verification &amp; Emergency Mode</h2>
        <p>If you've added WiFi IP addresses, employees must be connected to that WiFi to check in (unless they have Remote Permission).</p>
        <p>Use <strong>Emergency Mode</strong> when your branch WiFi is temporarily unavailable (e.g. internet outage, office move). It bypasses the WiFi check for everyone at the branch while GPS is still required. You can enable it for one branch or all branches at once. Disable it as soon as regular WiFi is restored.</p>

        <div className="wg-callout wg-callout--warning">
  <span className="wg-callout__icon">⚠️</span>
  <div>
    Emergency Mode should only be enabled temporarily.
    GPS validation remains active even when WiFi verification is bypassed.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Branch Timezone</h2>
        <p>The branch timezone is one of the most important settings. It determines when the attendance "day" starts and ends, when shifts begin and end, how holidays are interpreted, and how break and transit times are calculated.</p>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>If a branch has no timezone set, the company timezone is used as a fallback. Always set the correct branch timezone — it affects every attendance record for employees at that branch.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Transit Threshold</h2>
        <p>When an employee moves from one branch to another during the same day, travel time is tracked. If it exceeds the threshold, the excess is deducted. The threshold is resolved using this priority:</p>
        <ul className="wg-priority-list">
  <li>
    <span className="wg-priority-num">1</span>
    <div>Employee-specific transit threshold</div>
  </li>

  <li>
    <span className="wg-priority-num">2</span>
    <div>Previous branch transit threshold</div>
  </li>

  <li>
    <span className="wg-priority-num">3</span>
    <div>Destination branch transit threshold</div>
  </li>

  <li>
    <span className="wg-priority-num">4</span>
    <div>System default threshold (60 minutes)</div>
  </li>
</ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Live Branch Map</h2>
        <p>Admins can view a real-time map of which employees are currently checked in at any branch, including their check-in time and how long they've been there. Available for individual branches or a company-wide view.</p>
      </div>
    </>
  )
}