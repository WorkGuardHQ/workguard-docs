// // src/data/search/adminSearch.js
// // Search-only data for the ADMIN help center. Only pages that live under
// // AdminRoutes.jsx belong here, so this content can never leak into the
// // public or employee search results.

// const adminSearch = [
//   {
//     title: "Employee Management",
//     path: "/admin/employee-management",
//     description: "Manage all employee records and roles across the company.",
//     sections: [
//       "Adding Employees",
//       "Editing Employee Records",
//       "Roles & Permissions",
//       "Employee Status",
//       "Bulk Actions",
//     ],
//   },
//   {
//     title: "Department Management",
//     path: "/admin/departments",
//     description: "Create and manage departments within the organization.",
//     sections: ["Creating Departments", "Assigning Managers", "Department Hierarchy"],
//   },
//   {
//     title: "Attendance Management",
//     path: "/admin/attendance",
//     description: "Monitor and manage attendance across all employees.",
//     sections: [
//       "Attendance Overview",
//       "Editing Attendance Records",
//       "Missed Punches",
//       "Bulk Attendance Actions",
//     ],
//   },
//   {
//     title: "Attendance Policies",
//     path: "/admin/attendance-policies",
//     description: "Configure company-wide attendance rules.",
//     sections: [
//       "Check-in Windows",
//       "Late Arrival Rules",
//       "Grace Periods",
//       "Policy Assignment",
//     ],
//   },
//   {
//     title: "Remote Permissions",
//     path: "/admin/remote-permissions",
//     description: "Approve and manage remote work permissions for employees.",
//     sections: ["Reviewing Requests", "Approving Locations", "Revoking Permissions"],
//   },
//   {
//     title: "Holiday Management",
//     path: "/admin/holidays",
//     description: "Configure the company holiday calendar.",
//     sections: ["Adding Holidays", "Recurring Holidays", "Branch-Specific Holidays"],
//   },
//   {
//     title: "Leave Management",
//     path: "/admin/leave",
//     description: "Manage and approve employee leave requests.",
//     sections: [
//       "Reviewing Requests",
//       "Leave Types",
//       "Leave Balances",
//       "Approval Workflow",
//     ],
//   },
//   {
//     title: "Branch Management",
//     path: "/admin/branches",
//     description: "Manage company branches and their settings.",
//     sections: ["Creating Branches", "Branch Settings", "Assigning Employees"],
//   },
//   {
//     title: "Device Management",
//     path: "/admin/devices",
//     description: "Manage devices used across the company.",
//     sections: ["Registering Devices", "Device Status", "Linking to Branches"],
//   },
//   {
//     title: "Payroll",
//     path: "/admin/payroll",
//     description:
//       "Run payroll, approve payroll, overtime, deductions, bonuses.",
//     sections: [
//       "What Goes Into Payroll",
//       "Salary Breakdown",
//       "Deductions",
//       "Net Salary",
//       "Monthly Overtime Cap",
//       "Payroll Run Statuses",
//       "Employee Profile Snapshot",
//       "Bulk Payroll Operations",
//       "Policy Audit Trail",
//     ],
//   },
//   {
//     title: "Overtime & Bonus Policies",
//     path: "/admin/overtime-bonus",
//     description: "Configure overtime and bonus rules company-wide.",
//     sections: [
//       "Overtime Calculation Rules",
//       "Monthly Overtime Cap",
//       "Bonus Policies",
//       "Approval Requirements",
//     ],
//   },
//   {
//     title: "Automated Jobs",
//     path: "/admin/automated-jobs",
//     description: "Manage scheduled background jobs that run across the platform.",
//     sections: [
//       "Scheduled Jobs",
//       "Job Logs",
//       "Failed Job Retries",
//       "Job Configuration",
//     ],
//   },
//   {
//     title: "Reports",
//     path: "/admin/reports",
//     description: "Generate and export reports across the company.",
//     sections: [
//       "Attendance Reports",
//       "Payroll Summary",
//       "Approved Payroll Filter",
//       "Custom Reports",
//     ],
//   },
//   {
//     title: "Feedback Management",
//     path: "/admin/feedback",
//     description: "Review employee feedback and performance notes.",
//     sections: ["Reviewing Feedback", "Performance Notes", "Response Tracking"],
//   },
//   {
//     title: "Email Settings",
//     path: "/admin/email-settings",
//     description: "Configure system email notifications and templates.",
//     sections: ["Notification Templates", "SMTP Configuration", "Automated Emails"],
//   },
// ];

