const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    required: true
  },
  username: String,
  language: String,
  code: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  upvotes: {
    type: Number,
    default: 0
  },
  comments: [{
    username: String,
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = mongoose.model('Submission', SubmissionSchema);
