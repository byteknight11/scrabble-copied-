import React from "react";

const PlayerComponent = ({ player }) => {
  return (
    <div className="player">
      <h3>{player.name}</h3>
      <p>Score: {player.score}</p>
    </div>
  );
};

export default PlayerComponent;