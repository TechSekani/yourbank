import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import Button from "./Button";
import { MdOutlineMenu, MdClose } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsMenuOpen] = useState(false)

  const menuToggle = () => {
    setIsMenuOpen(!isOpen);
  }

  return (
    <nav className=" z-50 fixed top-8 left-4 md:left-[90px] flex justify-between items-center mx-auto w-[91%] md:w-[87%] py-2 px-5 bg-[#1C1C1C] border border-[#262626] rounded-[100px]">
      <Link to="/">
        <img src={logo} className="absolute top-3 md:static z-[70] w-[110px]" alt="" />
      </Link>
      <div className={`${ isOpen ? ' h-[80vh] px-5 pt-[80px]' : 'h-0'} md:flex z-[60] bg-[#1c1c1c] absolute md:static top-8 left-0 md:border-0 border-x border-[#262626] md:w-[65%] md:h-full transition-all duration-500  w-[100%] md:justify-between flex-col md:flex-row rounded-b-[20px]`}>
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex nav_links  flex-col md:flex-row justify-center items-center gap-3 [&>*]:py-2 [&>*]:px-5 text-xl md:text-sm`}>
          <NavLink to="/"  onClick={menuToggle}>Home</NavLink>
          <NavLink to="Careers"  onClick={menuToggle}>Careers</NavLink>
          <NavLink to="About"  onClick={menuToggle}>About</NavLink>
          <NavLink to="Security"  onClick={menuToggle}>Security</NavLink>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center gap-4 mt-8 md:mt-0 text-xl md:text-sm`}>
          <NavLink to="signup"  onClick={menuToggle}>Sign Up</NavLink>
          <Link to="login"  onClick={menuToggle}>
            <Button text={"Login"} style="bg-[#CAFF33] text-[#262626]" />
          </Link>
        </div>
      </div>
      {isOpen ?
      <MdClose size={35} className={' md:hidden z-[70]'} onClick={menuToggle} />
      : <MdOutlineMenu size={35} className={' md:hidden z-[70]'} onClick={menuToggle} />
    }
    </nav>
  );
};

export default Navbar;


//change the menu icon from uiverse to static icon