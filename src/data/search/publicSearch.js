// // src/data/search/publicSearch.js
// // Search-only data for the PUBLIC docs. Only pages that live under
// // PublicRoutes.jsx belong here, so admin/employee pages can never surface
// // in a public search.

// const publicSearch = [
//   {
//     title: "Overview",
//     path: "/public/overview",
//     description:
//       "An introduction to WorkGuard and what the platform does.",
//     sections: [
//       "What Is WorkGuard",
//       "Who Uses WorkGuard",
//       "Key Modules",
//       "Getting Access",
//     ],
//   },
//   {
//     title: "Features",
//     path: "/public/features",
//     description: "A full breakdown of everything WorkGuard offers.",
//     sections: [
//       "Attendance & Time Tracking",
//       "Payroll Automation",
//       "Leave Management",
//       "Device & Branch Control",
//       "Reporting & Analytics",
//     ],
//   },
//   {
//     title: "Employee Management",
//     path: "/public/employee-management",
//     description:
//       "How employee records, roles, and profiles are structured.",
//     sections: [
//       "Employee Profiles",
//       "Roles & Permissions",
//       "Onboarding",
//       "Department Assignment",
//       "Employee Status",
//     ],
//   },
//   {
//     title: "Attendance Policies",
//     path: "/public/attendance-policies",
//     description: "The rules that define how attendance is tracked.",
//     sections: [
//       "Check-in Windows",
//       "Late Arrival Rules",
//       "Grace Periods",
//       "Policy Assignment",
//       "Exceptions",
//     ],
//   },
//   {
//     title: "Attendance Tracking",
//     path: "/public/attendance",
//     description:
//       "How check-in and check-out is recorded across the company.",
//     sections: [
//       "Check In / Check Out",
//       "Attendance Logs",
//       "Missed Punches",
//       "Attendance Status Types",
//       "Real-Time Tracking",
//     ],
//   },
//   {
//     title: "Holiday Management",
//     path: "/public/holidays",
//     description: "How company holidays are configured and applied.",
//     sections: [
//       "Holiday Calendar",
//       "Recurring Holidays",
//       "Branch-Specific Holidays",
//       "Holiday Impact on Payroll",
//     ],
//   },
//   {
//     title: "Remote Work",
//     path: "/public/remote-work",
//     description: "How remote work permissions and locations are handled.",
//     sections: [
//       "Remote Work Requests",
//       "Approved Locations",
//       "Remote Attendance Rules",
//       "Tracking Remote Sessions",
//     ],
//   },
//   {
//     title: "Device Management",
//     path: "/public/devices",
//     description: "Managing the devices used for attendance and access.",
//     sections: [
//       "Registering Devices",
//       "Device Types",
//       "Device Status",
//       "Linking Devices to Branches",
//     ],
//   },
//   {
//     title: "Branch Management",
//     path: "/public/branches",
//     description: "How company branches and locations are organized.",
//     sections: [
//       "Creating Branches",
//       "Branch Settings",
//       "Assigning Employees to Branches",
//       "Branch-Level Permissions",
//     ],
//   },
//   {
//     title: "Payroll",
//     path: "/public/payroll",
//     description:
//       "Automated payroll calculation, approvals, and payout tracking.",
//     sections: [
//       "What Goes Into Payroll",
//       "Salary Breakdown",
//       "Deductions",
//       "Net Salary",
//       "Payroll Run Statuses",
//     ],
//   },
//   {
//     title: "Leave Management",
//     path: "/public/leave",
//     description: "How leave requests, balances, and approvals work.",
//     sections: [
//       "Requesting Leave",
//       "Leave Types",
//       "Leave Balances",
//       "Approval Workflow",
//     ],
//   },
//   {
//     title: "Overtime & Bonus",
//     path: "/public/overtime-bonus",
//     description:
//       "How overtime hours and bonuses are calculated and applied.",
//     sections: [
//       "Overtime Calculation",
//       "Monthly Overtime Cap",
//       "Bonus Rules",
//       "Overtime Approval",
//     ],
//   },
//   {
//     title: "Reports",
//     path: "/public/reports",
//     description:
//       "Reporting tools available across attendance, payroll and performance.",
//     sections: [
//       "Attendance Reports",
//       "Payroll Summary",
//       "Approved Payroll Filter",
//       "Exporting Reports",
//     ],
//   },
//   {
//     title: "Security",
//     path: "/public/security",
//     description: "How WorkGuard protects accounts and company data.",
//     sections: [
//       "Account Security",
//       "Login & SSO",
//       "Data Protection",
//       "Access Control",
//     ],
//   },
//   {
//     title: "Feedback & Performance Notes",
//     path: "/public/feedback",
//     description: "How feedback and performance notes are submitted.",
//     sections: ["Submitting Feedback", "Performance Notes", "Feedback Visibility"],
//   },
//   {
//     title: "About WorkGuard",
//     path: "/public/about",
//     description: "Background on WorkGuard as a workforce management platform.",
//     sections: ["Our Mission", "Platform Overview", "Contact & Support"],
//   },
// ];

// export default publicSearch;



// src/data/search/publicSearch.js
// Search-only data for the PUBLIC docs. Only pages that live under
// PublicRoutes.jsx belong here, so admin/employee pages can never surface
// in a public search.

