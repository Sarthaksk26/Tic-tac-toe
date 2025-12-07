

export default function GameBoard({onSelectSquare, board}) {
    
 
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handeSelectSquare(rowIndex, colIndex) {
    //    setGameBoard((prevGameBoard)=>{
    //         const  updatedBoard = [...prevGameBoard.map(inerArray => [...inerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //    })

    //    onSelectSquare();
    // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
