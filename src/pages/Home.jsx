import React from "react";
import { Icon } from "@iconify/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { arrows, heroImg } from "../assets/images";

const Home = () => {
  return (
    <section className=" flex gap-[90px] h-[87vh]">
      <div className=" flex flex-col gap-3 w-2/4 pt-[65px]">
        <span className=" flex items-center w-fit text-xs p-2 gap-1 bg-[#262626] rounded-[80px]">
          <Icon icon="mdi:tick-decagram" color="#caff33" /> No LLC Required, No
          Credit Check.
        </span>
        <h3 className=" text-[45px] font-medium leading-tight">
          Welcome to YourBank <br /> Empowering Your{" "}
          <span className=" text-[#CAFF33]">
            Financial <br /> Journey
          </span>
        </h3>
        <p className=" text-[14px] mb-8 opacity-70">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers' needs.
        </p>
        <Link to="signup">
          <Button text={"Open Account"} style="bg-[#CAFF33] text-[#262626]" />
        </Link>
      </div>
      <div className="relative mt-7 w-2/5">
        <img src={arrows} alt="" className="absolute top-8 -right-[68px] w-[300px] -z-10" />
        <img src={heroImg} className='w-[95%] z-50' alt="" />
      </div>
    </section>
  );
};

export default Home;
