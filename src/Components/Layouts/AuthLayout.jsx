import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
