// //src/components/Navbar.jsx
// import "./../styles/Navbar.css";
// import logo from "../assets/images/workguard-icon.png";

// export default function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="navbar-left">
//         <img
//           src={logo}
//           alt="WorkGuard Logo"
//           className="navbar-logo"
//         />

//         <div>
//           <h2 className="navbar-title">
//             WorkGuard Documentation
//           </h2>

//           <p className="navbar-subtitle">
//             Workforce Management & Control Platform
//           </p>
//         </div>
//       </div>

//       <span className="navbar-version">
//         v1.0
//       </span>
//     </header>
//   );
// }

// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom'
// Navbar.jsx
import useAuth from "../hooks/useAuth";
import { useState } from "react";
// import { FaBars } from "react-icons/fa";

import logo from "../assets/images/workguard-icon.png";
import "./../styles/Navbar.css";


const sectionMeta = {
  public: { label: 'Product Documentation', subtitle: 'For everyone' },
  employee: { label: 'Employee Help Center', subtitle: 'For employees' },
  admin: { label: 'Admin Help Center', subtitle: 'For administrators' },
}

export default function Navbar({  onMenuClick
}) {

  const {
  isAdmin,
  isStaff,
} = useAuth();

  const location = useLocation()




  const section = location.pathname.startsWith('/employee')
    ? 'employee'
    : location.pathname.startsWith('/admin')
    ? 'admin'
    : 'public'

  const meta = sectionMeta[section]

  return (
    <nav className="wg-navbar">
      <Link to="/public/overview" className="wg-navbar__logo">
             <div className="navbar-left">
              
        <img
          src={logo}
          alt="WorkGuard Logo"
          className="navbar-logo"
         />
         </div>
       <span className="wg-navbar__brand">
  WorkGuard Documentation
</span>
      </Link>
      <div className="wg-navbar__divider" />
      <span className="wg-navbar__section">{meta.label}</span>
      
      <div className="wg-navbar__links">

  <Link
    to="/public/overview"
    className="wg-navbar__link"
  >
    Product Docs
  </Link>

  {(isStaff || isAdmin) && (
    <Link
      to="/employee/welcome"
      className="wg-navbar__link"
    >
      Employee Help
    </Link>
  )}

  {isAdmin && (
    <Link
      to="/admin/employee-management"
      className="wg-navbar__link"
    >
      Admin Help
    </Link>
  )}

</div>

      <span className="wg-navbar__version">v1.0</span>
   <button
  className="wg-navbar__menu-btn"
  onClick={onMenuClick}
>
  ☰
</button>

    </nav>
  )
}