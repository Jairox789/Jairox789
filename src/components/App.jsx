import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
// import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { AcercaDe } from "../pages/AcercaDe";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acercade" element={<AcercaDe />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };
