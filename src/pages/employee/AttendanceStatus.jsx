// // src/pages/employee/AttendanceStatus.jsx
// // import DocsLayout from '../../layouts/DocsLayout'
// import PageHeader from '../../components/PageHeader'

// export default function AttendanceStatus() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Daily Work"
//         title="Attendance Status"
//         description="WorkGuard automatically assigns a status to each day in your attendance record. Here's what each one means."
//       />

//       <div className="wg-section">
//         <h2>Daily Status</h2>
//         <div className="wg-table-wrap">
//           <table className="wg-table">
//             <thead><tr><th>Status</th><th>What It Means</th></tr></thead>
//             <tbody>
//               <tr><td><span className="wg-badge wg-badge--green">Working Day</span></td><td>You were present and attendance was valid</td></tr>
//               <tr><td><span className="wg-badge wg-badge--red">Absent</span></td><td>It was a working day and no valid attendance was recorded</td></tr>
//               <tr><td><span className="wg-badge wg-badge--teal">Public Holiday</span></td><td>A declared holiday — no attendance expected</td></tr>
//               <tr><td><span className="wg-badge wg-badge--gray">Day Off</span></td><td>Not a scheduled working day for you</td></tr>
//               <tr><td><span className="wg-badge wg-badge--blue">Paid Leave</span></td><td>You had approved paid leave for this day</td></tr>
//               <tr><td><span className="wg-badge wg-badge--yellow">Unpaid Leave</span></td><td>You had approved unpaid leave for this day</td></tr>
//               <tr><td><span className="wg-badge wg-badge--gray">No Data</span></td><td>This day is outside your employment period</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Late Arrival</h2>
//         <p>Late minutes are calculated from your first valid check-in of the day. Your company's attendance policy includes a <strong>grace period</strong> — arriving within this window doesn't count as late.</p>
//         <p>If you're moving between branches, WorkGuard accounts for travel time before calculating any lateness.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Break Time</h2>
//         <p>When you check out and back in at the same branch, the gap is tracked as break time. Your policy includes a daily break allowance — time within the allowance is free. Anything beyond it may be deducted from your salary.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Invalid Records</h2>
//         <p>Some attendance records are automatically flagged as invalid and don't count toward your working hours:</p>
//         <ul className="wg-priority-list">
//           <li><span className="wg-priority-num">→</span><div>Checking in after your shift has ended</div></li>
//           <li><span className="wg-priority-num">→</span><div>Records that don't overlap with your scheduled shift window</div></li>
//           <li><span className="wg-priority-num">→</span><div>Records manually invalidated by an admin</div></li>
//         </ul>
//         <p>If all records for a day are invalid, that day is treated as an <strong>absence</strong>.</p>
//       </div>

//       <hr className="wg-divider" />

//       <div className="wg-section">
//         <h2>Working on a Holiday</h2>
//         <p>If you check in on a declared holiday, your attendance is recorded and flagged for admin review. Holiday overtime rules may apply if your company has configured them.</p>
//       </div>
//     </>
//   )
// }

// src/pages/employee/AttendanceStatus.jsx

import PageHeader from '../../components/PageHeader'

import AttendanceTableprofile from '../../assets/screenshots/attendanc-profile.png'
import AbsenceDetails from '../../assets/screenshots/Leave-Profile-absence.png'

export default function AttendanceStatus() {
  return (
    <>
      <PageHeader
        eyebrow="Daily Work"
        title="Attendance Status"
        description="WorkGuard automatically assigns a status to each day in your attendance record. Here's what each one means and how the system decides."
      />

      <div className="wg-section">
        <h2>Daily Status</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>What It Means</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--green">Working Day</span></td><td>You were present and attendance was valid</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Absent</span></td><td>It was a working day and no valid attendance was recorded</td></tr>
              <tr><td><span className="wg-badge wg-badge--teal">Public Holiday</span></td><td>A declared holiday — no attendance expected</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Day Off</span></td><td>Not a scheduled working day for you</td></tr>
              <tr><td><span className="wg-badge wg-badge--blue">Paid Leave</span></td><td>You had approved paid leave for this day</td></tr>
              <tr><td><span className="wg-badge wg-badge--yellow">Unpaid Leave</span></td><td>You had approved unpaid leave for this day</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">No Data</span></td><td>This day is outside your employment period</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>How the System Decides Your Status</h2>
        <p>WorkGuard checks each day in this order — the first applicable status wins:</p>
        <ol className="wg-steps">
          <li><strong>Employment status</strong> — are you active on this day?</li>
          <li><strong>Holidays</strong> — is there a declared holiday for your branch?</li>
          <li><strong>Day-off schedule</strong> — is this day in your working days list?</li>
          <li><strong>Approved leave</strong> — do you have an approved leave request covering this day?</li>
          <li><strong>Attendance records</strong> — did you check in and out with valid records?</li>
        </ol>
      


   <img
  src={AttendanceTableprofile}
  alt="Attendance Details"
  className="wg-doc-image"
/>
<p className="wg-image-caption">
  Attendance history and daily status displayed in the employee profile.
</p>
</div>


      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Late Arrival</h2>
        <p>Late minutes are calculated from your first valid check-in of the day. Your company's attendance policy includes a <strong>grace period</strong> — arriving within this window doesn't count as late and no deduction applies.</p>
        <p>If you're moving from one branch to another, WorkGuard accounts for the travel time between them before calculating any lateness.</p>

        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">💡</span>
  <div>
    You can review your late minutes, deductions, and worked hours directly from your attendance details page.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Break Time</h2>
        <p>When you check out and back in at the same branch, the gap is tracked as break time. Your policy includes a daily break allowance — time within the allowance is free. Anything beyond it may result in a deduction from your salary.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Invalid Records</h2>
        <p>Some attendance records are automatically flagged as invalid and don't count toward your working hours:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Checking in after your shift has already ended</div></li>
          <li>
  <span className="wg-priority-num">→</span>
  <div>
    Missing checkout records that were automatically closed by the system
  </div>
</li>
          <li><span className="wg-priority-num">→</span><div>Records that don't overlap with your scheduled shift window</div></li>
          <li><span className="wg-priority-num">→</span><div>Records manually invalidated by an admin</div></li>
        </ul>
        <p>If all records for a day are invalid, that day is treated as an <strong>absence</strong>.</p>
      </div>

      <hr className="wg-divider" />
<div className="wg-section">
  <h2>Absent Days</h2>

  <p>
    WorkGuard keeps track of all days marked as absence. You can filter your absence history by month and year to review every day counted as absent.
  </p>

  <ul className="wg-priority-list">
    <li>
      <span className="wg-priority-num">→</span>
      <div>Filter absence records by month and year.</div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>Review all days that were counted as absences.</div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>Absence days are automatically calculated based on attendance records, leave requests, holidays, and working schedules.</div>
    </li>
  </ul>

  <div className="wg-callout wg-callout--tip">
    <span className="wg-callout__icon">💡</span>
    <div>
      If you believe an absence was recorded incorrectly, contact your administrator for review.
    </div>
  </div>

<p>
  The employee profile provides a complete history of all recorded absence days.
</p>
<img
      src={AbsenceDetails}
      alt="Employee absence details"
      className="wg-doc-image"
    />
  

    <p className="wg-image-caption">
      Absence history and details displayed in the employee profile.
    </p>

</div> 

<hr className="wg-divider" />
      <div className="wg-section">
        <h2>Working on a Holiday</h2>
        <p>If you check in on a declared holiday, your attendance is recorded and flagged for admin review. Holiday overtime rules may apply if your company has configured them.</p>
      </div>
    </>
  )
}