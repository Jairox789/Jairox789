import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="Home__container">
        <img src="" alt="photo" />
        <h1>Jairo Ortega Vazquez</h1>
        <span>@jairox789</span>
        <h2>Estudiante y desarrollador</h2>
        <Link>Ojo</Link>
        <div className="Social__container">
          <img src="" alt="github" />
          <img src="" alt="linkIn" />
        </div>
      </div>
    </React.Fragment>
  );
}

export { Home };
