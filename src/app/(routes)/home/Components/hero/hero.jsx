"use client";
import React, { useState } from "react";
import HeroCSS from "./hero.module.css";
import "react-multi-carousel/lib/styles.css";
import { HeroCard } from "./heroCard";
import { heroData } from "@/app/data/heroData";
import Carousel from "react-multi-carousel";
import "./multiSliderOverride.css";

export const Hero = () => {
  const [isDragging, setIsDragging] = useState(false);

  // Check for cached data
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 1,
    },

    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  return (
    <>
      <div className={HeroCSS["HeroT-main-container"]}>
        <Carousel
          infinite={true}
          ssr={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={1500}
          responsive={responsive}
          removeArrowOnDeviceType={["mobile"]}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          additionalTransfrom={isDragging ? -10 : 0}
          pauseOnHover={false}
          showDots
        >
          {heroData?.map((item, index) => (
            <HeroCard
              key={index}
              id={item.id}
              imageLarge={item.images.imageLarge}
              imageMedium={item.images.imageMedium}
              imageSmall={item.images.imageSmall}
              title={item.title}
              description={item.description}
              redirect={item.redirect}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
