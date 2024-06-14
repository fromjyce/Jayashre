import React, { useState } from "react";
import { Link } from "react-scroll";
import "remixicon/fonts/remixicon.css";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar" id="header">
      <nav className="nav container">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav__logo"
          onClick={closeMenu}
        >
          JYCE.
        </Link>
        <div
          className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="info"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
              >
                My Info
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
