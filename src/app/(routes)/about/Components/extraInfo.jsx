import React from "react";

export default function extraInfo() {
  const data = [
    {
      text: "100% Non Hazardous",
      image: "./Frame1.png",
    },
    {
      text: "100% Natural",
      image: "./Frame2.png",
    },
    {
      text: "Non-toxic materials",
      image: "./Frame3.png",
    },
  ];

  return (
    <div className=" bg-white w-full">
      <div className="container-margin flex flex-col items-center justify-evenly mt-14 py-16 md:flex-row">
        <div className="flex flex-col gap-1 px-1 sm:justify-center md:flex-row ">
          <img
            src="/ABOUT3.png"
            className="w-full pb-3 h-auto max-w-[400px] sm:max-w-[420px] mb-2"
          />
        </div>
        <div className="flex flex-col px-2 gap-1 w-full  relative">
          <h1 className="text-2xl font-bold mb-4 md:text-3xl">
            Our Commitment to{" "}
            <span className="text-green-500 ">Eco-Friendly</span> Cleaning
          </h1>
          <img
            src="/leaf.png"
            alt=""
            className="absolute -right-5 h-16 -top-6 sm:-right-10 "
          />
          <p className="text-sm sm:text-lg ">
            <b>Sustainability at 💚.</b> At RBC Cleaning Services Pty. Ltd., we
            believe in leaving a positive impact on both our clients' spaces and
            the environment. Our eco-friendly approach not only protects your
            health but also promotes a greener future. We take pride in using
            cleaning solutions that are enhanced with essential oils, ensuring
            your spaces smell as fresh as they look.
          </p>

          {/* <div className="flex flex-col  sm:flex-row items-center justify-evenly mt-5 sm:flex-wrap gap-x-4 gap-y-8 ">
            <div className="flex flex-col items-center ">
              <img src="/Frame1.png" className="size-12 mb-2 sm:size-14" />
              <p className="text-md  font-bold text-center sm:text-lg">
                100% Non Hazardous
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/Frame2.png" className=" size-12 mb-2  sm:size-14" />
              <p className="text-md  font-bold text-center sm:text-lg">
                100% Natural
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/Frame3.png" className=" size-12 mb-2 sm:size-14 " />
              <p className="text-md  font-bold text-center sm:text-lg">
                Non-toxic materials
              </p>
            </div>
          </div> */}

          <div className="flex flex-col  sm:flex-row items-center justify-evenly mt-5 sm:flex-wrap gap-x-4 gap-y-8 ">
            {data.map((items) => (
              <div className="flex flex-col items-center ">
                <img src={items.image} className=" size-12 mb-2 sm:size-14 " />
                <p className="text-md  font-bold text-center sm:text-lg">
                  {items.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
