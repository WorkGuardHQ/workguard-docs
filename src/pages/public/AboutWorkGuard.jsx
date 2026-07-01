// src/pages/public/AboutWorkGuard.jsx

import PageHeader from '../../components/PageHeader'

export default function AboutWorkGuard() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About & Contact"
        description="Learn about WorkGuard, our mission, and how to contact us for business inquiries, support, or partnership opportunities."
      />

      <div className="wg-section">
        <h2>Our Mission</h2>

        <p>
          WorkGuard is a modern workforce management platform that helps
          organizations simplify attendance tracking, payroll processing,
          leave management, employee operations, and workforce productivity.
        </p>

        <p>
          Our mission is to replace manual HR processes with a secure,
          transparent, and easy-to-use platform that saves time,
          improves accuracy, and scales with growing businesses.
        </p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Why WorkGuard?</h2>

        <ul className="wg-priority-list">
          <li>
            <span className="wg-priority-num">✓</span>
            <div>GPS, Wi-Fi, and registered-device attendance verification</div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>Biometric verification support</div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>Automated payroll calculations</div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>Leave and holiday management</div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>Flexible overtime and bonus policies</div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>Detailed reports and analytics</div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>Multi-branch organizations with role-based access control</div>
          </li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Get in Touch</h2>

        <p>
          Interested in WorkGuard, have questions about the platform,
          or would like to discuss using it within your organization?
          We'd love to hear from you.
        </p>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Contact</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
  <td>Email</td>
  <td>
    <a href="mailto:workguard.platform@gmail.com">
      workguard.platform@gmail.com
    </a>
  </td>
</tr>

             <tr>
  <td>LinkedIn</td>
  <td>
    <a
      href="https://www.linkedin.com/company/workguard-platform"
      target="_blank"
      rel="noopener noreferrer"
    >
      WorkGuard Platform
    </a>
  </td>
</tr>

              <tr>
  <td>WhatsApp</td>
  <td>@workguard</td>
</tr>
            </tbody>
          </table>
        </div>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💬</span>

          <div>
            We welcome feedback, feature requests, business inquiries,
            and partnership opportunities.
          </div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Platform Information</h2>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
  <td>Documentation Version
</td>
  <td>1.0</td>
</tr>

              <tr>
                <td>Last Updated</td>
                <td>July 2026</td>
              </tr>

              <tr>
                <td>Platform</td>
                <td>WorkGuard Workforce Management Platform</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="wg-callout wg-callout--tip">
          
<div>
  We continuously enhance WorkGuard with new capabilities, improved
  performance, and ongoing security updates to support modern workforce
  management.
</div>
        </div>
      </div>



      <hr className="wg-divider" />

      <div className="wg-section">
        <p
          style={{
            textAlign: 'center',
            color: 'var(--wg-text-muted)',
            fontSize: '0.95rem'
          }}
        >
         © 2026 WorkGuard Platform. All rights reserved.
        </p>
      </div>
    </>
  )
}