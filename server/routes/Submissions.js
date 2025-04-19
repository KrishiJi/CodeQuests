const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// Get submissions for a challenge
router.get('/:challengeId', async (req, res) => {
  try {
    const subs = await Submission.find({ challengeId: req.params.challengeId }).sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Submit a solution
router.post('/', async (req, res) => {
  try {
    const { challengeId, username, language, code } = req.body;
    const submission = new Submission({ challengeId, username, language, code });
    await submission.save();
    res.json(submission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
