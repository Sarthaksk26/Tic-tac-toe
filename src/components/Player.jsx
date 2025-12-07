import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

  const [isEditing, SetIsEditing] = useState(false);
  const [playerNameVal, setPlayerNameVal] = useState(initialName)

  function handleEdit() {

    if (isEditing){
    onChangeName(symbol, playerNameVal);
    }
    SetIsEditing((editing) => !editing);

    
  }

  function handleChange(e) {
    setPlayerNameVal(e.target.value);
  }

  let playerName = <span className="player-name">{playerNameVal}</span>;

  if (isEditing) {
    playerName = <input type="text" required onChange={handleChange} value={playerNameVal} />
  }

  return (<li className={isActive ? "active" : undefined}>
    <span className="player">
      {playerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEdit} >{isEditing ? "Save" : "Edit"}</button>
  </li>);
}
