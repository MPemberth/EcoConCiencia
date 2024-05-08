import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import '../css/section.css';



const Section = ({ Routers }) => {
    return (
    <div className="Section">
        <div className='sectionContent'>
            <div className="col-md-6">
                <div className="card border-primary mb-3">
                    <div className="card-header">ORIGEN DE DATOS</div>
                        <div className="card-body text-primary">
                        <h5 className="card-title">INFORMES</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-header">IMPORTANCIA</div>
                        <div className="card-body text-primary">
                        <h5 className="card-title">INFORMES</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-header">DATOS ACTUALIZADOS</div>
                        <div className="card-body text-primary">
                        <h5 className="card-title">INFORMES</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    ); 
};
export default Section;