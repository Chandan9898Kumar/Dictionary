import React, { useState, useEffect, useRef, memo } from "react";
import { useDispatch } from "react-redux";
import searchIcon from "./Icons/icon-search.svg";
import "./styles.css";
import MakeAsyncCall from "./MakeAsyncCall";
const SearchBar = () => {
  const [word, setWord] = useState("");
  const invalidMessage = useRef();
  const searchBar = useRef();
  const dispatch = useDispatch();

  /**
   * The handleChange function updates the search bar input value and displays an invalid message if
   * needed.
   * @param event - The `event` parameter in the `handleChange` function is an object that represents the
   * event that occurred, such as a change in the input value of a form element. It contains information
   * about the event, such as the target element that triggered the event (in this case, the input
   * element), the
   */
  const handleChange = (event) => {
    searchBar.current.setCustomValidity("");
    invalidMessage.current.style.display = "";
    setWord(event.target.value);
  };

  /* This `useEffect` hook in the `SearchBar` component is responsible for listening to keyboard events
and triggering an action when the Enter key is pressed. Here's a breakdown of what it does: */
  useEffect(() => {
    const keyboardPress = (event) => {
      const keyPressed = event.key;
      if (keyPressed !== "Enter") {
        return;
      }

      if (word.trim()) {
        dispatch(MakeAsyncCall(word)); // using Thunk middleware for api calls
      } else {
        searchBar.current.setCustomValidity("error");
        invalidMessage.current.style.display = "block";
      }
    };

    document.addEventListener("keydown", keyboardPress);

    return () => {
      document.removeEventListener("keydown", keyboardPress);
    };
  }, [word, dispatch]);

  return (
    <section className="wrapper">
      <input ref={searchBar} type="search" placeholder="Search for any word..." className="searchBox" value={word} aria-label="search" onChange={handleChange} />
      <p ref={invalidMessage} className="invalidMessage">
        Sorry,This field can't be empty...
      </p>
      <img src={searchIcon} className="searchIcon" alt="search-icon" loading="lazy" />
    </section>
  );
};

export default memo(SearchBar);
