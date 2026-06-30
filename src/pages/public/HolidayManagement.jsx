// // src/pages/public/HolidayManagement.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function HolidayManagement() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Core Features"
//         title="Holiday Management"
//         description="Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans for easier annual calendar management."
//       />

//       <div className="wg-section">
//         <h2>Holiday Scopes</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Scope</th><th>Who It Applies To</th></tr></thead>
//             <tbody>
//               <tr><td>Company-wide</td><td>All employees across all branches</td></tr>
//               <tr><td>Branch</td><td>All employees at a specific branch</td></tr>
//               <tr><td>Individual</td><td>One specific employee</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <p>You can combine scopes — a national holiday can be company-wide while a regional holiday applies only to a specific branch.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Holiday Plans</h2>
//         <p>Holiday Plans let you group multiple holidays and manage them together — perfect for setting up an annual holiday calendar at once.</p>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--gray">Draft</span></td><td>Being prepared — has no effect on attendance yet</td></tr>
//               <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Live — holidays affect attendance calculations</td></tr>
//               <tr><td><span className="wg-badge wg-badge--gray">Archived</span></td><td>All holidays in the plan have passed</td></tr>
//               <tr><td><span className="wg-badge wg-badge--red">Cancelled</span></td><td>Manually cancelled by an admin</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>You can only add or remove holidays from a <strong>Draft</strong> plan. You can only cancel an <strong>Active</strong> plan. A plan requires at least one future holiday to be activated.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Cancelling a Holiday Plan</h2>
//         <p>When cancelling an active plan, specify a cancellation date:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">→</span><div>Holidays already ended → archived</div></li>
//           <li><span className="wg-priority-num">→</span><div>Future holidays → archived</div></li>
//           <li><span className="wg-priority-num">→</span><div>Holidays spanning the cancellation date → split at that date</div></li>
//         </ul>
//         <div className="wg-callout wg-callout--success">
//           <span className="wg-callout__icon">✅</span>
//           <div><strong>Past records are protected.</strong> Cancelling a holiday never changes records for days that have already passed. Only future dates are affected.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Overlap Prevention</h2>
//         <p>The system prevents two holidays of the same scope from overlapping. Two company-wide holidays cannot share dates, and two branch holidays for the same branch cannot share dates. A company-wide and a branch holiday <em>can</em> share dates since they are different scopes.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Automatic Archiving</h2>
//         <p>Every night, the system automatically archives any active holidays whose end date has passed. No manual action needed.</p>
//       </div>
//     </>
//   )
// }


// src/pages/public/HolidayManagement.jsx

import PageHeader from '../../components/PageHeader'

import HolidayManagementImg
  from '../../assets/screenshots/Holidays-Management.png'
export default function HolidayManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Core Features"
        title="Holiday Management"
        description="Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans for easier annual calendar management."
      />
<img
  src={HolidayManagementImg}
  alt="Holiday Management"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Holiday Management overview including holiday plans and individual holidays.
</p>
      <div className="wg-section">
        <h2>Holiday Scopes</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Scope</th><th>Who It Applies To</th></tr></thead>
            <tbody>
              <tr><td>Company-wide</td><td>All employees across all branches</td></tr>
              <tr><td>Branch</td><td>All employees at a specific branch</td></tr>
              <tr><td>Individual</td><td>One specific employee</td></tr>
            </tbody>
          </table>
        </div>
        <p>You can combine scopes — a national holiday can be company-wide while a regional holiday applies only to a specific branch.</p>

        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">💡</span>
  <div>
    Different holiday scopes can coexist without affecting each other.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Holiday Plans</h2>
        <p>Holiday Plans let you group multiple holidays and manage them together — perfect for setting up an annual holiday calendar at once.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--gray">Draft</span></td><td>Being prepared — has no effect on attendance yet</td></tr>
              <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Live — holidays affect attendance calculations</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Archived</span></td><td>All holidays in the plan have passed</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Cancelled</span></td><td>Manually cancelled by an admin</td></tr>
            </tbody>
          </table>
        </div>
        {/* <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>You can only add or remove holidays from a <strong>Draft</strong> plan. You can only cancel an <strong>Active</strong> plan. A plan requires at least one future holiday to be activated.</div>
        </div> */}
        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">📌</span>
  <div>
    Holiday Plans make it easy to organize and manage annual holiday schedules.
  </div>
</div>
      </div>

      <hr className="wg-divider" />
