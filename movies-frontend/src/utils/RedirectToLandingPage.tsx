import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const RedirectToLandingPage = () => {
  const [time, setTime] = useState<number>(5);

  useEffect(() => {
    var timeout = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  if (time === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <h3>Page not found : 404 </h3>
      <p>Redirecting to main page in : {time}</p>
      <NavLink to={"/"}> Home </NavLink>
    </>
  );
};

export default RedirectToLandingPage;
