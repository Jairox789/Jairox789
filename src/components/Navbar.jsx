import React from "react";
import "./styles/Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7711/7711100.png"
            alt="fas-bar"
          />
        </label>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <ul
          onClick={() => {
            document.querySelector("#check").checked = false;
          }}
        >
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/acercade">Acerca de</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export { Navbar };
