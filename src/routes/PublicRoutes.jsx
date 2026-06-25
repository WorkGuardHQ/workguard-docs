import { Routes, Route, Navigate } from "react-router-dom";

import DocsLayout from "../layouts/DocsLayout";

import Overview from "../pages/public/Overview";
import Features from "../pages/public/Features";
import EmployeeManagement from "../pages/public/EmployeeManagement";
import AttendancePolicy from"../pages/public/AttendancePolicy";
import AttendanceManagement from "../pages/public/AttendanceManagement";
import HolidayManagement from "../pages/public/HolidayManagement";
import RemoteWork from "../pages/public/RemoteWork";
import DeviceManagement from "../pages/public/DeviceManagement";
import BranchManagement from "../pages/public/BranchManagement";
import Payroll from "../pages/public/Payroll";
import LeaveManagement from "../pages/public/LeaveManagement";
import OvertimeBonus from "../pages/public/OvertimeBonus";
import Reports from "../pages/public/Reports";
import Security from "../pages/public/Security";
import Feedback from "../pages/public/Feedback"
export default function PublicRoutes() {
  return (
    <DocsLayout type="public">
      <Routes>

        <Route
          index
          element={<Navigate to="overview" />}
        />

        <Route path="overview" element={<Overview />} />

        <Route path="features" element={<Features/>} />

        <Route
          path="employee-management"
          element={<EmployeeManagement />}
        />
 <Route
          path='attendance-policies'
          element={<AttendancePolicy/>}
        />
        <Route
          path="attendance"
          element={<AttendanceManagement />}
        />

        <Route
          path="holidays"
          element={<HolidayManagement />}
        />

        <Route
          path="remote-work"
          element={<RemoteWork />}
        />

        <Route
          path="devices"
          element={<DeviceManagement />}
        />

        <Route
          path="branches"
          element={<BranchManagement />}
        />

        <Route path="payroll" element={<Payroll />} />

        <Route
          path="leave"
          element={<LeaveManagement />}
        />

        <Route
          path="overtime-bonus"
          element={<OvertimeBonus />}
        />

        <Route path="reports" element={<Reports />} />

        <Route path="security" element={<Security />} />

 <Route
  path="feedback"
  element={<Feedback />}
/>
<Route path="*" element={<Navigate to="overview" replace />} />
      </Routes>
    </DocsLayout>
  );
}