import React from 'react';
import Tile from './Tile';
import { useGame } from '../GameLogic';

export default function GameBoard() {
  const { state, dispatch } = useGame();

  const handleTilePlace = (row, col) => {
    if (state.selectedTile) {
      dispatch({
        type: 'PLACE_TILE',
        row,
        col,
        tile: state.selectedTile
      });
      // Move to the next turn.
      dispatch({ type: 'NEXT_TURN' });
    }
  };

  return (
    <div className="game-board">
      {state.board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((tile, colIndex) => (
            <div
              key={colIndex}
              className="board-cell"
              onClick={() => handleTilePlace(rowIndex, colIndex)}
            >
              {tile && <Tile letter={tile.letter} value={tile.value} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
