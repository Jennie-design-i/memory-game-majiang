import React from "react";
import imgUrl from "../imagesUrl";

function CardBack(props) {
  return (
    <div id={props.idxCardBack} className="card-back">
      <img src={imgUrl.blank} alt="question mark" />
    </div>
  );
}

export default CardBack;
