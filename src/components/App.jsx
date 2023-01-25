import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
// import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { AcercaDe } from "../pages/AcercaDe";
import { Portafolio } from "../pages/Portafolio";
import { Contact } from "./Contact";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/Jairox789" element={<Home />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };
