import React from "react";
import { FAQs } from "../utils/Data";
import Button from "./Button";
import { useState } from "react";

const Accordion = ({ question, answer }) => {
  return (
    <div className=" text-start flex flex-col gap-2 p-5 md:p-10 md:w-[48%] rounded-xl border border-[#262626] divide-y divide-[#262626]">
      <h4>{question}</h4>
      <p className=" text-xs opacity-70 pt-4">{answer}</p>
    </div>
  );
};

const Faqs = () => {
const [isShown, setIsShown] = useState(true)

  return (
    <section className="md:text-start text-center px-4 mb-12">
      <h2 className=" text-4xl text-[#CAFF33] [&>*]:text-[#f5f5f5]">
        Frequently <span>Asked Questions</span>
      </h2>
      <p className=" md:w-[75%] text-xs opacity-70 mt-3">
        Still you have any questions? Contact our Team via support@yourbank.com
      </p>
      <div className={`${isShown ? ' h-[690px] md:h-[590px]' : 'md:h-fit before:hidden'} overflow-y-hidden relative  before:absolute before:z-30 before:bottom-0 before:w-full before:h-40 before:bg-gradient-to-t before:from-[#1a1a1a] before:to-transparent flex flex-wrap gap-3 md:gap-9 mt-12`}>
        {FAQs.map(({ question, answer, id }) => (
          <Accordion key={id} question={question} answer={answer} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          text={`${isShown ? 'Load All FAQs ▼' : '▲'} `}
          style=" flex justify-center items-center mt-2 z-40 border border-[#262626]"
          onClick={() => setIsShown(!isShown)}
        />
      </div>
    </section>
  );
};

export default Faqs;
