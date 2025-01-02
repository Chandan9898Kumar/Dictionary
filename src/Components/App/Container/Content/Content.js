import React, { memo } from "react";
import { useSelector } from "react-redux";
import Definitions from "./Definitions";
import Message from "./Message";
import "./styles.css";

function Content() {
  const word = useSelector((state) => state.word);

  //if the word object has a 'message' key, then there was an error, and we will display a message to the user
  //if the word object has an empty string, then we know that the user has NOT searched anything yet, so we dont display any component
  return word ? (
    word.hasOwnProperty("message") ? (
      <Message word={word} />
    ) : (
      <Definitions word={word} />
    )
  ) : (
    <section className={"intro"}>
      <h1>Welcome To My Dictionary App!</h1>
      <h2>You can start by entering a word in the search bar and pressing enter!</h2>
    </section>
  );
}

export default memo(Content);
