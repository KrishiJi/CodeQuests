import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChallengePage from './pages/ChallengePage';
import React from 'react';
import DailyChallenge from './components/DailyChallenge';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🌟 CodeQuests: Daily Challenge 🌟</h1>
      <DailyChallenge />
    </div>
  );
}


export default App;
