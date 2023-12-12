import React from "react";
import {
  ArchiveBoxArrowDownIcon,
  BanknotesIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";

const DATA = [
  {
    id: 1,
    title: "Checking Accounts",
    description:
      "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
    icon: <BriefcaseIcon className="w-5 text-[#CAFF33]" />,
    border: 'border-0'
  },
  {
    id: 2,
    title: "Savings Accounts",
    description:
      "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
    icon: <ArchiveBoxArrowDownIcon className="w-5 text-[#CAFF33]" />,
    border: 'border-l border-r border-[#262626]'
  },
  {
    id: 3,
    title: "Loans and Mortgages",
    description:
      "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
    icon: <BanknotesIcon className="w-5 text-[#CAFF33]" />,
    border: 'border-0'
  },
];

const Card = ({ icon, title, description, border }) => {
  return (
    <div className={`p-8 w-[30%] flex flex-col items-center gap-3 text-center ${border}`}>
      <div className=" bg-iconContainer rounded-[50px] w-fit p-2">
        <div className=" hover:animate-pulse duration-100 bg-iconSubContainer border-[#CAFF33] rounded-[50px] w-fit p-2">
          {icon}
        </div>
      </div>
      <h3 className=" text-xl">{title}</h3>
      <p className=" text-xs opacity-70">{description}</p>
    </div>
  );
};

const ProductsArticle = () => {
  return (
    <article className=" py-20 flex flex-col gap-24">
      <div className=" flex justify-between">
        <div className=" flex flex-col gap-7 w-[55%]">
          <h3 className=" text-4xl">
            Our <span className="text-[#CAFF33]">Products</span>
          </h3>
          <p className=" text-xs opacity-70">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
          </p>
        </div>
        <div className=" flex items-end">
          <span className=" p-2 bg-[#1C1C1C] border border-[#262626] rounded-[80px]">
            <Button
              text={"For Individuals"}
              style="bg-[#CAFF33] text-[#262626]"
            />
            <Button text={"For Businesses"} />
          </span>
        </div>
      </div>
      <section className="flex gap-10">
        {DATA.map(({ id, icon, title, description, border }) => (
          <Card key={id} icon={icon} title={title} description={description} border={border} />
        ))}
      </section>
    </article>
  );
};

export default ProductsArticle;