// export default adminSearch;

// src/data/search/adminSearch.js
// Search-only data for the ADMIN help center. Only pages that live under
// AdminRoutes.jsx belong here, so this content can never leak into the
// public or employee search results.

const adminSearch = [
  {
    title: "Employee Management",
    path: "/admin/employee-management",
    description:
      "The Employee Management module is the starting point for everything in WorkGuard. Before any other feature can work correctly, each employee's profile must be fully and accurately set up.",
    sections: [
      "Employee Profile Fields",
      "Admin Roles & Scope",
      "Employment Status",
      "Working Days Per Month",
      "Timezone Priority",
      "Account Activation",
      "Biometric Management",
      "Employee Profile Overview",
    ],
  },
  {
    title: "Department Management",
    path: "/admin/departments",
    description:
      "Departments are organizational units that group employees across one or more branches. They can be used to filter reports, payroll, and to apply overtime and bonus policies at the department level.",
    sections: [
      "Department Settings",
      "What Departments Are Used For",
      "Live Employee Count",
      "Assigning Employees",
      "Branch Admin Access",
      "Deactivating vs. Deleting a Department",
    ],
  },
  {
    title: "Attendance Management",
    path: "/admin/attendance",
    description:
      "Monitor and manage employee attendance records. Every check-in and check-out automatically validates location, device, and shift rules — then updates the employee's daily record.",
    sections: [
      "How Attendance Is Recorded",
      "Check-In Conditions",
      "Daily Attendance Status",
      "Real-Time Branch Presence",
      "Invalid Attendance Records",
      "Absent Days Management",
      "Late Arrival Calculation",
      "Break / Gap Deductions",
      "Multi-Branch Days",
      "Holidays & Multi-Branch Employees",
      "Attendance Policy Summary",
      "Payroll Lock",
      "Admin Day Override",
      "Attendance Repair Center",
    ],
  },
  {
    title: "Attendance Policies",
    path: "/admin/attendance-policies",
    description:
      "Configure grace periods and deduction rates that govern how attendance is evaluated. Policies can be scoped to the company, a branch, a role, or a specific employee.",
    sections: [
      "Policy Scope & Priority",
      "Applied Policies Preview",
      "Grace Periods",
      "Deduction Rates",
      "Absence Settings",
      "Policy Date Range",
      "Policy Activation",
      "Historical Accuracy",
      "Timezones in Policies",
    ],
  },
  {
    title: "Remote Permissions",
    path: "/admin/remote-permissions",
    description:
      "Authorize specific employees to check in from any location on a specific date, bypassing GPS and WiFi checks.",
    sections: [
      "What Remote Permission Does",
      "Granting a Single Permission",
      "Bulk Permission",
      "Permission Statuses",
      "Email Notifications",
    ],
  },
  {
    title: "Holiday Management",
    path: "/admin/holidays",
    description:
      "Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans to manage your annual holiday calendar efficiently.",
    sections: [
      "Holiday Scopes",
      "Holiday Plans",
      "Individual Holidays",
      "Cancelling a Holiday Plan",
      "Holiday Overlap Rules",
      "How Holidays Affect Multi-Branch Employees",
      "Holiday Activation",
      "Timezones & Auto-Archiving",
    ],
  },
  {
    title: "Leave Management",
    path: "/admin/leave",
    description:
      "Manage the full leave lifecycle — approval, rejection, and cancellation — with automatic balance tracking and payroll integration.",
    sections: [
      "Leave Types",
      "Leave Policy Scope & Priority",
      "Submitting a Leave Request",
      "Approving Leave",
      "Rejecting Leave",
      "Cancelling Leave",
      "Leave Balances Dashboard",
      "Employee Leave History",
      "Yearly Leave Reset",
    ],
  },
  {
    title: "Branch Management",
    path: "/admin/branches",
    description:
      "Configure the physical locations where employees work. Branch settings control check-in radius, WiFi restrictions, timezone, and transit thresholds.",
    sections: [
      "Branch Settings",
      "Location Check Rules",
      "WiFi Verification & Emergency Mode",
      "Branch Timezone",
      "Transit Threshold",
      "Live Branch Map",
    ],
  },
  {
    title: "Device Management",
    path: "/admin/devices",
    description:
      "Every check-in and check-out must come from a registered, approved device. Manage employee devices to prevent unauthorized access and buddy-punching.",
    sections: [
      "Registration Flow",
      "Device Statuses",
      "Shared Device Rule",
      "Device Limit",
      "Managing Devices (Admin)",
    ],
  },
  {
    title: "Payroll",
    path: "/admin/payroll",
    description:
      "Calculate and approve monthly payroll for all employees. WorkGuard combines base salary with attendance deductions, overtime, and bonuses automatically.",
    sections: [
      "What Goes Into Payroll",
      "Salary Breakdown",
      "Deductions",
      "Net Salary",
      "Monthly Overtime Cap",
      "Payroll Run Statuses",
      "Employee Profile Snapshot",
      "Bulk Payroll Operations",
      "Generate Payroll for a Single Employee",
      "Policy Audit Trail",
    ],
  },
  {
    title: "Overtime & Bonus Policies",
    path: "/admin/overtime-bonus",
    description:
      "Configure overtime rules and bonus policies. Both follow the same scope and priority structure, with an additional department level.",
    sections: [
      "Policy Scope & Priority",
      "Overtime Types",
      "Overtime Rule Configuration",
      "Overtime Calculation",
      "Night Shift Detection for Overtime",
      "Monthly Overtime Cap",
      "Bonus Policy Scope & Priority",
      "Attendance Bonus",
      "Fixed Monthly Bonus",
      "Exceptional Bonus",
      "Policy Date Range",
    ],
  },
  {
    title: "Automated Jobs & System Tasks",
    path: "/admin/automated-jobs",
    description:
      "WorkGuard runs several automated background tasks to keep attendance records accurate, notify employees, and maintain the system. Here's what runs automatically and when.",
    sections: [
      "Scheduled Tasks Overview",
      "Close Missed Checkouts",
      "Checkout Reminder",
      "Daily Attendance Catch-Up",
      "Archive Expired Holidays",
      "Yearly Leave Reset",
      "Manual Alternatives",
    ],
  },
  {
    title: "Reports & Exports",
    path: "/admin/reports",
    description:
      "WorkGuard generates detailed reports for individual employees, company-wide monthly summaries, and full-year overviews. All reports export to Excel.",
    sections: [
      "Employee Monthly Report",
      "Company Monthly Report",
      "Company Yearly Report",
      "Report Timezones",
      "Multi-Branch Employees in Reports",
      "Payroll-Approved Filter",
      "Access Control",
      "Export Formats",
    ],
  },
  {
    title: "Feedback & Performance Notes",
    path: "/admin/feedback",
    description:
      "Add, manage, and track performance notes and formal warnings for employees. Notes can be internal-only or made visible to the employee.",
    sections: [
      "Note Types",
      "Visibility Settings",
      "Managing Feedback",
      "Notes in Reports",
      "Access Control",
    ],
  },
  {
    title: "Email Notifications & Settings",
    path: "/admin/email-settings",
    description:
      "Configure a custom email address to send all WorkGuard notifications from. Your employees will receive emails that appear to come from your company, not a generic system address.",
    sections: ["Email Settings", "Automatic Email Notifications", "Access Control"],
  },
];

export default adminSearch;