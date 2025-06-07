const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    trim: true,
    match: /^[a-zA-Z\s]*$/ // Only alphabets and spaces
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^(?=.*[@#$%_-])(?=.*\d)[a-z0-9@#$%_-]{6,15}$/
  },
  password: {
    type: String,
    required: true,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_=+\\|/?><.])[A-Za-z\d!@#$%^&*\-_=+\\|/?><.]{8,15}$/
  },
  scratchCards: [{
    name: String,
    isInstruction: Boolean
  }],
  settings: {
    cardColorBefore: String,
    cardColorAfter: String,
    revealedTextColor: String,
    revealedFontSize: Number,
    revealedPosition: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);