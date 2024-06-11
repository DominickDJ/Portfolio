import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import "../../index.css";

const Header = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/contact");
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };
  return (
    <header className="header">
      <div className="header__links">
        <Link to="/">
          <button
            onClick={handleHomeClick}
            className="header__home-button"
            type="text"
          >
            Home
          </button>
        </Link>{" "}
        <Link to="/portfolio">
          <button
            onClick={handlePortfolioClick}
            className="header__home-button"
            type="text"
          >
            Portfolio
          </button>
        </Link>
        <Link to="/contact">
          <button
            onClick={handleAboutClick}
            className="header__home-button"
            type="text"
          >
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
