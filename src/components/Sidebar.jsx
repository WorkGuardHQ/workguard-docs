// //src/components/Sidebar.jsx
// import "../styles/Sidebar.css";
// import { NavLink } from "react-router-dom";
// export default function Sidebar() {
//   return (
//     <aside className="sidebar">

//       <div className="sidebar-section">
//         <h3>📖 Getting Started</h3>

//         {/* <div className="sidebar-link">Welcome</div> */}
//         <NavLink
//   to="/getting-started/welcome"
//   className="sidebar-link"
// >
//   Welcome
// </NavLink>

// <NavLink
//   to="/getting-started/user-roles"
//   className="sidebar-link"
// >
//   User Roles
// </NavLink>



// <NavLink
//   to="/admin/employees"
//   className="sidebar-link"
// >
//   Employees
// </NavLink>


//         <div className="sidebar-link">User Roles</div>
//       </div>

//       <div className="sidebar-section">
//         <h3>👤 Employee Guide</h3>

//         <div className="sidebar-link">Check In / Out</div>
//         <div className="sidebar-link">My Profile</div>
//         <div className="sidebar-link">My Leaves</div>
//       </div>

//       <div className="sidebar-section">
//         <h3>⚙️ Administrator Guide</h3>

//         <div className="sidebar-link">Dashboard</div>
//         <div className="sidebar-link">Employees</div>
//         <div className="sidebar-link">Attendance</div>
//         <div className="sidebar-link">Payroll</div>
//         <div className="sidebar-link">Reports</div>
//       </div>

//     </aside>
//   );
// }


// import "../styles/Sidebar.css";
// import { NavLink } from "react-router-dom";

// import {
//   publicLinks,
//   employeeLinks,
//   adminLinks,
// } from "../data/sidebarLinks";

// export default function Sidebar({
//   type = "public",
// }) {

//   let links = publicLinks;

//   if (type === "employee")
//     links = employeeLinks;

//   if (type === "admin")
//     links = adminLinks;
//   // هنغيرها بعدين حسب الـ role
//   // const links = adminLinks;

//   return (
//     <aside className="sidebar">

//       {links.map((section) => (
//         <div
//           className="sidebar-section"
//           key={section.title}
//         >
//           <h3>{section.title}</h3>

//           {section.items.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "sidebar-link active"
//                   : "sidebar-link"
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>
//       ))}

//     </aside>
//   );
// }

// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom'
import { publicLinks, employeeLinks, adminLinks } from '../data/sidebarLinks'

const linksMap = { public: publicLinks, employee: employeeLinks, admin: adminLinks }

export default function Sidebar({  type,
  show,
  onClose }) {
  const groups = linksMap[type] || []

  
  return (
   <aside

  className={
    show
      ? "wg-sidebar mobile-open"
      : "wg-sidebar"
  }
>
  <button
  className="wg-sidebar__close"
  onClick={onClose}
>
  ✕
</button>
      {groups.map((group) => (
        <div className="wg-sidebar__group" key={group.group}>
          <div className="wg-sidebar__label">{group.group}</div>
          {group.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
               onClick={onClose}
              className={({ isActive }) =>
                'wg-sidebar__link' + (isActive ? ' active' : '')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
      
    </aside>
  )
}