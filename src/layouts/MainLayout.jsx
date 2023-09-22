import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <Outlet></Outlet>
      {/* Footer */}
    </>
  );
};

export default MainLayout;
