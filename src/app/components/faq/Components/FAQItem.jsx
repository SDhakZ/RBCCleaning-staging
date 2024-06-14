import React from "react";

export default function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-solid group border-2 border-[#969595] rounded-md font-semibold w-full my-5  ">
      <div
        className="flex items-center px-6 py-4 cursor-pointer"
        onClick={onClick}
      >
        <p
          className={`text-sm select-none md:text-base group-hover:text-primary-shade-200 ${
            isOpen ? "text-primary-shade-200" : "text-black-shade-200"
          }`}
        >
          Q. {question}
        </p>
        <div className="ml-auto text-lg select-none group-hover:text-primary-shade-200">
          <button>{isOpen ? "-" : "+"}</button>
        </div>
      </div>

      {isOpen && (
        <div className="px-6 pb-4 bg-gray-100">
          <p className="text-sm font-semibold select-none text-black-shade-100 md:text-base">
            A. {answer}
          </p>
        </div>
      )}
    </div>
  );
}
