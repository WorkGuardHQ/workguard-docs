// src/pages/employee/Feedback.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function Feedback() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Feedback"
        description="Your administrator can add performance notes or formal warnings to your profile. Here's what you can see and where to find it."
      />

      <div className="wg-section">
        <h2>What You Can See</h2>
        <p>Admins can mark notes as <strong>visible to employee</strong> or <strong>internal only</strong>. You can only see notes that have been marked visible to you — internal notes are not accessible to employees.</p>
        <div className="wg-table-wrap">
          <table className="wg-table">
            <thead><tr><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="wg-badge wg-badge--blue">Note</span></td><td>General performance feedback or observation from your manager</td></tr>
              <tr><td><span className="wg-badge wg-badge--red">Warning</span></td><td>A formal warning — highlighted separately in your report</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Where Feedback Appears</h2>
        <p>Notes visible to you will appear in your profile dashboard and in your monthly report. Your report includes a count of total notes and formal warnings for the period.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Questions About a Note?</h2>
        <p>If you have questions about a feedback entry, speak directly with your manager or administrator. All notes include the name of the admin who added them and the date they were created.</p>
      </div>
    </>
  )
}