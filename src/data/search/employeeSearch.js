// src/data/search/employeeSearch.js
// Search-only data for the EMPLOYEE help center. Only pages that live under
// EmployeeRoutes.jsx belong here.
//
// NOTE: title/description/sections below are extracted directly from each
// page's <PageHeader> and <h2> headings (src/pages/employee/*.jsx), not
// hand-guessed. If a page's headings change, this file will drift out of
// sync again unless it's generated at build time — see the automated
// extraction approach we discussed.

// src/data/search/employeeSearch.js
// Search-only data for the EMPLOYEE help center. Only pages that live under
// EmployeeRoutes.jsx belong here.
//
// NOTE: title/description/sections below are extracted directly from each
// page's <PageHeader> and <h2> headings (src/pages/employee/*.jsx), not
// hand-guessed. If a page's headings change, this file will drift out of
// sync again unless it's generated at build time — see the automated
// extraction approach we discussed.

const employeeSearch = [
  {
    title: "Getting Started with WorkGuard",
    path: "/employee/welcome",
    description:
      "Welcome to WorkGuard. This help center covers everything you need to use the system — from checking in every morning to viewing your monthly report.",
    sections: ["Setting Up Your Account", "Quick Links", "Things to Know"],
  },
  {
    title: "Check In & Check Out",
    path: "/employee/check-in-out",
    description: "How to record your daily attendance using the WorkGuard app.",
    sections: [
      "Checking In",
      "Check-In Messages",
      "Checking Out",
      "Switching Branches Without Checking Out",
      "Night Shifts",
      "Checking In After Your Shift Ends",
      "Early Arrival & Staying Late",
      "Work Mode",
    ],
  },
  {
    title: "Attendance Status",
    path: "/employee/attendance-status",
    description:
      "WorkGuard automatically assigns a status to each day in your attendance record. Here's what each one means and how the system decides.",
    sections: [
      "Daily Status",
      "How the System Decides Your Status",
      "Late Arrival",
      "Break Time",
      "Invalid Records",
      "Absent Days",
      "Working on a Holiday",
    ],
  },
  {
    title: "Leave Requests",
    path: "/employee/leaves",
    description: "How to submit, track, and cancel your leave requests in WorkGuard.",
    sections: [
      "Leave Types",
      "Submitting a Request",
      "Request Statuses",
      "Request Processing",
      "Cancelling a Request",
      "Leave History",
      "Your Leave Balances",
    ],
  },
  {
    title: "Remote Work",
    path: "/employee/remote-work",
    description:
      "If your admin grants you remote permission for a specific date, you can check in from anywhere — without needing to be at the branch or on the branch WiFi.",
    sections: ["How Remote Permission Works", "Permission Status", "If You Can't Check In"],
  },
  {
    title: "My Devices",
    path: "/employee/devices",
    description:
      "Learn how WorkGuard automatically registers and approves devices used for attendance.",
    sections: [
      "Registering a Device",
      "Device Statuses",
      "Pending Devices",
      "Changing Devices",
      "Shared Devices",
    ],
  },
  {
    title: "Profile",
    path: "/employee/profile",
    description:
      "Your WorkGuard profile contains your work schedule, branch assignment, and salary information — all of which affect how your attendance and payroll are calculated.",
    sections: [
      "Profile Information",
      "Leaves & Absence",
      "Feedback & Warnings",
      "Monthly Overview",
      "Daily Attendance History",
      "Employment Status",
    ],
  },
  {
    title: "Account Security & Login",
    path: "/employee/account-security",
    description: "How to log in to WorkGuard and keep your account secure.",
    sections: [
      "Logging In",
      "Account Activation",
      "Password Reset",
      "Biometric Verification",
      "Security Features",
      "Your Devices",
    ],
  },
  {
    title: "Feedback",
    path: "/employee/feedback",
    description:
      "Your administrator can add performance notes or formal warnings to your profile. Here's what you can see and where to find it.",
    sections: ["What You Can See", "Where Feedback Appears", "Questions About a Note?"],
  },
  // NOTE: /employee/reports (Reports.jsx) is intentionally excluded — the
  // page is marked for removal ("// no need" comment in the source file).
  // If it comes back, re-add an entry for it here.
];

export default employeeSearch;