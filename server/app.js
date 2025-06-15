require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static files
app.use('/public', express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../client/views')));

// Database connection (modern syntax)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('ℹ️ Connection URI:', process.env.MONGODB_URI.replace(/:[^@]+@/, ':*****@')); // Mask password in logs
  });

// API Routes
const authRoutes = require('./routes/auth.js');
const cardRoutes = require('./routes/cards');
const userRoutes = require('./routes/users'); 
const scratchRoutes = require('./routes/scratchCards');

app.use('/api/auth', authRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/users', userRoutes);
app.use('/api/scratch', scratchRoutes);

// HTML Routes
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, '../client/views/Admin.html')));
app.get('/user', (req, res) => res.sendFile(path.join(__dirname, '../client/views/User.html')));
app.get('/pcm', (req, res) => res.sendFile(path.join(__dirname, '../client/views/PCM.html')));
app.get('/pcs12', (req, res) => res.sendFile(path.join(__dirname, '../client/views/PCS12.html')));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('⚠️ Server error');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));