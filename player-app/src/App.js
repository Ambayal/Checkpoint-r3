import './App.css';
// src/App.js
import React from 'react';
import PlayersList from './compenent/PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Player List</h1>
      <PlayersList />
    </div>
  );
}

export default App;

