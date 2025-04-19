const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');

// POST /api/challenges/add
router.post('/add', async (req, res) => {
    try {
      const { title, prompt, difficulty, tags } = req.body;
  
      const newChallenge = new Challenge({
        title,
        prompt,
        difficulty,
        tags: tags.split(',').map(tag => tag.trim()), // Convert tags to an array
        date: new Date().toISOString().slice(0, 10), // Store today's date
      });
  
      await newChallenge.save();
      res.status(201).json(newChallenge);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  });
  
// Get today's challenge
router.get('/today', async (req, res) => {
    const today = new Date();
    const start = new Date(today.setHours(0,0,0,0));
    const end = new Date(today.setHours(23,59,59,999));
  
    try {
      let challenge = await Challenge.findOne({ date: { $gte: start, $lte: end } });
      if (!challenge) {
        // Fallback if no challenge for today
        challenge = await Challenge.findOne().sort({ date: -1 });
      }
      res.json(challenge);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
module.exports = router;
