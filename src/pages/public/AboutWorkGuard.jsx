// // src/pages/public/AboutWorkGuard.jsx

// import PageHeader from '../../components/PageHeader'

// export default function AboutWorkGuard() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="About"
//         title="About WorkGuard"
//         description="WorkGuard is a modern workforce management platform developed and operated by Mokamu, designed to help organizations manage their workforce with greater accuracy, transparency, and efficiency."
//       />

//       <div className="wg-section">
//         <h2>Our Mission</h2>

//         <p>
//           Our mission is to simplify workforce management by replacing fragmented and manual HR processes with a secure, transparent, and easy-to-use digital platform.

//           {/* WorkGuard is a modern workforce management platform that helps
//           organizations simplify attendance tracking, payroll processing,
//           leave management, employee operations, and workforce productivity. */}
//         </p>

//         <p>
//           Our mission is to replace manual HR processes with a secure,
//           transparent, and easy-to-use platform that saves time,
//           improves accuracy, and scales with growing businesses.
//         </p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Why WorkGuard?</h2>

//         <ul className="wg-priority-list">
//           <li>
//             <span className="wg-priority-num">✓</span>
//             <div>GPS, Wi-Fi, and registered-device attendance verification</div>
//           </li>

//           <li>
//             <span className="wg-priority-num">✓</span>
//             <div>Biometric verification support</div>
//           </li>

//           <li>
//             <span className="wg-priority-num">✓</span>
//             <div>Automated payroll calculations</div>
//           </li>

//           <li>
//             <span className="wg-priority-num">✓</span>
//             <div>Leave and holiday management</div>
//           </li>

//           <li>
//             <span className="wg-priority-num">✓</span>
//             <div>Flexible overtime and bonus policies</div>
//           </li>

//           <li>
//             <span className="wg-priority-num">✓</span>
//             <div>Detailed reports and analytics</div>
//           </li>

//           <li>
//             <span className="wg-priority-num">✓</span>
//             <div>Multi-branch organizations with role-based access control</div>
//           </li>
//         </ul>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Get in Touch</h2>

//         <p>
//           Interested in WorkGuard, have questions about the platform,
//           or would like to discuss using it within your organization?
//           We'd love to hear from you.
//         </p>

//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead>
//               <tr>
//                 <th>Contact</th>
//                 <th>Details</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//   <td>Email</td>
//   <td>
//     <a href="mailto:contact@mokamu.com">
//       contact@mokamu.com
//     </a>
//   </td>
// </tr>

//              <tr>
//   <td>LinkedIn</td>
//   <td>
//     <a
//       href="https://www.linkedin.com/company/workguard-platform"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       WorkGuard Platform
//     </a>
//   </td>
// </tr>

//   <tr>
//   <td>Instagram</td>
//   <td>
//     <a
//       href="https://www.instagram.com/mokamu.global/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       mokamu.global
//     </a>
//   </td>
// </tr>


//               {/* <tr>
//   <td>WhatsApp</td>
//   <td>@workguard</td>
// </tr> */}
//             </tbody>
//           </table>
//         </div>

//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">💬</span>

//           <div>
//             We welcome feedback, feature requests, business inquiries,
//             and partnership opportunities.
//           </div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Platform Information</h2>

//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead>
//               <tr>
//                 <th>Item</th>
//                 <th>Value</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//   <td>Documentation Version
// </td>
//   <td>1.0</td>
// </tr>

//               <tr>
//                 <td>Last Updated</td>
//                 <td>July 2026</td>
//               </tr>

//               <tr>
//                 <td>Platform</td>
//                 <td>WorkGuard Workforce Management Platform</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="wg-callout wg-callout--tip">
          
// <div>
//   We continuously enhance WorkGuard with new capabilities, improved
//   performance, and ongoing security updates to support modern workforce
//   management.
// </div>
//         </div>
//       </div>



//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <p
//           style={{
//             textAlign: 'center',
//             color: 'var(--wg-text-muted)',
//             fontSize: '0.95rem'
//           }}
//         >
//          © 2026 WorkGuard Platform. All rights reserved.
//         </p>
//       </div>
//     </>
//   )
// }



// src/pages/public/AboutWorkGuard.jsx

import PageHeader from '../../components/PageHeader'
import mokamuLogo from '../../assets/mokamu-logo.png'

