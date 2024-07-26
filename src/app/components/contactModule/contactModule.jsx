import React from "react";
import { menuData, socialInfo } from "@/app/data/companyInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ContactModule(props) {
  const { message } = props;
  return (
    <div>
      <section className="relative flex justify-center w-full padding-y-lg lg:pb-24 bg-white-shade-100">
        <div className="w-full container-margin-compact">
          <div>
            <div className="mt-2 text-3xl font-semibold leading-12 md:text-4xl md:leading-tight lg:text-4xl lg:leading-tight text-black-shade-200">
              <span className="mt-2 text-3xl font-semibold leading-tight gradient font-visby md:text-4xl md:leading-tight lg:text-4xl lg:leading-tight text-primary-shade-200">
                Get In Touch:{" "}
              </span>
              {message
                ? message
                : "Reach out to us for Inquiries, Assistance, or Collaborations"}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 sm:mt-12 lg:gap-x-0 lg:gap-y-6 lg:mt-14">
            {menuData[2].items.map((info, index) => (
              <div key={index} className="col-span-2 sm:col-span-1">
                <a
                  title={info.title}
                  href={info.link}
                  className="flex items-center space-x-4 cursor-pointer w-fit hover:text-primary-shade-200"
                >
                  <FontAwesomeIcon
                    className="text-xl lg:text-lg text-black-shade-200"
                    icon={info.icon}
                  />
                  <p
                    className={`text-lg sm:text-lg font-semibold text-black-shade-200 hover:text-primary-shade-200 tracking-wider relative overflow-hidden `}
                  >
                    {info.title}
                    <span className="underline"></span>
                  </p>
                </a>
              </div>
            ))}
            <div className="relative z-10 flex items-center col-span-2 gap-6 sm:col-span-1">
              {socialInfo.map((socialInfo, index) => (
                <a
                  target="_blank"
                  key={index}
                  title={socialInfo.title}
                  className="text-[1.6rem] transition-all duration-300 lg:text-[2rem] text-black-shade-200 hover:text-primary-shade-200"
                  href={socialInfo.link}
                >
                  <FontAwesomeIcon icon={socialInfo.icon} />
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="px-6 hover:bg-[#16a9df] shiny-global overflow-hidden py-4 text-base mt-1 font-semibold transition-all duration-200 rounded-md text-white-shade-100 bg-primary-shade-200 text-primary-orange-100 w-fit "
            >
              Send Quick Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
