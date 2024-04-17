"use client";

import { Link } from "react-scroll";
import Container from "../Container";
import heroData from "../../data/hero.json";
const { title, cities, slogan, description, buttonText } = heroData;

function Hero() {
  return (
    <section id="hero" className={`hero-section pt-[130px] pb-[104px] `}>
      <Container>
        <div className={`flex justify-between `}>
          <div className={`w-1/2`}>
            <h1
              className={`text-[98px] uppercase font-thin tracking-tighter leading-[119px] pt-6 pl-6 mb-[148px]`}
            >
              <span className={"font-medium"}>{title[0]}</span> {title[1]}{" "}
              {title[2]}
            </h1>
            <p
              className={`text-base font-extralight leading-normal tracking-wider mb-6`}
            >
              {cities}
            </p>
          </div>
          <div className={`w-1/4 flex flex-col items-end`}>
            <div
              className={`w-full mb-[181px] text-[98px] leading-tight font-medium`}
            >
              <p>
                {slogan[0]}&nbsp;
                <span className={`font-thin`}>{slogan[1]}</span>
              </p>
              <p className={`text-base tracking-[2.5em] font-light`}>
                {slogan[2]}
              </p>
            </div>
            <div className={`max-w-[294px]`}>
              <p className={`text-[18px] leading-6 font-extralight mb-[28px]`}>
                {description}
              </p>
              <Link
                className={`${"join-btn"} flex justify-center w-full py-4 px-16 bg-white bg-opacity-5 border border-white text-[32px] font-bold`}
                to="contacts"
                spy={true}
                smooth={true}
                duration={1500}
                href="/"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
