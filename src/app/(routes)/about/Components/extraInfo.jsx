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
    <div className="w-full bg-white ">
      <div className="py-20 container-margin-compact mt-14">
        <div className="flex flex-col items-center gap-10 md:gap-16 md:flex-row justify-evenly ">
          <figure className="max-w-[400px] self-start md:min-w-[400px] md:max-w-[600px] sm:min-w-[200px] sm:max-w-[400px] ">
            <img
              src="/ABOUT3.png"
              alt="Eco illustration"
              className="w-full h-auto"
            />
          </figure>
          <div className="relative flex flex-col w-full px-2 sm:gap-0 md:gap-2">
            <h1 className="mb-4 text-2xl font-bold font-lato text-black-shade-300 sm:text-3xl md:text-4xl md:leading-tight">
              Our Commitment to{" "}
              <span className="text-green-500 ">Eco-Friendly</span> Cleaning
            </h1>
            <img
              src="/leaf.png"
              alt=""
              className="absolute right-0 invisible h-10 sm:visible sm:h-14 md:h-16 lg:-right-6 -top-10 sm:-top-16 lg:-top-10 xl:-top-6 sm:right-0"
            />
            <p className="text-sm font-medium sm:text-lg sm:leading-relaxed text-black-shade-200">
              <b>Sustainability at 💚.</b> At RBC Cleaning Services Pty. Ltd.,
              we believe in leaving a positive impact on both our clients'
              spaces and the environment. Our eco-friendly approach not only
              protects your health but also promotes a greener future. We take
              pride in using cleaning solutions that are enhanced with essential
              oils, ensuring your spaces smell as fresh as they look.
            </p>

            <div className="flex flex-col items-center mt-6 justify-evenly sm:flex-row sm:flex-wrap gap-x-12 gap-y-8 ">
              {data.map((items) => (
                <div className="flex flex-col items-center ">
                  <img src={items.image} className="mb-3 size-12 sm:size-14" />
                  <p className="font-semibold text-center text-md sm:text-lg">
                    {items.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
