import {
  createContext,
  useMemo,
  useState,
} from "react";

import { getTokenPayload } from "../helpers/auth";

const AuthContext = createContext(null);

export default AuthContext;

export function AuthProvider({ children }) {

  const [user] = useState(() =>
    getTokenPayload()
  );

  const value = useMemo(() => ({

    user,

    isAuthenticated: !!user,

    isAdmin:
      user?.role === "admin",

    isStaff:
      user?.role === "staff",

    isGlobalAdmin:
      user?.role === "admin" &&
      (
        !user.adminScope ||
        user.adminScope.type === "GLOBAL"
      ),

    isBranchAdmin:
      user?.role === "admin" &&
      user?.adminScope?.type === "BRANCH",

  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}