import React from "react";

export default function Player(props) {
  return (
    <li className="Player">
      <p>{props.name}</p>
      <p># Score: {props.score} #</p>
    </li>
  );
}
