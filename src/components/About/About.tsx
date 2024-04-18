import Container from "../Container";
import aboutData from "../../data/about.json";
const {
  title,
  descriptionFirst,
  descriptionSecond,
  slogan,
  descriptionBottom,
} = aboutData;

function About() {
  return (
    <section id="about" className="about-section py-20">
      <Container>
        <div className="mb-10 md:mb-16 md:flex md:justify-between md:gap-[78px] xl:justify-normal xl:gap-[32px]">
          <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] mb-2">
            <span className="font-thin">{title[0]}</span>
            {title[1]}
          </h2>
          <div className="md:pt-2.5">
            <p className="max-w-[180px] md:max-w-[220px] xl:max-w-[292px] text-sm md:text-base xl:text-lg font-extralight mb-6 md:mb-4 xl:md-6">
              <span className="font-normal">{descriptionFirst[0]}</span>
              {descriptionFirst[1]}
            </p>
            <p className="max-w-[180px] md:max-w-[220px] xl:max-w-[292px] text-sm md:text-base xl:text-lg  font-extralight">
              <span className="font-normal">{descriptionSecond[0]}</span>
              {descriptionSecond[1]}
            </p>
          </div>
        </div>
        <div className="md:flex md:gap-[20px] xl:flex-row-reverse">
          <div className="w-[189px] md:w-[221px] xl:w-[296px] ml-auto md:mt-[-104px] xl:mt-0 text-sm md:text-[16px] md:leading-tight xl:text-[18px] mb-10">
            <p className="uppercase text-left">{slogan[0]}</p>
            <p className="uppercase text-right">{slogan[1]}</p>
            <p>{slogan[2]}</p>
          </div>
          <p className="text-sm md:text-[16px] md:leading-tight xl:text-[18px] font-extralight md:w-[463px] xl:w-[605px]">
            <span className="font-normal">{descriptionBottom[0]}</span>
            {descriptionBottom[1]}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
