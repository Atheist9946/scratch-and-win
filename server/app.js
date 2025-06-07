require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const authMiddleware = require('./middleware/auth');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static files - corrected configuration
app.use('/public', express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../client/views')));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Routes
const authRoutes = require('./routes/auth');
const cardRoutes = require('./routes/cards');
const userRoutes = require('./routes/users');
const scratchRoutes = require('./routes/scratchCards');

app.use('/api/auth', authRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/users', userRoutes);
app.use('/api/scratch', scratchRoutes);

// HTML Routes - with proper authentication
app.get('/admin', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/views/Admin.html'));
});

app.get('/user', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/views/User.html'));
});

// PCM route should be accessible without authentication
app.get('/pcm', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/views/PCM.html'));
});

app.get('/pcs12', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/views/PCS12.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});