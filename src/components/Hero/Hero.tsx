"use client";

import { Link } from "react-scroll";
import Container from "../Container";
import heroData from "../../data/hero.json";
const { title, cities, slogan, description, buttonText } = heroData;

function Hero() {
  return (
    <section id="hero" className={`hero-section pt-[130px] pb-[104px]`}>
      <Container>
        <div className={`flex`}>
          <div>
            <h1>{title}</h1>
            <ul>
              {cities &&
                cities.map((city) => (
                  <li key={city}>
                    <p>{city}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p>{slogan}</p>
            <p>{description}</p>
            <Link
              className="w-full"
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
      </Container>
    </section>
  );
}

export default Hero;
