import Container from "../Container";
import heroData from "../../data/hero.json";
import JoinButton from "../JoinButton";
const { title, cities, slogan, description, buttonText } = heroData;

function Hero() {
  return (
    <section
      id="hero"
      className={`hero-section pt-[105px] pb-[56px] md:pt-[121px] md:pb-[64px] xl:pt-[130px] xl:pb-[104px]`}
    >
      <Container>
        <div className={`flex flex-col md:flex-row justify-between`}>
          <div
            className={`md:hidden ml-auto mb-6 text-[40px] leading-none font-medium`}
          >
            <p>
              {slogan[0]}&nbsp;
              <span className={`font-thin`}>{slogan[1]}</span>
            </p>
            <p className={`text-base tracking-[0.6em] font-light`}>
              {slogan[2]}
            </p>
          </div>
          <div className={`md:w-1/2`}>
            <h1
              className={`max-md:w-[278px] text-[40px] md:text-[67px] xl:text-[98px] uppercase font-thin tracking-tighter leading-[56px] md:leading-[81px] xl:leading-[119px] mb-6 md:mb-[64px] xl:mb-[148px]`}
            >
              <span className={"font-medium"}>{title[0]}</span> {title[1]}{" "}
              {title[2]}
            </h1>
            <p
              className={`max-md:w-[175px] md:w-[275px] xl:w-full xl:text-nowrap text-[10px] md:text-[14px] leading-relaxed md:leading-4 xl:text-base font-extralight xl:leading-normal tracking-wider mb-6`}
            >
              {cities}
            </p>
          </div>
          <div className={`flex flex-col items-end overflow-hidden`}>
            <div
              className={`max-md:hidden md:w-[220px] xl:w-[320px] mb-14 xl:mb-[181px] text-[67px] xl:text-[98px] leading-none font-medium`}
            >
              <p>
                {slogan[0]}&nbsp;
                <span className={`font-thin`}>{slogan[1]}</span>
              </p>
              <p
                className={`text-base leading-none tracking-[1.5em] xl:tracking-[2.5em] font-light`}
              >
                {slogan[2]}
              </p>
            </div>
            <div className={`w-full md:w-[230px] xl:w-[294px]`}>
              <p
                className={`text-justify text-sm leading-5 mb-6 md:mb-[28px] md:text-base xl:text-[18px] xl:leading-6 font-extralight`}
              >
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
