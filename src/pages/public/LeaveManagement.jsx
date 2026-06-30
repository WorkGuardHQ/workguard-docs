// src/pages/public/LeaveManagement.jsx

import PageHeader from '../../components/PageHeader'

export default function LeaveManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Payroll & Compliance"
        title="Leave Management"
        description="WorkGuard manages the full leave lifecycle — request, approval, rejection, and cancellation — with automatic balance tracking."
      />

      <div className="wg-section">
        <h2>Leave Types</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--blue">Annual Leave</span></td><td>Paid — deducted from the employee's annual balance</td></tr>
              <tr><td><span className="wg-badge wg-badge--teal">Sick Leave</span></td><td>Paid — deducted from the sick leave balance</td></tr>
              <tr><td><span className="wg-badge wg-badge--yellow">Unpaid Leave</span></td><td>No pay — balance is not affected</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Leave Policy</h2>
        <p>Your company can configure leave entitlements at different levels — company-wide, branch, role, or per employee. The most specific policy applies.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Annual days</td><td>Total paid annual leave per year (default: 21)</td></tr>
              <tr><td>Sick days</td><td>Total sick leave per year (default: 10)</td></tr>
              <tr><td>Unpaid leave</td><td>Whether unpaid leave is allowed</td></tr>
              <tr><td>Carryover limit</td><td>Maximum unused annual days that roll to the next year</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">📌</span>
 <div>
  Leave policies can be configured at the company, branch,
  role, or individual employee level.
</div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Submitting Leave</h2>
        <p>When a leave request is submitted, WorkGuard automatically:</p>
        <ul className="wg-steps">
          <li>Checks for conflicts with existing leave requests</li>
          <li>Verifies the leave type is allowed by the policy</li>
          <li>Confirms sufficient balance is available</li>
          <li>Excludes weekends and public holidays from the count</li>
          <li>Creates the request in <strong>pending</strong> status</li>
        </ul>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>Admins can submit leave for past dates. Employees can only submit future leave.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Leave Approval Workflow</h2>
        {/* <p>When an admin approves a leave request, balance is deducted automatically and the employee's attendance summary is updated for each affected day. If balance runs out partway through the period, remaining days become unpaid (if allowed by policy). Payroll-locked days require admin confirmation before proceeding.</p> */}

        <p>
  Submitted leave requests are reviewed by administrators.
  Once approved, leave balances and attendance records are
  updated automatically.
</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Rejecting Leave</h2>
        <p>A rejection reason is required. The employee is notified by email automatically. No balance change occurs.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Cancelling Leave</h2>
        <p><strong>Pending requests</strong> can be cancelled by either the employee or an admin with no balance change.</p>
        <p><strong>Approved leave</strong> can be partially cancelled by an admin by specifying a cancel-from date. Days before that date remain approved. Days from that date onward are cancelled and balance is restored. A preview is available before committing.</p>

        <div className="wg-callout wg-callout--tip">
  <span className="wg-callout__icon">💡</span>
  <div>
    WorkGuard supports partial leave cancellation while
    preserving historical attendance records.
  </div>
</div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Leave Balance Tracking</h2>
        <p>Each employee's leave balance is tracked per year and updated automatically:</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Balance</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Annual total</td><td>Total annual days available (including carryover from last year)</td></tr>
              <tr><td>Annual used</td><td>Paid annual days already taken</td></tr>
              <tr><td>Annual remaining</td><td>Available annual days left</td></tr>
              <tr><td>Sick total</td><td>Total sick days allocated</td></tr>
              <tr><td>Sick used</td><td>Sick days already taken</td></tr>
              <tr><td>Sick remaining</td><td>Available sick days left</td></tr>
              <tr><td>Absent days</td><td>Days marked absent without permission (updated automatically)</td></tr>
              <tr><td>Unpaid leave days</td><td>Days on approved unpaid leave</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Yearly Leave Reset</h2>
        <p>On <strong>January 1</strong> each year, WorkGuard automatically resets leave balances: unused annual leave is carried over up to the configured limit, sick leave resets to the full annual allocation, and used-day counters are cleared. A preview of the reset is available before it runs.</p>
       <p>
  Organizations can manually adjust employee leave balances
when exceptional situations require it.
</p>
      </div>
    </>
  )
}