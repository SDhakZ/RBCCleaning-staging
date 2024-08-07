import React from "react";
import { menuData } from "@/app/data/companyInfo";
import Link from "next/link";
import { socialInfo } from "@/app/data/companyInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import CompanyLogo from "@/app/assets/mainLogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9]">
      <div className="pt-16 pb-16 space-y-8 tracking-wider lg:pt-20 container-margin">
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap justify-center w-full gap-16 sm:gap-24 sm:flex-nowrap">
            <div className="col-span-1 flex flex-col items-center sm:items-start w-full max-w-[320px] min-w-[250px]">
              <Image alt="Company Logo" src={CompanyLogo} className="w-36" />
              <p className="mt-4 text-sm font-semibold leading-relaxed text-center sm:text-left text-black-shade-200">
                At RBC Cleaning Services, our dedicated team delivers top-notch
                cleaning with unmatched passion. Experience the highest
                standards of hygiene and perfection.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between w-full gap-10">
              <div className="flex flex-col items-start self-start col-span-1">
                <p className="text-lg font-semibold tracking-wider text-black-shade-300">
                  Company
                </p>
                <ul className="mt-5 space-y-2 font-semibold ">
                  {menuData[0].items.map((item, index) => (
                    <li className="text-left" key={index}>
                      <Link
                        title={item.title}
                        href={item.link}
                        className="text-base text-center transition-all duration-200 sm:text-sm whitespace-nowrap hover:text-primary-shade-200 text-black-shade-100 w-fit hover:text-primary-accent "
                      >
                        - {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col col-span-1 sm:items-start">
                <p className="text-lg font-semibold tracking-wider text-black-shade-300">
                  Services
                </p>
                <div className="flex flex-col flex-wrap gap-2 mt-5 font-semibold sm:gap-12 sm:flex-row">
                  <div className="flex flex-col self-start h-full gap-2">
                    {menuData[1].items.slice(0, 6).map((item, index) => (
                      <Link
                        key={index}
                        title={item.title}
                        href={item.link}
                        className="text-base text-center transition-all duration-200 sm:text-sm whitespace-nowrap hover:text-primary-shade-200 text-black-shade-100 w-fit hover:text-primary-accent"
                      >
                        - {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col self-start gap-2">
                    {menuData[1].items.slice(6, 11).map((item, index) => (
                      <Link
                        key={index}
                        title={item.title}
                        href={item.link}
                        className="text-base text-center transition-all duration-200 sm:text-sm whitespace-nowrap hover:text-primary-shade-200 text-black-shade-100 w-fit hover:text-primary-accent "
                      >
                        - {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full gap-6 sm:self-start sm:w-fit">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-center sm:text-left">
                    Have Any Queries?
                  </h3>
                  <Link
                    className="flex max-w-[200px] shiny-global hover:bg-[#16a9df] items-center justify-center px-3 py-2 font-semibold rounded-md bg-primary-shade-200 text-white-shade-200 "
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="flex max-w-[200px] justify-center w-full sm:justify-start">
                  <ul className="flex justify-between gap-10 sm:gap-2 w-fit sm:w-full">
                    {socialInfo.map((social, index) => (
                      <li key={index}>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-2xl text-black-shade-100 hover:text-primary-shade-200"
                        >
                          <FontAwesomeIcon icon={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap gap-6 sm:gap-12">
              {menuData[2].items.map((social, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 font-semibold break-all"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl text-black-shade-100 hover:text-black-shade-200"
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                  <p className="text-black-shade-200">{social.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-4 font-semibold text-white-shade-100 bg-primary-shade-200">
        © 2024 RBC Cleaning Services |&nbsp;{" "}
        <a
          className="transition-colors duration-200 hover:text-blue-600"
          href="/terms-and-conditions"
        >
          Terms & conditions
        </a>
      </div>
    </footer>
  );
}
