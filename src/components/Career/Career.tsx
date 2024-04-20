import Container from "../Container";
import careerData from "../../data/career.json";
import CareerForm from "../CareerForm";
const { title, description, whyList, phrase } = careerData;

function Career() {
  return (
    <section id="career" className="career-section py-20">
      <Container>
        <div>
          <div>
            <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] mb-2">
              <span className="font-thin">{title[0]}</span>
              {title[1]}
            </h2>
            <p>{description}</p>
          </div>
          <div>
            <h3>{whyList[0].title}</h3>
            <ul>
              {whyList[0].list.map((item) => {
                return (
                  <li key={item.qv}>
                    <p>{item.qv}</p>
                    <p>{item.ans}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <p>{phrase}</p>
          <CareerForm />
        </div>
      </Container>
    </section>
  );
}

export default Career;
