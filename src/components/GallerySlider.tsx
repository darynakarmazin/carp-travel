"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import galleryData from "../data/gallery.json";
const { slides } = galleryData;

export default function GallerySlider() {
  return (
    <div className="max-md:hidden relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".custom_next",
          prevEl: ".custom_prev",
        }}
        className="flex gap-6 h-[294px] xl:h-[429px]"
        slidesPerView={3}
        spaceBetween={24}
        breakpoints={{
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: -44,
              depth: 0,
              modifier: 1,
              scale: 0.35,
            },
          },

          1280: {
            coverflowEffect: {
              rotate: 0,
              stretch: -44,
              depth: 0,
              modifier: 1,
              scale: 0.5,
            },
          },
        }}
      >
        {[...slides, ...slides].map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`wrapper relative right-[80px] w-[415px] xl:w-[606px] h-[294px] xl:h-[429px] ${
                  isActive ? "before:hidden right-[90px] xl:right-[95px]" : ""
                }`}
              >
                <Image
                  src={slide.image}
                  alt="View of nature"
                  width={606}
                  height={429}
                  className="w-full"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-10 flex justify-between flex-row bottom-4 left-[45px] right-[25px] xl:left-[211px] xl:right-[184px]">
        <button
          className="custom_prev font-thin text-[33px] leading-none uppercase hover:opacity-[0.5] focus:opacity-[0.5] duration-300"
          type="button"
        >
          Back
        </button>
        <button
          className="custom_next font-thin text-[33px] leading-none uppercase hover:opacity-[0.5] focus:opacity-[0.5] duration-300"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
