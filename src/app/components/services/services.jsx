import React from "react";
import { serviceData } from "@/app/data/services";
import Link from "next/link";

export default function services() {
  const allServices = serviceData.flatMap((category) => category.serviceItems);
  return (
    <div className="py-24 container-margin-compact">
      <h2 className="text-5xl font-semibold text-center font-lato">
        Other <span className="text-primary-shade-200">Services</span> that
        might interest you
      </h2>
      <div className="grid grid-cols-3 gap-10 mt-20">
        {allServices.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            className="flex items-center gap-6 p-4 transition-colors duration-150 bg-white rounded-full hover:bg-primary-shade-200 group service-card-shadow"
          >
            <figure className="flex items-center justify-center w-16 h-16 bg-white rounded-full service-pic-shadow">
              <img className="w-10" src={service.icon} />
            </figure>
            <p className="text-2xl font-semibold group-hover:text-white-shade-100 text-black-shade-300 font-lato">
              {service.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
