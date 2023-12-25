import React from "react";
import Button from "./Button";
import {USECASE} from "../utils/HomeData";

const UseCases = () => {
  return (
    <section className=" md:my-10 mb-16 text-center md:text-start px-4 md:px-6">
      <h2 className="text-4xl text-[#CAFF33]">Use Cases</h2>
      <p className=" text-xs opacity-70 mt-2">
        At YourBank, we cater to the diverse needs of individuals and businesses
        alike, offering a wide range of financial solutions
      </p> 
      {USECASE.map(({ id, title, text, iconCard, percent, style }) => (
        <section key={id} className={`${style} flex flex-col md:flex-row justify-between items-center mt-12`}>
          <div className="md:w-[45%] bg-[#1C1C1C] rounded-[20px] flex flex-wrap gap-2 md:gap-3 p-6 text-center border border-[#262626] ">
            {iconCard.map((card, index) => (
              <div
                key={index}
                className="w-[48%] rounded-[16px] flex flex-col items-center gap-3 border border-[#262626] bg-[#1A1A1A] p-3 md:p-8"
              >
                <div className=" bg-iconContainer rounded-[50px] w-fit p-2">
                  <div className=" hover:animate-pulse duration-100 bg-iconSubContainer border border-[#CAFF33] rounded-full p-2">
                    <img src={card?.icon} className="w-5" alt="" />
                  </div>
                </div>

                <h5 className=" text-xs opacity-70">{card.cardText}</h5>
              </div>
            ))}
          </div>
          <article className="md:w-[45%] [&>h3]:text-2xl flex flex-col mt-8 md:mt-0 items-center md:items-start gap-2">
            <h3>{title}</h3>
            <p className=" text-xs opacity-70">{text}</p>
            <div className=" flex gap-4 md:gap-0 flex-col md:flex-row">
              {percent.map((percentage, index) => (
                <span key={index} className=" md:w-2/5 p-5">
                  <h4 className=" text-4xl md:text-2xl text-[#CAFF33]">
                    {percentage.number}
                  </h4>
                  <p className=" md:text-xs opacity-70">
                    {percentage.description}
                  </p>
                </span>
              ))}
            </div>
            <Button
              text="Learn More"
              style={" w-fit mt-4 md:mt-0 bg-[#1C1C1C] border border-[#262626]"}
            />
          </article>
        </section>
      ))}
    </section>
  );
};

export default UseCases;