export default function AboutWorkGuard() {
  return (
    <>
      <PageHeader
        eyebrow="About WorkGuard"
        title="Workforce Management, Built for Modern Organizations"
        description="WorkGuard is a modern workforce management platform developed and operated by Mokamu, helping organizations manage attendance, payroll, leave, and workforce operations with greater accuracy, transparency, and control."
      />

      {/* ─────────────────────────────────────────────
          INTRO
      ───────────────────────────────────────────── */}
      <div className="wg-section">
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">◈</span>

          <div>
            <strong>WorkGuard by Mokamu</strong>
            <br />
            WorkGuard is part of the Mokamu technology ecosystem,
            built to provide organizations with a reliable and scalable
            approach to workforce management.
          </div>
        </div>
      </div>

      <hr className="wg-divider" />

      {/* ─────────────────────────────────────────────
          OUR MISSION
      ───────────────────────────────────────────── */}
      <div className="wg-section">
        <h2>Our Mission</h2>

        <p>
          WorkGuard was created with a simple goal: make workforce
          management easier, more accurate, and more transparent.
        </p>

        <p>
          We help organizations move away from fragmented spreadsheets,
          manual attendance records, and repetitive administrative
          processes toward a centralized digital platform that brings
          workforce operations together in one place.
        </p>

        <p>
          From daily attendance and employee operations to payroll,
          leave management, reporting, and workforce control, WorkGuard
          is designed to reduce administrative effort while giving
          organizations better visibility over their workforce.
        </p>
      </div>

      <hr className="wg-divider" />

      {/* ─────────────────────────────────────────────
          WHY WORKGUARD
      ───────────────────────────────────────────── */}
      <div className="wg-section">
        <h2>Why WorkGuard?</h2>

        <p>
          WorkGuard combines workforce visibility, operational control,
          and automation in a single platform designed to support
          organizations as they grow.
        </p>

        <ul className="wg-priority-list">
          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Verified Attendance</strong>
              <br />
              GPS, Wi-Fi, and registered-device attendance verification.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Biometric Support</strong>
              <br />
              Additional verification capabilities for workforce
              attendance and identity control.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Automated Payroll</strong>
              <br />
              Flexible payroll calculations based on attendance,
              overtime, bonuses, and organizational policies.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Leave & Holiday Management</strong>
              <br />
              Centralized management of employee leave and holidays.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Flexible Workforce Policies</strong>
              <br />
              Support for configurable overtime, bonuses, and workforce
              management rules.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Reports & Analytics</strong>
              <br />
              Detailed workforce information to support better
              operational decisions.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">✓</span>
            <div>
              <strong>Multi-Branch & Role-Based Access</strong>
              <br />
              Designed for organizations operating across multiple
              branches with controlled access and permissions.
            </div>
          </li>
        </ul>
      </div>

      <hr className="wg-divider" />

     {/* ─────────────────────────────────────────────
    MOKAMU
───────────────────────────────────────────── */}
<div className="wg-section">
  <div className="wg-mokamu-brand">
    <img
      src={mokamuLogo}
      alt="Mokamu - Technology That Moves Business"
      className="wg-mokamu-logo"
    />

    <div className="wg-mokamu-content">
      <span className="wg-mokamu-label">
        POWERING WORKGUARD
      </span>

      <h2>WorkGuard by Mokamu</h2>

      <p>
        WorkGuard is developed and operated by Mokamu,
        bringing modern technology and workforce management
        together in one secure and scalable platform.
      </p>
    </div>
  </div>

  <div className="wg-callout wg-callout--tip">
    <span className="wg-callout__icon">✦</span>

    <div>
      <strong>
        Built by Mokamu. Designed for the modern workforce.
      </strong>
      <br />
      WorkGuard helps organizations simplify workforce
      operations while improving visibility, accuracy,
      and operational control.
    </div>
  </div>
</div>

      {/* ─────────────────────────────────────────────
          CONTACT
      ───────────────────────────────────────────── */}
      <div className="wg-section">
        <h2>Get in Touch</h2>

        <p>
          Whether you are interested in WorkGuard, looking for a workforce
          management solution, have a product question, or would like to
          discuss a business or partnership opportunity, our team would
          be happy to hear from you.
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
                <td>Company</td>
                <td>Mokamu</td>
              </tr>

              <tr>
                <td>Product</td>
                <td>WorkGuard Workforce Management Platform</td>
              </tr>

              <tr>
                <td>Email</td>
                <td>
                  <a href="mailto:contact@mokamu.com">
                    contact@mokamu.com
                  </a>
                </td>
              </tr>

              <tr>
                <td>WhatsApp</td>
                <td>
                  <a
                    href="https://wa.me/201113764539"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Mokamu on WhatsApp
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
                <td>Instagram</td>
                <td>
                  <a
                    href="https://www.instagram.com/mokamu.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @mokamu.global
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💬</span>

          <div>
            <strong>We'd love to hear from you.</strong>
            <br />
            We welcome feedback, feature requests, business inquiries,
            integration discussions, and partnership opportunities.
          </div>
        </div>
      </div>

      <hr className="wg-divider" />

      {/* ─────────────────────────────────────────────
          PLATFORM INFORMATION
      ───────────────────────────────────────────── */}
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
                <td>Platform</td>
                <td>WorkGuard Workforce Management Platform</td>
              </tr>

              <tr>
                <td>Developed & Operated By</td>
                <td>Mokamu</td>
              </tr>

              <tr>
                <td>Documentation Version</td>
                <td>1.0</td>
              </tr>

              <tr>
                <td>Last Updated</td>
                <td>August 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">↗</span>

          <div>
            We continuously enhance WorkGuard with new capabilities,
            performance improvements, and ongoing security updates to
            support the evolving needs of modern organizations.
          </div>
        </div>
      </div>

      <hr className="wg-divider" />

      {/* ─────────────────────────────────────────────
          FOOTER NOTE
      ───────────────────────────────────────────── */}
      <div className="wg-section">
        <p
          style={{
            textAlign: 'center',
            color: 'var(--wg-text-muted)',
            fontSize: '0.9rem',
            marginBottom: 0,
          }}
        >
          WorkGuard is a Mokamu product.
          <br />
          © {new Date().getFullYear()} WorkGuard Platform. All rights reserved.
        </p>
      </div>
    </>
  )
}