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
   <div class="card-container">
    <div class="card">
        <div class="face front">
            <img class="img" src={ robotica } alt=""/>
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
        <img class="img" src={ robotica } alt=""/>
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
        <img class="img" src={ robotica } alt=""/>
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
        <img class="img" src={ robotica } alt=""/>
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