import "../styles/Navbar.css";
import { Link } from "react-scroll";
import "remixicon/fonts/remixicon.css";

function Navbar() {

  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  /* Menu show */
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  /* Menu hidden */
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  const navLink = document.querySelectorAll(".nav__link");

  const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  return (
    <header className="navbar" id="header">
      <nav className="nav container">
        <Link
          to="#"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav__logo"
        >
          JYCE.
        </Link>
        <div className="nav__menu show-menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
              >
                My Info
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i class="ri-close-large-line"></i>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i class="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
