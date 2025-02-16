import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const handleAddContact = newContact => {
    setContacts(prev => [newContact, ...prev]);
  };

  const handleDelete = id => {
    const newListContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newListContacts);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filtered, setFiltered] = useState('');

  const handleSearch = e => {
    const value = e.target.value;
    setFiltered(value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox handleSearch={handleSearch} filtered={filtered} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </>
  );
};

export default App;
