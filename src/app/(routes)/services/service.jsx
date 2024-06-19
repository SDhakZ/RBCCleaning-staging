"use client";
import React from "react";
import { serviceData } from "@/app/data/services";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Service() {
  return (
    <div className="padding-y-lg">
      <div className="flex flex-col items-center justify-center container-margin">
        <h1 className="text-2xl font-semibold text-center max-w-[400px] sm:max-w-none sm:text-3xl md:text-4xl lg:text-[2.85rem]">
          Wide range of <span className="text-primary-shade-200">services</span>{" "}
          we provide
        </h1>
        <picture>
          <source
            media="(max-width:540px)"
            srcSet="/services/service-banner-mobile.png"
          />
          <img
            className="mt-6 sm:mt-6 md:mt-12 lg:mt-16"
            src="/services/service-banner.png"
            alt="Service Banner"
          />
        </picture>
      </div>
      <div className="flex justify-center section">
        <div className="flex flex-col gap-14 sm:gap-14 md:gap-20 lg:gap-22 container-margin max-w-[1200px]">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full gap-[4.8rem] sm:gap-[5rem] md:gap-20 lg:gap-24"
            >
              <h2 className="py-1 px-3 sm:px-4 sm:py-2 text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] text-center rounded-md text-white-shade-100 bg-primary-shade-200 w-fit">
                {service.category}
              </h2>
              <div className="grid mb-4 sm:mb-10 gap-x-8 gap-y-20 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-20 lg:gap-x-14 lg:gap-y-20">
                {service.serviceItems.map((serviceItem) => {
                  const iconPath =
                    require(`@/app/assets/services/icons/${serviceItem.icon}`).default;
                  return (
                    <Link
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      href={`services/${serviceItem.slug}`}
                      className="flex relative flex-col max-w-[350px]  items-center justify-center w-full gap-2 px-6 pt-12 pb-6 transition-colors duration-200 border-2 md:pb-8 sm:pb-6 lg:pb-8 hover:bg-primary-shade-200 group rounded-3xl flex- card-shadow border-black-shade-100"
                      key={serviceItem.id}
                    >
                      <figure className="flex absolute -top-8 md:-top-12 bg-white items-center justify-center w-16 h-16 sm:w-20 sm:h-20 border-[2px] rounded-full border-black-shade-100">
                        <Image
                          className="w-10 sm:w-12"
                          src={iconPath}
                          alt={serviceItem.title}
                        />
                      </figure>

                      <h3 className="text-lg font-semibold text-center lg:text-xl group-hover:text-white-shade-100 text-black-shade-300">
                        {serviceItem.title}
                      </h3>
                      <p className="text-sm text-center lg:text-base group-hover:text-white-shade-200 text-black-shade-200">
                        {serviceItem.brief}
                      </p>
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="flex relative flex-col max-w-[350px]  items-center justify-center w-full gap-2 px-6 pt-12 pb-6 transition-colors duration-200 border-2 border-dashed md:pb-8 sm:pb-4 lg:pb-10 hover:bg-primary-shade-200 group rounded-3xl flex- card-shadow border-black-shade-100"
                >
                  <div className="flex absolute -top-8 md:-top-12 bg-white items-center justify-center w-16 h-16 sm:w-20 sm:h-20 border-[2px] rounded-full  border-[#8B8B8B]">
                    <FontAwesomeIcon
                      className="text-4xl text-black-shade-100"
                      icon={faQuestion}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center lg:text-xl group-hover:text-white-shade-100 text-black-shade-100">
                    Request for custom service
                  </h3>
                  <p className="text-sm text-center lg:text-base group-hover:text-white-shade-200 text-[#8B8B8B]">
                    Dont see the service your looking for? You can always ask us
                    for your unique requests.
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
