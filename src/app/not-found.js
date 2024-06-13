import Link from "next/link";
import React from "react";
import ContactModule from "./components/contactModule/contactModule";

export default function NotFound() {
  return (
    <>
      <div className="container-margin padding-y">
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <figure className="max-w-[700px]">
            <img
              className="w-full h-auto"
              alt="404-error-illustration"
              src="/404-illustration.png"
            />
          </figure>
          <Link
            className="rounded-lg text-base md:text-lg lg:mb-10 mb-10  shiny-global font-semibold bg-primary-shade-200 text-white-shade-100  hover:bg-[#16a9df]"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </div>
      <ContactModule />
    </>
  );
}
