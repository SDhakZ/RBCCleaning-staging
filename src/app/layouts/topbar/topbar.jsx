"use client";
import React from "react";

import { menuData, socialInfo } from "../../data/campanyInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Topbar = () => {
  return (
    <div className="relative z-10 hidden sm:block bg-[#429B22] ">
      <div className="flex flex-wrap items-center justify-between gap-2 py-3 min-h-20 container-margin sm:min-h-0 ">
        <div className="flex flex-wrap text-sm gap-y-2 gap-x-4 sm:gap-6 text-white-shade-100 ">
          {menuData[2].items.slice(0, 2).map((item, index) => (
            <a index={index} className="flex items-center" href={item.link}>
              <FontAwesomeIcon className="mr-2" icon={item.icon} />
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex gap-4 text-lg text-white-shade-100">
          {socialInfo.map((social, index) => (
            <a
              index={index}
              href={social.link}
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
