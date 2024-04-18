import Container from "../Container";
import heroData from "../../data/hero.json";
import JoinButton from "../JoinButton";
const { title, cities, slogan, description, buttonText } = heroData;

function Hero() {
  return (
    <section id="hero" className={`hero-section pt-[130px] pb-[104px] `}>
      <Container>
        <div className={`flex flex-col md:flex-row justify-between`}>
          <div
            className={`md:hidden w-[320px] mb-[181px] text-[98px] leading-tight font-medium`}
          >
            <p>
              {slogan[0]}&nbsp;
              <span className={`font-thin`}>{slogan[1]}</span>
            </p>
            <p className={`text-base tracking-[2.5em] font-light`}>
              {slogan[2]}
            </p>
          </div>
          <div className={`w-1/2`}>
            <h1
              className={`text-[40px] md:text-[67px] xl:text-[98px] uppercase font-thin tracking-tighter leading-[56px] md:leading-[81px] xl:leading-[119px] xl:pt-6 xl:pl-6 mb-6 md:mb-[64px] xl:mb-[148px]`}
            >
              <span className={"font-medium"}>{title[0]}</span> {title[1]}{" "}
              {title[2]}
            </h1>
            <p
              className={`text-base font-extralight leading-normal tracking-wider xl:pl-6 xl:mb-6`}
            >
              {cities}
            </p>
          </div>
          <div className={`flex flex-col items-end`}>
            <div
              className={`max-md:hidden w-[320px] mb-[181px] text-[98px] leading-tight font-medium`}
            >
              <p>
                {slogan[0]}&nbsp;
                <span className={`font-thin`}>{slogan[1]}</span>
              </p>
              <p className={`text-base tracking-[2.5em] font-light`}>
                {slogan[2]}
              </p>
            </div>
            <div className={`w-[294px]`}>
              <p className={`text-[18px] leading-6 font-extralight mb-[28px]`}>
                {description}
              </p>
              <JoinButton buttonText={buttonText} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
