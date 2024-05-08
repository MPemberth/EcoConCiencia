import React from 'react';
import '../css/aside.css';

const Aside = () => {
    return (
    <div class="Aside">
        <aside class="blog" >
            <h2>Blog</h2>
                <div class="post">
                    <h5>Has escuchado hablar de Urban pixel y Newton ? </h5>
                    <p>Urban Pixel predice cómo crecerá la ciudad y la población, mientras que Newton calcula cuánta agua potable se requerirá.
                    Son algoritmos para mejorar la planeación urbana y anticipar la demanda de agua. 
                    <a href='https://www.eltiempo.com/colombia/medellin/innovacion-paisa-permite-predecir-el-crecimiento-urbano-de-las-ciudades-593757'>  Seguir Leyendo</a>
                    </p>
                    <hr></hr>
                </div>
                <div class="post">
                    <h5>Conoce informes y estadisticas del medio ambiente de nuestra ciudad.</h5>
                    <p>En esta pagina de creada con el apoyo de grandes organizaciones de nuestra ciudad y el país recopilan data direntes aspectos de nuestra bella ciudad entre sus temas de importancia tienen un area enfocada en reportes de nuestro Medio Ambinete.
                    <a href='https://www.medellincomovamos.org/sectores/medio-ambiente'>  Seguir Leyendo</a>   
                    </p>
                    <hr></hr>
                </div>
                <div class="post">
                    <h5> El SIGAM (Sistema de Gestión Ambiental Municipal) tiene información valiosa para tí.</h5>
                    <p>Como propuesta organizacional, el Sigam identifica los elementos y componentes de la organización municipal y de la gestión pública, y los ordena bajo una mirada sistémica, precisamente para lograr el adecuado funcionamiento del sistema municipal.
                    <a href='https://www.medellin.gov.co/es/secretaria-medio-ambiente/sistema-de-gestion-ambiental-de-medellin/" '>  Seguir Leyendo</a>   
                    </p>
                    <hr></hr>
                </div>
        </aside>
    </div>         
    );
};

export default Aside;