import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <Outlet></Outlet>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
