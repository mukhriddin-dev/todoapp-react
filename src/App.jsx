import React,{ useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import content from "./extra/lang/content";

const App = () => {

   const [theme,setTheme]=useState( localStorage.getItem("theme") || false);
   const [lang,setLang]=useState('eng');



  return (
    <>
      <Header theme={theme} setTh={setTheme} langs={lang} setLang={setLang} lang={content}/>
      <Main lang={content} langs={lang}/>
      <Footer theme={theme} lang={content} langs={lang}/>
    </>
  );
};

export default App;
