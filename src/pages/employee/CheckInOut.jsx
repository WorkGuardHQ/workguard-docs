// // src/pages/employee/CheckInOut.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function CheckInOut() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Daily Work"
//         title="Check In & Check Out"
//         description="How to record your daily attendance using the WorkGuard app."
//       />

//       <div className="wg-section">
//         <h2>Checking In</h2>
//         <ol className="wg-steps">
//           <li>Open the WorkGuard app and select your branch</li>
//           <li>Make sure your GPS is enabled and you have a good signal</li>
//           <li>Tap <strong>Check In</strong> — the app verifies your device and location</li>
//           <li>If everything passes, your attendance is recorded immediately</li>
//         </ol>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Check-In Messages</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Message</th><th>What It Means</th></tr></thead>
//             <tbody>
//               <tr><td>Check-in successful</td><td>✅ Everything passed — attendance recorded</td></tr>
//               <tr><td>Device pending approval</td><td>Your device hasn't been approved by an admin yet</td></tr>
//               <tr><td>Invalid branch or outside radius</td><td>You're too far from the branch — move closer and try again</td></tr>
//               <tr><td>Account not yet activated</td><td>Click the activation link in your email first</td></tr>
//               <tr><td>Device disabled</td><td>Contact your admin — your device has been deactivated</td></tr>
//               <tr><td>Not connected to branch WiFi</td><td>Connect to the office WiFi, or ask your manager for remote permission</td></tr>
//               <tr><td>Already checked in</td><td>You already have an open check-in at this branch</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Checking Out</h2>
//         <p>When you check out, WorkGuard records your total time worked, any early departure, and updates your attendance summary for the day automatically.</p>
//         <div className="wg-callout wg-callout--warning">
//           <span className="wg-callout__icon">⚠️</span>
//           <div>Always check out at the end of your shift. If you forget, you'll receive a reminder email. If you still don't check out, the system may automatically close your record — your attendance will show as incomplete.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Switching Branches Without Checking Out</h2>
//         <p>If you check in at a new branch without checking out from your previous location:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">1</span><div>Your previous check-in is automatically closed and marked as incomplete</div></li>
//           <li><span className="wg-priority-num">2</span><div>You'll receive an email notification about the missing checkout</div></li>
//           <li><span className="wg-priority-num">3</span><div>Your check-in at the new branch proceeds normally</div></li>
//         </ul>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Night Shifts</h2>
//         <p>If your shift crosses midnight (e.g. 10 PM to 6 AM), WorkGuard automatically handles this — your checkout on the following morning is linked to the same shift. You don't need to do anything special.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Checking In After Your Shift Ends</h2>
//         <div className="wg-callout wg-callout--warning">
//           <span className="wg-callout__icon">⚠️</span>
//           <div>If you check in after your shift end time, the check-in is recorded but <strong>flagged as invalid</strong> and won't count toward your working hours. You'll see a message in the app advising you to contact your manager.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Work Mode</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Mode</th><th>When It Applies</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--blue">On-Site</span></td><td>Standard check-in from the branch location</td></tr>
//               <tr><td><span className="wg-badge wg-badge--teal">Remote</span></td><td>Check-in using a Remote Work Permission granted by your admin</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <p>If any check-in during the day is remote, the entire day is flagged as <strong>Remote</strong> in your attendance summary.</p>
//       </div>
//     </>
//   )
// }

// src/pages/employee/CheckInOut.jsx

import PageHeader from '../../components/PageHeader'

import CheckInOutImg from '../../assets/screenshots/check-in-out.png'


 import AttendanceDetails 
 from '../../assets/screenshots/EmpAtt-details-profile.png'
