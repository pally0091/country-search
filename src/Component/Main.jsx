/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import Foot from "./Foot";

const Main = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default Main;
