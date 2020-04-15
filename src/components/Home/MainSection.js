import React from 'react';
import ReactPlayer from 'react-player'
import Carousel from './Carousel';

const MainSection = () => (
    <section className="main-section">
        <div className="main-section__opacity"></div>
        <ReactPlayer
            url='https://www.youtube.com/watch?v=FwY6_lK3Ero'
            className='react-player fullscreen-container'
            width='100%'
            height="auto"
            loop
            playing
            muted
        />
        <Carousel/>
    </section>
);

export default MainSection;