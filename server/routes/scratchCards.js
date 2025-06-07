const express = require('express');
const router = express.Router();
const ScratchCard = require('../models/ScratchCard');
const auth = require('../middleware/auth');

// Create a new scratch card (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const { text, image } = req.body;
    const scratchCard = new ScratchCard({
      text,
      image,
      createdBy: req.user.userId
    });
    await scratchCard.save();
    res.status(201).json(scratchCard);
  } catch (error) {
    res.status(500).json({ message: 'Error creating scratch card', error: error.message });
  }
});

// Get all scratch cards
router.get('/', async (req, res) => {
  try {
    const scratchCards = await ScratchCard.find().populate('createdBy', 'nickname');
    res.json(scratchCards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scratch cards', error: error.message });
  }
});

// Get a specific scratch card
router.get('/:id', async (req, res) => {
  try {
    const scratchCard = await ScratchCard.findById(req.params.id).populate('createdBy', 'nickname');
    if (!scratchCard) {
      return res.status(404).json({ message: 'Scratch card not found' });
    }
    res.json(scratchCard);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scratch card', error: error.message });
  }
});

// Update a scratch card (protected route)
router.put('/:id', auth, async (req, res) => {
  try {
    const { text, image } = req.body;
    const scratchCard = await ScratchCard.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      { text, image },
      { new: true }
    );
    if (!scratchCard) {
      return res.status(404).json({ message: 'Scratch card not found or unauthorized' });
    }
    res.json(scratchCard);
  } catch (error) {
    res.status(500).json({ message: 'Error updating scratch card', error: error.message });
  }
});

// Delete a scratch card (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const scratchCard = await ScratchCard.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId
    });
    if (!scratchCard) {
      return res.status(404).json({ message: 'Scratch card not found or unauthorized' });
    }
    res.json({ message: 'Scratch card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting scratch card', error: error.message });
  }
});

module.exports = router;