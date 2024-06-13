import React from "react";

export default function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-solid border-2 border-[#969595] rounded-md font-semibold w-full my-3  ">
      <div
        className="flex items-center p-2 cursor-pointer md: p-3"
        onClick={onClick}
      >
        <p
          className={`text-sm sm:text-md md:text-lg ${
            isOpen ? "text-green-600" : "text-black"
          }`}
        >
          {question}
        </p>
        <div className="ml-auto">
          <button>{isOpen ? "-" : "+"}</button>
        </div>
      </div>

      {isOpen && (
        <div className="p-2 bg-gray-100">
          <p className="text-sm font-normal text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
}
