import React from "react";
import "./style.css";

// Styling
const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};
const footerStyle = {
  borderStyle: "inset",
  backgroundColor: "#EACFCF",
  fontSize: "15px",
  textColor: "black",
  textAlign: "center",
  padding: "5px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%"
};

function Footer() {
  return (
    <footer className="footer" style={phantomStyle}>
      <span style={footerStyle}>
        Korgi Inc 2019 - <a href="https://austinalber.github.io/portfolio/">Austin Alber</a> - <a href="https://tindoann.github.io/Bootstrap-Portfolio/">Tin Doan</a>
      </span>
    </footer>
  );
}

export default Footer;
