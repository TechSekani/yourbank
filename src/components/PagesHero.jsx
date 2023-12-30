import React from "react";
import { CareerImg, PagesAbstr } from "../assets/images";

const PagesHero = () => {
  return (
    <section className="relative md:w-full h-full md:h-[550px] mx-4 md:mx-0 mt-[110px] mb-24 rounded-2xl py-[20px] md:p-[50px]  bg-[#1c1c1c]">
      <div className=" text-center md:text-start md:absolute top-[210px] md:top-[50px] right-[16px] md:left-[50px] z-20 w-[91%] md:w-[48%] bg-[#1a1a1a] p-6 md:p-10 mx-auto md:mx-0 rounded-2xl md:rounded-none md:rounded-br-3xl  mt-[70%] md:mt-0">
        <h3 className=" text-2xl md:text-4xl font-medium">
          Welcome to <span>YourBank</span> Careers!
        </h3>
        <p className="text-sm mt-3">
          Join our team and embark on a rewarding journey in the banking
          industry. At YourBank, we are committed to fostering a culture of
          excellence and providing opportunities for professional growth. With a
          focus on innovation, customer service, and integrity, we strive to
          make a positive impact in the lives of our customers and communities.
          Join us today and be a part of our mission to shape the future of
          banking.
        </p>
      </div>
      <img
        src={CareerImg}
        className=" z-10 absolute top-5 md:top-[50px] right-[17px] md:right-[50px] w-[90%] md:w-[60%] md:h-[82%]"
        alt=""
      />
      <img src={PagesAbstr} className=" absolute top-0 right-0 w-[30%]" alt="" />
    </section>
  );
};

export default PagesHero;
