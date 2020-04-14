import React from 'react';
import Header from './../Header';
import './styles.css';

const Register = () => (
    <div className="register">
        <Header/>
        <section className="main-section">
            <h2 className="main-section__title">Registrate y obtén:</h2>
            <form className="main-section__form">
                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label className="main-section__form--label" for="name">Nombre...</label>
                            <input className="main-section__form--input form-control" type="text" id="name" placeholder="Nombres..."/>
                        </div>
                        <div class="form-group">
                            <label className="main-section__form--label" for="email">Correo Electronico...</label>
                            <input className="main-section__form--input form-control" type="email" id="email" placeholder="Correo Electronico..."/>
                        </div>
                        <div class="form-group">
                            <label className="main-section__form--label" for="cell">Celular...</label>
                            <input className="main-section__form--input form-control" type="text" id="cell" placeholder="Celular..."/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label className="main-section__form--label" for="lastName">Apellido...</label>
                            <input className="main-section__form--input form-control" type="text" id="lastName" placeholder="Apellidos..."/>
                        </div>        
                        <div class="form-group">
                            <label className="main-section__form--label" for="company">Empresa/Marca...</label>
                            <input className="main-section__form--input form-control" type="text" id="company"  placeholder="Empresa / Marca..."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div class="form-group form-check">
                            <input className="main-section__form--input form-check-input" type="checkbox" id="checkedTC"/>
                            <label className="form-check-label main-section__form--label" for="checkedTC">Terminos y Condiciones</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group form-check">
                            <input className="main-section__form--input form-check-input" type="checkbox" id="checkedPC"/>
                            <label className="form-check-label main-section__form--label" for="checkedPC">Politicas y Cookies</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="main-section__form--button btn btn-primary">Registrarme</button>
            </form>
        </section>
    </div>
);

export default Register;