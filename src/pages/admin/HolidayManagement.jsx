// src/pages/admin/HolidayManagement.jsx

import PageHeader from '../../components/PageHeader'

export default function HolidayManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Time Off & Scheduling"
        title="Holiday Management"
        description="Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans to manage your annual holiday calendar efficiently."
      />

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
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Holiday Plans</h2>
        <p>Group multiple holidays into a Plan for easier management.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Status</th><th>Meaning</th><th>Actions Available</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--gray">Draft</span></td><td>No effect on attendance yet</td><td>Add / remove holidays</td></tr>
              <tr><td><span className="wg-badge wg-badge--green">Active</span></td><td>Live — affects attendance calculations</td><td>Cancel only</td></tr>
              <tr><td><span className="wg-badge wg-badge--gray">Archived</span></td><td>All holidays have passed</td><td>View only</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Cancelled</span></td><td>Manually cancelled</td><td>View only</td></tr>
            </tbody>
          </table>
        </div>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>A plan requires at least one future holiday to be activated.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Cancelling a Holiday Plan</h2>
        <p>When you cancel an active plan, specify a cancellation date:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Holidays already ended before the cancellation date → archived</div></li>
          <li><span className="wg-priority-num">→</span><div>Holidays starting on or after the cancellation date → archived</div></li>
          <li><span className="wg-priority-num">→</span><div>Holidays spanning the cancellation date → marked cancelled from that date forward</div></li>
        </ul>
        <div className="wg-callout wg-callout--success">
          <span className="wg-callout__icon">✅</span>
          <div><strong>Past days are protected.</strong> Cancelling a plan never retroactively removes holiday status for days that have already passed. Only future dates are affected.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>How Holidays Affect Multi-Branch Employees</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Scenario</th><th>Holiday Status</th></tr></thead>
            <tbody>
              <tr><td>Single-branch employee</td><td>Holiday applies if their branch has one</td></tr>
              <tr><td>Multi-branch — was present</td><td>Holiday only if <strong>all</strong> branches they attended have a holiday</td></tr>
              <tr><td>Multi-branch — was absent</td><td>Holiday if <strong>any</strong> of their assigned branches has a holiday</td></tr>
              <tr><td>Worked on a holiday</td><td>Attendance recorded and flagged for review — holiday OT may apply</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Timezones &amp; Auto-Archiving</h2>
        <p>Each holiday is stored with its scope's timezone. Holiday dates are always compared using the correct local timezone. Every night, the system automatically archives any active holidays whose end date has passed — no manual action required.</p>
      </div>
    </>
  )
}