const publicSearch = [
  {
    title: "WorkGuard Documentation",
    path: "/public/overview",
    description:
      "WorkGuard is a workforce management platform that helps companies track attendance, run payroll, manage leave, and enforce overtime policies — accurately and transparently.",
    sections: [
      "What is WorkGuard?",
      "Administrator Dashboard",
      "Three Documentation Sections",
      "All Features",
      "Need More Information?",
    ],
  },
  {
    title: "Features",
    path: "/public/features",
    description:
      "Everything WorkGuard offers — from attendance tracking to automated payroll.",
    sections: [],
  },
  {
    title: "Employee Management",
    path: "/public/employee-management",
    description:
      "Employee Management is the foundation of WorkGuard. Every feature — attendance, payroll, leave, overtime — depends on each employee's profile being complete and accurate.",
    sections: [
      "Employee Profile",
      "Admin Roles",
      "Employment Status",
      "Account Activation",
      "Working Days Per Month",
    ],
  },
  {
    title: "Attendance Policy",
    path: "/public/attendance-policies",
    description:
      "Attendance Policies define how grace periods and deductions are applied. Policies can be set at the company, branch, role, or individual employee level — the most specific one always applies.",
    sections: [
      "Policy Scope & Priority",
      "Grace Periods",
      "Attendance Deductions",
      "Absence Settings",
      "Policy Date Range",
      "Policy Lifecycle",
      "Historical Accuracy",
    ],
  },
  {
    title: "Attendance Tracking",
    path: "/public/attendance",
    description:
      "WorkGuard tracks attendance through GPS location, registered devices, and shift rules. Every check-in and check-out automatically updates the employee's daily attendance record.",
    sections: [
      "How Check-In Works",
      "Daily Attendance Status",
      "Absent Days",
      "Late Arrival",
      "Break Time",
      "Multi-Branch Days",
      "Work Modes",
      "Holidays & Attendance",
      "Attendance Repair Center",
    ],
  },
  {
    title: "Holiday Management",
    path: "/public/holidays",
    description:
      "Declare official holidays at the company, branch, or individual level. Group them into Holiday Plans for easier annual calendar management.",
    sections: [
      "Holiday Scopes",
      "Holiday Plans",
      "Plan Lifecycle",
      "Individual Holidays",
      "Overlap Prevention",
      "Timezones & Automatic Archiving",
    ],
  },
  {
    title: "Remote Work Permission",
    path: "/public/remote-work",
    description:
      "Admins can authorize specific employees to check in from any location on a specific date — without needing to be at the branch or on branch WiFi.",
    sections: ["How It Works", "Managing Remote Attendance", "Permission Status"],
  },
  {
    title: "Device Management",
    path: "/public/devices",
    description:
      "WorkGuard requires every check-in and check-out to come from a registered, approved device — preventing buddy-punching where one employee checks in on behalf of another.",
    sections: [
      "How Device Registration Works",
      "Device Statuses",
      "Shared Device Rule",
      "Device Limit",
      "Admin Management",
    ],
  },
  {
    title: "Branch Management",
    path: "/public/branches",
    description:
      "Branches represent the physical locations where your employees work. Each branch has its own GPS location, check-in radius, timezone, and optional WiFi restrictions.",
    sections: [
      "Branch Settings",
      "Location Verification",
      "WiFi Verification & Emergency Mode",
      "Branch Timezone",
      "Transit Between Branches",
      "Live Branch Map",
    ],
  },
  {
    title: "Payroll",
    path: "/public/payroll",
    description:
      "WorkGuard calculates each employee's net salary every month by combining their base salary with attendance deductions, overtime pay, and bonuses.",
    sections: [
      "What Affects Payroll",
      "Net Salary Formula",
      "Overtime Pay",
      "Payroll Status",
      "Payroll Processing",
      "Policy Audit Trail",
    ],
  },
  {
    title: "Leave Management",
    path: "/public/leave",
    description:
      "WorkGuard manages the full leave lifecycle — request, approval, rejection, and cancellation — with automatic balance tracking.",
    sections: [
      "Leave Types",
      "Leave Policy",
      "Submitting Leave",
      "Leave Approval Workflow",
      "Rejecting Leave",
      "Cancelling Leave",
      "Leave Balance Tracking",
      "Yearly Leave Reset",
    ],
  },
  {
    title: "Overtime & Bonus",
    path: "/public/overtime-bonus",
    description:
      "WorkGuard automatically tracks and calculates overtime and bonus pay based on the policies you configure. Policies can apply company-wide, per branch, department, role, or for a specific employee.",
    sections: [
      "Overtime Types",
      "Configuring an Overtime Rule",
      "How Overtime Is Calculated",
      "Monthly Overtime Cap",
      "Night Shift Overtime",
      "Bonus Policy",
    ],
  },
  {
    title: "Reports",
    path: "/public/reports",
    description:
      "WorkGuard provides detailed reports for individual employees and company-wide summaries. All reports can be exported to Excel.",
    sections: [
      "Employee Monthly Report",
      "Company Monthly Report",
      "Company Yearly Report",
      "Report Timezones",
      "Multi-Branch Employees in Reports",
      "Access Control",
      "Export to Excel",
      "Report Filters",
    ],
  },
  {
    title: "Security",
    path: "/public/security",
    description:
      "WorkGuard is built with security at every layer — from biometric verification at check-in to role-based access control across the entire platform.",
    sections: [
      "Role-Based Access Control",
      "Biometric Verification",
      "Device Security",
      "Account Security",
    ],
  },
  {
    title: "Feedback & Performance Notes",
    path: "/public/feedback",
    description:
      "Admins can add performance notes and formal warnings to an employee's profile. Notes can be kept internal or shared with the employee directly.",
    sections: [
      "Note Types",
      "Visibility Settings",
      "Managing Feedback",
      "Notes in Reports",
    ],
  },
  {
    title: "About & Contact",
    path: "/public/about",
    description:
      "Learn about WorkGuard, our mission, and how to contact us for business inquiries, support, or partnership opportunities.",
    sections: ["Our Mission", "Why WorkGuard?", "Get in Touch", "Platform Information"],
  },
];

export default publicSearch;