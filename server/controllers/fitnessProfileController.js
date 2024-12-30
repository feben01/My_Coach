const FitnessProfile = require('../models/FitnessProfile');

// Create or Update Fitness Profile
exports.createOrUpdateFitnessProfile = async (req, res) => {
  try {
    const { userId, age, weight, sex, healthStatus, fitnessGoal } = req.body;

    // Validation for age and weight
    if (age <= 0) {
      return res.status(400).json({ message: 'Age must be greater than 0' });
    }
    if (weight <= 0) {
      return res.status(400).json({ message: 'Weight must be greater than 0' });
    }

    // Check if profile already exists
    let profile = await FitnessProfile.findOne({ userId });

    if (profile) {
      // Update profile if it exists
      profile.age = age || profile.age;
      profile.weight = weight || profile.weight;
      profile.sex = sex || profile.sex;
      profile.healthStatus = healthStatus || profile.healthStatus;
      profile.fitnessGoal = fitnessGoal || profile.fitnessGoal;

      await profile.save();
      return res.status(200).json({ message: 'Fitness profile updated successfully', profile });
    } else {
      // Create a new profile if it does not exist
      profile = new FitnessProfile({
        userId,
        age,
        weight,
        sex,
        healthStatus,
        fitnessGoal,
      });

      await profile.save();
      return res.status(201).json({ message: 'Fitness profile created successfully', profile });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};
