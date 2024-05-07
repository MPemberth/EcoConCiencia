import React from 'react';
import avatarOne from '../img/avatarOne.jpg';
import avatarTwo from '../img/avatarTwo.jpg';
import avatarThree from '../img/avatarThree.jpg'

const AsideRight = () => {
    return (
      <div className="testimonials">
          <div className="container-fluid">
              <div className="row">
                <h4>Opiniones</h4>
                <hr/>
                  <div className="col-md-12 mt-1">
                      <img src={avatarOne} className="card-img-top"  alt="Foto del testimonio" />
                      <div className="card-body">
                          <h5 className="card-title">María</h5>
                          <p>Residente en Medellín</p>
                          <p className="card-text" > <small>"¡Qué gran herramienta! Gracias a este sitio web, puedo ver los niveles de contaminación en mi área y tomar medidas para proteger la salud de mi familia. La visualización de datos es clara y fácil de entender."</small></p>
                        </div>
                    </div>  
                    <hr/>
                  <div className="col-md-12 mt-1">
                      <img src={avatarTwo} className="card-img-top" alt="Foto del testimonio" />
                        <div className="card-body">
                          <h5 className="card-title">Carlos</h5>
                          <p>Urbanista</p>
                          <p className="card-text"><small>"Como urbanista, necesito acceso a datos precisos sobre el uso del suelo y la deforestación para diseñar proyectos sostenibles en el Valle de Aburrá. Este sitio web me proporciona la información que necesito de manera rápida y eficiente."</small></p>
                        </div>
                    </div>  
                    <hr/>
                  <div className="col-md-12 mt-1">
                      <img src={avatarThree} className="card-img-top" alt="Foto del testimonio" />
                        <div className="card-body">
                          <h5 className="card-title">Luisa</h5>
                          <p>Estudiante de Biología</p>
                          <p className="card-text"><small>"Estoy estudiando biología y me interesa mucho la conservación de la biodiversidad en nuestra región. Puedo acceder a datos actualizados sobre la distribución de especies y los cambios en los ecosistemas, lo que me permite realizar análisis detallados y contribuir al conocimiento científico sobre nuestro entorno."</small></p>
                        </div>
                    </div>  
              </div>
          </div>
      </div>
    );
  };
  
  export default AsideRight;
  