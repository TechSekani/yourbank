import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" z-50 fixed top-8 left-6 md:left-[90px] flex justify-between items-center w-[86%] py-2 px-5 bg-[#1C1C1C] border border-[#262626] rounded-[100px]">
      <Link to="/">
        <img src={logo} className=" w-[90px] md:w-[110px]" alt="" />
      </Link>
      <div className=" hidden md:flex w-[65%] justify-between">
        <div className="nav_links flex justify-center items-center gap-3 [&>*]:py-2 [&>*]:px-5 text-sm">
          <NavLink to="/">Home</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="security">Security</NavLink>
        </div>
        <div className="flex justify-center items-center gap-4 text-sm">
          <NavLink to="signup">Sign Up</NavLink>
          <Link to="login">
            <Button text={"Login"} style="bg-[#CAFF33] text-[#262626]" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
