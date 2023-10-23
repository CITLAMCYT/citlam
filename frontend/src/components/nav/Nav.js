import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Nav = () => {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/acerca">Acerca de</a>
          </li>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;