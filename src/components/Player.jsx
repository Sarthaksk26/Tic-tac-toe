import { useState } from "react";

export default function Player({initialName, symbol}) {

    const [ isEditing, SetIsEditing ] = useState(false);
    const [playerNameVal, setPlayerNameVal] = useState(initialName)

    function handleEdit(){
        SetIsEditing((editing)=>!editing);
    }

    function handleChange(e){
      setPlayerNameVal(e.target.value);
    }

    let playerName = <span className="player-name">{playerNameVal}</span>;

    if(isEditing){
      playerName = <input type="text required" onChange={handleChange} value={playerNameVal}/>
    }

  return ( <li>
    <span className="player">
      {playerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEdit} >{isEditing ? "Save" : "Edit"}</button>
  </li>);
}
