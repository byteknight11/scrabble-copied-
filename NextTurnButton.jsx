import React from 'react';
import { useGame } from '../GameLogic';

export default function NextTurnButton() {
  const { dispatch } = useGame();
  
  return (
    <button onClick={() => dispatch({ type: 'NEXT_TURN' })}>
      Next Turn
    </button>
  );
}
