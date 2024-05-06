import React from 'react';

const imageStyle = {
    width: '80%',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
};

const SectionStyle = {
    width: '60%',
    height: 'auto',
    margin: '0',
    float: 'right',
    padding: '10px'
};

const Section = ({ Routers }) => {
    return (
    <div className="Section">
        <div class="image">
        <img src="https://estaticos.elcolombiano.com/binrepository/780x565/0c0/0d0/none/11101/UYVW/befunky-collage-29_39814197_20220413201606.jpg" alt="Third slide" style={imageStyle} />
        </div>
        <div className="col-md-6" style={SectionStyle}>
            <div className="card border-primary mb-3" style={SectionStyle}>
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
    ); 
};
export default Section;