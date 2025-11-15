// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contacts', contactRoutes);

// Test root route
app.get('/', (req, res) => {
  res.send('Connectly API is running!');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Render sets the port dynamically
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
