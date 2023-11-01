import React from 'react';
import './Main.css';
import citlam from '../../assets/citlam.png';
import robotica from '../../assets/robotica.jpg';

const Main = () => {
    return (
 <>
   <div>
      <img class="img" src={ citlam } alt=''/>
   </div>
   <div class="contenedor">
    <div class="equipo">
      <img class="logo" src={ robotica } alt=''/>
      <h2>MMO</h2>
      <p>lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus</p>
      <button class="mi-boton">Mas info</button>
    </div>
    
    <div class="equipo">
    <img class="logo" src={ robotica } alt=''/>
      <h2>ROBOTICA</h2>
      <p>lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus</p>
      <button class="mi-boton">Mas info</button>
    </div>
    
    <div class="equipo">
    <img class="logo" src={ robotica } alt=''/>
      <h2>CIENCIA</h2>
      <p>lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus</p>
      <button class="mi-boton">Mas info</button>
    </div>
    
    <div class="equipo">
    <img class="logo" src={ robotica } alt=''/>
      <h2>INFORMATICA</h2>
      <p>lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus</p>
      <button class="mi-boton">Mas info</button>
    </div>
    
    <div class="equipo">
    <img class="logo" src={ robotica } alt=''/>
      <h2>IMPRESION 3D</h2>
      <p>lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus lorem insus</p>
      <button class="mi-boton">Mas info</button>
    </div>
  </div>
 </>
  );
    };

export default Main;