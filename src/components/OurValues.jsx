import React from "react";
import { VALUES } from "../utils/CareerData";

const Card = ({ title, text }) => (
  <div className="md:w-[47%] border-l border-[#caff33] p-3">
    <h4 className=" text-[#4c4c4d] text-2xl font-medium ">{title}</h4>
    <p className=" text-xs md:text-sm mt-2">{text}</p>
  </div>
);

const OurValues = () => {
  return (
    <section className="px-4 md:px-0 mb-20">
      <div className=" text-center md:text-start">
        <h3 className=" text-4xl [&>*]:text-[#CAFF33]">
          Our <span>Values</span>
        </h3>
        <p className=" mt-3 text-xs md:text-sm text-[#B3B3B3]">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>
      <article className=" flex flex-wrap justify-between gap-10 text-[#B3B3B3] mt-10">
        {
            VALUES.map(({id, title, text}) => (
        <Card
        key={id}
          title={title}
          text={text}
        />

            ))
        }
      </article>
    </section>
  );
};

export default OurValues;
