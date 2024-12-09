import { createContext, useState, useEffect, useContext } from "react";
import { jwt_decode } from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const decode = (token) => {
  //   try {
  //     return JSON.parse(window.atob(token.split(".")[1]));
  //   } catch (e) {
  //     console.warn("Error decoding token");
  //   }
  // };

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (token) {
      try {
        const decodedUser = JSON.parse(window.atob(token.split(".")[1]));        
        setUser(decodedUser);
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the User Context
export const useUser = () => useContext(UserContext);
