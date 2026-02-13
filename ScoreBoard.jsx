import React from 'react';
import { useGame } from '../GameLogic';

export default function ScoreBoard() {
  const { state } = useGame();

  return (
    <div className="score-board">
      {state.players.map(player => (
        <div key={player.id} className="player-score">
          <h3>{player.name}</h3>
          <p>Score: {player.score}</p>
        </div>
      ))}
    </div>
  );
}
