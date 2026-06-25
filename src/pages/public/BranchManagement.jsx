// src/pages/public/BranchManagement.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function BranchManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Core Features"
        title="Branch Management"
        description="Branches represent the physical locations where your employees work. Each branch has its own GPS location, check-in radius, timezone, and optional WiFi restrictions."
      />

      <div className="wg-section">
        <h2>Branch Settings</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Name</td><td>The branch's display name</td></tr>
              <tr><td>GPS Location</td><td>The center point (latitude/longitude) of the branch</td></tr>
              <tr><td>Check-in Radius</td><td>Distance in meters within which check-in is allowed</td></tr>
              <tr><td>Timezone</td><td>Used for shift calculations, holiday matching, and day boundaries</td></tr>
              <tr><td>WiFi IP Addresses</td><td>Restrict check-ins to specific office WiFi networks</td></tr>
              <tr><td>Transit Threshold</td><td>Allowed travel time between this branch and others before a deduction applies</td></tr>
              <tr><td>Emergency Mode</td><td>Bypasses WiFi check for all employees — GPS still required</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Location Verification</h2>
        <p>Employees must be within the configured radius to check in. GPS accuracy must be <strong>300 meters or better</strong> — a weaker signal is always rejected. Employees with an active Remote Permission bypass location checks entirely.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>WiFi Verification &amp; Emergency Mode</h2>
        <p>If you've added WiFi IP addresses to a branch, employees must be connected to that WiFi to check in — unless they have Remote Permission.</p>
        <p><strong>Emergency Mode</strong> is for when branch WiFi is temporarily unavailable. It bypasses the WiFi check for everyone at the branch, but GPS location is still required. Disable it as soon as your WiFi is back.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Branch Timezone</h2>
        <p>The branch timezone is one of the most important settings. It determines when the attendance "day" starts and ends, when shifts begin and end, how holidays are interpreted, and how break and transit times are calculated.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>If an employee has a personal timezone set, it overrides the branch timezone for their own shift calculations. If a branch has no timezone set, the company timezone is used as a fallback.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Live Branch Map</h2>
        <p>Admins can view a real-time map showing which employees are currently checked in at each branch — including how long they've been there. Available for individual branches or a company-wide view.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Transit Between Branches</h2>
        <p>When an employee moves from one branch to another on the same day, WorkGuard tracks the travel time. If it exceeds the allowed transit threshold, the excess is deducted. WorkGuard automatically determines the appropriate transit allowance based on employee settings and branch configurations.</p>
      </div>
    </>
  )
}