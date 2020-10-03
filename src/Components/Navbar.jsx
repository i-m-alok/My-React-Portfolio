import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

// import {Link} from "react-router-dom"
export default function NavBar() {
  const toggler = () => {
    const navItems = document.getElementsByClassName("nav-items")[0];
    navItems.classList.toggle("active");
  };
  return (
    <nav className="spec-navbar">
      <div className="developer-name">
        <p>Alok Mishra</p>
      </div>
      <span className="toggle-button" onClick={toggler}>
        <FontAwesomeIcon icon={faCubes} size="2x" />
      </span>
      <div className="nav-items">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Me <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
