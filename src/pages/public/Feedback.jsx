// src/pages/public/Feedback.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function Feedback() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="Feedback & Performance Notes"
        description="Admins can add performance notes and formal warnings to an employee's profile. Notes can be kept internal or shared with the employee directly."
      />

      <div className="wg-section">
        <h2>Note Types</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--blue">Note</span></td><td>General performance feedback or observation</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Warning</span></td><td>A formal warning — highlighted in reports and counted separately</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Visibility</h2>
        <p>Each note can be set as:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">👁</span><div><strong>Visible to employee</strong> — the employee sees it in their dashboard</div></li>
          <li><span className="wg-priority-num">🔒</span><div><strong>Internal only</strong> — only admins can view it</div></li>
        </ul>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Managing Notes</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Action</th><th>Who Can Do It</th></tr></thead>
            <tbody>
              <tr><td>Add</td><td>Admins within scope</td></tr>
              <tr><td>Edit</td><td>Admins within scope — entry is marked as edited</td></tr>
              <tr><td>Delete</td><td>Admins within scope — hidden but not permanently removed</td></tr>
              <tr><td>View</td><td>Admins see all; employees see only notes marked as visible</td></tr>
            </tbody>
          </table>
        </div>
        <p>All entries are logged with who added them and when.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Notes in Reports</h2>
        <p>The employee monthly report includes a summary of all feedback entries, a count of formal warnings, and individual entries with date, type, and the admin who added them.</p>
      </div>
    </>
  )
}