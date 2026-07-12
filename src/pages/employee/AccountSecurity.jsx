// // src/pages/employee/AccountSecurity.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function AccountSecurity() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="My Account"
//         title="Account Security"
//         description="How WorkGuard protects your account and what you can do to keep it secure."
//       />

//       <div className="wg-section">
//         <h2>Login &amp; Password</h2>
//         <p>Your email address is your login username. Passwords are securely encrypted — your actual password is never stored, only a secure hash.</p>
//         <p>To reset your password, use the <strong>Forgot Password</strong> option on the login screen. A secure reset link will be sent to your email address.</p>
//         <div className="wg-callout wg-callout--warning">
//           <span className="wg-callout__icon">⚠️</span>
//           <div>Password reset links are single-use and expire. If your link expires before you use it, request a new one.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Biometric Verification</h2>
//         <p>If your administrator has enabled biometric verification for your account, you must complete a biometric check on every check-in and check-out.</p>
//         <p>If you get a new device or need to reset your biometrics, contact your admin — they can reset your biometric data from your profile. You'll be prompted to re-register on your next check-in.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Your Devices</h2>
//         <p>You can only check in from a registered, approved device. If you suspect a device you don't recognize has been registered to your account, contact your administrator immediately.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Rate Limiting</h2>
//         <p>WorkGuard automatically limits repeated failed login attempts to protect your account from unauthorized access.</p>
//       </div>
//     </>
//   )
// }


// src/pages/employee/AccountSecurity.jsx

import PageHeader from '../../components/PageHeader'

import login
 from '../../assets/screenshots/login.png'
import ActivateAccount
 from '../../assets/screenshots/ActivateAccount.png'

 import Forgotpassword
 from '../../assets/screenshots/resetPass.png'
export default function AccountSecurity() {
  return (
    <>
      <PageHeader
        eyebrow="My Account"
        title="Account Security & Login"
        description="How to log in to WorkGuard and keep your account secure."
      />
<img
  src={login}
  alt="Login"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
Sign in to your company's WorkGuard workspace using your email address and password.
</p>
      <div className="wg-section">
        <h2>Logging In</h2>
        <ol className="wg-steps">
          <li>Go to your company's WorkGuard URL</li>
          <li>Enter your email address and password</li>
          <li>If your account is active, you'll receive access immediately</li>
        </ol>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>Each company on WorkGuard has its own URL. Two employees at different companies can have the same email — the system identifies them by their company's URL.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Account Activation</h2>

        <div className="wg-side-image">
  <div className="wg-side-image__content">
        <p>When your admin creates your account:</p>
        <ol className="wg-steps">
          <li>You'll receive an <strong>activation email</strong> with a unique setup link</li>
          <li>The link is valid for <strong>24 hours</strong></li>
          <li>Click the link, set your password, and your account is ready</li>
          <li>Until you activate, you cannot log in or check in</li>
        </ol>
</div>
<div className="wg-side-image__image">
    <img
      src={ActivateAccount
}
      alt="Activate Account"
      className="wg-doc-image"
    />

    <p className="wg-image-caption">
      New employees receive an activation email containing a secure link to create their password and activate their account.
    </p>
  </div>
  </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>If your activation link has expired, ask your admin to resend the activation email from your profile page.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Password Reset</h2>
        <p>If you forget your password:</p>
        <ol className="wg-steps">
          <li>Click <strong>"Forgot password"</strong> on the login page</li>
          <li>Enter your email address</li>
          <li>Check your inbox for a reset link — valid for <strong>1 hour</strong></li>
          <li>Click the link and set a new password</li>
        </ol>

        <h3>Password Requirements</h3>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>At least <strong>8 characters</strong></div></li>
          <li><span className="wg-priority-num">→</span><div>At least one <strong>uppercase</strong> letter</div></li>
          <li><span className="wg-priority-num">→</span><div>At least one <strong>lowercase</strong> letter</div></li>
          <li><span className="wg-priority-num">→</span><div>At least one <strong>number</strong></div></li>
        </ul>

         <img
      src={Forgotpassword}
      alt="Forgot Password"
      className="wg-doc-image"
    />

    <p className="wg-image-caption">
      If you forget your password, request a secure reset link that lets you create a new password within the allowed time.
    </p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Biometric Verification</h2>
        <p>If your administrator has enabled biometric verification for your account, you must complete a biometric check on every check-in and check-out.</p>
        <p>If you get a new device or need to reset your biometrics, contact your admin — they can reset your biometric data from your profile. You'll be prompted to re-register on your next check-in.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Security Features</h2>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">🔒</span><div><strong>Passwords</strong> are securely stored using industry-standard encryption — your actual password is never stored</div></li>
          <li><span className="wg-priority-num">🛡</span><div><strong>Rate limiting</strong> protects login and API endpoints from brute-force attacks</div></li>
          <li><span className="wg-priority-num">✅</span><div><strong>Input validation</strong> protects the system from injection attacks</div></li>
          <li><span className="wg-priority-num">🔑</span><div>All requests are authenticated and checked for authorization before any data is returned</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Your Devices</h2>
        <p>You can only check in from a registered, approved device. If you suspect a device you don't recognize has been registered to your account, contact your administrator immediately.</p>
      </div>
    </>
  )
}