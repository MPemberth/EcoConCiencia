import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Main = () => {
    return (
      <div className="container">
            {/* <Carousel>
            <div>
                <img src="https://images.ctfassets.net/cfexf643femz/6GVjMgemv42lpFbXFEMN6F/628157e1f08efeab4317e96d91d779cb/Fotos_La_haus__19___1_.jpg" alt="Medellín" />
            </div>
            <div>
                <img src="https://www.ngenespanol.com/wp-content/uploads/2022/09/medellin-la-ciudad-colombiana-de-la-eterna-primavera.jpg" alt="Second slide" />
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Medellin.jpg/1200px-Medellin.jpg" alt="Third slide" />
            </div>
            </Carousel> */}
            <div className='purpose'>
                <h3>NUESTRO PROPÓSITO</h3>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Concienciación y educación pública
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        La visualización de datos puede ayudar a educar a la población sobre los problemas ambientales específicos que enfrenta la región, así como las posibles soluciones. La transparencia en los datos puede empoderar a los ciudadanos para tomar decisiones informadas sobre su estilo de vida y comportamiento ambiental.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Identificación de problemas emergentes
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        La recopilación y visualización de datos en tiempo real o periódicos pueden ayudar a identificar tendencias emergentes o problemas ambientales antes de que se conviertan en crisis. Por ejemplo, un aumento repentino en los niveles de contaminación del aire puede indicar un problema concreto que requiere atención inmediata.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Monitoreo y Evaluación de Proyectos Ambientales
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        La visualización de datos puede ayudar en el seguimiento y la evaluación de proyectos ambientales en curso. Esto permite a las autoridades y las organizaciones responsables evaluar la eficacia de las medidas implementadas y realizar ajustes según sea necesario.
                        </div>
                        </div>
                    </div>
            </div>
            </div>
            
            <hr />
            <div className='services'>
                <div className="row">
                    <div className="col-md-4 mb-4">                        
                            <div className="card border-dark mb-3" style={{ maxWidth: '26rem' }}>
                                <div className="card-header bg-transparent border-dark text-center">Informes</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title text-center">Calidad del aire</h5>
                                    <p className="card-text text-center">Análisis de los niveles de contaminantes atmosféricos como el dióxido de nitrógeno, el ozono y las partículas suspendidas. Incluye el análisis de tendencias a lo largo del tiempo, identificando áreas críticas con altos niveles de contaminación y proporcionando predicciones futuras sobre la calidad del aire basadas en datos meteorológicos y patrones de emisiones.</p>
                                </div>
                            </div>                        
                    </div>
                    <div className="col-md-4 mb-3">
                            <div className="card border-dark mb-3" style={{ maxWidth: '26rem' }}>
                                <div className="card-header bg-transparent border-dark text-center">Informes</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title text-center">Calidad del Agua</h5>
                                    <p className="card-text text-center">Evaluación de la calidad de los cuerpos de agua, incluyendo ríos, quebradas y fuentes de agua potable. Se analizan parámetros como la turbidez, el pH, los niveles de nutrientes y la presencia de contaminantes químicos. Además de las tendencias históricas, el informe podría incluir predicciones sobre la disponibilidad y la calidad del agua en función de cambios en el uso del suelo y actividades industriales.</p>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                        <div className="card border-dark mb-3" style={{ maxWidth: '26rem' }}>
                                <div className="card-header bg-transparent border-dark text-center">Informes</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title text-center">Deforestación y uso del suelo</h5>
                                    <p className="card-text text-center">Análisis de cambios en la cobertura vegetal y el uso del suelo en el Valle de Aburrá. Utilizando imágenes satelitales y datos geoespaciales, se identifican áreas de deforestación, urbanización y cambio en la vegetación natural. Además de evaluar las tendencias actuales, el informe podría prever el impacto futuro de la expansión urbana y las actividades agrícolas en la biodiversidad.</p>
                                </div>
                            </div>
                        </div>                       
                        <div className="col-md-4 mb-4">
                        <div className="card border-dark mb-3" style={{ maxWidth: '26rem' }}>
                                <div className="card-header bg-transparent border-dark text-center">Informes</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title text-center">Biodiversidad</h5>
                                    <p className="card-text text-center">Estudio de la diversidad biológica, incluyendo la distribución de especies de plantas, animales y microorganismos. Se identifican áreas de alta biodiversidad y hábitats críticos en riesgo de degradación. Descripción de las tendencias actuales en la pérdida de biodiversidad, predicciones sobre la viabilidad a largo plazo de las poblaciones en función de la fragmentación del hábitat y el cambio climático.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            

</div>
      
    );
  };
  


export default Main;
