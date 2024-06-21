import React from "react";

export default function banner({ serviceItem, openModal }) {
  return (
    <div className="relative flex items-center justify-center">
      <picture className="block w-full h-full ">
        <source
          media="(max-width:540px)"
          srcSet={`${serviceItem.detail.bannerImage}-mobile.webp`}
        />
        <source
          media="(max-width:1020px)"
          srcSet={`${serviceItem.detail.bannerImage}-tablet.webp`}
        />
        <source srcSet={`${serviceItem.detail.bannerImage}-desktop.webp`} />
        <img
          alt="banner"
          className="block w-full"
          src={`${serviceItem.detail.bannerImage}-desktop.webp`}
        />
      </picture>
      <div className="absolute -translate-y-1/2 w-full top-[50%]">
        <div className="container-margin-compact">
          <h1 className="text-3xl font-semibold font-lato lg:text-5xl md:text-4xl text-white-shade-100">
            {serviceItem.title}
          </h1>
          <p className="text-lg font-lato text-white-shade-100 mt-4 max-w-[450px] font-medium">
            {serviceItem.brief}
          </p>
          <button
            onClick={openModal}
            className="px-6 py-2 mt-5 text-lg hover:bg-[#16a9df] font-semibold rounded-md shiny-global bg-primary-shade-200 text-white-shade-100"
          >
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
}
