// src/components/DailyChallenge.js
import React, { useEffect, useState } from 'react';

const DailyChallenge = () => {
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/challenges/today');
        const data = await res.json();
        setChallenge(data);
      } catch (error) {
        console.error('Failed to fetch challenge:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenge();
  }, []);

  if (loading) return <p>Loading daily challenge...</p>;
  if (!challenge) return <p>No challenge available today!</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', margin: '20px auto', maxWidth: '600px' }}>
      <h2>{challenge.title}</h2>
      <p><strong>Difficulty:</strong> {challenge.difficulty}</p>
      <p><strong>Tags:</strong> {challenge.tags.join(', ')}</p>
      <p>{challenge.prompt}</p>
    </div>
  );
};

export default DailyChallenge;
