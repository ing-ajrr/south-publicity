import React from 'react';
import ItemCarousel from './ItemCarousel';

const Carousel = () => (
    <div id="carousel" className="my-carousel carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" className="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <ItemCarousel attrclass="d-block w-100" index="1"/>
            </div>
            <div className="carousel-item">
                <ItemCarousel attrclass="d-block w-100" index="2"/>
            </div>
            <div className="carousel-item">
                <ItemCarousel attrclass="d-block w-100" index="3"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
);

export default Carousel;