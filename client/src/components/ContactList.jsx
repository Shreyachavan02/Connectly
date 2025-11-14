import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact._id}>
          {contact.name} | {contact.email} | {contact.phone}
          <button onClick={() => deleteContact(contact._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
