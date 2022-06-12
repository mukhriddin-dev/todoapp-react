import React from "react";

const Header = ({ theme, setTh, setL, lang, langs }) => {
  const txt = lang();
  const texts = txt[localStorage.getItem('language')];
  


  console.log(localStorage.getItem("them"));
  console.log(localStorage.getItem('language'));
  console.log(setTh)
  const thems=localStorage.getItem("them");
  return (
    <div
      className={`${
        theme ? "bg-primary text-light" : "bg-dark text-light"
      } header p-4 w-100  text-center d-flex justify-content-between `}
    > 
      <h1>LOGO</h1>
      <div className="control">
        <button
          onClick={setTh}
          className={
            localStorage.getItem("them")  ? "btn btn-dark" : "btn btn-warning"
          }
        >
          {localStorage.getItem("them") ? texts.night : texts.day}

        </button>

        <select
          className="form-select-sm m-2 p-2"
          onChange={()=>setL}
        >
          <option value="uz" selected={langs === "uz"}>
            UZB
          </option>
          <option value="eng" selected={langs === "eng"}>
            ENG
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
