import React from 'react';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/fontawesome-free';
import './Footer.css';

const Footer = () => {
  return (
    <>
       <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>CITLAM</h4>
  	 			<ul>
  	 				<li><a href="#">Sobre Nosotros</a></li>
  	 				<li><a href="#">Nuestros Servicios</a></li>
  	 				<li><a href="#">Politica Y Privacidad</a></li>
  	 	
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Contactos</h4>
  	 			<ul>
  	 				<li><a href="#">citlamcyt@gmail.com</a></li>
  	 				<li><a href="#">11-4441-0798</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Actividades</h4>
  	 			<ul>
  	 				<li><a href="#">Porgramacion</a></li>
  	 				<li><a href="#">Imprecion 3D</a></li>
  	 				<li><a href="#">Informatica</a></li>
  	 				<li><a href="#">MMO</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Siguenos</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </>
  );
};

export default Footer;
