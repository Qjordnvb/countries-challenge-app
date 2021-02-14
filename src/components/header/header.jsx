import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonDark } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLignt } from "@fortawesome/free-regular-svg-icons";
// styles
import "./header.css";

const Header = () => {
  // Metodo para obtener el modo oscuro
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header>
      <div className="container-header">
        <Link to="/">
          <h1>Where in the world</h1>
        </Link>
        <button
          id="toggle"
          className="btn-toggle-dark-mode"
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon
            className="far fa-moon"
            icon={faMoonDark}
            style={{ marginRight: "1rem" }}
          />
          <FontAwesomeIcon
            className="fas fa-moon"
            icon={faMoonLignt}
            style={{ marginRight: "1rem" }}
          />
          Dark mode
        </button>
      </div>
    </header>
  );
};

export default Header;
