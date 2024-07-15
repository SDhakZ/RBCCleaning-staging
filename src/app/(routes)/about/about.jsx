"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import HelpingHands from "@/app/assets/about/HelpingHands.webp";
import ManThinking from "@/app/assets/about/ManThinking.webp";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: false,
    });
  });

  return (
    <div className="top-section-p margin-t container-margin-compact">
      <div className="flex flex-col gap-16 md:gap-36">
        <div className="flex flex-col items-center gap-12 sm:justify-evenly md:flex-row">
          <figure
            data-aos="fade"
            className="max-w-[330px] sm:max-w-[350px] md:max-w-[450px]"
          >
            <Image
              src={HelpingHands}
              alt="Helping Hands"
              className="w-full h-auto "
            />
          </figure>

          <div
            data-aos="fade"
            className="flex flex-col gap-1 w-full md:min-w-[400px] md:max-w-[500px] "
          >
            <h1 className="mb-3 text-2xl font-bold font-lato sm:text-3xl md:mb-4 lg:leading-tight text-black-shade-300">
              Immaculate Spaces, Dedicated Hands: Welcome to{" "}
              <span className="text-green-500">RBC Cleaning Services</span>
            </h1>
            <p className="text-base font-medium lg:leading-relaxed text-black-shade-100">
              RBC Cleaning Services Pvt. Ltd. is a locally owned and operated
              cleaning service company for over four years. From residential to
              commercial, our main aim is satisfaction of our clients. Feel
              assured for a sparkling clean finish from our highly professional
              team, who use top- of- the- line products with efficient
              techniques. We guarantee to leave your home or office sparkling
              clean.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-12 sm:justify-evenly md:flex-row ">
          <div
            data-aos="fade"
            className="flex flex-col gap-1 w-full md:min-w-[450px] md:max-w-[500px] "
          >
            <h1 className="mb-3 text-2xl font-bold font-lato sm:text-3xl md:mb-4 lg:leading-tight text-black-shade-300">
              Considering which service best suits{" "}
              <span className="text-primary-shade-200">your needs?</span>
            </h1>
            <p className="text-base font-medium lg:leading-relaxed text-black-shade-100">
              At RBC Cleaning Services Pvt. Ltd., we provide personalized, free
              in-home consultations which tailors services according to your
              specific cleaning needs, as we understand that every space is
              different and requires particularization of services. During
              consultation, our qualified technicians will evaluate your needs,
              answer all your queries, and then make professional
              recommendations to ensure the best cleaning solutions for either
              your home or business. Our aim is to deliver quality service, not
              just to meet but to go beyond your expectations, while remaining
              within your budget.
            </p>
            <button className="px-6 py-2 mt-6 text-lg font-semibold hover:bg-[#16a9df] text-white bg-green-500 rounded-md shiny-global w-max ">
              Contact Us
            </button>
          </div>
          <figure
            data-aos="fade"
            className="max-w-[330px] sm:max-w-[350px] md:max-w-[420px]"
          >
            <Image
              src={ManThinking}
              alt="Man Thinking"
              className="w-full h-auto "
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