export default function CheckInOut() {
  return (
    <>
      <PageHeader
        eyebrow="Daily Work"
        title="Check In & Check Out"
        description="How to record your daily attendance using the WorkGuard app."
      />
<div className="wg-side-image__content">
      <div className="wg-section">
        <div className="wg-section">
  <h2>Checking In</h2>

  <div className="wg-side-image">

    <div className="wg-side-image__content">
      <ol className="wg-steps">
        <li>Open the WorkGuard app and select your branch</li>
        <li>Make sure your GPS is enabled and you have a good signal</li>
        <li>Tap <strong>Check In</strong> — the app verifies your device and location</li>
        <li>If everything passes, your attendance is recorded immediately</li>
      </ol>
    </div>

    <div className="wg-side-image__image">
      <img
        src={CheckInOutImg}
        alt="Employee check in and check out screen"
        className="wg-doc-image"
      />

      <p className="wg-image-caption">
        Employee attendance check-in and check-out screen.
      </p>
    </div>

  </div>
</div>
  </div>
</div>
      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Check-In Messages</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Message</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td>Check-in successful</td><td>✅ Everything passed — attendance recorded</td></tr>
              <tr><td>Device pending approval</td><td>Your device hasn't been approved by an admin yet</td></tr>
              <tr><td>Invalid branch or outside radius</td><td>Branch selection is wrong, or you're too far from the branch — move closer and try again</td></tr>
              <tr><td>Account not yet activated</td><td>Click the activation link in your email first</td></tr>
              <tr><td>Device disabled</td><td>Contact your admin — your device has been deactivated</td></tr>
              <tr><td>Not connected to branch WiFi</td><td>Connect to the office WiFi network, or ask your manager for remote permission</td></tr>
              <tr><td>Already checked in</td><td>You already have an open check-in at this branch</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Checking Out</h2>
        <p>When you check out, WorkGuard records your total time worked, any early departure, and updates your attendance summary for the day automatically.</p>


        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">💡</span>
  <div>
    Your attendance summary is updated automatically immediately after checkout.
  </div>
</div>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Always check out at the end of your shift. If you haven't checked out before your shift end time plus a short grace period, you'll receive a <strong>reminder email</strong>. If you still don't check out, the system will automatically close and invalidate your record — and you'll receive a warning email.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Switching Branches Without Checking Out</h2>
        <p>If you check in at a new branch without checking out from your previous location:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">1</span><div>Your previous check-in is automatically closed and marked as incomplete</div></li>
          <li><span className="wg-priority-num">2</span><div>You'll receive an email notification about the missing checkout</div></li>
          <li><span className="wg-priority-num">3</span><div>Your check-in at the new branch proceeds normally</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Night Shifts</h2>
        <p>If your shift is set as a <strong>night shift</strong> (e.g. 10:00 PM to 6:00 AM), WorkGuard knows that your checkout is expected on the <strong>next calendar day</strong>. The system handles this automatically — you don't need to do anything special.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Checking In After Your Shift Ends</h2>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>If you check in after your shift end time, the check-in is recorded but <strong>flagged as invalid</strong> and won't count toward your working hours. You'll see a message in the app advising you to contact your manager.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Early Arrival &amp; Staying Late</h2>
        <p>If you arrive before your shift starts or leave after your shift ends, the extra time is tracked as:</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Situation</th><th>What's Tracked</th></tr></thead>
            <tbody>
              <tr><td>Arrive before shift start</td><td><strong>Early arrival minutes</strong> — may generate overtime pay if configured</td></tr>
              <tr><td>Leave after shift end</td><td><strong>Late departure minutes</strong> — may generate overtime pay if configured</td></tr>
            </tbody>
          </table>
        </div>
        <p>Whether these generate overtime pay depends on your company's overtime policy. Contact your manager or check your monthly report to see if overtime was applied.</p>

<div className='img-small'>
        <img
  src={AttendanceDetails}
  alt="Attendance Details"
  className="wg-doc-image"
/>
</div>
<p className="wg-image-caption">
  Daily attendance details including worked hours, lateness, overtime, and deductions.
</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Work Mode</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Mode</th><th>When It Applies</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--blue">On-Site</span></td><td>Standard check-in from the branch location</td></tr>
              <tr><td><span className="wg-badge wg-badge--teal">Remote</span></td><td>Check-in using a Remote Work Permission granted by your admin</td></tr>
            </tbody>
          </table>
        </div>
        <p>If any check-in during the day is remote, the entire day is flagged as <strong>Remote</strong> in your attendance summary.</p>
      </div>
    </>
  )
}