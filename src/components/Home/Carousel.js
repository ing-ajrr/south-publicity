import React from 'react';
import ItemCarousel from './ItemCarousel';

const Carousel = () => (
    <div id="carousel" className="my-carousel carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" className="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <ItemCarousel attrclass="d-block w-100" index="1"/>
            </div>
            <div class="carousel-item">
                <ItemCarousel attrclass="d-block w-100" index="2"/>
            </div>
            <div class="carousel-item">
                <ItemCarousel attrclass="d-block w-100" index="3"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
);

export default Carousel;