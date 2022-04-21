import Player from "./Player";
import AddPlayerForm from "../AddPlayerForm";

import React from "react";

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <p>Player's Scores:</p>
      <ul>
        <Player name="Josephine" />
        <Player name="Mariabel" />
        <Player name="Ariovaldo" />
        <Player name="Lisa" />
      </ul>
      <AddPlayerForm />
    </div>
  );
}
