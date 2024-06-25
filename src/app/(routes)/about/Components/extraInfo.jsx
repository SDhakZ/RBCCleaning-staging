"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import EcoJunks from "@/app/assets/about/ECOJunks.png";
import Leaf from "@/app/assets/about/leaf.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ExtraInfo() {
  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: false,
    });
  });
  const data = [
    {
      id: 1,
      text: "100% Non Hazardous",
      imagePath: "non-hazordous.png",
    },
    {
      id: 2,
      text: "100% Natural",
      imagePath: "natural.png",
    },
    {
      id: 3,
      text: "Non-toxic materials",
      imagePath: "non-toxic.png",
    },
  ];

  const imageImports = {
    "non-hazordous.png": require("@/app/assets/about/non-hazordous.png"),
    "natural.png": require("@/app/assets/about/natural.png"),
    "non-toxic.png": require("@/app/assets/about/non-toxic.png"),
  };

  return (
    <div className="w-full bg-white ">
      <div className="py-20 container-margin-compact mt-14">
        <div className="flex flex-col items-center gap-10 md:gap-16 md:flex-row justify-evenly ">
          <figure className="max-w-[400px] self-start md:min-w-[400px] md:max-w-[600px] sm:min-w-[200px] sm:max-w-[400px] ">
            <Image
              data-aos="fade"
              src={EcoJunks}
              alt="Eco illustration"
              className="w-full h-auto"
            />
          </figure>
          <div
            data-aos="fade"
            className="relative flex flex-col w-full px-2 sm:gap-0 md:gap-2"
          >
            <h1 className="mb-4 text-2xl font-bold font-lato text-black-shade-300 sm:text-3xl md:text-[2.15rem] md:leading-tight">
              Our Commitment to{" "}
              <span className="text-green-500 ">Eco-Friendly</span> Cleaning
            </h1>
            <Image
              src={Leaf}
              alt="leaf"
              className="absolute right-0 invisible w-auto h-10 sm:visible sm:h-14 md:h-16 lg:-right-6 -top-10 sm:-top-16 lg:-top-10 xl:-top-6 sm:right-0"
            />
            <p className="text-base font-medium sm:leading-relaxed text-black-shade-100">
              <b>Sustainability at 💚.</b> At RBC Cleaning Services Pty. Ltd.,
              we believe in leaving a positive impact on both our clients&apos;
              spaces and the environment. Our eco-friendly approach not only
              protects your health but also promotes a greener future. We take
              pride in using cleaning solutions that are enhanced with essential
              oils, ensuring your spaces smell as fresh as they look.
            </p>

            <div className="flex flex-col items-center mt-6 justify-evenly sm:flex-row sm:flex-wrap gap-x-12 gap-y-8 ">
              {data.map((items, index) => (
                <div
                  data-aos="fade"
                  data-aos-delay={`${50 + index * 300}`}
                  key={items.id}
                  className="flex flex-col items-center "
                >
                  <Image
                    alt={items.text}
                    src={imageImports[items.imagePath]}
                    className="mb-3 size-12 sm:size-14"
                  />
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
