import Contact from '../models/Contact.js';

// GET all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new contact
export const addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newContact = new Contact({ name, email, phone });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE contact by ID
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
