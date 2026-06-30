// src/pages/employee/Leaves.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

import
SubmitLeaveRequestImg from '../../assets/screenshots/Submit-LeaveRequest.png'

import
Empleavedetails from '../../assets/screenshots/Empleavedetails.png'

// import
// LeaveProfileReqImg from '../../assets/screenshots/Leave-Profile-req.png'

import
EmpLeaveBalance from '../../assets/screenshots/EmpLeaveBalance.png'


import
MyLeaves from '../../assets/screenshots/myleaves.png'

export default function Leaves() {
  return (
    <>
      <PageHeader
        eyebrow="Leave & Time Off"
        title="Leave Requests"
        description="How to submit, track, and cancel your leave requests in WorkGuard."
      />
<img
  src={MyLeaves}
  alt="My Leaves Page"
   className="wg-doc-image--narrow"
/>

<p className="wg-image-caption">
  My Leaves page displays your leave requests, their statuses, and the form for submitting new requests.
</p>
      <div className="wg-section">
        <h2>Leave Types</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--blue">Annual Leave</span></td><td>Paid — deducted from your annual balance</td></tr>
              <tr><td><span className="wg-badge wg-badge--teal">Sick Leave</span></td><td>Paid — deducted from your sick leave balance</td></tr>
              <tr><td><span className="wg-badge wg-badge--yellow">Unpaid Leave</span></td><td>No pay — your balance is not affected</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Submitting a Request</h2>
        <p>When you submit a leave request, WorkGuard automatically checks for conflicts, verifies your balance, and excludes weekends and public holidays from the count. Your request is created in <strong>pending</strong> status until an admin reviews it.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>You can only submit leave for <strong>future dates</strong>. If you need leave for a past date, ask your administrator.</div>
        </div>

        <img
  src={SubmitLeaveRequestImg}
  alt="Submit Leave Request"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Use this form to submit a new leave request.
</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Request Statuses</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--yellow">Pending</span></td><td>Submitted and waiting for admin review</td></tr>
              <tr><td><span className="wg-badge wg-badge--green">Approved</span></td><td>Approved — your attendance is updated</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Rejected</span></td><td>Rejected — no balance change, email sent with reason</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Cancelled</span></td><td>Cancelled by you or your admin</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />
<div className="wg-section">
  <h2>Request Processing</h2>

  <ul className="wg-priority-list">
    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Approved leave automatically updates your attendance records.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Paid leave days are deducted automatically from your balance.
      </div>
    </li>

    <li>
      <span className="wg-priority-num">→</span>
      <div>
        Public holidays and weekends are excluded from leave calculations.
      </div>
    </li>
  </ul>
</div>

<hr className="wg-divider" />
      <div className="wg-section">
        <h2>Cancelling a Request</h2>
        <p>You can cancel a <strong>pending</strong> leave request yourself at any time — no balance change occurs. For <strong>approved</strong> leave, only an admin can cancel it (and only for future dates).</p>
      </div>

      <hr className="wg-divider" />

<div className="wg-section">
  <h2>Leave History</h2>

  <p>
    You can review all previous leave requests from your profile,
    including request dates, statuses, working days, and details.
  </p>

  <div className="wg-callout wg-callout--tip">
    <span className="wg-callout__icon">💡</span>
    <div>
      Leave history can be filtered by year to quickly find
      previous requests.
    </div>
  </div>

   <img
      src={Empleavedetails}
      alt="Employee Leave History"
      className="wg-doc-image"
    />
  
   <p className="wg-image-caption">
     The Leave Details page displays request information, decision details, and daily leave records.
  </p>
</div>

<hr className="wg-divider" />

      <div className="wg-section">
        <h2>Your Leave Balances</h2>
        <p>Your current leave balances are always visible in your profile. When a paid leave request is approved, the days are automatically deducted from your balance.</p>

        <ul className="wg-priority-list">
  <li>
    <span className="wg-priority-num">→</span>
    <div>Annual leave balance</div>
  </li>

  <li>
    <span className="wg-priority-num">→</span>
    <div>Sick leave balance</div>
  </li>

  <li>
    <span className="wg-priority-num">→</span>
    <div>Unpaid leave days</div>
  </li>
</ul>

      <img
  src={EmpLeaveBalance}
  alt="Employee Leave Balance"
  className="wg-doc-image"
/>

<p className="wg-image-caption">
  Your leave profile displays yearly balances, usage statistics, and leave history.
</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>Leave balances reset on <strong>January 1</strong> each year. Unused annual leave is carried over up to the limit set by your company. Sick leave resets fully — unused sick days don't carry over.</div>
        </div>
      </div>
    </>
  )
}