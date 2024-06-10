import React from "react";

export default function banner() {
  return (
    <div className="relative flex items-center justify-center">
      <picture className="block w-full h-full ">
        <source
          media="(max-width:540px)"
          srcSet={`gallery/gallery-banner-mobile.png`}
        />
        <source
          media="(max-width:1020px)"
          srcSet={`gallery/gallery-banner-tablet.png`}
        />
        <source srcSet={`gallery/gallery-banner-desktop.png`} />
        <img
          className="block w-full"
          src={`gallery/gallery-banner-desktop.png`}
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
