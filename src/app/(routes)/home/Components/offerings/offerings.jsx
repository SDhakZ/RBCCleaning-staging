import React from "react";

export default function offerings() {
  const data = [
    {
      title: "Swift and Efficient Service",
      description:
        "Rapid turnaround times ensure your workspace is spotless and ready quickly.",
      image: "./home/swift-and-efficeient.png",
    },
    {
      title: "Cost-Effective Quality",
      description:
        "Top-tier cleaning at competitive rates, offering great value without compromising quality.",
      image: "./home/cost-effective.png",
    },
    {
      title: "Trusted and Certified Cleaners",
      description:
        "Authorized professionals, vetted and trained, deliver reliable, high-standard cleaning you can trust.",
      image: "./home/trusted-and-certified.png",
    },
    {
      title: "ECO friendly services",
      description:
        "Authorized professionals, vetted and trained, deliver reliable, high-standard cleaning you can trust.",
      image: "./home/eco-friendly.png",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 container-margin-compact">
      <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
        <div className="flex flex-col items-center self-start w-full gap-12 sm:w-fit sm:items-start">
          <h2 className="text-3xl font-semibold lg:text-4xl font-lato">
            What sets us apart for{" "}
            <span className="text-primary-shade-200">our clients </span>?
          </h2>
          <figure className="max-w-[300px] sm:max-w-[450px]">
            <img className="w-full" src="/home/offering-bucket.png"></img>
          </figure>
        </div>
        <div className="flex max-w-[670px] flex-col gap-5">
          {data.map((item, index) => (
            <div
              className="flex flex-col items-center gap-4 px-6 py-4 bg-white rounded-lg sm:flex-row lg:gap-6"
              key={index}
            >
              <figure className="max-w-[60px]">
                <img className="w-full" src={item.image} />
              </figure>
              <div className="flex flex-col gap-1 lg:gap-2">
                <h3 className="text-lg font-semibold lg:text-xl font-lato text-black-shade-300">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold lg:text-base text-black-shade-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <p className="mt-4 font-semibold md:text-lg text-black-shade-100">
            Looking for Cleaning Services?{" "}
            <a className="text-primary-shade-200" href="/contact">
              Reach Out to Us!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
