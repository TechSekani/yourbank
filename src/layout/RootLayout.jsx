import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className=" mt-[90px] md:px-[90px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
