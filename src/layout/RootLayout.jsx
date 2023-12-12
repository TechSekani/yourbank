import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className=" mt-[90px] md:px-[90px]">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
