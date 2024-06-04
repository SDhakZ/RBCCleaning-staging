import React from "react";
import { menuData, socialInfo } from "@/app/data/companyInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactModule(props) {
  const { message } = props;
  return (
    <div>
      <section className="relative flex justify-center w-full padding-y-lg lg:pb-24 bg-white-shade-100">
        <div className="w-full container-margin">
          <div>
            <div className="mt-2 text-3xl font-semibold leading-12 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-black-shade-200">
              <span className="mt-2 text-3xl font-semibold gradient font-visby leading-12 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-primary-shade-200">
                Get In Touch:{" "}
              </span>
              {message
                ? message
                : "Reach Out to Us for Inquiries, Assistance, or Collaborations"}
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
                    className="text-xl lg:text-2xl text-black-shade-200"
                    icon={info.icon}
                  />
                  <p
                    className={`text-lg sm:text-lg font-semibold text-black-shade-200 tracking-wider relative overflow-hidden lg:text-xl`}
                  >
                    {info.title}
                    <span className="underline"></span>
                  </p>
                </a>
              </div>
            ))}
            <div className="relative z-10 flex items-center col-span-2 gap-8 sm:col-span-1">
              {socialInfo.map((socialInfo, index) => (
                <a
                  target="_blank"
                  key={index}
                  title={socialInfo.title}
                  className="text-3xl transition-all duration-300 lg:text-[2rem] text-black-shade-200 hover:text-primary-shade-200"
                  href={socialInfo.link}
                >
                  <FontAwesomeIcon icon={socialInfo.icon} />
                </a>
              ))}
            </div>
            <div className="col-span-2 my-4 sm:col-span-1 lg:my-4">
              <a
                href="/contact"
                className="px-8 py-3 hover:bg-[#59CA31] mt-2 font-semibold transition-all duration-200 rounded-md text-white-shade-100 bg-primary-shade-200 text-primary-orange-100 w-fit "
              >
                Send Quick Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}