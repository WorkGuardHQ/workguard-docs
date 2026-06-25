// src/pages/employee/AttendanceStatus.jsx
// import DocsLayout from '../../layouts/DocsLayout'
import PageHeader from '../../components/PageHeader'

export default function AttendanceStatus() {
  return (
    <>
      <PageHeader
        eyebrow="Daily Work"
        title="Attendance Status"
        description="WorkGuard automatically assigns a status to each day in your attendance record. Here's what each one means."
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
        <h2>Late Arrival</h2>
        <p>Late minutes are calculated from your first valid check-in of the day. Your company's attendance policy includes a <strong>grace period</strong> — arriving within this window doesn't count as late.</p>
        <p>If you're moving between branches, WorkGuard accounts for travel time before calculating any lateness.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Break Time</h2>
        <p>When you check out and back in at the same branch, the gap is tracked as break time. Your policy includes a daily break allowance — time within the allowance is free. Anything beyond it may be deducted from your salary.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Invalid Records</h2>
        <p>Some attendance records are automatically flagged as invalid and don't count toward your working hours:</p>
        <ul className="wg-priority-list">
          <li><span className="wg-priority-num">→</span><div>Checking in after your shift has ended</div></li>
          <li><span className="wg-priority-num">→</span><div>Records that don't overlap with your scheduled shift window</div></li>
          <li><span className="wg-priority-num">→</span><div>Records manually invalidated by an admin</div></li>
        </ul>
        <p>If all records for a day are invalid, that day is treated as an <strong>absence</strong>.</p>
      </div>

      <hr className="wg-divider" />

      <div className="wg-section">
        <h2>Working on a Holiday</h2>
        <p>If you check in on a declared holiday, your attendance is recorded and flagged for admin review. Holiday overtime rules may apply if your company has configured them.</p>
      </div>
    </>
  )
}