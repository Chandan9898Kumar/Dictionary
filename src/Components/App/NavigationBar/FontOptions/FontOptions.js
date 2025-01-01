import React, { useState, useEffect } from "react";
import arrow from "./Icons/icon-arrow-down.svg";
import "./styles.css";

function FontOptions() {
  const [option, setOption] = useState("Sans Serif");
  const [font, setFont] = useState("Inter");
  const [openPopup, setOpenPopup] = useState(false);

  const handlePopup = () => {
    const popup = document.querySelector(".popup");
    if (!openPopup) popup.style.display = "flex";
    else popup.style.display = "";

    setOpenPopup((prevState) => {
      return !prevState;
    });
  };

  const handleFontChoice = (e) => {
    const lastChoosen = document.querySelector("#choosen");
    lastChoosen.id = "";
    e.target.id = "choosen";

    const choosenOption = e.target.getAttribute("data-option");
    const choosenFont = e.target.getAttribute("data-font");
    setOption(choosenOption);
    setFont(choosenFont);
    handlePopup();
  };

  useEffect(() => {
    //this useEffect will add a click event listener to the body tag, if the user clicks on any
    //element of the body tag AND the popup element is open, then it will close the popup automatically
    const closePopup = (e) => {
      const popup = document.querySelector(".popup");
      if (e.target && !e.target.matches(".popup") && !e.target.matches(".fontOptionsButton")) {
        popup.style.display = "";
        setOpenPopup(false);
      }
    };
    const body = document.querySelector("html");
    body.addEventListener("click", closePopup);

    return () => {
      body.removeEventListener("click", closePopup);
    };
  }, []);

  useEffect(() => {
    const root = document.getElementsByTagName("html")[0];
    let newVariables;
    if (font == "Inter") newVariables = `--font-choosen: ${font}; --font-choosen-variant: Inter-bold`;
    else newVariables = `--font-choosen: ${font}; --font-choosen-variant: ${font}`;

    root.style.cssText += newVariables;
  }, [font]);

  return (
    <>
      <button className="fontOptionsButton" onClick={handlePopup}>
        <p className="fontChoosen">{option}</p>
        <img src={arrow} className="arrowDown" alt="arrow-icon" loading="lazy" />
      </button>
      <div className="popup">
        <div className="popup_content">
          <p onClick={handleFontChoice} id="choosen" data-option="Sans Serif" data-font="Inter">
            Sans Serif
          </p>
          <p onClick={handleFontChoice} data-option="Serif" data-font="Lora">
            Serif
          </p>
          <p onClick={handleFontChoice} data-option="Mono" data-font="Inconsolata">
            Mono
          </p>
        </div>
      </div>
    </>
  );
}

export default FontOptions;
