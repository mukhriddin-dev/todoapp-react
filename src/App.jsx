import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import content from "./extra/lang/content";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('them') || true);
  const [lang, setLang] = useState(localStorage.getItem('language') || "uz");

  const setHandelTheme = () => {
    localStorage.setItem("them", theme);
    setTheme((e) => !e);
    console.log(localStorage.getItem("them"));
  };

  const setLangs = (e) => {
    localStorage.setItem("language", lang);
    setTheme(e.target.value);
    console.log(localStorage.getItem("language"));
  };

  return (
    <>
      <Header
        theme={theme}
        setTh={setHandelTheme}
        langs={lang}
        setL={setLangs}
        lang={content}
      />
      <Main lang={content} langs={lang} />
      <Footer theme={theme} lang={content} langs={lang} />
    </>
  );
};

export default App;
