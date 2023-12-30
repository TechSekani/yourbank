import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import Button from "./Button";

const MenuIcon = ({onClick}) => (
  <label class="hamburger z-[70] md:hidden  flex justify-center items-center ">
    <input type="checkbox" onClick={onClick} />
    <svg viewBox="-10 -5 42 42">
      <path
        class="line line-top-bottom"
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      ></path>
      <path class="line" d="M7 16 27 16"></path>
    </svg>
  </label>
);

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(0)
  return (
    <nav className=" z-50 fixed top-8 left-4 md:left-[90px] flex justify-between items-center mx-auto w-[91%] md:w-[87%] py-2 px-5 bg-[#1C1C1C] border border-[#262626] rounded-[100px]">
      <Link to="/">
        <img src={logo} className="absolute top-5 md:static z-[70] w-[110px]" alt="" />
      </Link>
      <div className={`${ isOpen ? ' h-[80vh] px-5 pt-[80px]' : 'h-0'} md:flex z-[60] bg-[#1c1c1c] absolute md:static top-8 left-0 md:border-0 border-x border-[#262626] md:w-[65%] md:h-full transition-all duration-500  w-[100%] md:justify-between flex-col md:flex-row`}>
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex nav_links  flex-col md:flex-row justify-center items-center gap-3 [&>*]:py-2 [&>*]:px-5 text-xl md:text-sm`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="Careers">Careers</NavLink>
          <NavLink to="About">About</NavLink>
          <NavLink to="Security">Security</NavLink>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center gap-4 mt-8 md:mt-0 text-xl md:text-sm`}>
          <NavLink to="signup">Sign Up</NavLink>
          <Link to="login">
            <Button text={"Login"} style="bg-[#CAFF33] text-[#262626]" />
          </Link>
        </div>
      </div>
      <MenuIcon onClick={() => setIsOpen(!isOpen)} />
    </nav>
  );
};

export default Navbar;
