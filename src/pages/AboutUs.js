import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import avatarOne from '../img/avatarOne.jpg';
import avatarFour from '../img/avatarFour.jpg';
import avatarFive from '../img/avatarFive.jpg';
import Footer from '../components/Footer';


const AboutUs = () => {
  return (
    <div className='container mt-5 pt-5'style={{ marginTop: '90px' }}>
      <h2>Acerca de Nosotros</h2>
      <p>Nuestro equipo de trabajo.</p>
      <div className='data'>
            <div className='container-fluid'>
                <div className="row justify-content-center">

                  <div className="card mb-3" style={{ maxWidth: '20rem', margin: '0 10px', backgroundColor: '#E8DFCA'}}>
                    <div className="card-header bg-transparent border-dark d-flex align-items-center">
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1A4D2E', marginRight: '10px' }}>
                            <img src={avatarOne} alt="Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        </div>
                        <strong>Estefania Saldarriaga</strong>
                    </div>
                    <div className="card-body text-dark">
                    <p className="card-text text-center" style={{ textAlign: 'justify' }}>
                          <small>Estefania, nuestra experta en maquetación web" Es una de las programadoras web que ha formado parte fundamental del proceso de creación de nuestra nueva página web. Con una sólida formación en Ingeniería Informática, María aporta su conocimiento técnico y artístico para lograr una experiencia de usuario excepcional.Después de graduarse con honores en la Universidad Politécnica, María acumuló varios años de experiencia trabajando en diferentes agencias digitales, donde perfeccionó sus habilidades en diseño web, maquetación y desarrollo front-end.
                        </small></p>
                    </div>
                  </div>

                  <div className="card mb-3" style={{ maxWidth: '20rem', margin: '0 10px', backgroundColor: '#E8DFCA'}}>
                    <div className="card-header bg-transparent border-dark d-flex align-items-center">
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1A4D2E', marginRight: '10px' }}>
                            <img src={avatarFive} alt="Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        </div>
                        <strong>Sebastian Zapata</strong>
                    </div>
                    <div className="card-body text-dark">
                        <p className="card-text text-center">
                          <small> Sebastián, a cargo de la recopilación y estructuración de la información en nuestra web:"Es nuestro experto en la gestión de datos"Sebastián es pieza fundamental en el desarrollo de nuestra nueva página web, siendo el responsable de la recopilación, organización y estructuración de toda la información que se presenta en la plataforma.Con una sólida formación en Ciencias de la Computación, Sebastián aporta su profundo conocimiento en la gestión eficiente de grandes volúmenes de datos.
                          </small></p>
                    </div>
                  </div>

                  <div className="card mb-3" style={{ maxWidth: '20rem', margin: '0 10px', backgroundColor: '#E8DFCA'}}>
                    <div className="card-header bg-transparent border-dark d-flex align-items-center">
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1A4D2E', marginRight: '10px' }}>
                            <img src={avatarFour} alt="Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        </div>
                        <strong>Manuel Pemberthy</strong>
                    </div>
                    <div className="card-body text-dark">
                        <p className="card-text text-center">
                          <small>Manuel, quien apoya el área de backend y la estructuración de la información en nuestra web: Es un miembro clave de nuestro equipo de desarrollo web, aportando su amplia experiencia en la gestión del backend y la estructuración de la información que se presenta en nuestra plataforma.Después de obtener su título en Ingeniería de Sistemas en la Universidad Autónoma, Manuel ha acumulado una sólida trayectoria trabajando en diversas empresas tecnológicas, donde ha demostrado su dominio en el diseño y mantenimiento de soluciones backend robustas y eficientes. 
                          </small></p>
                    </div>
                  </div>

                </div>
            </div>
            
        </div>
      {<Footer/>}
    </div>
    
  );
};

export default AboutUs;