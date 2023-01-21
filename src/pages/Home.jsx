import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import photoGiHub from "../icons/github.png";
import photoLinkeIn from "../icons/linkedin.png";

function Home() {
  return (
    <React.Fragment>
      <div className="Home__container">
        <div className="info">
          <h1 className="name">Jairo</h1>
          <h1 className="lastName">Ortega</h1>
          <span className="developer">@jairox789</span>
          <h2>Estudiante y desarrollador</h2>
          <Link className="buttonSlide" to="/acercade">
            Acerca de
          </Link>
        </div>
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
