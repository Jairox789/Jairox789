import React from "react";

import { Footer } from "../components/Footer";
import { Proyects } from "../components/Proyects";


import "./styles/Portafolio.css";

function Portafolio() {
    return (
        <>
            <div className="Portafolio-container">
                <Proyects />
            </div>
            <Footer />
        </>
    );
}

export { Portafolio };