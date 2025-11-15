// routes/contactRoutes.js
import express from 'express';
import { getContacts, addContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.get('/contacts', getContacts);
router.post('/contacts', addContact);
router.delete('/contacts/:id', deleteContact);

export default router;
