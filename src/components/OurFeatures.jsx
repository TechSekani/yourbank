import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { FEATURES } from "../utils/Data";
import Button from "./Button";

const OurFeatures = () => {
  const [featureId, setFeatureId] = useState(1);
  const [currentFeature, setCurrentFeature] = useState(
    FEATURES.filter((feature) => feature.id == featureId)
  );

  useEffect(() => {
    setCurrentFeature(FEATURES.filter((feature) => feature.id == featureId));
  }, [featureId]);

  const cards = currentFeature[0]?.card;
  
  return (
    <section>
      <h2 className=" text-4xl [&>*]:text-[#CAFF33]">
        Our <span>Features</span>
      </h2>
      <p className=" w-[75%] text-xs opacity-70 mt-3">
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience
      </p>
      <div className=" my-12 flex gap-6">
        <div className=" w-[20%] h-full p-8 flex flex-col gap-5 rounded-lg bg-[#1C1C1C]">
          {FEATURES.map(({ id, featureTitle }) => (
            <Button
              key={id}
              text={featureTitle}
              style={
                `${featureId == id? 'bg-[#1A1A1A] text-[#CAFF33]': ''} border border-[#262626] hover:bg-[#1A1A1A] hover:text-[#CAFF33]`
              }
              onClick={() => setFeatureId(id)}
            />
          ))}
        </div>
        <section className=" flex flex-wrap gap-6 w-[78%]">
          {cards?.map(({ title, text }) => (
            <div
              key={title}
              className=" p-10 w-[48%] rounded-xl border border-[#262626] bg-[#1C1C1C]"
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
