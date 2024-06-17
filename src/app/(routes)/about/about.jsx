import React from "react";

export default function about() {
  return (
    <div className="top-section-p container-margin-compact">
      <div className="flex flex-col gap-16 md:gap-36">
        <div className="flex flex-col items-center gap-12 sm:justify-evenly md:flex-row">
          <figure className="max-w-[330px] sm:max-w-[350px] md:max-w-[450px]">
            <img src="/ABOUT1.png" alt="" className="w-full h-auto " />
          </figure>

          <div className="flex flex-col gap-1 w-full md:min-w-[400px] md:max-w-[500px] ">
            <h1 className="mb-3 text-2xl font-bold font-lato sm:text-3xl md:mb-4 lg:leading-tight text-black-shade-300">
              Dedicated Hands, Immaculate Spaces Welcome to{" "}
              <span className="text-green-500">RBC Cleaning</span> Services
            </h1>
            <p className="text-base font-medium lg:leading-relaxed text-black-shade-100">
              RBC Cleaning Services Pty. Ltd. is a local cleaning service
              company that has been helping people keep their homes and
              businesses clean for over four years. Whether it&apos;s
              residential or commercial locations, we are committed to the
              satisfaction of our clients. We guarantee to leave your home or
              office sparkling clean! Customer satisfaction is guaranteed.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-12 sm:justify-evenly md:flex-row ">
          <div className="flex flex-col gap-1 w-full md:min-w-[450px] md:max-w-[500px] ">
            <h1 className="mb-3 text-2xl font-bold font-lato sm:text-3xl md:mb-4 lg:leading-tight text-black-shade-300">
              Thinking About what Kind of Service Best Suites{" "}
              <span className="text-primary-shade-200">You?</span>
            </h1>
            <p className="text-base font-medium lg:leading-relaxed text-black-shade-100">
              RBC Cleaning Services Pty. Ltd. is proud to offer free in-home
              consultations tailored to your unique cleaning needs. We
              understand that every space is different, and we are happy to
              adapt our services to meet your specific requirements. During your
              consultation, our expert technician will address any questions you
              may have and help determine the best cleaning solutions for your
              home or business, ensuring they fit your needs and budget.
            </p>
            <button className="px-6 py-2 mt-6 text-lg font-semibold hover:bg-[#16a9df] text-white bg-green-500 rounded-md shiny-global w-max ">
              Contact Us
            </button>
          </div>
          <figure className="max-w-[330px] sm:max-w-[350px] md:max-w-[420px]">
            <img src="/ABOUT2.png" alt="" className="w-full h-auto " />
          </figure>
        </div>
      </div>
    </div>
  );
}
