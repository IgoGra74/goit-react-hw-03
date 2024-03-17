// const ContactForm = ({ addContact }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addContact({
//       id: Date.now(),
//       text: e.target.elements.text.value,
//     });
//     e.target.reset();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="name" name="name" />
//       <input type="number" name="number" />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default ContactForm;

const ContactForm = ({ addContact }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = e.target.elements.name.value;
    const newNumber = e.target.elements.number.value;
    addContact({
      id: Date.now(),
      name: newName,
      number: newNumber,
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="number" placeholder="Number" />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
