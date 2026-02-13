import React from 'react';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import TileRack from './components/TileRack';
import NextTurnButton from './components/NextTurnButton';
import './tile.css';

export default function App() {
  return (
    <div className="app-container">
      <ScoreBoard />
      <NextTurnButton />
      <GameBoard />
      <TileRack />
    </div>
  );
}
