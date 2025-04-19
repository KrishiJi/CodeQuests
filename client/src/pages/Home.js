import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/challenges/today')
      .then(res => setChallenge(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Today's CodeQuest</h1>
      {challenge ? (
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold">{challenge.title}</h2>
          <p className="my-2">{challenge.prompt}</p>
          <Link to={`/challenge/${challenge._id}`} className="text-blue-500 underline">
            View & Submit Solutions
          </Link>
        </div>
      ) : (
        <p>Loading challenge...</p>
      )}
    </div>
  );
}

export default Home;
