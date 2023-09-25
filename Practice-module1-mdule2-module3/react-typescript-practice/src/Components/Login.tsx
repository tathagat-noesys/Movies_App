import React, { useEffect, useState, useContext } from "react";
import { useAuth, authContext } from "./ContextAPI";

const LoginComponent = () => {
  const { isloggedin, login, logout } = useContext<boolean>(authContext);
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  console.log("1", isloggedin);
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    // console.log(e.currentTarget.value);
    setState((state) => {
      return { ...state, [name]: value };
    });
  };

  useEffect(() => {}, [isloggedin]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(state.username, state.password);
    console.log(isloggedin);
  };
  return (
    <>
      {isloggedin ? (
        <></>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              value={state.username}
              name="username"
              id="username"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              value={state.password}
              name="password"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <button type="submit">Login</button>
        </form>
      )}
      {isloggedin ? (
        <div>
          <h3>Secret Information visible after login</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>Secret hidden</div>
      )}
    </>
  );
};

export default LoginComponent;
