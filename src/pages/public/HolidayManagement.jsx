// src/pages/public/HolidayManagement.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function HolidayManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Core Features"
        title="Holiday Management"
        description="Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans for easier annual calendar management."
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
        <p>You can combine scopes — a national holiday can be company-wide while a regional holiday applies only to a specific branch.</p>
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
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">📌</span>
          <div>You can only add or remove holidays from a <strong>Draft</strong> plan. You can only cancel an <strong>Active</strong> plan. A plan requires at least one future holiday to be activated.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Cancelling a Holiday Plan</h2>
        <p>When cancelling an active plan, specify a cancellation date:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Holidays already ended → archived</div></li>
          <li><span className="wg-priority-num">→</span><div>Future holidays → archived</div></li>
          <li><span className="wg-priority-num">→</span><div>Holidays spanning the cancellation date → split at that date</div></li>
        </ul>
        <div className="wg-callout wg-callout--success">
          <span className="wg-callout__icon">✅</span>
          <div><strong>Past records are protected.</strong> Cancelling a holiday never changes records for days that have already passed. Only future dates are affected.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Overlap Prevention</h2>
        <p>The system prevents two holidays of the same scope from overlapping. Two company-wide holidays cannot share dates, and two branch holidays for the same branch cannot share dates. A company-wide and a branch holiday <em>can</em> share dates since they are different scopes.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Automatic Archiving</h2>
        <p>Every night, the system automatically archives any active holidays whose end date has passed. No manual action needed.</p>
      </div>
    </>
  )
}