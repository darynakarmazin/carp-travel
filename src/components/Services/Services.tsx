"use client";

import Container from "../Container";
import servicesData from "../../data/services.json";
const { title } = servicesData;

function Services() {
  return (
    <section id="services" className="services-section py-20">
      <Container>
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] mb-2">
          <span className="font-thin">{title[0]}</span>
          {title[1]}
        </h2>
      </Container>
    </section>
  );
}

export default Services;
