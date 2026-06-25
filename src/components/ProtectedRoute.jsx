import { Navigate }
from "react-router-dom";

import useAuth
from "../hooks/useAuth";

export default function ProtectedRoute({

  children,

  allowStaff = false,

  allowAdmin = false,

  globalAdminOnly = false,

}) {

  const {

    isAuthenticated,

    isAdmin,

    isStaff,

    isGlobalAdmin,

  } = useAuth();

  if (!isAuthenticated) {

    return (
      <Navigate
        to="/public/overview"
        replace
      />
    );
  }

  if (
    globalAdminOnly &&
    !isGlobalAdmin
  ) {

    return (
      <Navigate
        to="/public/overview"
        replace
      />
    );
  }

  if (
    allowAdmin &&
    isAdmin
  ) {

    return children;
  }

  if (
    allowStaff &&
    isStaff
  ) {

    return children;
  }

  return (
    <Navigate
      to="/public/overview"
      replace
    />
  );
}