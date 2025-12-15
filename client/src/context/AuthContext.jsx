import { createContext, useContext, useEffect, useState } from "react";
import api from "@/api/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  

  
  const checkAuth = async () => {
    try {
      const res = await api.get("/api/auth/me"); 
      setUser(res.data.data);
      console.log("Response",res.data)
      console.log("User",res.data.message)
    } catch(err) {
      console.log("error",err)

      setUser(null);
    } 
  };

  useEffect(() => {
    checkAuth();
    
  }, []);

  const login = async (credentials) => {
    const res = await api.post("/api/auth/login", credentials);
    setUser(res.data.data);
    return res;
  };

  const logout = async () => {
    const res =await api.get("/api/auth/logout");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
