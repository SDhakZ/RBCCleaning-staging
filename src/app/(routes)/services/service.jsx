import React from "react";
import { serviceData } from "@/app/data/services";
import Link from "next/link";

export default function Service() {
  return (
    <div className="container-margin padding-y-lg">
      <div className="container-margin-compact">
        <h1 className="text-5xl font-semibold text-center">
          Wide range of <span className="text-primary-shade-200">services</span>{" "}
          we provide
        </h1>
        <img
          className="lg:mt-16"
          src="/services/service-banner.png"
          alt="Service Banner"
        />
      </div>
      <div className="section container-margin-compact">
        <div className="flex flex-col gap-24">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full gap-24"
            >
              <h2 className="px-4 py-2 text-2xl text-center rounded-md text-white-shade-100 bg-primary-shade-200 w-fit">
                {service.category}
              </h2>
              <div className="grid grid-cols-3 gap-10">
                {service.serviceItems.map((serviceItem) => (
                  <Link
                    href={serviceItem.slug}
                    className="flex flex-col items-center justify-center w-full gap-2 px-4 pt-2 pb-10 transition-colors duration-200 border-2 hover:bg-primary-shade-200 group rounded-3xl flex- card-shadow border-black-shade-100"
                    key={serviceItem.id}
                  >
                    <figure className="flex -mt-12 mb-2 bg-white items-center justify-center w-20 h-20 border-[2px] rounded-full border-black-shade-100">
                      <img
                        className="w-12"
                        src={serviceItem.icon}
                        alt={serviceItem.title}
                      />
                    </figure>

                    <h3 className="text-xl font-semibold group-hover:text-white-shade-100 text-black-shade-300">
                      {serviceItem.title}
                    </h3>
                    <p className="text-base text-center group-hover:text-white-shade-200 text-black-shade-200">
                      {serviceItem.brief}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
