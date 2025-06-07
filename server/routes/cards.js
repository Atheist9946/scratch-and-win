const express = require('express');
const router = express.Router();
const Card = require('../models/Card');
const auth = require('../middleware/auth');

// Create a new card
router.post('/', auth, async (req, res) => {
  try {
    const { content, backContent, allowComments, fontStyle } = req.body;
    
    const card = new Card({
      content,
      backContent: backContent || '',
      author: req.userId,
      allowComments: allowComments !== false,
      fontStyle: fontStyle || 'font-roboto'
    });

    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create card', error: error.message });
  }
});

// Get all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find()
      .populate('author', 'nickname')
      .sort({ createdAt: -1 });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cards', error: error.message });
  }
});

// Like/unlike a card
router.post('/:id/like', auth, async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    const index = card.likes.indexOf(req.userId);
    if (index === -1) {
      card.likes.push(req.userId);
    } else {
      card.likes.splice(index, 1);
    }

    await card.save();
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update like', error: error.message });
  }
});

// Save/unsave a card
router.post('/:id/save', auth, async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    const index = card.savedBy.indexOf(req.userId);
    if (index === -1) {
      card.savedBy.push(req.userId);
    } else {
      card.savedBy.splice(index, 1);
    }

    await card.save();
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update save', error: error.message });
  }
});

// Add comment to card
router.post('/:id/comments', auth, async (req, res) => {
  try {
    const { text } = req.body;
    const card = await Card.findById(req.params.id);
    
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    card.comments.push({
      user: req.userId,
      text
    });

    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add comment', error: error.message });
  }
});

module.exports = router;