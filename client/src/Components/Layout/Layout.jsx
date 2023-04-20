import React from "react";
import Header from "../Header/Header";
import Navmenu from "../Navmenu/Navmenu";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Navmenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
