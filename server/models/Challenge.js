const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  title: String,
  prompt: String,
  date: {
    type: Date,
    default: Date.now,
    unique: true
  },
  tags: [String]
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
