import React, { useState } from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

function Card(props) {
  // const [isFront, setIsFront] = useState(false);

  function showFront() {
    // if (!document.getElementById(props.idx).classList) {
    document.getElementById(props.idx).classList.add("card-content-show");
    document.getElementById(props.idx + 16).classList.add("card-back-show");
    // }
  }

  function hideFront() {
    // console.log("here");
    // if (!document.getElementById(props.idx).classList) {
    document.getElementById(props.idx).classList.remove("card-content-show");
    document.getElementById(props.idx + 16).classList.remove("card-back-show");
    // }
  }

  function deleteCard() {
    document.getElementById(props.idClicked[0]).classList.add("hidden");
    document.getElementById(props.idClicked[1]).classList.add("hidden");
  }

  function resetBack() {
    return hideFront();
  }

  function handleClick() {
    // setIsFront(!isFront);
    // console.log(isFront);
    // console.log(props.pairIdx);
    props.setClickIdxs([props.pairIdx, props.clickIdxs[0]]);
    props.setIdClicked([props.idx, props.idClicked[0]]);

    console.log(props.clickIdxs);
    // console.log(props.idx);
    showFront();
    // console.log("classList: " + document.getElementById(props.idx).classList);
    setTimeout(resetBack, 3000);
  }

  if (
    props.clickIdxs[0] === props.clickIdxs[1] &&
    props.idClicked[0] !== props.idClicked[1]
  ) {
    deleteCard();
  }
  return (
    <div onClick={handleClick} className="card">
      <div className="content" id={props.idx}>
        <CardBack idxCardBack={props.idx + 16} />
        <CardFront url={props.url} />
      </div>
    </div>
  );
}

export default Card;
