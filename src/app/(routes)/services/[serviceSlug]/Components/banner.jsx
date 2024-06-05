import React from "react";

export default function banner(props) {
  const { serviceItem } = props;
  return (
    <div className="relative flex items-center justify-center">
      <picture className="block w-full h-full ">
        <source
          media="(max-width:540px)"
          srcSet={`${serviceItem.detail.bannerImage}-mobile.png`}
        />
        <source
          media="(max-width:1020px)"
          srcSet={`${serviceItem.detail.bannerImage}-tablet.png`}
        />
        <source srcSet={`${serviceItem.detail.bannerImage}-desktop.png`} />
        <img
          className="block w-full"
          src={`${serviceItem.detail.bannerImage}-desktop.png`}
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
          <button className="px-5 py-2 mt-5 text-lg font-semibold rounded-md bg-primary-shade-200 text-white-shade-100">
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
}
