"use client";
import ReactCompareImage from "react-compare-image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ComparisonSlider = ({ image }) => {
  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <div
      data-aos="fade-in"
      className="flex justify-center w-full item-center margin-t container-margin-compact padding-y-lg"
    >
      <div className="relative flex items-end w-full gap-8 px-3 py-3 sm:py-12 justify-evenly sm:px-14 bg-primary-shade-200 rounded-xl">
        <figure className="hidden lg:block max-w-[400px]">
          <img
            className="w-full"
            alt="comparison thumbs up"
            src="/comparison.png"
          />
        </figure>
        <div className="h-full">
          <p className="text-xl text-center md:text-2xl lg:text-3xl max-w-[500px] font-medium sm:text-left text-white-shade-100">
            See the clear before-and-after difference with our service.
          </p>
          <div className="w-full border-2 mt-6 rounded-lg overflow-hidden min-w-[0px] md:min-w-[400px] max-w-[600px]">
            <ReactCompareImage
              leftImage={`${image}-before.webp`}
              rightImage={`${image}-after.webp`}
              aspectRatio="wider"
              rightImageAlt="After"
              leftImageAlt="Before"
              leftImageLabel="Before"
              rightImageLabel="After"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
