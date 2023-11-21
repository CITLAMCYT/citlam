import React from 'react';
import './eventos.css';
import { Plaza, Fiti, Logos } from './assets/index.js'

const Eventos = () => {
    return (
    <div class="fondo_eve">
      <div class="logos_container">
        <img src={ Logos }/>

      </div>
      <div class="activities__container">
        <div class="activity__container">
          <img
            src={ Plaza }
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
            src={ Fiti }
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
    </div>
  );
};

export default Eventos;