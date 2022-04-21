import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "../AddPlayerForm";

import React from "react";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("name");
  const [players, set_players] = useState([
    { id: 1, name: "Josephina", score: 11 },
    { id: 2, name: "Mariolina", score: 14 },
    { id: 3, name: "Ariovaldo", score: 42 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  return (
    <div className="Scoreboard">
      <p>Player's Scores:</p>
      <ul>
        {players_sorted.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))}
      </ul>
      <p>
        Sort by:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="name"> Name </option>
          <option value="score"> Score </option>
        </select>
      </p>
      <AddPlayerForm />
    </div>
  );
}
