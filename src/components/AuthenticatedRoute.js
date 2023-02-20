import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "./../auth/LoginAuth";
import Header from "./Header";
import { useState } from "react";
import ValueContext from "./ValueContext";

export const AuthenticatedRoute = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartLength = cart.length;

  const [value, setValue] = useState(cartLength);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return isLoggedIn() ? (
    <>
      <ValueContext.Provider value={{ value, updateValue }}>
        <Header />
        <Outlet />
      </ValueContext.Provider>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default AuthenticatedRoute;
