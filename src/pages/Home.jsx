import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import profilePic from "../images/foto2.jpg";
import photoGiHub from "../icons/github.png";
import photoLinkeIn from "../icons/linkedin.png";

function Home() {
  return (
    <React.Fragment>
      <div className="Home__container">
        <img className="photoProfile" src={profilePic} alt="profile" />
        <h1>Jairo Ortega Vazquez</h1>
        <span>@jairox789</span>
        <h2>Estudiante y<h2 className="developer">desarrollador</h2></h2>
        <Link className="buttonSlide" to="/acercade">Acerca de</Link>
        <div className="Social__container">
          <a href="https://github.com/Jairox789">
            <img src={photoGiHub} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/jairo-ortega-vazquez-529165259/">
            <img src={photoLinkeIn} alt="linkIn" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Home };
