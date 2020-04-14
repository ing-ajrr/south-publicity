import React from 'react';
import logo from './../images/logo.png';
import './styles.css';

const Header = () => (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-green bg-green">
            <a className="navbar-brand" href="#home">
                <img className="logo-img d-inline-block align-top" width="40" height="30" src={logo} alt="Logo"/>
                <div className="logo-text">
                    <span className="logo-text__principal">South Publicity</span>
                    <span className="logo-text__secundary">Tu brujúla hacia el futuro</span>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNav" aria-controls="headerNav" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="headerNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#ingreso">Ingreso</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#suscripcion">Suscripción</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="header__panel">
            <div className="header__panel--one"></div>
            <div className="header__panel--two"></div>
        </div>
    </header>
);

export default Header;