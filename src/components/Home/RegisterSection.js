import React from 'react';
import { Link } from 'react-router-dom';

const RegisterSection = () => (
    <section className="register-section">
        <div className="register-section__container">
            <div className="register-section__container--info container">
                <div className="row">
                    <div className="col-12 col-md-8 container-info__description">
                        <h2>Si te interesa</h2>
                        <p>
                            Descarga Nuestro Catalogo GRATIS 
                            y SUSCRIBETE para estar al tanto de nuestras ofertas
                            y regalos.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 container-info__button">
                        <Link to="/register" className="btn btn-success">
                            OBTENER
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default RegisterSection;