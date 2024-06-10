import React from "react";

export default function about() {
  return (
    <div className="flex flex-col gap-16 container-margin-compact mt-24 pb-10 ">
      <div className="flex flex-col gap-12 items-center  sm:justify-evenly md:flex-row">
        <img
          src="/ABOUT1.png"
          alt=""
          className="w-full h-auto max-w-[330px] sm:max-w-[420px]"
        />
        <div className="flex flex-col gap-1 w-full md:max-w-[400px] ">
          <h1 className="text-2xl font-bold mb-2 md:text-3xl md:mb-4 lg:text-4xl pb-3">
            Welcome to <span className="text-green-500">RBC Cleaning</span>{" "}
            Services
          </h1>
          <p className="text-base lg:text-lg">
            RBC Cleaning Services Pty. Ltd. is a local cleaning service company
            that has been helping people keep their homes and businesses clean
            for over four years. Whether it’s residential or commercial
            locations, we are committed to the satisfaction of our clients. We
            guarantee to leave your home or office sparkling clean! Customer
            satisfaction is guaranteed.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-12 items-center  sm:justify-evenly md:flex-row ">
        <div className="flex flex-col gap-1 w-full md:max-w-[400px] ">
          <h1 className="text-2xl font-bold mb-2 md:text-3xl md:mb-4 lg:text-4xl pb-3">
            Thinking About what kind of Service best suites you?
          </h1>
          <p className="text-base lg:text-lg">
            RBC Cleaning Services Pty. Ltd. is proud to offer free in-home
            consultations tailored to your unique cleaning needs. We understand
            that every space is different, and we are happy to adapt our
            services to meet your specific requirements. During your
            consultation, our expert technician will address any questions you
            may have and help determine the best cleaning solutions for your
            home or business, ensuring they fit your needs and budget.
          </p>
          <button className="bg-green-500 text-white text-lg font-semibold rounded-md px-4 py-2 mt-4 w-max ">
            Contact Us
          </button>
        </div>
        <div className="flex flex-col gap-12 items-center  sm:justify-evenly md:flex-row">
          <img
            src="/ABOUT2.png"
            alt=""
            className="w-full h-auto max-w-[330px] sm:max-w-[420px]"
          />
        </div>
      </div>
    </div>
  );
}
