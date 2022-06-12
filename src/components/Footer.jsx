import React from "react";

const Footer = ({ theme, lang, langs }) => {
  const txt = lang();
  const texts = txt[langs];
  return (
    <div
      className={`${
        theme ? "bg-primary text-light" : "bg-dark text-light"
      } text-center p-3`}
    >
      <small>
        {new Date().getFullYear()} - {texts.bytext} MUKHRIDDIN
      </small>
    </div>
  );
};

export default Footer;
