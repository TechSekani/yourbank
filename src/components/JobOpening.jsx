import React from "react";
import { JOBS } from "../utils/CareerData";
import Button from "./Button";

const Card = ({title, location, department, desc, requirement}) => (
    <div className=" md:w-[47%] p-[20px] md:p-[40px] bg-[#1c1c1c] rounded-xl border-[#262626] border">
          <h4 className=" text-xl font-medium">{title}</h4>
          <div className=" mb-5 mt-1 flex flex-wrap gap-2 md:gap-4 text-[#B3B3B3] text-xs [&>*]:py-1 [&>*]:px-2 [&>*]:rounded-full [&>*]:bg-[#1A1A1A] [&>*]:border-[#262626] [&>*]:border">
            <span>Location: {location}</span>
            <span>Department: {department}</span>
          </div>
          <h4 className=" text-lg mb-2 font-medium">About This Job</h4>
          <p className=" text-xs md:text-sm text-[#B3B3B3]">
            {desc}
          </p>
          <h4 className=" text-lg font-medium mt-3">Requirement & Qualification</h4>
          <ul>
            {requirement.map((req, index) => (
                <li key={index} className=" mt-1 text-xs md:text-sm text-[#B3B3B3]">{req}</li>
            ))}
          </ul>
          <Button text={'Apply Now'} style=" bg-[#CAFF33] text-black mt-8" />
        </div>
)

const JobOpening = () => {
  return (
    <section className="px-4 md:px-0 mb-20">
      <div className=" text-center md:text-start text-[#CAFF33]">
        <h2 className=" text-4xl">Job Openings</h2>
        <p className=" mt-3 text-sm text-[#B3B3B3]">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry
        </p>
      </div>
      <div className=" flex flex-wrap justify-between gap-12 mt-12">
        {
            JOBS.map(({id, ...job}) => (
                <Card key={id} {...job} />
            ))
        }
      </div>
    </section>
  );
};

export default JobOpening;
