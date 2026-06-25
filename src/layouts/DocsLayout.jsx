// //src/layouts/DocsLayout.jsx

// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import "../styles/Layout.css";
// export default function DocsLayout({
//   children,
//   type,
// }) {
//   return (
//     <>
//       <Navbar />

//       <div className="docs-layout">
//         <Sidebar type={type} />

//         <main className="docs-content">
//           {children}
//         </main>
//       </div>
//     </>
//   );
// }

// src/layouts/DocsLayout.jsx
import { useState } from "react";

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import "../styles/Layout.css";

export default function DocsLayout({ type, children }) {
    const [showSidebar, setShowSidebar] = useState(false);


  return (
    <>
      <Navbar
        onMenuClick={() =>
          setShowSidebar(true)
        }
      />
      <div className="wg-shell">
        <Sidebar
          type={type}
          show={showSidebar}
          onClose={() =>
            setShowSidebar(false)
          }
        />
        <main className="wg-content">
          <div className="wg-content__inner">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}