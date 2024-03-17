import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
