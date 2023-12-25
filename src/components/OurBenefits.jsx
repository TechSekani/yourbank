import React from "react";
import { BENEFITS } from "../utils/CareerData";

const Card = ({ icon, title, text, style }) => (
  <div className={`flex flex-col gap-6 md:w-[47%] p-[20px] md:p-[40px] bg-[#1c1c1c] ${style}`}>
    <div className=" flex items-center gap-5">
      <div className=" bg-iconContainer rounded-[50px] w-fit p-2">
        <div className=" hover:animate-pulse duration-100 bg-iconSubContainer border-[#CAFF33] rounded-[50px] w-fit p-2">
          <img src={icon} className='w-5' alt="icon" />
        </div>
      </div>
      <h3 className=" text-lg">{title}</h3>
    </div>
    <p className=" text-[#B3B3B3] text-xs md:text-sm">{text}</p>
  </div>
);

const OurBenefits = () => {
  return (
    <section className="px-4 md:px-0 mb-20">
      <div className=" text-center md:text-start">
        <h3 className=" text-4xl [&>*]:text-[#CAFF33]">
          Our <span>Benefits</span>
        </h3>
        <p className=" mt-3 text-xs md:text-sm text-[#B3B3B3]">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>
      <article className=" flex flex-wrap justify-between gap-10 text-[#B3B3B3] mt-10">
        {
            BENEFITS.map(({id, title, text, icon, style}) => (
                <Card
                key={id}
                text={text}
                title={title}
                icon={icon}
                style={style}
                />
            ))
        }
      </article>
    </section>
  );
};

export default OurBenefits;
