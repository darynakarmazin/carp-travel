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
        <div>
          <h2 className={`h2`}>{title}</h2>
          <p>{descriptionFirst}</p>
          <p>{descriptionSecond}</p>
        </div>
        <div>
          <div>
            <p>{slogan[0]}</p>
            <p>{slogan[1]}</p>
            <p>{slogan[2]}</p>
          </div>
          <p>{descriptionBottom}</p>
        </div>
      </Container>
    </section>
  );
}

export default About;
