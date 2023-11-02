import React from 'react';
import './Main.css';
import citlam from '../../assets/citlam.png';
import robotica from '../../assets/robotica1.jpg';
import ciencia from '../../assets/ciencia1.jpg';
import impresora from '../../assets/impresion.jpg';
import programacion from '../../assets/informatica.jpg';
import MMO from '../../assets/MMO.jpg';

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
   <div class="title-container">
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
                <a href="#">Details</a>
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
                <a href="#">Details</a>
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
                <a href="#">Details</a>
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
                <a href="#">Details</a>
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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
                <a href="#">Details</a>
            </div>
        </div>
    </div>
    </div>
 </>
  );
    };

export default Main;