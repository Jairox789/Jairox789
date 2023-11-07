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
          Soy un apasionado de la tecnología y el desarrollo 💻🖤. Mi elección
          de la carrera de Ingeniería en Sistemas Computacionales refleja mi
          dedicación a la constante adquisición de habilidades. Estoy
          entusiasmado por aplicar mis conocimientos y contribuir con soluciones
          innovadoras en el mundo del desarrollo y la tecnología.
        </p>
        <a
          className="btn download"
          download="CV Jairo Ortega"
          href="https://drive.google.com/u/0/uc?id=1khZdQXaL15X4eSP87yKYPH1VqlNjMliX&export=download"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}

export { PersonalInfo };
