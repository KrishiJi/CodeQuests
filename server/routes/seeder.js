const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge'); // adjust if your path is different

// POST /api/seeder/seed
router.post('/seed', async (req, res) => {
  try {
    await Challenge.deleteMany({}); // clear old ones
    await Challenge.create({
      title: 'Build a Simple Calculator',
      prompt: 'Create a basic calculator using JavaScript...',
      difficulty: 'Easy',
      tags: ['JavaScript', 'DOM', 'Frontend']
    });

    res.status(201).send('Dummy challenge seeded successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Seeding failed');
  }
});

module.exports = router;
