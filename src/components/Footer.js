import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import facebook from "../img/facebook.svg"
import twitter from "../img/twitter-x.svg"
import instagram from "../img/instagram.svg"
import linked from "../img/linkedin.svg"
import '../css/footer.css';


const Footer = ({ Routers }) => {
    return (
        <div class="footer">
            <p>&copy; 2024 EcoConciencia. Todos los derechos reservados.</p>
            <div class="social-icons">
            <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="social-icon" alt="iconofacebook" /></a>
            <a href="https://twitter.com/tuperfil" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="social-icon" alt="iconotwitter" /></a>
            <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="social-icon" alt="iconoinstagram" /></a>
            <a href="https://www.linkedin.com/tuperfil" target="_blank" rel="noopener noreferrer">
            <img src={linked} className="social-icon" alt="iconolinked" /></a>
        </div>
        <div class="contactofooter"><p><a href="#" >Contactanos</a></p></div>  
        <div class="terminosfooter"><p><a href="#" >Terminos y Condiciones</a></p></div>   
        </div>
    );
};

export default Footer;