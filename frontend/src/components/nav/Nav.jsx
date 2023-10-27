import React from 'react';
import './nav.css';
import logo from '../../assets/logo.jpg';

const Nav = () => {
    return (
  <nav className="nav">
    <nav class="navbar">
      <div class="logo">
        <img class="logo" src={ logo }/>
      </div>
      <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <div class="menu">
          <li><a href="/">¿Quienes somos?</a></li>
           <li class="services">
            <a href="/">Nuestro equipo</a>
            <ul class="dropdown">
              <li><a href="/">M.M.O</a></li>
              <li><a href="/">Robotica</a></li>
              <li><a href="/">Ciencia</a></li>
              <li><a href="/">Informatica</a></li>
              <li><a href="/">Impresion 3D</a></li>
            </ul>
          </li>
          <li><a href="/">Eventos</a></li>
          <li><a href="/">Contacto</a></li>
        </div>
      </ul>
    </nav>
  </nav>
  );
};

export default Nav;
