import React from "react";
import HeroCSS from "./hero.module.css";

export const HeroCard = (props) => {
  return (
    <div>
      <div className="relative flex flex-col items-center content-center justify-center overflow-x-hidden md:flex-row">
        <picture>
          {/* Small Image */}
          <source media="(max-width: 650px)" srcSet={props.imageSmall} />

          {/* Medium Image */}
          <source media="(max-width: 1000px)" srcSet={props.imageMedium} />
          {/* Large Image */}
          <source srcSet={props.imageLarge} />
          {/* Default fallback image (for browsers that don't support <picture>) */}
          <img
            draggable="false"
            className="block h-auto max-w-full select-none"
            src={props.imageLarge}
            alt={props.title}
          />
        </picture>
        <div className="md:bg-[#000000ad] bg-primary-shade-300 px-5 py-6 md:p-6 relative md:absolute md:left-[7%] lg:left-[7%] xl:left-[8%] md:top-[45%] transform translate-x-0 md:-translate-y-1/2 z-10 flex flex-col gap-3 lg:gap-3 md:max-w-[470px] lg:max-w-[430px] xl:max-w-[500px] md:rounded-md ">
          <p className="text-base font-medium text-white-shade-200">
            RBC Cleaning
          </p>
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-lato text-white-shade-100">
            {props.title}
          </h1>
          <p className="font-light leading-relaxed text-white-shade-100">
            {props.description}
          </p>
          <a
            href={props.redirect ? props.redirect : "/products"}
            className={`${HeroCSS["HeroT-btn"]} shiny-global sm:mb-0 mb-10 flex mt-2 items-center justify-center text-white-shade-100 sm:max-w-fit lg:px-4 font-semibold md:px-3 px-3 py-2 md:py-2 lg:py-3 bg-secondary-shade md:bg-primary-shade-200 lg:text-base xl:text-lg rounded-lg text-center cursor-pointer transition-colors duration-200`}
          >
            {props.ctaMessage}
          </a>
        </div>
      </div>
    </div>
  );
};
