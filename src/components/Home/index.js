import React from 'react';
import Header from './../Header';
import MainSection from './MainSection';
import RegisterSection from './RegisterSection';
import './styles.css';

const Home = () => (
    <div className="home">
        <Header/>
        <MainSection/>
        <RegisterSection/>
    </div>
);

export default Home;