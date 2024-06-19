import React from "react";
import Link from "next/link";
import Image from "next/image";
import Spray from "@/app/assets/process/spray.png";
import Wiper from "@/app/assets/process/wiper.png";

export default function Process({ title }) {
  const processData = [
    {
      id: 1,
      title: "1. Schedule Your Cleaning",
      brief: "Contact us to schedule your timing with us.",
      icon: "schedule.png",
    },
    {
      id: 2,
      title: "2. Get a custom quote",
      brief: "Receive a tailored quote from us.",
      icon: "quote.png",
    },
    {
      id: 3,
      title: "3. Meet your cleaning specialist",
      brief: " Welcome your dedicated cleaning expert at your doorstep.",
      icon: "specialist.png",
    },
  ];

  const imageImports = {
    "schedule.png": require("@/app/assets/process/schedule.png"),
    "quote.png": require("@/app/assets/process/quote.png"),
    "specialist.png": require("@/app/assets/process/specialist.png"),
  };

  return (
    <div className="pt-12 pb-36 sm:py-20 relative section bg-gradient-to-b from-[#65B741] to-[#1B5800]">
      <Image
        className="absolute bottom-0 lg:-bottom-24 w-[100px] md:w-[250px]"
        src={Spray}
        alt="spray bottle illustration"
      />
      <Image
        className="absolute lg:-bottom-10 bottom-0 right-0 w-[120px] md:w-[280px]"
        src={Wiper}
        alt="wiper illustration"
      />
      <div className="flex flex-col items-center justify-center gap-4 container-margin-compact">
        <h2 className="text-2xl font-semibold text-center sm:text-3xl md:text-4xl text-white-shade-100 font-lato">
          Efficient Cleaning Process
        </h2>
        <p className="text-center max-w-[750px] font-normal text-base sm:leading-7 text-white-shade-200">
          Experience a streamlined process designed for your convenience. From
          scheduling to meeting your cleaning specialist, we ensure a seamless
          and satisfying service.
        </p>
        <div className="flex flex-col sm:flex-wrap xl:justify-between xl:flex-nowrap sm:justify-center sm:flex-row items-center lg:items-start w-full gap-10 sm:gap-14 mt-10 max-w-[1100px] justify-between">
          {processData.map((process, index) => (
            <div
              key={index}
              className="flex flex-col w-full items-center gap-2 max-w-[330px]"
            >
              <figure className="rounded-full shadow-xl flex items-center justify-center bg-[#3D961D] w-[80px] h-[80px]">
                <Image
                  alt={process.title}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  src={imageImports[process.icon]}
                ></Image>
              </figure>
              <h3 className="mt-3 text-lg font-semibold text-center sm:text-xl text-white-shade-100">
                {process.title}
              </h3>
              <p className="sm:text-base text-sm text-center md:max-w-[280px] text-white-shade-200">
                {process.brief}
              </p>
            </div>
          ))}
        </div>
        <Link
          className="px-6 text-center py-3 mt-10 text-base font-semibold rounded-md sm:text-lg font-lato text-white-shade-100 shiny-global hover:bg-[#FFB554] bg-secondary-shade w-fit"
          href="/contact"
        >
          {title ? `Book for ${title} now!` : "Contact us now!"}
        </Link>
      </div>
    </div>
  );
}
