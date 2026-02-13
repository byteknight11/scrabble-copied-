import React from 'react';
import Tile from './Tile';
import { useGame } from '../GameLogic';

export default function TileRack() {
  const { state, dispatch } = useGame();
  const currentPlayer = state.players[state.currentPlayer];

  const shuffleTiles = () => {
    const shuffled = [...currentPlayer.tiles];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    dispatch({ type: 'SHUFFLE_TILES', shuffledTiles: shuffled });
  };

  return (
    <div className="tile-rack">
      <button onClick={shuffleTiles}>Shuffle Tiles</button>
      <div className="tiles-container">
        {currentPlayer.tiles.map((tile, index) => (
          <div
            key={index}
            className="tile-wrapper"
            onClick={() => dispatch({ type: 'SELECT_TILE', tile })}
          >
            <Tile letter={tile.letter} value={tile.value} />
          </div>
        ))}
      </div>
    </div>
  );
}
