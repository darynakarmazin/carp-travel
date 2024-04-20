import Container from "../Container";
import careerData from "../../data/career.json";
import CareerForm from "../CareerForm";
const { title, description, whyList, phrase } = careerData;

function Career() {
  return (
    <>
      <section id="career" className="career-section py-20">
        <Container>
          <div>
            <div className="mb-8 md:flex justify-between md:mb-[5px] xl:mb-[31px]">
              <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] max-md:mb-6">
                <span className="font-thin">{title[0]}</span>
                {title[1]}
              </h2>
              <p
                className={`max-md:ml-[101px] md:text-justify md:max-w-[221px] xl:max-w-[293px] text-sm leading-5 max-md:mb-6 md:mt-[10px] md:text-[13px] xl:text-[18px] xl:leading-6 font-extralight`}
              >
                {description}
              </p>
            </div>
            <div>
              <h3 className="max-md:ml-[100px] text-3xl xl:text-4xl font-extralight mb-9 md:mb-14 xl:mb-11 uppercase md:ml-[80px] xl:ml-[147px]">
                {whyList[0].title}
              </h3>
              <ul className="max-md:mr-[100px] text-right">
                {whyList[0].list.map((item) => {
                  return (
                    <li className="xl:flex xl:gap-6" key={item.qv}>
                      <p className="text-sm md:text-[16px] xl:text-[18px] leading-5  xl:leading-6 font-normal mb-2 xl:mb-0">
                        {item.qv}
                      </p>
                      <p className="text-[12px] leading-5 font-extralight mb-4 md:mb-6">
                        {item.ans}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="max-md:hidden">
            <p>{phrase}</p>
            <CareerForm />
          </div>
        </Container>
      </section>
      <section className="md:hidden career-section py-20">
        <Container>
          <div>
            <p>{phrase}</p>
            <CareerForm />
          </div>
        </Container>
      </section>
    </>
  );
}

export default Career;
