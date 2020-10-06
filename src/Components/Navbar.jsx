import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
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
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="playlist"
              spy={true}
              smooth={true}
            >
              Playlist
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
