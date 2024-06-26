import React from "react";
import Image from "next/image";
import BannerDesktop from "@/app/assets/gallery/gallery-banner-desktop.webp";

export default function banner() {
  return (
    <div className="relative flex items-center justify-center">
      <picture className="block w-full h-full ">
        <source
          media="(max-width:540px)"
          srcSet={`gallery/gallery-banner-mobile.webp`}
        />
        <source
          media="(max-width:1020px)"
          srcSet={`gallery/gallery-banner-tablet.webp`}
        />
        <source srcSet={`gallery/gallery-banner-desktop.webp`} />
        <Image
          className="block w-full"
          src={BannerDesktop}
          alt="banner image"
        />
      </picture>
      <div className="absolute -translate-y-1/2 w-full top-[50%]">
        <div className="container-margin-compact">
          <h1 className="text-3xl font-semibold font-lato lg:text-5xl md:text-4xl text-white-shade-100">
            Our Gallery
          </h1>
          <p className="text-lg font-lato text-white-shade-100 mt-4 max-w-[450px] font-medium">
            Explore our gallery to see our professinal cleaning services in
            action and the result we deliver
          </p>
          <button
            href="/contact"
            className="px-6 py-2 mt-6 text-lg hover:bg-[#59CA31] font-semibold rounded-md bg-primary-shade-200 text-white-shade-100"
          >
            Book us now!
          </button>
        </div>
      </div>
    </div>
  );
}
