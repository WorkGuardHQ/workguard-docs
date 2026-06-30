// // src/pages/admin/HolidayManagement.jsx

// import PageHeader from '../../components/PageHeader'

// export default function HolidayManagement() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Time Off & Scheduling"
//         title="Holiday Management"
//         description="Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans to manage your annual holiday calendar efficiently."
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
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Holiday Plans</h2>
//         <p>Group multiple holidays into a Plan for easier management.</p>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Status</th><th>Meaning</th><th>Actions Available</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--gray">Draft</span></td><td>No effect on attendance yet</td><td>Add / remove holidays</td></tr>
//               <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Live — affects attendance calculations</td><td>Cancel only</td></tr>
//               <tr><td><span className="wg-badge wg-badge--gray">Archived</span></td><td>All holidays have passed</td><td>View only</td></tr>
//               <tr><td><span className="wg-badge wg-badge--red">Cancelled</span></td><td>Manually cancelled</td><td>View only</td></tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="wg-callout wg-callout--tip">
//           <span className="wg-callout__icon">📌</span>
//           <div>A plan requires at least one future holiday to be activated.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Cancelling a Holiday Plan</h2>
//         <p>When you cancel an active plan, specify a cancellation date:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">→</span><div>Holidays already ended before the cancellation date → archived</div></li>
//           <li><span className="wg-priority-num">→</span><div>Holidays starting on or after the cancellation date → archived</div></li>
//           <li><span className="wg-priority-num">→</span><div>Holidays spanning the cancellation date → marked cancelled from that date forward</div></li>
//         </ul>
//         <div className="wg-callout wg-callout--success">
//           <span className="wg-callout__icon">✅</span>
//           <div><strong>Past days are protected.</strong> Cancelling a plan never retroactively removes holiday status for days that have already passed. Only future dates are affected.</div>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>How Holidays Affect Multi-Branch Employees</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Scenario</th><th>Holiday Status</th></tr></thead>
//             <tbody>
//               <tr><td>Single-branch employee</td><td>Holiday applies if their branch has one</td></tr>
//               <tr><td>Multi-branch — was present</td><td>Holiday only if <strong>all</strong> branches they attended have a holiday</td></tr>
//               <tr><td>Multi-branch — was absent</td><td>Holiday if <strong>any</strong> of their assigned branches has a holiday</td></tr>
//               <tr><td>Worked on a holiday</td><td>Attendance recorded and flagged for review — holiday OT may apply</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Timezones &amp; Auto-Archiving</h2>
//         <p>Each holiday is stored with its scope's timezone. Holiday dates are always compared using the correct local timezone. Every night, the system automatically archives any active holidays whose end date has passed — no manual action required.</p>
//       </div>
//     </>
//   )
// }

// src/pages/admin/HolidayManagement.jsx


import PageHeader from '../../components/PageHeader'

import HolidayManagementImg
  from '../../assets/screenshots/Holidays-Management.png'

  import HolidayPlansImg
  from '../../assets/screenshots/plan-Holidays-Management.png'
import CreateHolidayPlanImg
  from '../../assets/screenshots/Create-Holiday-Plan.png'

  import HolidayPlanDetailsImg
  from '../../assets/screenshots/Holiday-Plan-Details.png'

  import AddHolidayImg
  from '../../assets/screenshots/add-holiday.png'
export default function HolidayManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Core Features"
        title="Holiday Management"
        description="Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans to manage your annual holiday calendar efficiently."
      />
<img
  src={HolidayManagementImg}
  alt="Holiday Management"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Holiday Management page showing Individual Holidays and Holiday Plans.
</p>
      {/* Holiday Scopes */}
      <div className="wg-section">
        <h2>Holiday Scopes</h2>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Scope</th>
                <th>Who It Applies To</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Company-wide</td>
                <td>All employees across all branches</td>
              </tr>

              <tr>
                <td>Branch</td>
                <td>All employees at a specific branch</td>
              </tr>

              <tr>
                <td>Individual</td>
                <td>One specific employee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Different scopes may overlap. For example, a national holiday can be
          company-wide while a local celebration applies only to a specific branch.
        </p>
      </div>

      <hr className="wg-divider" />

      {/* Holiday Plans */}
      <div className="wg-section">
        <h2>Holiday Plans</h2>

        <p>
          Group multiple holidays into a plan for easier annual holiday calendar
          management.
        </p>
<img
  src={HolidayPlansImg}
  alt="Holiday Plans"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Holiday plans grouped by year with lifecycle management and activation controls.
</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Meaning</th>
                <th>Actions Available</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <span className="wg-badge wg-badge--gray">Draft</span>
                </td>
                <td>No effect on attendance yet</td>
                <td>Add / remove holidays</td>
              </tr>

              <tr>
                <td>
                  <span className="wg-badge wg-badge--green">Active</span>
                </td>
                <td>Live — affects attendance calculations</td>
                <td>Cancel only</td>
              </tr>

              <tr>
                <td>
                  <span className="wg-badge wg-badge--gray">Archived</span>
                </td>
                <td>All holidays have passed</td>
                <td>View only</td>
              </tr>

              <tr>
                <td>
                  <span className="wg-badge wg-badge--red">Cancelled</span>
                </td>
                <td>Manually cancelled</td>
                <td>View only</td>
              </tr>
            </tbody>
          </table>
          
        </div>

        <div className="wg-callout wg-callout--tip">

          
          <span className="wg-callout__icon">📌</span>
          <div>
            A plan requires at least one future holiday to be activated.
            Holidays can only be added or removed while the plan is in
            <strong> Draft </strong> status.
          </div>
          
        </div>

