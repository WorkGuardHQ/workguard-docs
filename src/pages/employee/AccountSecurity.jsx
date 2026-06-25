// src/pages/employee/AccountSecurity.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function AccountSecurity() {
  return (
    <>
      <PageHeader
        eyebrow="My Account"
        title="Account Security"
        description="How WorkGuard protects your account and what you can do to keep it secure."
      />

      <div className="wg-section">
        <h2>Login &amp; Password</h2>
        <p>Your email address is your login username. Passwords are securely encrypted — your actual password is never stored, only a secure hash.</p>
        <p>To reset your password, use the <strong>Forgot Password</strong> option on the login screen. A secure reset link will be sent to your email address.</p>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Password reset links are single-use and expire. If your link expires before you use it, request a new one.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Biometric Verification</h2>
        <p>If your administrator has enabled biometric verification for your account, you must complete a biometric check on every check-in and check-out.</p>
        <p>If you get a new device or need to reset your biometrics, contact your admin — they can reset your biometric data from your profile. You'll be prompted to re-register on your next check-in.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Your Devices</h2>
        <p>You can only check in from a registered, approved device. If you suspect a device you don't recognize has been registered to your account, contact your administrator immediately.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Rate Limiting</h2>
        <p>WorkGuard automatically limits repeated failed login attempts to protect your account from unauthorized access.</p>
      </div>
    </>
  )
}