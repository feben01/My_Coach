// routes/fitnessProfileRoutes.js
const express = require('express');
const { createOrUpdateFitnessProfile } = require('../controllers/fitnessProfileController');
const router = express.Router();

// Route to create or update the fitness profile
router.post('/fitness-profile', createOrUpdateFitnessProfile);

module.exports = router;
