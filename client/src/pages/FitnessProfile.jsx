import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FitnessProfile = () => {
  const [profileData, setProfileData] = useState({
    age: '',
    weight: '',
    sex: 'male', // default value
    healthStatus: 'Healthy', // default value
    fitnessGoal: 'Lose Weight', // default value
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Unauthorized');

      await axios.post('/api/fitness-profile', profileData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      navigate('/fitness-tracking');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Complete Your Fitness Profile</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

        {/* Age Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={profileData.age}
            className="w-full border rounded px-3 py-2"
            min="1"
            required
          />
        </div>

        {/* Weight Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            onChange={handleChange}
            value={profileData.weight}
            className="w-full border rounded px-3 py-2"
            min="0.1" step="any" // allows decimals
            required
          />
        </div>

        {/* Sex Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Sex</label>
          <select
            name="sex"
            onChange={handleChange}
            value={profileData.sex}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Health Status Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Health Status</label>
          <select
            name="healthStatus"
            onChange={handleChange}
            value={profileData.healthStatus}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="Healthy">Healthy</option>
            <option value="Underweight">Underweight</option>
            <option value="Overweight">Overweight</option>
            <option value="Mild Joint Pain">Mild Joint Pain</option>
            <option value="Low Energy Levels">Low Energy Levels</option>
            <option value="Mild Back Pain">Mild Back Pain</option>
            <option value="Occasional Headaches">Occasional Headaches</option>
            <option value="Digestive Issues (e.g., mild bloating)">Digestive Issues (e.g., mild bloating)</option>
            <option value="Sleep Issues (e.g., mild insomnia)">Sleep Issues (e.g., mild insomnia)</option>
            <option value="Mild Allergies">Mild Allergies</option>
            <option value="Mild Stress or Anxiety">Mild Stress or Anxiety</option>
            <option value="Low Physical Activity">Low Physical Activity</option>
          </select>
        </div>

        {/* Fitness Goal Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Fitness Goal</label>
          <select
            name="fitnessGoal"
            onChange={handleChange}
            value={profileData.fitnessGoal}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="Lose Weight">Lose Weight</option>
            <option value="Build Muscle">Build Muscle</option>
            <option value="Improve Endurance">Improve Endurance</option>
            <option value="Increase Flexibility">Increase Flexibility</option>
            <option value="Enhance Overall Fitness">Enhance Overall Fitness</option>
            <option value="Boost Energy Levels">Boost Energy Levels</option>
            <option value="Improve Posture">Improve Posture</option>
            <option value="Reduce Stress">Reduce Stress</option>
            <option value="Achieve Better Sleep">Achieve Better Sleep</option>
            <option value="Strengthen Core">Strengthen Core</option>
            <option value="Increase Mobility">Increase Mobility</option>
            <option value="Train for an Event (e.g., marathon, race)">Train for an Event (e.g., marathon, race)</option>
            <option value="Maintain Current Fitness Level">Maintain Current Fitness Level</option>
            <option value="Recover from Injury">Recover from Injury</option>
            <option value="Improve Heart Health">Improve Heart Health</option>
          </select>
        </div>

        {/* Submit Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Profile</button>
      </form>
    </div>
  );
};

export default FitnessProfile;
