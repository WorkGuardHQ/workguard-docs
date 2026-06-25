// src/pages/admin/FeedbackManagement.jsx

import PageHeader from '../../components/PageHeader'

export default function FeedbackManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Feedback Management"
        description="Add, manage, and track performance notes and formal warnings for employees. Notes can be internal-only or made visible to the employee."
      />

      <div className="wg-section">
        <h2>Note Types</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--blue">Note</span></td><td>General performance feedback or observation</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Warning</span></td><td>A formal warning — counted separately and highlighted in reports</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Visibility Settings</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Setting</th><th>Who Can See It</th></tr></thead>
            <tbody>
              <tr><td>Visible to employee</td><td>Admins and the employee</td></tr>
              <tr><td>Internal only</td><td>Admins only — never shown to the employee</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Managing Notes</h2>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Action</th><th>Details</th></tr></thead>
            <tbody>
              <tr><td>Add</td><td>Any admin within scope can add notes to employees they manage</td></tr>
              <tr><td>Edit</td><td>Any admin within scope — the note is marked as "edited" with a timestamp</td></tr>
              <tr><td>Delete</td><td>Any admin within scope — notes are soft-deleted (hidden but not permanently removed)</td></tr>
            </tbody>
          </table>
        </div>
        <p>All notes are logged with the name of the admin who created them and the creation timestamp. Edits and deletions are also logged.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Notes in Reports</h2>
        <p>The employee monthly report's Feedback section includes a total count of notes and warnings, and lists each individual entry with date, type (Note or Warning), note text, and the name of the admin who added it.</p>
        <div className="wg-callout wg-callout--tip">
          <span className="wg-callout__icon">💡</span>
          <div>Only notes and warnings created <strong>within the report's month</strong> are included in that month's report. Older entries appear in the months they were created.</div>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Admin Scope</h2>
        <p>Branch Admins can only add and view notes for employees within their assigned branches. Global Admins can manage notes for any employee in the company.</p>
      </div>
    </>
  )
}