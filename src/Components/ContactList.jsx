import React from 'react'

function ContactList({ contacts, onEdit, onDelete }) {
  return (
       <div className='w-full'>
    {contacts.length > 0 ? (
      contacts.map((contact) => (
        <div key={contact.id} className="border p-4 mb-2 flex justify-between items-center  shadow-inner shadow-blue-900">
          <div>
           <div className='flex justify-between'>
              <h2 className="font-bold">{contact.name}</h2>
              <p>{contact.phone}</p>
           </div>
            <p>{contact.email}</p>
          </div>
          <div>
            <button
              onClick={() => onEdit(contact)}
              className="bg-yellow-400 text-white p-2 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(contact.id)}
              className="bg-red-500 text-white p-2"
            >
              Delete
            </button>
          </div>
        </div>
      ))
    ) : (
      <p>No contacts found.</p>
    )}
  </div>
  )
}

export default ContactList
