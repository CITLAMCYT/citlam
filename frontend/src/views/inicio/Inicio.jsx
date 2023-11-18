import React from 'react';
import './Inicio.css';
import { ciencia, MMO, programacion, impresora, robotica, citlam } from './assets/index.js';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
 <>
   <div>
      <img class="img" src={ citlam } alt=''/>
   </div>
   <div id="quienes-somos" className="quienes-somos-container">
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
   <div id="nuestro-equipo" class="title-container">
    <h1 className='title'>Nuestro Equipo</h1>
   </div>
   <div class="card-container"> 
    <div class="card">
        <div class="face front">
            <img class="img" src={ MMO } alt=""/>
            <h3>MMO</h3>
        </div>
        <div class="face back">
            <h3>MMO</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
            <Link to="/Mmo">mas info</Link>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face front">
        <img class="img" src={ robotica } alt=""/>
            <h3>ROBOTICA</h3>
        </div>
        <div class="face back">
            <h3>ROBOTICA</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
            <Link to="/Robotica">mas info</Link>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face front">
        <img class="img" src={ ciencia } alt=""/>
            <h3>CIENCIA</h3>
        </div>
        <div class="face back">
            <h3>CIENCIA</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
            <Link to="/Ciencia">mas info</Link>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face front">
        <img class="img" src={ programacion } alt=""/>
            <h3>INFORMATICA</h3>
        </div>
        <div class="face back">
            <h3>INFORMATICA</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
            <Link to="/Informatica">mas info</Link>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face front">
        <img class="img" src={ impresora } alt=""/>
            <h3>IMPRESION 3D</h3>
        </div>
        <div class="face back">
            <h3>IMPRESION 3D</h3>
            <p>Lorem ipsum dolor sit, Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
            <Link to="/Impresion">mas info</Link>
            </div>
        </div>
    </div>
    </div>
 </>
  );
    };

export default Inicio;