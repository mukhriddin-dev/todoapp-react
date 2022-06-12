import React from "react";

const Header = ({ theme, setTh, setLang, lang, langs }) => {

  const txt = lang();
  const texts = txt[langs];

  const handleTheme = (e) =>{
    localStorage.setItem('theme', theme);
    setTh((e)=>!e)
  }

  const handleLang = (e) =>{
    localStorage.getItem('language', langs);
     setLang(e.target.value);
  }

  return (
    <div
      className={`${
        theme ? "bg-primary text-light" : "bg-dark text-light"
      } header p-4 w-100  text-center d-flex justify-content-between `}
    >
      <h1>LOGO</h1>
      <div className="control">
        <button
          onClick={handleTheme}
          className={theme ? "btn btn-dark" : "btn btn-light"}
        >
          {theme ? texts.night : texts.day}
        </button>

        <select
          className="form-select-sm m-2 p-2"
          onChange={handleLang}
        >
          <option value="uz"  selected={langs==='uz'}>UZB</option>
          <option value="eng"  selected={langs==='eng'}>ENG</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
