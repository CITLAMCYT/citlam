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
   <div className="quienes-somos-container">
      <h1 className="title">Quiénes Somos</h1>
      <div className="info-container">
        <div className="left-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in arcu vel augue bibendum posuere.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis turpis eu metus tincidunt dapibus.</p>
        </div>
        <div className="right-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec massa sed libero imperdiet iaculis.</p>
        </div>
      </div>
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