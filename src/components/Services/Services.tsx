"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Container from "../Container";

import servicesData from "../../data/services.json";
const { title, slides } = servicesData;

function Services() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  const handleLinkClick = (idx: number): void => {
    setActiveSlide(idx);

    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(idx);
    }
  };

  return (
    <section id="services" className="services-section py-20">
      <Swiper
        modules={[EffectFade, A11y]}
        slidesPerView={1}
        initialSlide={0}
        effect={"fade"}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <Container>
          <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] mb-2">
            <span className="font-thin">{title[0]}</span>
            {title[1]}
          </h2>
        </Container>
      </Swiper>
    </section>
  );
}

export default Services;
