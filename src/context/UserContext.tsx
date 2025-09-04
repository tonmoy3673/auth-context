import { createContext, useContext, useState, type ReactNode } from "react";

// ===== UserType =====//
interface UserType {
  userName: string;
  password: string;
}

// ======= UserMethod ====//
interface UserMethod {
  user: UserType | null;
  login: (userData: UserType) => void;
  logout: () => void;
}

// ========= CreateUserContext ======//
const UserContext = createContext<UserMethod | undefined>(undefined);

// =========== UserProvider ======//
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const login = (userData: UserType):void => {
    if(!userData) return
    setUser(userData);
  };
  const logout = ():void=>{
    setUser(null);
  }

  const values:UserMethod={
    user,
    logout,
    login
  }

  return(
    <UserContext.Provider value={values}>
            {children}
    </UserContext.Provider>
  )


};
 export const useUserContext = (): UserMethod =>{
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('No Context Found!')
    };
    return context;

 }