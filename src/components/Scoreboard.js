import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "../AddPlayerForm";

import React from "react";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Josephina", score: 11 },
    { id: 2, name: "Mariolina", score: 14 },
    { id: 3, name: "Ariovaldo", score: 42 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  return (
    <div className="Scoreboard">
      <p>Player's Scores:</p>
      <ul>
        {players.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
