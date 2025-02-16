import s from './Contact.module.css';

const Contact = ({ contact, handleDelete }) => {
  return (
    <>
      <div className={s.text}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
