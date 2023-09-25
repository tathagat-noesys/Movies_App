import React, { createContext, useContext, useState } from "react";

export const authContext = createContext<boolean>();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContentApiProvider = ({ children }: contextProviderInterface) => {
  const [isloggedin, setLogin] = useState<boolean>(false);

  function login(username: string, password: string) {
    if (password == "admin" && username == "admin") {
      console.log(password, username);
      setLogin(true);
      alert("logged in");
    }
  }

  const logout = () => {
    setLogin(false);
  };

  return (
    <authContext.Provider value={{ isloggedin, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

interface contextProviderInterface {
  children: React.ReactNode;
}

export default AuthContentApiProvider;
