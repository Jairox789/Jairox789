import React from "react";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";
import { PersonalInfo } from "../components/PersonalInfo";
import { Skills } from "../components/Skills";
import "./styles/AcercaDe.css";

function AcercaDe() {
  return (
    <>
      <div className="acerca-de-container">
        <PersonalInfo />
        <Skills />
        <Education />
      </div>
      <Footer />
    </>
  );
}

export { AcercaDe };
