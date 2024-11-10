import React from 'react'
import  { useState, useEffect } from 'react';
function ContactFrom({ onSave, editingContact }) {

    const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
      setEmail(editingContact.email);
    } else {
      setName('');
      setPhone('');
      setEmail('');
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email) {
      onSave({ id: editingContact?.id, name, phone, email });
      setName('');
      setPhone('');
      setEmail('');
    }
  };



  return (
    <div>
       <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        {editingContact ? 'Update Contact' : 'Add Contact'}
      </button>
    </form>
    </div>
  )
}

export default ContactFrom
