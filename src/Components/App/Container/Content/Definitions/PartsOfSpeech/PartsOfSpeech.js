import React, { useState, useEffect } from "react";
import "./styles.css";

function PartsOfSpeech({ word, partOfSpeech }) {
  const [meanings, setMeanings] = useState([]);
  const [synonym, setSynonym] = useState([]);

  useEffect(() => {
    const allVerbMeanings = word.meanings;

    for (let meaning in allVerbMeanings) {
      if (allVerbMeanings[meaning].partOfSpeech == partOfSpeech) {
        setMeanings(allVerbMeanings[meaning].definitions);
        setSynonym(allVerbMeanings[meaning].synonyms);
        break;
      }
    }
  }, [word, partOfSpeech]);
  console.log(synonym, "synonym");
  return (
    !!meanings?.length && (
      <section className="container">
        <div className="heading_medium">
          <h2 className="heading_title">{partOfSpeech}</h2>
          <div className="greyLine"></div>
        </div>
        <div className="meaning">
          <h3 className="MeaningTitle">Meaning</h3>
          <ul>
            {meanings.map((meaning, i) => {
              const currentDefinition = meaning.definition;
              const currentExample = meaning.example;
              return (
                <li key={i}>
                  {currentDefinition}
                  {currentExample ? <q className="quote">{currentExample}</q> : ""}
                </li>
              );
            })}
          </ul>
        </div>
        {!!synonym.length && (
          <div className="synonyms">
            <p className="synonymsTitle">Synonyms</p>
            <a className="synonymsLink"> {synonym.join(" , ") + " . "} </a>
          </div>
        )}
      </section>
    )
  );
}

export default PartsOfSpeech;
