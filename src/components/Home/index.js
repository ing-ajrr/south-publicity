import React from 'react';
import MainSection from './MainSection';
import RegisterSection from './RegisterSection';
import './styles.css';

const Home = ({ onRegister }) => (
    <div className="home">
        <MainSection/>
        <RegisterSection/>
    </div>
);

export default Home;