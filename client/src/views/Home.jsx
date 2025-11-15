import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const Home = () => {
    const [contacts, setContacts] = useState([]);


    const fetchContacts = async () => {
        try {
            const res = await axios.get('https://connectlyapi.onrender.com');
            setContacts(res.data);
        } catch (err) {
            console.error(err);
            toast.error('Failed to fetch contacts');
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);


    const addContact = async (contact) => {
        try {
            const res = await axios.post('https://connectlyapi.onrender.com', contact);
            setContacts([...contacts, res.data]);
            toast.success('Contact saved!');
        } catch (err) {
            console.error(err);
            toast.error('Failed to save contact');
        }
    };


    const deleteContact = async (id) => {
        try {
            await axios.delete(`https://connectlyapi.onrender.com/${id}`);
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
            <h1>Connectly Contacts📞</h1>
            <ContactForm addContact={addContact} />
            <ContactList contacts={contacts} deleteContact={deleteContact} />
        </div>
    );
};

export default Home;
