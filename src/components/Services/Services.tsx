"use client";

import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import Container from "../Container";
import servicesData from "../../data/services.json";
const { title, slides } = servicesData;

const swiper = new Swiper(".swiper-container", {
  effect: "fade", // Ефект зникнення
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Додайте інші параметри за потреби
});

function Services() {
  return (
    <section id="services" className="services-section py-20">
      <Container>
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] mb-2">
          <span className="font-thin">{title[0]}</span>
          {title[1]}
        </h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                {/* Вміст слайда тут */}
                <h3>{slide.phrase}</h3>
                {/* <p>{slide.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
