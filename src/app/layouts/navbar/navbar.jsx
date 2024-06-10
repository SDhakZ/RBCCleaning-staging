"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "@/app/data/companyInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarCSS from "./navbar.module.css";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const pathname = usePathname();

  const toggleClass = () => {
    if (window.innerWidth < 768) {
      setisMenu(!isMenu);
      setResponsiveclose(!isResponsiveclose);
    }
  };

  useEffect(() => {
    setPrevScrollPos(window.scrollY);
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos < 100;
      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  console.log(pathname);

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex bg-white-shade-100 ${
          isVisible ? "" : NavbarCSS["nav-hidden"]
        }`}
      >
        <div
          className={`relative w-full h-20 ${NavbarCSS["container-margin-navbar"]}  sm:h-20`}
        >
          <div className="flex items-center justify-between h-full">
            {/* Add Logo */}
            <Link href="/">
              <img
                alt="Company Logo"
                className="w-28 lg:w-30"
                src="/mainLogo.png"
              />
            </Link>
            <div>
              <nav className={NavbarCSS["main-nav"]}>
                {/* Responsive Menu Button */}
                {isResponsiveclose === true ? (
                  <span
                    className="relative flex cursor-pointer md:hidden text-black-shade-400"
                    onClick={() => {
                      toggleClass();
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    <FontAwesomeIcon className="text-2xl" icon={faClose} />
                  </span>
                ) : (
                  <span
                    className="relative flex cursor-pointer md:hidden text-black-shade-400"
                    onClick={toggleClass}
                  >
                    <FontAwesomeIcon className="text-2xl" icon={faBars} />
                  </span>
                )}

                <ul
                  className={
                    isMenu
                      ? `block px-[1.9rem] lg:px-[3.15rem] xl:px-[4.05rem] absolute top-20 w-full left-0 right-0 z-10 bg-background-white m-0 p-0 md:gap-6 lg:gap-8 items-center`
                      : `hidden md:flex m-0 p-0 gap-9 items-center`
                  }
                >
                  {menuData[0].items.slice(0, 4).map((item, index) => (
                    <li
                      key={index}
                      className={`relative hover:text-primary-shade-200 block py-4 md:py-2 text-lg font-semibold cursor-pointer sm:text-[1.2rem] md:px-0 md:text-base ${
                        pathname === item.link
                          ? "text-green-500 border-b-2 border-green-500"
                          : "text-black-shade-200"
                      }`}
                    >
                      <Link
                        onClick={() => window.innerWidth < 768 && toggleClass()}
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}

                  <li className="relative block w-full text-base cursor-pointer md:mb-0 md:mt-0 md:text-base">
                    <Link
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          toggleClass();
                          window.scrollTo({ top: 0 });
                        }
                      }}
                      href="/contact"
                      className="bg-[#429b22] px-3 py-2 w-full text-white rounded-md"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbarmenu;
