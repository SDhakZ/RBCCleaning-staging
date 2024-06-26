"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperOverride.css";
import { testimonialData } from "@/app/data/testimonial";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Testimonial() {
  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <div
      data-aos="zoom-in"
      className="overflow-x-hidden padding-y section container-margin-compact"
    >
      <div className="bg-gradient-to-r rounded-2xl md:rounded-[31px] py-8 px-4  from-[#65B741] to-[#7FCE62]">
        <div className="flex flex-col items-center w-full gap-2">
          <h3 className="text-base text-[#035202c5] font-semibold font-lato">
            TESTIMONIALS
          </h3>
          <h2 className="text-3xl text-center text-white md:text-4xl">
            What our clients are saying
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={3}
          spaceBetween={10}
          navigation
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            790: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {testimonialData.map((testimonial, index) => {
            const fullStars = Math.floor(testimonial.stars);
            const hasHalfStar = testimonial.stars % 1 !== 0;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            return (
              <SwiperSlide key={index}>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={`${50 + index * 200}`}
                  className="px-6 select-none flex flex-col gap-2 items-center min-w-[250px] max-w-[360px] py-5 rounded-2xl md:rounded-[24px] bg-white-shade-100"
                >
                  <div className="flex gap-1 mt-2">
                    {[...Array(fullStars)].map((_, idx) => (
                      <FontAwesomeIcon
                        key={idx}
                        icon={faStar}
                        className="text-yellow-500"
                      />
                    ))}
                    {hasHalfStar && (
                      <FontAwesomeIcon
                        icon={faStarHalfAlt}
                        className="text-yellow-500"
                      />
                    )}
                    {[...Array(emptyStars)].map((_, idx) => (
                      <FontAwesomeIcon
                        key={idx}
                        icon={faStar}
                        className="text-gray-300"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm font-medium text-center md:text-base md:font-semibold text-black-shade-100">
                    {testimonial.testimonial}
                  </p>
                  <p className="mt-2 text-sm font-medium text-center md:text-base md:font-semibold font-lato text-primary-shade-300">
                    {testimonial.name}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
