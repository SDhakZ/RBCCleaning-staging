import React from "react";
import Image from "next/image";
import BannerDesktop from "@/app/assets/gallery/gallery-banner-desktop.webp";
import Link from "next/link";

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
        <div className="relative container-margin-compact">
          <h1 className="text-3xl font-semibold font-lato lg:text-5xl md:text-4xl text-white-shade-100">
            Our Gallery
          </h1>
          <p className="text-lg mb-8 font-lato text-white-shade-100 mt-4 max-w-[450px] font-medium">
            Explore our gallery to see our professinal cleaning services in
            action and the result we deliver
          </p>

          <Link
            href="/contact"
            className="px-6 hover:bg-[#16a9df] overflow-hidden py-3 text-base mt-1 font-semibold transition-all duration-200 rounded-md text-white-shade-100 bg-primary-shade-200 text-primary-orange-100 w-fit "
          >
            Book us now!
          </Link>
        </div>
      </div>
    </div>
  );
}
