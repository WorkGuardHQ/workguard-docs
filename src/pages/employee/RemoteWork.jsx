// // src/pages/employee/RemoteWork.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function RemoteWork() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Daily Work"
//         title="Remote Work"
//         description="If your admin grants you remote permission for a specific date, you can check in from anywhere — without needing to be at the branch or on the branch WiFi."
//       />

//       <div className="wg-section">
//         <h2>How Remote Permission Works</h2>
//         <div className="wg-callout wg-callout--warning">
//           <span className="wg-callout__icon">⚠️</span>
//           <div>Remote permission is an <strong>authorization</strong>, not automatic attendance. You still need to check in and check out through the app on the permitted date. If you don't, the day counts as an absence.</div>
//         </div>
//         <p>When your admin grants you remote permission, you'll receive an email with the date, the branch scope, and the reason. On that day, you can check in from any location.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Permission Status</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Future date — permission is valid</td></tr>
//               <tr><td><span className="wg-badge wg-badge--gray">Expired</span></td><td>The permitted date has already passed</td></tr>
//               <tr><td><span className="wg-badge wg-badge--red">Revoked</span></td><td>Your admin cancelled this permission — you'll receive an email</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Remote vs. Emergency Mode</h2>
//         <p>Sometimes your admin enables <strong>Emergency Mode</strong> at your branch (e.g. if the office WiFi is down). This is different from remote permission:</p>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th></th><th>Your Remote Permission</th><th>Branch Emergency Mode</th></tr></thead>
//             <tbody>
//               <tr><td>WiFi check</td><td>✅ Bypassed</td><td>✅ Bypassed</td></tr>
//               <tr><td>GPS check</td><td>✅ Bypassed — check in from anywhere</td><td>❌ Still required — must be at branch</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   )
// }

// src/pages/employee/RemoteWork.jsx

import PageHeader from '../../components/PageHeader'

export default function RemoteWork() {
  return (
    <>
      <PageHeader
        eyebrow="Daily Work"
        title="Remote Work"
        description="If your admin grants you remote permission for a specific date, you can check in from anywhere — without needing to be at the branch or on the branch WiFi."
      />

      <div className="wg-section">
        <h2>How Remote Permission Works</h2>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Remote permission is an <strong>authorization</strong>, not automatic attendance. You still need to check in and check out through the app on the permitted date. If you don't, the day counts as an absence.</div>
        </div>
        <p>When your admin grants you remote permission, you'll receive an email with the <strong>date, branch, timezone, and reason</strong>. On that day, you can check in from any location.</p>

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
        <h2>Permission Status</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Future date — permission is valid</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Expired</span></td><td>The permitted date has already passed</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Revoked</span></td><td>Your admin cancelled this permission — you'll receive an email</td></tr>
            </tbody>
          </table>
        </div>
      </div>
<hr className="wg-divider" />

<div className="wg-section">
  <h2>If You Can't Check In</h2>

  <p>
    If you believe you should have remote permission but cannot check in,
    contact your administrator to confirm that the permission is still
    active and has not been revoked or expired.
  </p>
</div>
    
    </>
  )
}