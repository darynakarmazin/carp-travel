"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import galleryData from "../data/gallery.json";
import { useRef } from "react";
const { slides } = galleryData;

function GallerySlider() {
  return (
    <div className="max-md:hidden relative">
      <Swiper
        navigation={{
          nextEl: ".custom_next",
          prevEl: ".custom_prev",
        }}
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
        wrapperTag="ul"
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt="View of nature"
              width={415}
              height={294}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-around">
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
