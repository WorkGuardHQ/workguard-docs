// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DocsLayout from "./layouts/DocsLayout";
// import Welcome from "./pages/getting-started/Welcome";
// import UserRoles from "./pages/getting-started/UserRoles";
// import EmployeeManagement from "./pages/admin/EmployeeManagement";
// function App() {
//   return (
//     <BrowserRouter>
//       <DocsLayout>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
             



//                 <Welcome />
//                 <UserRoles />
// <EmployeeManagement />
//               </>
//             }
//           />
//         </Routes>
//       </DocsLayout>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import PublicRoutes from "./routes/PublicRoutes";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import AdminRoutes from "./routes/AdminRoutes";

import ProtectedRoute
from "./components/ProtectedRoute";
// import AuthBridge from "./components/AuthBridge";
import SSOLogin
from "./pages/SSOLogin";
function App() {
  return (
    <BrowserRouter>

    <ScrollToTop />
    
     {/* <AuthBridge /> */}
      <Routes>


<Route
  path="/sso/:ssoToken"
  element={<SSOLogin />}
/>

        {/* Redirect Home */}
        <Route
          path="/"
          element={<Navigate to="/public/overview" />}
        />

        {/* Public Documentation */}
        <Route
          path="/public/*"
          element={<PublicRoutes />}
        />

        {/* Employee Help Center */}
        {/* <Route
          path="/employee/*"
          element={<EmployeeRoutes />}
        /> */}
<Route
  path="/employee/*"
  element={

    <ProtectedRoute
      allowStaff
      allowAdmin
    >

      <EmployeeRoutes />

    </ProtectedRoute>

  }
/>
        {/* Admin Help Center */}
        {/* <Route
          path="/admin/*"
          element={<AdminRoutes />}
        /> */}
<Route
  path="/admin/*"
  element={

    <ProtectedRoute
      allowAdmin
    >

      <AdminRoutes />

    </ProtectedRoute>

  }
/>

<Route
  path="*"
  element={
    <Navigate
      to="/public/overview"
      replace
    />
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DocsLayout from "./layouts/DocsLayout";

// import Welcome from "./pages/getting-started/Welcome";
// import UserRoles from "./pages/getting-started/UserRoles";

// import EmployeeManagement from "./pages/admin/EmployeeManagement";

// function App() {
//   return (
//     <BrowserRouter>
//       <DocsLayout>
//         <Routes>
//           {/* Getting Started */}
//           <Route path="/" element={<Welcome />} />
//           <Route
//             path="/getting-started/welcome"
//             element={<Welcome />}
//           />
//           <Route
//             path="/getting-started/user-roles"
//             element={<UserRoles />}
//           />

//           {/* Admin */}
//           <Route
//             path="/admin/employees"
//             element={<EmployeeManagement />}
//           />
//         </Routes>
//       </DocsLayout>
//     </BrowserRouter>
//   );
// }

// export default App;