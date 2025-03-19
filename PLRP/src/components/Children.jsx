import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../App";
import SubChildren from "./SubChildren";
import "../styles/context-components.css";

const Children = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="children-container">
      <h1>Display Settings</h1>
      <h3>Current Theme: {theme}</h3>
      <h3>Current Language: {language}</h3>
      <button className="context-button" onClick={() => setTheme("dark")}>
        Switch to Dark Mode
      </button>
      <button className="context-button" onClick={() => setLanguage("Español")}>
        Switch to Spanish
      </button>
      <SubChildren />
    </div>
  );
};

export default Children;
