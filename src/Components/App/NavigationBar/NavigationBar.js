import React, { memo } from "react";
import FontOptions from "./FontOptions";
import LightSwitch from "./LightSwitch";
import icons from "./Icons";
import "./styles.css";

function NavigationBar() {
  return (
    <nav className="navBar">
      <img src={icons["logo"]} className="logo" alt="icon" loading="lazy" />
      <section className="options">
        <FontOptions />
        <div className="divisor"></div>
        <LightSwitch />
      </section>
    </nav>
  );
}

export default memo(NavigationBar);
