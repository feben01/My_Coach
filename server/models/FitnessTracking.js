// models/FitnessTracking.js
const mongoose = require('mongoose');

const fitnessTrackingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  activityType: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true, // in minutes
  },
  caloriesBurned: {
    type: Number,
    required: true, // in kcal
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const FitnessTracking = mongoose.model('FitnessTracking', fitnessTrackingSchema);

module.exports = FitnessTracking;
