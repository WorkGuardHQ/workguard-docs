// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// import "../styles/Layout.css";

// export default function DocsLayout({
//   children,
//   type,
// }) {
//   return (
//     <div>
//       <Navbar />

//       <div className="docs-layout">
//         <Sidebar type={type} />

//         <main className="docs-content">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }
// src/routes/AdminRoutes.jsx

import { Routes, Route, Navigate } from "react-router-dom";

import DocsLayout from "../layouts/DocsLayout";

// Pages
import EmployeeManagement from "../pages/admin/EmployeeManagement";
import DepartmentManagement from "../pages/admin/DepartmentManagement";

import AttendanceManagement from "../pages/admin/AttendanceManagement";
import AttendancePolicies from "../pages/admin/AttendancePolicies";
import RemotePermissions from "../pages/admin/RemotePermissions";

import HolidayManagement from "../pages/admin/HolidayManagement";
import LeaveManagement from "../pages/admin/LeaveManagement";

import BranchManagement from "../pages/admin/BranchManagement";
import DeviceManagement from "../pages/admin/DeviceManagement";

import Payroll from "../pages/admin/Payroll";
import OvertimeBonusPolicies from "../pages/admin/OvertimeBonusPolicies";

import AutomatedJobs from "../pages/admin/AutomatedJobs";
import Reports from "../pages/admin/Reports";
import FeedbackManagement from "../pages/admin/FeedbackManagement";

import EmailSettings from "../pages/admin/EmailSettings";

export default function AdminRoutes() {
  return (
    <DocsLayout type="admin">
      <Routes>

        {/* Redirect */}
        <Route
          index
          element={
            <Navigate to="employee-management" />
          }
        />

        {/* People */}
        <Route
          path="employee-management"
          element={<EmployeeManagement />}
        />

        <Route
          path="departments"
          element={<DepartmentManagement />}
        />

        {/* Attendance */}
        <Route
          path="attendance"
          element={<AttendanceManagement />}
        />

        <Route
          path="attendance-policies"
          element={<AttendancePolicies />}
        />

        <Route
          path="remote-permissions"
          element={<RemotePermissions />}
        />

        {/* Time Off */}
        <Route
          path="holidays"
          element={<HolidayManagement />}
        />

        <Route
          path="leave"
          element={<LeaveManagement />}
        />

        {/* Infrastructure */}
        <Route
          path="branches"
          element={<BranchManagement />}
        />

        <Route
          path="devices"
          element={<DeviceManagement />}
        />

        {/* Payroll */}
        <Route
          path="payroll"
          element={<Payroll />}
        />

        <Route
          path="overtime-bonus"
          element={<OvertimeBonusPolicies />}
        />

        {/* Operations */}
        <Route
          path="automated-jobs"
          element={<AutomatedJobs />}
        />

        <Route
          path="reports"
          element={<Reports />}
        />

        <Route
          path="feedback"
          element={<FeedbackManagement />}
        />

        {/* Settings */}
        <Route
          path="email-settings"
          element={<EmailSettings />}
        />

      </Routes>
    </DocsLayout>
  );
}