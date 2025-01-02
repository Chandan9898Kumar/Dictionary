import React from "react";
import Header from "./Header";
import PartsOfSpeech from "./PartsOfSpeech";
import Source from "./Source";
import "./styles.css";

function Definitions({ word }) {
  const availablePartsOfSpeeches = word.meanings.map((meaning) => {
    //checking the word to see if it has a noun, verb or adjective
    return meaning.partOfSpeech;
  });

  return (
    <article className="content">
      <Header word={word} />
      {availablePartsOfSpeeches.includes("noun") ? <PartsOfSpeech word={word} partOfSpeech="noun" /> : <></>}
      {availablePartsOfSpeeches.includes("verb") ? <PartsOfSpeech word={word} partOfSpeech="verb" /> : <></>}
      {availablePartsOfSpeeches.includes("adjective") ? <PartsOfSpeech word={word} partOfSpeech="adjective" /> : <></>}
      <Source word={word} />
    </article>
  );
}

export default Definitions;
