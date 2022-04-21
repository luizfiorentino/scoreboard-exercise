import React from "react";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <li className="Player">
      <p>
        {props.name} # Score: {props.score} #
      </p>
      <button onClick={onClickIncrement}>increase score</button>
    </li>
  );
}
