import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const Home = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/contacts');
      setContacts(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch contacts');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Add new contact
  const addContact = async (contact) => {
    try {
      const res = await axios.post('http://localhost:8080/api/contacts', contact);
      setContacts([...contacts, res.data]);
      toast.success('Contact saved!'); // notification
    } catch (err) {
      console.error(err);
      toast.error('Failed to save contact');
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/contacts/${id}`);
      setContacts(contacts.filter(c => c._id !== id));
      toast.success('Contact deleted!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete contact');
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      <h1>Connectly Contacts</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default Home;
