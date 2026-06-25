// src/pages/admin/EmailSettings.jsx

import PageHeader from '../../components/PageHeader'

export default function EmailSettings() {
  return (
    <>
      <PageHeader
        eyebrow="Settings"
        title="Email Settings"
        description="Configure the email provider used to send all system notifications — activation emails, leave approvals, remote permissions, missed checkout alerts, and more."
      />

      <div className="wg-section">
        <h2>Email Provider Options</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Provider</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td><strong>SMTP</strong></td><td>Your own mail server or service (e.g. Gmail SMTP, Outlook SMTP, corporate mail)</td></tr>
              <tr><td><strong>SendGrid</strong></td><td>High-volume transactional email with delivery tracking</td></tr>
              <tr><td><strong>Mailgun</strong></td><td>Developer-friendly API-based email delivery</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>SMTP Configuration</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Field</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>SMTP Host</td><td>Your mail server address (e.g. <code>smtp.gmail.com</code>)</td></tr>
              <tr><td>SMTP Port</td><td>Typically <code>587</code> (TLS) or <code>465</code> (SSL)</td></tr>
              <tr><td>Username</td><td>The email address used for authentication</td></tr>
              <tr><td>Password</td><td>The SMTP password or app password</td></tr>
              <tr><td>From Name</td><td>The name recipients see — e.g. "WorkGuard"</td></tr>
              <tr><td>From Email</td><td>The sender email address — e.g. <code>no-reply@yourcompany.com</code></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>SendGrid &amp; Mailgun</h2>
        <p>For SendGrid and Mailgun, you only need to provide your <strong>API key</strong> and configure the From Name and From Email. Everything else is handled automatically.</p>
        <div className="wg-callout wg-callout--warning">
          <span className="wg-callout__icon">⚠️</span>
          <div>Make sure your From Email address is verified in your SendGrid or Mailgun account. Unverified sender addresses will be rejected by the email provider.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Test Email</h2>
        <p>After saving your configuration, use the <strong>Send Test Email</strong> button to verify your settings are working correctly. A test email will be sent to your admin account email address.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Emails Sent by WorkGuard</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Trigger</th><th>Recipient</th></tr></thead>
            <tbody>
              <tr><td>New employee created</td><td>Employee — account activation link</td></tr>
              <tr><td>Password reset requested</td><td>Employee — password reset link</td></tr>
              <tr><td>Leave approved</td><td>Employee — approval confirmation</td></tr>
              <tr><td>Leave rejected</td><td>Employee — rejection with reason</td></tr>
              <tr><td>Remote permission granted</td><td>Employee — date, branch, and reason</td></tr>
              <tr><td>Remote permission revoked</td><td>Employee — date and reason</td></tr>
              <tr><td>Missed checkout (auto-closed)</td><td>Employee — notification with check-in time and branch</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}