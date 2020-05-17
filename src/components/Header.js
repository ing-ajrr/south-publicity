import React from 'react';
import logo from './../images/logo.png';
import { Link } from 'react-router-dom';
import img_cabecera from './../images/cabecera.svg'

const Header = () => (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-green bg-green">
            <Link to="/" className="navbar-brand">
                <img className="logo-img d-inline-block align-top" width="40" height="30" src={logo} alt="Logo"/>
                <div className="logo-text">
                    <span className="logo-text__principal">South Publicity</span>
                    <span className="logo-text__secundary">Tu brujúla hacia el futuro</span>
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNav" aria-controls="headerNav" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="headerNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#ingreso">Ingreso</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#suscripcion">Suscripción</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="header__panel">
            <div className="header__panel--one"></div>
            <div className="header__panel--two"></div>
        </div>
        <div className="image-cabecera">
            <img src={img_cabecera} alt="Imagen de cabercera" className="img-cabecera"/>
        </div>
    </header>
);

export default Header;