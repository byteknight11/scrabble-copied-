import React, { createContext, useContext, useReducer } from 'react';

const GameContext = createContext();

// Helper: shuffle an array using the Fisher-Yates algorithm.
const shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// Helpers to create unique tile objects.
const createTile = (letter, value) => ({ letter, value });
const createTiles = (letter, value, count) =>
  Array.from({ length: count }, () => createTile(letter, value));

// Create a full Scrabble tile bag based on official English distribution.
const createTileBag = () => [
  ...createTiles('A', 1, 9),
  ...createTiles('B', 3, 2),
  ...createTiles('C', 3, 2),
  ...createTiles('D', 2, 4),
  ...createTiles('E', 1, 12),
  ...createTiles('F', 4, 2),
  ...createTiles('G', 2, 3),
  ...createTiles('H', 4, 2),
  ...createTiles('I', 1, 9),
  ...createTiles('J', 8, 1),
  ...createTiles('K', 5, 1),
  ...createTiles('L', 1, 4),
  ...createTiles('M', 3, 2),
  ...createTiles('N', 1, 6),
  ...createTiles('O', 1, 8),
  ...createTiles('P', 3, 2),
  ...createTiles('Q', 10, 1),
  ...createTiles('R', 1, 6),
  ...createTiles('S', 1, 4),
  ...createTiles('T', 1, 6),
  ...createTiles('U', 1, 4),
  ...createTiles('V', 4, 2),
  ...createTiles('W', 4, 2),
  ...createTiles('X', 8, 1),
  ...createTiles('Y', 4, 2),
  ...createTiles('Z', 10, 1),
  // Two blank tiles (value 0)
  ...createTiles('', 0, 2)
];

// Helper to draw a number of tiles from the bag.
const drawTiles = (bag, count) => {
  const drawn = bag.slice(0, count);
  const remaining = bag.slice(count);
  return { drawn, remaining };
};

// Shuffle the tile bag so that players get a random set of tiles.
let initialTileBag = shuffle(createTileBag());

// Draw 7 tiles for Player 1.
let result = drawTiles(initialTileBag, 7);
const player1Tiles = result.drawn;
initialTileBag = result.remaining;

// Draw 7 tiles for Player 2.
result = drawTiles(initialTileBag, 7);
const player2Tiles = result.drawn;
initialTileBag = result.remaining;

const initialState = {
  board: Array(15).fill().map(() => Array(15).fill(null)),
  players: [
    { id: 1, name: 'Player 1', score: 0, tiles: player1Tiles },
    { id: 2, name: 'Player 2', score: 0, tiles: player2Tiles }
  ],
  currentPlayer: 0,
  selectedTile: null,
  tileBag: initialTileBag
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'PLACE_TILE': {
      // Place the selected tile on the board.
      const newBoard = state.board.map((row, i) =>
        i === action.row
          ? row.map((cell, j) => (j === action.col ? action.tile : cell))
          : row
      );
      // Remove the placed tile from the current player's rack.
      const currentPlayerIndex = state.currentPlayer;
      const currentPlayer = state.players[currentPlayerIndex];
      const newPlayerTiles = currentPlayer.tiles.filter(tile => tile !== action.tile);
      
      // Draw a new tile from the bag if available to refill the rack to 7 tiles.
      let newTileBag = state.tileBag;
      if (newPlayerTiles.length < 7 && newTileBag.length > 0) {
        newPlayerTiles.push(newTileBag[0]);
        newTileBag = newTileBag.slice(1);
      }
      
      const newPlayers = state.players.map((player, index) =>
        index === currentPlayerIndex ? { ...player, tiles: newPlayerTiles } : player
      );
      
      return {
        ...state,
        board: newBoard,
        players: newPlayers,
        tileBag: newTileBag,
        selectedTile: null
      };
    }
    case 'SELECT_TILE':
      return { ...state, selectedTile: action.tile };
    case 'SHUFFLE_TILES': {
      const currentPlayerIndex = state.currentPlayer;
      const currentPlayer = state.players[currentPlayerIndex];
      const shuffledTiles = [...currentPlayer.tiles];
      for (let i = shuffledTiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
      }
      const newPlayers = state.players.map((player, index) =>
        index === currentPlayerIndex ? { ...player, tiles: shuffledTiles } : player
      );
      return {
        ...state,
        players: newPlayers
      };
    }
    case 'NEXT_TURN': {
      return {
        ...state,
        currentPlayer: (state.currentPlayer + 1) % state.players.length
      };
    }
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
