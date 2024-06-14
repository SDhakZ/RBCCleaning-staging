"use client";
import React, { useState } from "react";
import { faqDataOne, faqDataTwo } from "@/app/data/faq";
import FAQItem from "./Components/FAQItem.jsx";

export default function FAQ({ slide }) {
  const [openIndex, setOpenIndex] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="py-24 scroll-smooth container-margin-compact">
        <h2 className="text-3xl font-semibold text-center font-lato lg:text-4xl text-black-shade-300">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-wrap items-start justify-center mt-10 lg:justify-between">
          <div className="w-full lg:w-[calc(50%-0.5rem)]">
            {faqDataOne.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
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
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center py-6">
          <p className="py-4 text-sm font-semibold text-black-shade-200  max-w-[500px] text-center md:text-lg">
            Can't find what you're looking for? Send us your question, and we'll
            provide the answers you need.
          </p>
          <div className="flex justify-center">
            {slide ? (
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                className="px-4 py-2 mt-2 hover:bg-[#16a9df] text-lg font-semibold text-white bg-primary-shade-200 rounded-md shiny-global w-max"
              >
                Send us your query
              </button>
            ) : (
              <a
                className="px-4 py-2 mt-2 hover:bg-[#16a9df] text-lg font-semibold text-white bg-primary-shade-200 rounded-md shiny-global w-max"
                href="/contact"
              >
                Send us your query
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
