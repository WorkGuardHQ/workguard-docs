// src/pages/employee/Leaves.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function Leaves() {
  return (
    <>
      <PageHeader
        eyebrow="Leave & Time Off"
        title="Leave Requests"
        description="How to submit, track, and cancel your leave requests in WorkGuard."
      />

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
        <h2>Cancelling a Request</h2>
        <p>You can cancel a <strong>pending</strong> leave request yourself at any time — no balance change occurs. For <strong>approved</strong> leave, only an admin can cancel it (and only for future dates).</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Your Leave Balances</h2>
        <p>Your current leave balances are always visible in your profile. When a paid leave request is approved, the days are automatically deducted from your balance.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>Leave balances reset on <strong>January 1</strong> each year. Unused annual leave is carried over up to the limit set by your company. Sick leave resets fully — unused sick days don't carry over.</div>
        </div>
      </div>
    </>
  )
}