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

  const handleChange = (event) => {
    searchBar.current.setCustomValidity("");
    invalidMessage.current.style.display = "";
    setWord(event.target.value);
  };

  useEffect(() => {
    const keyboardPress = (event) => {
      const keyPressed = event.key;
      if (keyPressed !== "Enter") {
        return;
      }

      if (word.trim()) {
        dispatch(MakeAsyncCall(word));
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
