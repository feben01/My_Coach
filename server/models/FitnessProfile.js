// models/FitnessProfile.js
const mongoose = require('mongoose');

const fitnessProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  healthStatus: {
    type: String,
    required: true,
  },
  fitnessGoal: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const FitnessProfile = mongoose.model('FitnessProfile', fitnessProfileSchema);

module.exports = FitnessProfile;
