import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function derivedActivePLayer(gameTurns) {
  let currPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O';
  }
  return currPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePLayer(gameTurns);

   let gameBoard = initialGameBoard;
  
  for (let turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    
    gameBoard[row][col] = player;
  }

  let winner = null;

  for(const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].col];
    const secondSquare = gameBoard[combination[1].row][combination[1].col];
    const thirdSquare = gameBoard[combination[2].row][combination[2].col];

    if (firstSquare !== null && firstSquare === secondSquare && firstSquare === thirdSquare) {
      console.log(`Player ${firstSquare} has won the game!`);
      winner = firstSquare;
    } 
  }

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
        {winner && <h2>Player {winner} has won the game!</h2>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
