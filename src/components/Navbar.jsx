import React from "react";
import "./styles/Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/acercade">Acerca de</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link to="contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export { Navbar };
