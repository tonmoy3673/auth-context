import { createContext, useContext, useState, type ReactNode } from "react";

// ============ UserType ======//
interface UserType {
  users: {
    name: string;
    password: string;
  };
}

// ============ UserTypeMethod =======//
interface UserTypeMethod {
  users: UserType | null;
  login: (userData: UserType) => void;
  logout: () => void;
}

// ============= Create Context =======//
const AuthContext = createContext<UserTypeMethod | undefined>(undefined);

// =========== AuthProvider ========//
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUser] = useState<UserType | null>(null);

  // ======== login ======//
  const login = (userData: UserType): void => {
    if (!userData) return;
    setUser(userData);
  };

  // =========== logout ========//
  const logout = (): void => {
    setUser(null);
  };

  const values = {
    users,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// ============ Custom Hook =========//
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No Context Found");
  }
  return context;
};
