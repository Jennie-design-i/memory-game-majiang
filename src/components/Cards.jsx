import React, { useState, useMemo } from "react";
import Card from "./Card";
import imgUrl from "../imagesUrl";

function Cards() {
  const [clickIdxs, setClickIdxs] = useState([-1, -2]);
  const [idClicked, setIdClicked] = useState([-1, -2]);

  const imgsKeys = Object.keys(imgUrl);
  const numImgs = imgsKeys.length;
  const minRange = 3;
  const maxRange = numImgs - 1;
  const count = 8;

  const cards = useMemo(() => {
    function generateRandomNumbers(min, max, count) {
      const numbers = [];

      for (let i = min; i <= max; i++) {
        numbers.push(i);
      }

      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }

      return numbers.slice(0, count);
    }

    const generatedCards = generateRandomNumbers(minRange, maxRange, count);
    const duplicatedCards = [];

    generatedCards.forEach((card) => {
      duplicatedCards.push(card);
      duplicatedCards.push(card);
    });

    for (let i = 0; i < duplicatedCards.length; i++) {
      let shuffle = Math.floor(Math.random() * duplicatedCards.length);
      let temp = duplicatedCards[i];
      duplicatedCards[i] = duplicatedCards[shuffle];
      duplicatedCards[shuffle] = temp;
    }

    return duplicatedCards;
  }, [minRange, maxRange, count]);

  function getValue(idx) {
    const key = Object.keys(imgUrl)[idx];
    return imgUrl[key];
  }

  function renderCards() {
    const obj = cards.map((idx, index) => (
      <Card
        url={getValue(idx)}
        key={index}
        idx={index}
        clickIdxs={clickIdxs}
        setClickIdxs={setClickIdxs}
        idClicked={idClicked}
        setIdClicked={setIdClicked}
        pairIdx={idx}
      />
    ));

    const resList = [];
    for (let i = 0; i < obj.length; i += 4) {
      resList.push(
        <div className={"row" + (i + 1)}>
          {obj[i]}
          {obj[i + 1]}
          {obj[i + 2]}
          {obj[i + 3]}
        </div>
      );
    }
    return resList;
  }

  return <div className="cards">{renderCards()}</div>;
}

export default Cards;
