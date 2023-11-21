import React from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <nav class="navbar">
        <div class="logo">
          <Link to="/">
            <img class="logo" src={logo} />
          </Link>
        </div>
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>
          <div class="menu">
            <li>
              <Link to="/Quienessomos">¿Quienes somos?</Link>
            </li>
            <li class="services">
              <a href="#nuestro-equipo">Nuestro equipo</a>
              <ul class="dropdown">
                <li>
                  <Link to="/Mmo">M.M.O</Link>
                </li>
                <li>
                  <Link to="/Robotica">Robotica</Link>
                </li>
                <li>
                  <Link to="/Ciencia">Ciencia</Link>
                </li>
                <li>
                  <Link to="/Informatica">Informatica</Link>
                </li>
                <li>
                  <Link to="/Impresion">Impresion 3D</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Eventos">Eventos</Link>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </div>
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;
