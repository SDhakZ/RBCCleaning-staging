import React from "react";
import { serviceData } from "@/app/data/services";
import Link from "next/link";

export default function Services() {
  const allServices = serviceData.flatMap((category) => category.serviceItems);
  return (
    <div className="py-14 lg:py-24 container-margin-compact">
      <h2 className="text-3xl font-semibold text-center md:text-4xl lg:text-5xl font-lato">
        Other <span className="text-primary-shade-200">Services</span> that
        might interest you
      </h2>
      <div className="grid grid-cols-1 gap-6 mt-10 md:mt-16 sm:mt-10 lg:mt-20 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            className="flex md:max-w-[400px] w-full items-center gap-4 p-3 transition-colors duration-150 bg-white rounded-full md:gap-6 hover:bg-primary-shade-200 group service-card-shadow"
          >
            <figure className="flex items-center justify-center bg-white rounded-full min-w-14 min-h-14 lg:min-w-16 lg:min-h-16 service-pic-shadow">
              <img className="w-8 lg:w-10" src={service.icon} />
            </figure>
            <p className="text-[20px] font-semibold md:text-xl lg:text-2xl xl:text-xl group-hover:text-white-shade-100 text-black-shade-300 font-lato">
              {service.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}