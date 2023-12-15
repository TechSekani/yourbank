import React from "react";
import Button from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { icon } from "../assets/images";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  let comlen = 8;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? comlen - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === comlen - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative px-4 md:px-0 my-32">
      <div className=" flex flex-col md:flex-row items-center md:items-end justify-between">
        <div className=" flex flex-col md:text-start text-center gap-3 md:w-[55%]">
          <h3 className=" text-4xl">
            Our <span className="text-[#CAFF33]">Testimonials</span>
          </h3>
          <p className=" text-xs opacity-70">
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        <div className=" flex items-end mt-6 md:mt-0">
          <span className=" p-2 bg-[#1C1C1C] border border-[#262626] rounded-[80px]">
            <Button
              text={"For Individuals"}
              style="bg-[#CAFF33] text-[#262626]"
            />
            <Button text={"For Businesses"} />
          </span>
        </div>
      </div>
      <section className=" relative mx-auto mt-10 md:w-[92%] overflow-auto before:absolute before:z-30 before:left-0 before:bottom-0 before:w-[70px] before:h-full before:bg-gradient-to-r before:from-[#1a1a1a] before:to-transparent after:absolute after:z-30 after:bottom-0 after:right-0 after:w-[70px] after:h-full after:bg-gradient-to-l after:from-[#1a1a1a] after:to-transparent">
        <div
          className=" w-fit flex transition ease-in-out duration-40"
          style={{
            transform: `translateX(-${current * 345}px)`,
          }}
        >
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
          <div className=" w-[345px] flex flex-col items-center text-center gap-4">
            <img src={icon} className="w-10" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolor tempore quis. sit amet consectetur adipisicing elit.
              Explicabo dolor tempore quis.
            </p>
            <h6 className=" mt-4 text-[#CCFF23]">Sara T</h6>
          </div>
        </div>
      </section>
      <div className="absolute w-full h-[200px] bg-transparent z-40 bottom-0"></div>
        <div className="absolute left-0 md:bottom-20 w-full md:space-x-[95%] flex justify-center gap-4 mt-4 ">
          <button
            className=" p-3 bg-[#1c1c1c] rounded-full"
            onClick={prevSlide}
          >
            <ArrowLeftIcon width={20} />
          </button>
          <button
            className=" p-3 bg-[#1c1c1c] rounded-full"
            onClick={nextSlide}
          >
            <ArrowRightIcon width={20} />
          </button>
        </div>
    </section>
  );
};

export default Testimonials;