<h3>Viewing a Holiday Plan</h3>

<p>
  Administrators can open any holiday plan to review all holidays included in
  the plan, edit draft holidays, and add additional holidays before activation.
</p>

 <div className="img-small">
<img
  src={HolidayPlanDetailsImg}
  alt="Holiday Plan Details"
  className="wg-doc-image"
/>
</div>
<p className="wg-image-caption">
  Holiday Plan details showing all holidays included in the plan and available actions.
</p>


        <h3>Create Holiday Plan</h3>
<p>
  Holiday plans are usually used for annual calendars such as national holidays,
  public holidays, or company-wide holiday schedules.
</p>

<div className="wg-side-image__image">
  <img
    src={CreateHolidayPlanImg}
    alt="Create Holiday Plan"
    className="wg-doc-image"
  />
</div>

<p className="wg-image-caption">
  Creating a holiday plan and adding holidays before activation.
</p>
        
      </div>

      <hr className="wg-divider" />

      {/* Individual Holidays */}
      <div className="wg-section">
        <h2>Individual Holidays</h2>

        <p>
          Holidays may also be created independently without being assigned to
          a Holiday Plan. These holidays follow the same lifecycle as planned
          holidays.
        </p>

        <ul className="wg-priority-list">
          
          <li>
            <span className="wg-priority-num">→</span>
            <div>Draft holidays do not affect attendance calculations.</div>
          </li>

          <li>
            <span className="wg-priority-num">→</span>
            <div>
              Only future holidays can be edited, activated, or deleted.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">→</span>
            <div>
              Individual holidays automatically move to Archived after their
              end date passes.
            </div>
          </li>
        </ul>
        <h3>Create Individual Holiday</h3>

<div className="wg-side-image__image">
  <img
    src={AddHolidayImg}
    alt="Create Individual Holiday"
    className="wg-doc-image"
  />
</div>

<p className="wg-image-caption">
  Creating an individual holiday for a company, branch, or employee.
</p>

<div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">💡</span>
  <div>
    Individual holidays can be created for the entire company, a specific branch, or a single employee.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      {/* Cancel Plan */}
      <div className="wg-section">
        <h2>Cancelling a Holiday Plan</h2>

        <p>
          When you cancel an active plan, specify a cancellation date:
        </p>

        <ul className="wg-priority-list">
          <li>
            <span className="wg-priority-num">→</span>
            <div>
              Holidays already ended before the cancellation date are archived.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">→</span>
            <div>
              Holidays starting on or after the cancellation date are archived.
            </div>
          </li>

          <li>
            <span className="wg-priority-num">→</span>
            <div>
              Holidays spanning the cancellation date are cancelled from that
              date forward.
            </div>
          </li>
        </ul>

        <div className="wg-callout wg-callout--success">
          <span className="wg-callout__icon">✅</span>

          <div>
            <strong>Past days are protected.</strong> Cancelling a plan never
            retroactively removes holiday status for dates that have already
            passed. Only future dates are affected.
          </div>
        </div>
      </div>

      <hr className="wg-divider" />

      {/* Overlap Rules */}
      <div className="wg-section">
        <h2>Holiday Overlap Rules</h2>

        <p>
          The system prevents overlapping holidays within the same scope.
        </p>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Allowed?</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Two company-wide holidays on the same dates</td>
                <td>No</td>
              </tr>

              <tr>
                <td>Two holidays for the same branch on overlapping dates</td>
                <td>No</td>
              </tr>

              <tr>
                <td>Two holidays for the same employee on overlapping dates</td>
                <td>No</td>
              </tr>

              <tr>
                <td>Company-wide and branch holidays sharing dates</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      {/* Multi Branch */}
      <div className="wg-section">
        <h2>How Holidays Affect Multi-Branch Employees</h2>

        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Holiday Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Single-branch employee</td>
                <td>
                  Holiday applies if their branch has a holiday.
                </td>
              </tr>

              <tr>
                <td>Multi-branch — was present</td>
                <td>
                  Holiday applies only if all branches attended that day have
                  holidays.
                </td>
              </tr>

              <tr>
                <td>Multi-branch — was absent</td>
                <td>
                  Holiday applies if any assigned branch has a holiday.
                </td>
              </tr>

              <tr>
                <td>Worked on a holiday</td>
                <td>
                  Attendance is recorded and may qualify for holiday overtime
                  according to company policy.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />


<div className="wg-section">
  <h2>Holiday Activation</h2>

  <p>
    Only active holidays and active holiday plans affect attendance calculations.
    Draft holidays remain inactive until explicitly activated by an administrator.
  </p>

  <div className="wg-callout wg-callout--warning">
    <span className="wg-callout__icon">⚠️</span>
    <div>
      Activating a holiday immediately affects attendance calculations for all employees covered by that holiday scope.
    </div>
  </div>
</div>

<hr className="wg-divider" />


      {/* Timezones */}
      <div className="wg-section">
        <h2>Timezones & Auto-Archiving</h2>

        <p>
          Each holiday is stored with its scope's timezone. Holiday dates are
          always compared using the correct local timezone.
        </p>

        <p>
          Every night, the system automatically archives any active holidays
          whose end date has passed — no manual action is required.
        </p>
      </div>
    </>
  )
}