import React from 'react';

const FooterStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
};
const socialIconsStyle = {
    textAlign: 'center',
};
const Footer = ({ Routers }) => {
    return (
        <div class="footer" style={FooterStyle}>
            <p>&copy; 2024 EcoConciencia. Todos los derechos reservados.</p>
            <div class="social-icons " style={socialIconsStyle}>
                <a href="#" class="social-icon">Facebook <i class="bi bi-facebook"></i></a>
                <a href="#" class="social-icon">Twitter <i class="bi bi-twitter"></i></a>
                <a href="#" class="social-icon">Instagram <i class="bi bi-instagram"></i></a>
                <a href="#" class="social-icon">linkedin<i class="bi bi-linkedin"></i></a>
            </div>
        </div>
    );
};

export default Footer;