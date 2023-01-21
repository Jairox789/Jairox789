import React from "react";
import { PersonalInfo } from "../components/PersonalInfo";
import { Skills } from "../components/Skills";
import "./styles/AcercaDe.css";

function AcercaDe() {
  return (
    <div className="acerca-de-container">
      <PersonalInfo />
      <Skills />
    </div>
  );
}

export { AcercaDe };
