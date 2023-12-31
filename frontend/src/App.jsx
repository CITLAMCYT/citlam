import React from "react";
import "./App.css";
import { Nav, Footer } from "./components/index.js";
import {
  Ciencia,
  Inicio,
  Robotica,
  Impresion,
  Mmo,
  Informatica,
  Quienes,
  Eventos,
} from "./views/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Eventos" element={<Eventos />} />
            <Route path="/Quienessomos" element={<Quienes />} />
            <Route path="/Ciencia" element={<Ciencia />} />
            <Route path="/Robotica" element={<Robotica />} />
            <Route path="/Impresion" element={<Impresion />} />
            <Route path="/Mmo" element={<Mmo />} />
            <Route path="/Informatica" element={<Informatica />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </Router>
  );
};

export default App;
