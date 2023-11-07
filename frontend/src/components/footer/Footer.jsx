import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-solid-svg-icons";
import sponsor from "../../assets/sponsor.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>CITLAM</h4>
            <ul>
              <li>
                <a href="/">Sobre Nosotros</a>
              </li>
              <li>
                <a href="/">Nuestros Servicios</a>
              </li>
              <li>
                <a href="/">Politica Y Privacidad</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contactos</h4>
            <ul>
              <li>
                <a href="mailto:citlamcyt@gmail.com">citlamcyt@gmail.com</a>
              </li>
              <li>
                <a href="tel:1144410798">11-4441-0798</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Actividades</h4>
            <ul>
              <li>
                <Link to="/Robotica">Robotica</Link>
              </li>
              <li>
                <Link to="/Impresion">Impresion 3D</Link>
              </li>
              <li>
                <Link to="/Informatica">Informatica</Link>
              </li>
              <li>
                <Link to="/Mmo">MMO</Link>
              </li>
              <li>
                <Link to="/Ciencia">Ciencia</Link>
              </li>
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
      <img class="patrosinio" src={sponsor} />
      <div className="copyright">Derechos Reservados A CITLAM</div>
    </footer>
  );
};

export default Footer;
