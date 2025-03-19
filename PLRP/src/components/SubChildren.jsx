import React from "react";
import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../App";
import "../styles/context-components.css";

const SubChildren = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="sub-children-container">
      <h1>Advanced Settings</h1>
      <h3>Theme Mode: {theme}</h3>
      <h3>Interface Language: {language}</h3>
      <button className="context-button" onClick={() => setTheme("system")}>
        Use System Theme
      </button>
      <button
        className="context-button"
        onClick={() => setLanguage("Français")}
      >
        Switch to French
      </button>
    </div>
  );
};

export default SubChildren;
