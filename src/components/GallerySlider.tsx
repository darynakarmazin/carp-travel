"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import galleryData from "../data/gallery.json";
const { slides } = galleryData;

function GallerySlider() {
  return (
    <div className="max-md:hidden">
      <Swiper
        navigation={{
          nextEl: ".custom_next",
          prevEl: ".custom_prev",
        }}
        modules={[Navigation]}
        slidesPerView={3}
        loop
        centeredSlides
        breakpoints={{
          0: {
            enabled: false,
            slidesPerView: -1,
          },
          768: {
            enabled: true,
            spaceBetween: 146,
            width: 703,
            height: 294,
            creativeEffect: {
              limitProgress: 1,
              prev: {
                scale: 0.29,
                translate: ["-69.3%", 0, 0],
              },
              next: {
                scale: 0.29,
                translate: ["69.3%", 0, 0],
              },
            },
          },
          1440: {
            spaceBetween: 650,
            width: 1280,
            height: 450,
            creativeEffect: {
              limitProgress: 1,
              prev: {
                scale: 0.52,
                translate: ["-76%", 0, 0],
              },
              next: {
                scale: 0.52,
                translate: ["76%", 0, 0],
              },
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt="View of nature"
              width={121}
              height={86}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button
          type="button"
          className="custom_prev"
          aria-label="Previous slide"
        >
          BACK
        </button>
        <button type="button" className="custom_next" aria-label="Next slide">
          NEXT
        </button>
      </div>
    </div>
  );
}

export default GallerySlider;
