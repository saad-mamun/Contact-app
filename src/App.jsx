import { useState } from 'react';
import './App.css'
import ContactFrom from './Components/ContactFrom'
import ContactList from './Components/ContactList'

function App() {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingContact, setEditingContact] = useState(null);

  // Add or update contact
  const handleSaveContact = (contact) => {
    if (contact.id) {
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
    } else {
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
    setEditingContact(null);
  };

  // Delete contact
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  // Filter contacts by search term
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <>
    <div className="max-w-[500px] container justify-items-center mx-auto mt-4  p-4  shadow-inner shadow-indigo-900 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Contact Management App</h1>
      <ContactFrom onSave={handleSaveContact} editingContact={editingContact} />
      <input
        type="text"
        placeholder="Search Contacts"
        className="border p-2 w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ContactList
        contacts={filteredContacts}
        onEdit={(contact) => setEditingContact(contact)}
        onDelete={handleDeleteContact}
      />
    </div>
    </>
  )
}

export default App
