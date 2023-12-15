import React from "react";
import { radical } from "../assets/images";
import Button from "./Button";

const CTA = () => {
  return (
    <article className="overflow-hidden mx-2 md:mx-auto mb-20 relative bg-ctaBg flex flex-col md:flex-row text-center md:text-start gap-6 md:gap-0 justify-between items-center py-8 md:p-12 rounded-xl border border-[#262626]">
      <img src={radical} alt="" className="absolute w-[16%] left-0" />
      <div className=" w-[70%]">
        <h4 className=" text-2xl mb-2">
          Start your financial journey with <span className=" text-[#CAFF33]">YourBank today!</span>
        </h4>
        <p className="text-xs opacity-70">
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service
        </p>
      </div>
      <Button text={'Open Account'} style={' h-fit bg-[#CAFF33] text-[#262626]'} />
    </article>
  );
};

export default CTA;
