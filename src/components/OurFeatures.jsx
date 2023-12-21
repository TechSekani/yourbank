import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { FEATURES } from "../utils/HomeData";
import Button from "./Button";

const OurFeatures = () => {
  const [featureId, setFeatureId] = useState(1);
  const [currentFeature, setCurrentFeature] = useState([]);

  useEffect(() => {
    setCurrentFeature(FEATURES.filter((feature) => feature.id == featureId));
  }, [featureId]);

  const cards = currentFeature[0]?.card;

  return (
    <section className=" md:my-24 text-center md:text-start px-4">
      <h2 className=" text-4xl [&>*]:text-[#CAFF33]">
        Our <span>Features</span>
      </h2>
      <p className=" md:w-[75%] text-xs opacity-70 mt-3">
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience
      </p>
      <div className=" my-12 flex flex-col md:flex-row gap-4">
        <div className="md:w-[24%] overflow-x-scroll md:overflow-x-hidden  rounded-lg">
          <div className=" w-fit h-fit p-4 md:p-8 flex md:flex-col gap-5 bg-[#1C1C1C]">
            {FEATURES.map(({ id, featureTitle }) => (
              <Button
                key={id}
                text={featureTitle}
                style={`${
                  featureId == id ? "bg-[#1A1A1A] text-[#CAFF33]" : ""
                } w-[160px] md:w-full border border-[#262626] hover:bg-[#1A1A1A] hover:text-[#CAFF33]`}
                onClick={() => setFeatureId(id)}
              />
            ))}
          </div>
        </div>
        <section className=" flex flex-wrap gap-6 md:w-[75%]">
          {cards?.map(({ title, text }) => (
            <div
              key={title}
              className=" text-start p-7 md:p-10 md:w-[48%] rounded-xl border border-[#262626] bg-[#1C1C1C]"
            >
              <div className=" flex mb-4 justify-between">
                <h3>{title}</h3>
                <ArrowUpRightIcon className=" w-6 text-[#CAFF33]" />
              </div>
              <p className="text-xs opacity-70">{text}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default OurFeatures;
