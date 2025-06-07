const mongoose = require('mongoose');

const ScratchCardSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  image: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ScratchCard', ScratchCardSchema);