import React from 'react';
import './Quienes.css';


const Quienes = () => {
    return (
      <> 
      
        <section class="titulo">
            <h2 class="titulo__title">Institucional</h2>
        </section>

      
        <section class="mision-valores" id="mision-valores">

            <div class="mision-valores__show-button show-button">
                <i class="mision-valores__icon icon fas fa-plus-circle"></i>
                <h2 class="mision-valores__title">MISIÓN Y VALORES</h2>
            </div>

            <div class="mision-valores__container">

                <div class="mision-valores__text-container">
                    <h3 class="mision-valores__subtitle">
                        NUESTRA MISIÓN SE REPRESENTA EN NUESTRO LEMA: “COMPROMETIDOS EN CREAR OPORTUNIDADES.”
                    </h3>
                    <p class="mision-valores__text">
                        ¿Por qué “comprometidos”? Porque todos los integrantes de la comunidad
                        educativa del ILFL perseguimos un objetivo común y actuamos en consecuencia.
                    </p>
                    <p class="mision-valores__text">
                        ¿Por qué “crear”? Porque habilitamos el espacio para que cada uno pueda desarrollar al máximo sus potencialidades.
                    </p>
                    <p class="mision-valores__text">
                        ¿Por qué “oportunidades”? Porque ofrecemos un caudal amplio de opciones para que cada uno encuentre su lugar ideal.
                    </p>
                    <p class="mision-valores__text">
                        Nuestro lema sumó todas las voces que conforman la COMUNIDAD ILFL para su definición:
                        estudiantes, familias, ex estudiantes y personal.
                    </p>
                </div>
                
                <div class="mision-valores__text-container">

                    <h3 class="mision-valores__subtitle">NUESTROS VALORES:</h3>
                    <p class="mision-valores__text">
                        Nuestras acciones dan testimonio sobre los valores que forman parte de nuestra esencia. Estos son:
                    </p>

                    <h4 class="mision-valores__subtitle">
                        RESPETO <i class="fas fa-check-circle"></i>
                    </h4>
                    <p class="mision-valores__text">
                        Acompañamos el pensar y sentir del otro, a través de la escucha y la empatía.
                    </p>
                    <h4 class="mision-valores__subtitle">
                        CREATIVIDAD <i class="fas fa-check-circle"></i>
                    </h4>
                    <p class="mision-valores__text">
                        Buscamos innovar en cada uno de los espacios y proyectos para que el estudiante
                        tenga la libertad de crear dejando volar su imaginación.
                    </p>
                    <h4 class="mision-valores__subtitle">
                        RESPONSABILIDAD <i class="fas fa-check-circle"></i>
                    </h4>
                    <p class="mision-valores__text">
                        Apasionados con nuestra tarea, cada uno de los integrantes del equipo ILFL
                        se destaca por su responsabilidad y compromiso.
                    </p>
                    <h4 class="mision-valores__subtitle">
                        CONFIANZA <i class="fas fa-check-circle"></i>
                    </h4>
                    <p class="mision-valores__text">
                        Bregamos por construir cimientos fiables sobre los cuales nos desarrollamos como personas.
                    </p>
                    <h4 class="mision-valores__subtitle">
                        SOLIDARIDAD <i class="fas fa-check-circle"></i>
                    </h4>
                    <p class="mision-valores__text">
                        Trabajamos para desarrollar y afianzar en nosotros y en el otro, personas que adviertan las
                        necesidades de la comunidad para poder ayudar y acompañar desinteresadamente.
                    </p>

                </div>

            </div>

        </section>

        
        <section class="historia" id="historia">

            <div class="historia__show-button show-button">
                <i class="historia__icon icon fas fa-plus-circle"></i>
                <h2 class="historia__title">HISTORIA</h2>
            </div>

            <div class="historia__container">

                <div class="historia__text-container">
                    <p class="historia__text">
                        Comenzamos a funcionar con tres aulas, dirección y baños para nenas y varones.
                        En ese momento el nivel primario (en el turno de la mañana) contaba únicamente con 52 alumnos y el nivel secundario
                        (en el turno de la tarde) estaba compuesto por un primer año de 47 alumnos. Las familias confiaron en nuestros servicios,
                        inscribiendo a sus hijos cuando sólo éramos una pared y unos cuantos ladrillos en medio de un terreno lleno de malezas,
                        pero siempre con la promesa y la consigna de brindar lo mejor.
                        Ahora, tenemos los niveles de inicial, primaria y secundaria con un total de 815 alumnos y una experiencia de más de 28
                        años que nos avala como un Instituto Educativo de categoría en el rubro.
                    </p>
                    <p class="historias__text">
                        Somos un instituto educativo con amplia experiencia en el rubro.
                        Estamos comprometidos con la formación de todos nuestros alumnos.
                        Nuestro Instituto Luis Federico Leloir​, nació el 8 de marzo de 1993,
                        fundado por docentes de la provincia de Buenos Aires.
                    </p>
                </div>

              
                <div class="slider">

                    <div class="slider__container" id="slider__container">
    
                        <div class="slider__section">
                            {/* <img src="assets/img/example-image.jpg" alt="Imagen sobre la historia del instituto" class="slider__img"> */}
                        </div>
                        <div class="slider__section">
                            {/* <img src="assets/img/example-image.jpg" alt="Imagen sobre la historia del instituto" class="slider__img"> */}
                        </div>
                        <div class="slider__section">
                            {/* <img src="assets/img/example-image.jpg" alt="Imagen sobre la historia del instituto" class="slider__img"> */}
                        </div>
                        <div class="slider__section">
                            {/* <img src="assets/img/example-image.jpg" alt="Imagen sobre la historia del instituto" class="slider__img"> */}
                        </div>
                        <div class="slider__section">
                            {/* <img src="assets/img/example-image.jpg" alt="Imagen sobre la historia del instituto" class="slider__img"> */}
                        </div>
                    </div>
    
                    <div class="slider__button slider__button--left">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div class="slider__button slider__button--right">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <div class="slider__show-button">
                        <i class="slider__show-icon fas fa-magnifying-glass-plus"></i>
                    </div>
    
                </div>

            </div>
            
        </section>

        
        <section class="modal-slider" id="modal-slider">
            <div class="modal-slider__background"></div>
            <div class="modal-slider__container">
                <i class="modal-slider__button fas fa-xmark"></i>
                {/* <img src="../assets/img/example-image.jpg" alt="Imagen de una novedad retratada en el modal" class="modal-slider__img"> */}
            </div>
        </section>

       
        <section class="identidad" id="identidad">

            <div class="identidad__show-button show-button">
                <i class="identidad__icon icon fas fa-plus-circle"></i>
                <h2 class="identidad__title">IDENTIDAD</h2>
            </div>

            <div class="identidad__container">
                <p class="identidad__text">
                    Nuestro Instituto, Luis Federico Leloir, aspira a una verdadera educación de calidad,
                    ofreciendo distintos medios que permitan la libre expresión. Nuestro proyecto apunta al total desarrollo del niño
                    teniendo como punto de partida sus intereses y talentos. Las actividades apuntan a construir un centro educativo inclusivo,
                    comunitario, nivelador, actualizado, formando en valores y trabajando día a día para que aprendamos a hacer uso de nuestra
                    libertad. Nuestro colegio es una Institución argentina de Gestión Privada abierta a todas las personas sin distinción de credo,
                    raza o género. El Proyecto Institucional comprende: Educación Inicial- Educación Primaria y Educación Secundaria.
                    Nuestra visión de la enseñanza se basa en ayudar a nuestros alumnos a comprender y desarrollarse como sujetos de derecho.
                    Construir su propio aprendizaje a través de estrategias que favorecen y fortalezcan su identidad, su desarrollo integral y
                    la formación de buenas personas. Consideramos que nuestra primera responsabilidad es acompañar a nuestros alumnos en sus
                    trayectos escolares, conocer sus necesidades y proporcionarles un servicio de excelencia. Nuestras expectativas son elevadas
                    y cada recurso y estrategia se convierte en una oportunidad para que cada alumno pueda desarrollar su potencial máximo escolar.
                    Trabajaremos profesionalmente día a día para el crecimiento de nuestros alumnos, y así logren construir un proyecto personal
                    de vida.
                </p>
            </div>

        </section>
      </>
  );
};

export default Quienes;