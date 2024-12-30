import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FitnessTracking = () => {
  const [fitnessData, setFitnessData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFitnessData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Unauthorized');

        const response = await axios.get('/api/user/fitness-data', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFitnessData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Something went wrong');
      }
    };

    fetchFitnessData();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  if (!fitnessData) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Your Fitness Tracking</h2>
      <div className="bg-gray-100 p-4 rounded shadow">
        <p><strong>Age:</strong> {fitnessData.age}</p>
        <p><strong>Weight:</strong> {fitnessData.weight} kg</p>
        <p><strong>Sex:</strong> {fitnessData.sex}</p>
        <p><strong>Health Status:</strong> {fitnessData.healthStatus}</p>
        <p><strong>Fitness Goal:</strong> {fitnessData.fitnessGoal}</p>
        <p><strong>Progress:</strong> {fitnessData.progress || 'No progress recorded yet.'}</p>
      </div>
    </div>
  );
};

export default FitnessTracking;
