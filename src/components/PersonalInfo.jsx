import React from "react";
import "./styles/PersonalInfo.css";
import profilePhoto from "../images/foto2.jpg";

function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <img src={profilePhoto} alt="me" />
      <div className="info-personal">
        <h1>Acerca de mí</h1>
        <p>
          Soy un apasionado de la tecnología y el desarrollo 💻🖤, actualmente
          estudiante de octavo semestre de la carrera de Ingeniería en Sistemas
          Computacionales y desde que elegí mi carrera me comprometí nunca dejar
          de aprender, por eso quiero poner en práctica todos los conocimientos
          adquiridos, además de que me encuentro buscando aportar valor.
        </p>
        <a className="btn download" download="CV Jairo Ortega" href="../downloads/CV.pdf">Descargar CV</a>
      </div>
    </div>
  );
}

export { PersonalInfo };
