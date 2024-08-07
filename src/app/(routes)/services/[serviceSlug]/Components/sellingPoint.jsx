import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function sellingPoint(props) {
  const { serviceItem } = props;
  const iconPath =
    require(`@/app/assets/services/${serviceItem.detail.sellingPointImage}`).default;
  return (
    <div className="padding-y section container-margin-compact">
      <div className="flex flex-col-reverse items-center justify-between gap-2 sm:items-start md:gap-10 md:flex-row">
        <div className="flex flex-col md:gap-5 gap-4 lg:gap-6 max-w-[550px]">
          <h2 className="text-2xl font-semibold font-lato lg:leading-tight text-black-shade-300 lg:text-4xl md:text-3xl">
            {serviceItem.detail.title}
          </h2>
          <p className="text-base font-medium md:leading-relaxed md:text-lg font-inter text-black-shade-100">
            {serviceItem.detail.description}
          </p>
          <ul className="space-y-2 font-medium md:space-y-3 text-black-shade-100">
            {serviceItem.detail.sellingPoints.map((point, index) => (
              <li
                className="flex items-start gap-3 text-base md:text-lg"
                key={index}
              >
                <FontAwesomeIcon
                  className="mt-1 text-lg lg:text-lg text-primary-shade-200"
                  icon={faSquareCheck}
                />
                {point}
              </li>
            ))}
          </ul>
          <Link
            className="px-6 py-3 hover:bg-[#16a9df] mt-2 text-lg font-semibold rounded-md shiny-global w-fit bg-primary-shade-200 text-white-shade-100"
            href={{
              pathname: "/contact",
              query: { subject: serviceItem.title },
            }}
          >
            Get the service
          </Link>
        </div>
        <figure>
          <Image
            alt="Icons"
            className="w-full h-auto max-w-[250px] md:min-w-[300px] lg:min-w-96 md:max-w-[500px]"
            src={iconPath}
          />
        </figure>
      </div>
    </div>
  );
}
