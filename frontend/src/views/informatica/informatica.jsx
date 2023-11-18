import React from 'react';
import './informatica.css';
import { Logo, Lugar1 } from './assets/index.js'

const Informatica = () => {
    return (
      <div class="fondo_info"> 
      <section class="activities__monday">
      <div class="date__container_info">Informatica</div>
      <div class="activities__container">
        <div class="activity__container">
          <img
            src={ Logo }
            alt="Logo de Actividades"
            class="activity__logo"
          />
          <div class="activity__text">
            <p class="activity__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p class="activity__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              enim, tempora illum assumenda voluptate dolorem eum, odit ab rem
              molestiae porro ut vero similique officia optio consequuntur illo
              id. Eaque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              enim, tempora illum assumenda voluptate dolorem eum, odit ab rem
              molestiae porro ut vero similique officia optio consequuntur illo
              id. Eaque.
            </p>
          </div>
        </div>
        <div class="activity__container activity__reverse">
          <img
            src={ Lugar1 }
            alt="Logo de Actividades"
            class="activity__logo"
          />
          <div class="activity__text">
            <p class="activity__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p class="activity__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              enim, tempora illum assumenda voluptate dolorem eum, odit ab rem
              molestiae porro ut vero similique officia optio consequuntur illo
              id. Eaque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              enim, tempora illum assumenda voluptate dolorem eum, odit ab rem
              molestiae porro ut vero similique officia optio consequuntur illo
              id. Eaque.
            </p>
          </div>
        </div>
      </div>
     </section>
    </div>
  );
};

export default Informatica;