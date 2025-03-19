import React, { useState, createContext } from "react";
import Children from "./components/Children";
import "./styles/context-components.css";

export const ThemeContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className="app-container">
          <div className="app-header">
            <h1>Theme & Language Settings</h1>
            <button
              className="reset-button"
              onClick={() => {
                setTheme("light");
                setLanguage("English");
              }}
            >
              Reset Settings
            </button>
          </div>
          <Children />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
