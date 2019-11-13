import React from "react";
import "./LanguageFlag.css";
import { withLocalize } from "react-localize-redux";

function LanguageFlag({ language, activeLanguage, setActiveLanguage }) {
  return (
    <img
      src={require(`../Design/Images/${language}.png`)}
      className={`flag ${language === activeLanguage.code && "active"}`}
      alt={language}
      onClick={() => {
        setActiveLanguage(language);
        localStorage.setItem("language", language);
      }}
    />
  );
}

export default withLocalize(LanguageFlag);
