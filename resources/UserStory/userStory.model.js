const mongoose = require('mongoose');

const UserStoriesSchema = new mongoose.Schema({
  userStoryTitle: {
    type: String,
    required: true
  },
  userStoryDescription: {
    type: String,
    required: true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  textID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Text'
  }
}, { timestamps: true , collection: 'userStories'});

module.exports = mongoose.model('UserStories', UserStoriesSchema);
