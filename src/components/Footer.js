import React from 'react';
import img_cabecera from './../images/asiento.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="image-asiento">
                <img src={img_cabecera} alt="Imagen de asiento" className="img-asiento"/>
            </div>
        </div>
    );
};

export default Footer;