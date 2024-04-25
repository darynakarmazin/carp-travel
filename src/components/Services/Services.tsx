"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Container from "../Container";

import servicesData from "../../data/services.json";
const { heading, slides, menu } = servicesData;

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
      {slides &&
        slides.map(({ image, background, title, slogan, description }, idx) => {
          return (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <section
                  id="services"
                  className="services-section py-20 w-full h-full bg-cover bg-bottom -z-10"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${idx + 1} of ${slides.length}`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.50) 0%,rgba(2, 15, 8, 0.50) 100%), url(${background})`,
                    backgroundPositionX: "80%",
                  }}
                >
                  <Container>
                    <div className="mb-4 md:flex md:mb-9 xl:mb-5">
                      <h2 className="uppercase text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] mb-2 md:mr-[170px]">
                        <span className="font-thin">{heading[0]}</span>
                        {heading[1]}
                      </h2>
                      <p className="h-min text-[43px] font-thin text-right leading-[1.2] md:text-justify md:text-[67px] md:leading-[1.16] xl:text-[98px] xl:leading-normal">
                        {`0${activeSlide + 1}/`}
                        <span className="inline-block opacity-20 text-left">
                          {servicesData
                            ? `${slides.length > 9 ? "" : 0}${slides.length}`
                            : "XX"}
                        </span>
                      </p>
                    </div>

                    <div className="md:flex md:gap-5 md:items-center xl:items-stretch">
                      <div className="mb-[12px] sm:w-[440px] sm:h-[311px] md:w-[463px] md:h-[370px] md:mb-0 xl:w-[607px] xxl:h-[429px] xl:m-0">
                        <Image
                          src={image}
                          alt={title}
                          width={607}
                          height={429}
                          className="block w-full min-h-[213px] h-full object-cover"
                        />
                      </div>

                      <div className="md:w-[221px] xl:w-[605px]">
                        <strong className="flex justify-end text-right text-[12px] font-extralight leading-2 tracking-[2.4px] mb-6 md:hidden">
                          {slogan}
                        </strong>

                        <div className="flex flex-col justify-between h-[320px] md:h-[376px] md:justify-start xl:h-[429px] xl:flex-row xl:justify-normal">
                          <ul className="flex flex-col gap-4 md:mb-[25px] xl:w-[252px] xl:gap-6">
                            {menu &&
                              menu.map((link, linkIdx) => (
                                <li
                                  key={linkIdx}
                                  className="xl:relative leading-0.85 md:leading-[0.82] xl:leading-[0.86]"
                                >
                                  <button
                                    className={
                                      activeSlide === linkIdx
                                        ? "active_btn"
                                        : "btn"
                                    }
                                    type="button"
                                    tabIndex={isActive ? 0 : -1}
                                    onClick={() => {
                                      handleLinkClick(linkIdx);
                                    }}
                                  >
                                    {link.length > 15 ? (
                                      <span className="inline-block w-min text-left max-w-[185px] md:max-w-none">
                                        {link}
                                      </span>
                                    ) : (
                                      <span>{link}</span>
                                    )}
                                  </button>

                                  <strong className="hidden text-[12px] font-extralight leading-2 tracking-[2.4px] xl:block xl:absolute xl:top-0 xl:left-[312px] xl:whitespace-nowrap">
                                    {activeSlide === linkIdx ? slogan : ""}
                                  </strong>
                                </li>
                              ))}
                          </ul>

                          <div className="md:flex md:flex-col md:justify-between md:h-full xl:w-[293px] xl:ml-[60px] xl:justify-end">
                            <strong className="hidden md:block md:text-[12px] md:font-extralight md:leading-2 md:tracking-[2.4px] xl:hidden">
                              {slogan}
                            </strong>
                            <p className="text-[14px] font-extralight leading-1.43 md:text-justify md:text-[13px] md:leading-[1.54] xl:text-[18px] xl:leading-[1.33]">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Container>
                </section>
              )}
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

export default Services;
