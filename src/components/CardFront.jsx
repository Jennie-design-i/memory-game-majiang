import React from "react";

function CardFront(props) {
  return (
    <div className="card-front">
      <img src={props.url} alt="question mark" />
    </div>
  );
}

export default CardFront;
