import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

const AppFrame = ({ body }) => (
    <div className="app-frame">
        <Header/>
        { body }
        <Footer/>
    </div>
);

export default AppFrame;