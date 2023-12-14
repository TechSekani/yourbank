import React from "react";
import Button from "./Button";

const Testimonials = () => {
  return (
    <section className=" px-4 md:px-0 mb-14">
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
      <section className=" mt-6 w-full overflow-auto">
        <div className=" w-fit flex gap-6">
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
          <div className=" w-[370px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis. sit amet consectetur adipisicing elit. Explicabo
            dolor tempore quis.
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
