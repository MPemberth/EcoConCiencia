import React from 'react';
import '../css/aside.css';

const blogStyle = {
    width: '30%',
    height: 'auto',
    margin: '0',
    float: 'left'
};

const Aside = ({ Routers }) => {
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
                    <h5>Conoce informes y estadisticas del medio ambiente de nuestra ciudad a traves de la web www.medellincomovamos.org</h5>
                    <p>En esta pagina de creada con el apoyo de grandes organizaciones de nuestra ciudad y el país recopilan data direntes aspectos de nuestra bella ciudad entre sus temas de importancia tienen un area enfocada en reportes de nuestro Medio Ambinete.
                    <a href='https://www.medellincomovamos.org/sectores/medio-ambiente'>  Seguir Leyendo</a>   
                    </p>
                    <hr></hr>
                </div>
        </aside>
    </div>         
    );
};

export default Aside;