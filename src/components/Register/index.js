import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Prompt } from 'react-router-dom';
import './styles.css';

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";
    }
    if (!values.lastName) {
        error.lastName = "El campo apellido es requerido";
    }
    if (!values.email) {
        error.email = "El campo email es requerido";
    }
    if (!values.company) {
        error.company = "El campo Empresa/Marca es requerido";
    }
    if (!values.cell) {
        error.cell = "El campo celular es requerido";
    }

    return error;
};

class Register extends Component{
    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }

    renderField = ({input, meta, type, label, name, withFocus, id, placeholder}) => (
        <div className="form-group">
            <label className="main-section__form--label" htmlFor={name}>{label}</label>
            <input className="main-section__form--input form-control" {...input} 
                    id={id}
                    placeholder={!placeholder ? "" : placeholder}
                    type={!type ? "text" : type}
                    ref={withFocus && (txt => { this.txt = txt;} ) } />
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    );    
    renderFieldCheck = ({input, meta, type, label, name, withFocus, id, placeholder}) => (
        <div className="form-group form-check">
            <input className="main-section__form--input form-check-input" {...input} 
                    id={id}
                    placeholder={!placeholder ? "" : placeholder}
                    type={!type ? "text" : type}
                    ref={withFocus && (txt => { this.txt = txt;} ) } />
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
            <label className="form-check-label main-section__form--label" htmlFor={name}>{label}</label>
        </div>
    );    

    render(){
        const { handleSubmit, submitting, pristine, submitSucceeded } = this.props;
        return (
            <div className="register">
                <section className="main-section">
                    <h2 className="main-section__title">Registrate y obtén:</h2>
                    <form className="main-section__form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Field
                                    withFocus
                                    name="name" 
                                    component={this.renderField} 
                                    label="Nombre:"
                                    id="name" 
                                    placeholder="Nombres..."
                                />
                                <Field
                                    name="email" 
                                    component={this.renderField} 
                                    label="Email:"
                                    id="email" 
                                    placeholder="Correo Electronico..."
                                    type="email"
                                />
                                <Field
                                    name="cell"
                                    component={this.renderField}
                                    label="Celular:"
                                    id="cell"
                                    placeholder="Celular..."
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <Field
                                    name="lastName"
                                    component={this.renderField}
                                    label="Apellido:"
                                    id="lastName"
                                    placeholder="Apellido..."
                                />
                                <Field
                                    name="company"
                                    component={this.renderField}
                                    label="Empresa/Marca:"
                                    id="company"
                                    placeholder="Empresa/Marca..."
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Field
                                    name="checkedTC"
                                    component={this.renderFieldCheck}
                                    label="Terminos y Condiciones"
                                    id="checkedTC"
                                    type="checkbox"
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <Field  
                                    name="checkedPC"
                                    component={this.renderFieldCheck}
                                    label="Politicas y Cookies"
                                    id="checkedPC"
                                    type="checkbox"
                                />
                            </div>
                        </div>
                        <button type="submit" className="main-section__form--button btn btn-primary" disabled={pristine || submitting}>
                            Registrarme
                        </button>
                        <Prompt
                            when={!pristine && !submitSucceeded}
                            message="Se perderán los datos si continúa"/>
                    </form>
                </section>
            </div>
        );
    }
} 

Register.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
    cell: PropTypes.string,
};

const RegisterForm = reduxForm(
    { 
        form: 'Register',
        validate
    })(Register);

export default RegisterForm;