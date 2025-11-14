import express from 'express';
import { getContacts, addContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

// Routes
router.get('/', getContacts);          // GET all contacts → GET http://localhost:8080/api/contacts
router.post('/', addContact);          // POST new contact → POST http://localhost:8080/api/contacts
router.delete('/:id', deleteContact);  // DELETE contact → DELETE http://localhost:8080/api/contacts/:id

export default router;
