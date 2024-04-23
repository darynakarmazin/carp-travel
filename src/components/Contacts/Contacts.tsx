import Container from "../Container";
import contactsData from "../../data/contacts.json";
import ContactsList from "../ContactsList";
import ContactsForm from "../ContactsForm";
const { title } = contactsData;

function Contacts() {
  return (
    <section id="contacts" className="contacts-section py-20">
      <Container>
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] max-md:mb-6 md:mb-9">
          <span className="font-thin">{title[0]}</span>
          {title[1]}
        </h2>
        <div className="flex flex-col gap-3 md:gap-16 xl:flex-row xl:gap-0">
          <ContactsList />
          <ContactsForm />
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
