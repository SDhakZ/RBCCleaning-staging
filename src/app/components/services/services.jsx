"use client";
import React, { useEffect } from "react";
import { serviceData } from "@/app/data/services";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: false,
    });
  });
  const allServices = serviceData.flatMap((category) => category.serviceItems);
  return (
    <div className="py-14 lg:py-24 container-margin-compact">
      <h2
        data-aos="fade"
        className="text-3xl font-semibold text-center md:text-4xl lg:text-5xl font-lato"
      >
        Other <span className="text-primary-shade-200">Services</span> that
        might interest you
      </h2>
      <div className="grid grid-cols-1 gap-6 mt-10 md:mt-16 sm:mt-10 lg:mt-20 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service, index) => {
          const iconPath =
            require(`@/app/assets/services/icons/${service.icon}`).default;
          return (
            <Link
              data-aos="fade-up"
              data-aos-delay={`${50 + index * 50}`}
              data-aos-anchor-placement="center-bottom"
              key={index}
              href={`/services/${service.slug}`}
              className="flex md:max-w-[400px] w-full items-center gap-4 p-3 transition-colors duration-150 bg-white rounded-full md:gap-6 hover:bg-primary-shade-200 group service-card-shadow"
            >
              <figure className="flex items-center justify-center bg-white rounded-full min-w-14 min-h-14 lg:min-w-16 lg:min-h-16 service-pic-shadow">
                <Image
                  alt={service.title}
                  className="w-8 lg:w-10"
                  src={iconPath}
                />
              </figure>
              <p className="text-[20px] font-semibold md:text-xl lg:text-2xl xl:text-xl group-hover:text-white-shade-100 text-black-shade-300 font-lato">
                {service.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
