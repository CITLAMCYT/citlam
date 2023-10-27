import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>CITLAM</h4>
            <ul>
              <li><a href="/">Sobre Nosotros</a></li>
              <li><a href="/">Nuestros Servicios</a></li>
              <li><a href="/">Politica Y Privacidad</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contactos</h4>
            <ul>
              <li><a href="mailto:citlamcyt@gmail.com">citlamcyt@gmail.com</a></li>
              <li><a href="tel:1144410798">11-4441-0798</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Actividades</h4>
            <ul>
              <li><a href="/">Programación</a></li>
              <li><a href="/">Impresión 3D</a></li>
              <li><a href="/">Informática</a></li>
              <li><a href="/">MMO</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Síguenos</h4>
            <div className="social-links">
              <FontAwesomeIcon icon={faPhone} /> {/* Icono de teléfono */}
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
