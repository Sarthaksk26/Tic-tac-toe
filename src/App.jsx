import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";
import { useState } from "react";

function derivedActivePLayer(gameTurns) {
  let currPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O';
  }
  return currPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = derivedActivePLayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currAcivePlayer) => (currAcivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
      const currPlayer = derivedActivePLayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currPlayer }, ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