<div className="wg-section">
  <h2>Plan Lifecycle</h2>

  <p>
    Holiday Plans can be activated, cancelled, or automatically archived
    when all included holidays have passed.
  </p>

  <ul className="wg-priority-list">
    <li>
      <span className="wg-priority-num">→</span>
      <div>Draft plans do not affect attendance calculations.</div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>Only active plans affect attendance and payroll calculations.</div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>Archived and cancelled plans remain available for historical review.</div>
    </li>
  </ul>
</div>

 <hr className="wg-divider" />
      <div className="wg-section">
        <h2>Individual Holidays</h2>
        <p>Single holidays (not part of a plan) follow the same lifecycle: Draft → Active → Cancelled / Archived.</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Draft holidays have no effect on attendance</div></li>
          <li><span className="wg-priority-num">→</span><div>Past holidays cannot be created, edited, or deleted</div></li>
          <li><span className="wg-priority-num">→</span><div>The system automatically archives holidays after their end date passes — no manual action needed</div></li>
        </ul>
      </div>

   

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Overlap Prevention</h2>
       <p>
  The system prevents conflicting holidays within the same scope while
  still allowing different scopes to coexist when necessary.
</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">

        <h2>Timezones & Automatic Archiving</h2>
        <p>
  Each holiday is stored with the timezone of its scope. Holiday dates are always evaluated using the correct local timezone.
</p>

<p>
  Every night, the system automatically archives active holidays whose end dates have passed. No manual action is required.
</p>
        {/* <h2>Holiday Timezones</h2>
        <p>Each holiday is stored with the timezone of its scope. Holiday dates are always compared using the correct timezone — for example, a branch holiday uses the branch's local timezone to determine which dates the holiday covers. This ensures employees in different timezones are never incorrectly marked absent or present on a holiday.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Automatic Archiving</h2>
        <p>Every night, the system automatically archives any active holidays whose end date has passed. No manual action needed.</p> */}
      </div>
    </>
  )
}

// src/pages/public/HolidayManagement.jsx

// import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function HolidayManagement() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Core Features"
//         title="Holiday Management"
//         description="Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans to simplify annual holiday scheduling."
//       />

//       <div className="wg-section">
//         <h2>Holiday Scopes</h2>

//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead>
//               <tr>
//                 <th>Scope</th>
//                 <th>Who It Applies To</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td>Company-wide</td>
//                 <td>All employees across all branches</td>
//               </tr>

//               <tr>
//                 <td>Branch</td>
//                 <td>Employees assigned to a specific branch</td>
//               </tr>

//               <tr>
//                 <td>Individual</td>
//                 <td>A single employee</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <p>
//           Different scopes may overlap. For example, a national holiday can be
//           company-wide while a regional celebration applies only to a specific
//           branch.
//         </p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Holiday Plans</h2>

//         <p>
//           Holiday Plans allow organizations to group multiple holidays together
//           and manage their annual holiday calendar more efficiently.
//         </p>

//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead>
//               <tr>
//                 <th>Status</th>
//                 <th>Description</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td>
//                   <span className="wg-badge wg-badge--gray">Draft</span>
//                 </td>
//                 <td>Prepared but not yet affecting attendance calculations</td>
//               </tr>

//               <tr>
//                 <td>
//                   <span className="wg-badge wg-badge--green">Active</span>
//                 </td>
//                 <td>Currently applied to attendance calculations</td>
//               </tr>

//               <tr>
//                 <td>
//                   <span className="wg-badge wg-badge--gray">Archived</span>
//                 </td>
//                 <td>All holidays within the plan have passed</td>
//               </tr>

//               <tr>
//                 <td>
//                   <span className="wg-badge wg-badge--red">Cancelled</span>
//                 </td>
//                 <td>The plan was manually cancelled</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>
//             Holiday Plans make it easy to organize and maintain yearly holiday
//             schedules in one place.
//           </div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Individual Holidays</h2>

//         <p>
//           Holidays can also be created independently without being part of a
//           Holiday Plan. These holidays follow the same lifecycle as planned
//           holidays.
//         </p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Holiday Overlap Rules</h2>

//         <p>
//           The system prevents overlapping holidays within the same scope while
//           still allowing holidays from different scopes to coexist when needed.
//         </p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Timezones & Auto-Archiving</h2>

//         <p>
//           Each holiday is stored using the appropriate timezone to ensure
//           accurate attendance calculations across different locations.
//         </p>

//         <p>
//           Expired holidays are automatically archived by the system, eliminating
//           the need for manual maintenance.
//         </p>
//       </div>
//     </>
//   )
// }

