import { Routes, Route, Navigate } from "react-router-dom";

import DocsLayout from "../layouts/DocsLayout";

import Welcome from "../pages/employee/Welcome";
import CheckInOut from "../pages/employee/CheckInOut";
import AttendanceStatus from "../pages/employee/AttendanceStatus";
import Leaves from "../pages/employee/Leaves";
import RemoteWork from "../pages/employee/RemoteWork";
import Devices from "../pages/employee/Devices";
import Profile from "../pages/employee/Profile";
// import Reports from "../pages/employee/Reports";
import AccountSecurity from "../pages/employee/AccountSecurity";
import Feedback from "../pages/employee/Feedback";

export default function EmployeeRoutes() {
  return (
    <DocsLayout type="employee">
      <Routes>

        <Route index element={<Navigate to="welcome" />} />

        <Route path="welcome" element={<Welcome />} />

        <Route path="check-in-out" element={<CheckInOut />} />

        <Route
          path="attendance-status"
          element={<AttendanceStatus />}
        />

        <Route path="leaves" element={<Leaves />} />

        <Route
          path="remote-work"
          element={<RemoteWork />}
        />

        <Route path="devices" element={<Devices />} />

        <Route path="profile" element={<Profile />} />

        {/* <Route path="reports" element={<Reports />} /> */}

        <Route
          path="account-security"
          element={<AccountSecurity />}
        />

        <Route path="feedback" element={<Feedback />} />

      </Routes>
    </DocsLayout>
  );
}