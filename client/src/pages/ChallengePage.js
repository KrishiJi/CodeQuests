import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ChallengePage() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [subs, setSubs] = useState([]);
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [language, setLanguage] = useState('JavaScript');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/challenges/today`)
      .then(res => setChallenge(res.data));
    axios.get(`http://localhost:5000/api/submissions/${id}`)
      .then(res => setSubs(res.data));
  }, [id]);

  const submitSolution = async () => {
    await axios.post('http://localhost:5000/api/submissions', {
      challengeId: id,
      username,
      language,
      code
    });
    setCode('');
    axios.get(`http://localhost:5000/api/submissions/${id}`)
      .then(res => setSubs(res.data));
  };

  return (
    <div className="p-4">
      {challenge && (
        <>
          <h1 className="text-2xl font-bold">{challenge.title}</h1>
          <p className="my-2">{challenge.prompt}</p>

          <div className="mt-4">
            <h2 className="font-semibold">Submit your solution</h2>
            <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border p-2 m-1" />
            <select value={language} onChange={e => setLanguage(e.target.value)} className="border p-2 m-1">
              <option>JavaScript</option>
              <option>Python</option>
              <option>C++</option>
            </select>
            <textarea placeholder="Your code here" value={code} onChange={e => setCode(e.target.value)} className="w-full border p-2 my-2" />
            <button onClick={submitSolution} className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </div>

          <div className="mt-6">
            <h3 className="font-bold">Solutions</h3>
            {subs.map((s, i) => (
              <div key={i} className="bg-gray-100 p-2 my-2 rounded">
                <p className="font-semibold">{s.username} – {s.language}</p>
                <pre className="whitespace-pre-wrap bg-white p-2 rounded">{s.code}</pre>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ChallengePage;
