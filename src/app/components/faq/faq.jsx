"use client";
import React, { useState } from "react";
import { faqDataOne, faqDataTwo } from "@/app/data/faq";
import FAQItem from "./Components/FAQItem.jsx";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="container-margin-compact py-24">
        <div className="py-4">
          <h1 className="font-semibold text-center text-2xl">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-between items-start gap-0">
          <div className="w-full lg:w-[calc(50%-0.5rem)]">
            {faqDataOne.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />

              // <div className="border-solid border-2 border-[#969595] rounded-md font-semibold flex items-center p-5 w-full my-3 ">
              //   <p className="text-sm sm:text-md">{items.question}</p>
              //   <div className="ml-auto">
              //     <button className="">+</button>
              //   </div>
              // </div>
            ))}
          </div>

          <div className="w-full lg:w-[calc(50%-0.5rem)]">
            {faqDataTwo.map((item, index) => (
              <FAQItem
                key={index + faqDataOne.length}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index + faqDataOne.length}
                onClick={() => handleToggle(index + faqDataOne.length)}
              />
              // <div className="border-solid border-2 border-[#969595] rounded-md font-semibold flex items-center p-5 sm:w-full my-3 ">
              //   <p className="text-sm sm:text-md">{items.question}</p>
              //   <div className="ml-auto">
              //     <button className="">+</button>
              //   </div>
              // </div>
            ))}
          </div>
        </div>

        <div className="py-6">
          <p className="text-center text-sm py-4 font-medium">
            Can't find what you're looking for? Send us your question, and we'll
            provide the answers you need.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-500 shiny-global text-white text-lg font-semibold rounded-md px-4 py-2 mt-4 w-max">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
