import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Main = () => {
    return (
    <div className="container">
        <Carousel>
            <div>
                <img src="https://images.ctfassets.net/cfexf643femz/6GVjMgemv42lpFbXFEMN6F/628157e1f08efeab4317e96d91d779cb/Fotos_La_haus__19___1_.jpg" alt="Medellín" />
            </div>
            <div>
                <img src="https://www.ngenespanol.com/wp-content/uploads/2022/09/medellin-la-ciudad-colombiana-de-la-eterna-primavera.jpg" alt="Second slide" />
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Medellin.jpg/1200px-Medellin.jpg" alt="Third slide" />
            </div>
        </Carousel>
            <div className='main'>
                <div className='services'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card border-primary mb-3">
                                <div className="card-header">SERVICIOS</div>
                                    <div className="card-body text-primary">
                                    <h5 className="card-title">INFORMES</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="card border-primary mb-3">
                            <div className="card-header">HERRAMIENTAS</div>
                                <div className="card-body text-primary">
                                    <h5 className="card-title">Primary card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {            <div className='testimonials'>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title">TESTIMONIOS 1</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title">TESTIMONIOS 2</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>                
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title">TESTIMONIOS 3</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">TESTIMONIOS 4</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </div>                           
            </div>}
                </div>
            </div>
    </div>
    );
};
export default Main;
