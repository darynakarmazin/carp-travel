import Container from "../Container";
import contactsData from "../../data/contacts.json";
const { title } = contactsData;

function Contacts() {
  return (
    <section id="contacts" className="contacts-section py-20">
      <Container>
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] max-md:mb-6">
          <span className="font-thin">{title[0]}</span>
          {title[1]}
        </h2>
      </Container>
    </section>
  );
}

export default Contacts;
