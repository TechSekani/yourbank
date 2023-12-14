import React from 'react'
import { Icon } from "@iconify/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { arrows, heroImg, objects } from "../assets/images";

const Hero = () => {
  return (
    <section className="relative flex md:flex-row flex-col gap-16 md:gap-[90px] md:h-[87vh]">
      <img src={objects} alt="" className="absolute w-[80%] md:w-2/4 md:-left-[10%] -top-[10%] md:-top-[16%]" />
      <div className=" flex flex-col items-center md:items-start text-center md:text-start gap-4 md:w-[50%] px-8 md:px-0 pt-10 md:pt-16">
        <span className=" flex items-center w-fit text-xs p-2 gap-1 bg-[#262626] rounded-[80px]">
          <Icon icon="mdi:tick-decagram" color="#caff33" /> No LLC Required, No
          Credit Check.
        </span>
        <h3 className=" text-[1.8rem] md:text-[38px] font-medium leading-tight">
          Welcome to YourBank <br /> Empowering Your{" "}
          <span className=" text-[#CAFF33]">
            Financial Journey
          </span>
        </h3>
        <p className=" text-[13px] mb-3 md:mb-7 opacity-70">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers' needs.
        </p>
        <Link to="signup">
          <Button text={"Open Account"} style="bg-[#CAFF33] text-[#262626]" />
        </Link>
      </div>
      <div className=" relative mx-auto md:mt-7 w-[95%] md:w-2/5">
        <img src={arrows} alt="" className="absolute top-3 md:top-8 -right-2 md:-right-[68px] w-[200px] md:w-[300px] -z-10" />
        <img src={heroImg} className=' md:w-[95%] z-50' alt="" />
      </div>
    </section>
  )
}

export default Hero