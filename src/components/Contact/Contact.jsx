const Contact = ({ data, deleteContact }) => {
  const { name, number, id } = data;

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  );
};

export default Contact;
