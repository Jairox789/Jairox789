import React from "react";
import "./styles/Navbar.css";
import logo from "../images/logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Acerca de</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export { Navbar };
