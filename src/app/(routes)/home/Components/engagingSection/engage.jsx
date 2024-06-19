import React from "react";
import Image from "next/image";
import LadyPointing from "@/app/assets/home/lady-pointing.png";

export default function Engage() {
  return (
    <div className="pt-10 bg-cover bg-green-background">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row container-margin-compact">
        <div className="max-w-[600px] flex flex-col gap-4 md:gap-6">
          <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl font-lato">
            Expert Cleaning Services{" "}
            <span className="text-secondary-shade">Guranteed</span> to Sparkle
          </h2>
          <p className="text-sm leading-relaxed md:text-base lg:text-lg text-white-shade-100">
            RBC Cleaning Services Pty. Ltd. has been delivering top-notch
            residential and commercial cleaning for over four years. We
            guarantee sparkling results and complete customer satisfaction. Let
            us keep your space spotless!
          </p>
          <a
            className="px-6 py-2 mt-2 mb-10 text-base font-semibold transition-all duration-200 rounded-md shiny-global md:text-lg hover:bg-secondary-shade hover:text-white text-black-shade-200 bg-white-shade-100 max-w-fit"
            href="/contact"
          >
            Contact Us
          </a>
        </div>
        <figure className="max-w-[450px] invisible hidden md:block md:visible self-end">
          <Image className="w-full h-auto" src={LadyPointing} />
        </figure>
      </div>
    </div>
  );
}
