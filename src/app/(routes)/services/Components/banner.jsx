import Link from "next/link";
import React from "react";

export default function banner() {
  return (
    <div className="relative flex items-center justify-center">
      <picture className="block w-full h-full ">
        <source
          media="(max-width:540px)"
          srcSet={`/services/service-mobile.webp`}
        />
        <source
          media="(max-width:1020px)"
          srcSet={`/services/service-tablet.webp`}
        />
        <source srcSet={`/services/service-desktop.webp`} />
        <img
          alt="banner"
          className="block w-full"
          src={`/services/service-desktop.webp`}
        />
      </picture>
      <div className="absolute -translate-y-1/2 w-full top-[50%]">
        <div className="container-margin-compact">
          <h1 className="text-2xl font-semibold font-lato lg:text-5xl md:text-4xl text-white-shade-100">
            Wide range of services we provide
          </h1>
          <p className="text-base md:text-lg font-lato text-white-shade-200 mt-4 lg:mt-6 max-w-[450px] font-medium">
            We provide a wide range of services from residential to commercial
            cleaning. Our main aim is to satisfy our clients with our top-notch
            services.
          </p>
          <Link
            href="/contact"
            className="flex hover:bg-[#16a9df] items-center justify-center px-6 py-2 mt-4 lg:mt-8 mb-10 font-semibold text-center transition-colors duration-200 rounded-lg cursor-pointer shiny-global sm:mb-0 text-white-shade-100 sm:max-w-fit lg:px-6 md:px-3 md:py-2 lg:py-3 bg-secondary-shade md:bg-primary-shade-200 lg:text-base xl:text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
