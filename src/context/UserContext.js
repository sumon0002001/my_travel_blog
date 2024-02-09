import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../url";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/refetch");

      console.log(res.data);
      console.log("context");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
