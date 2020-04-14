import React from 'react';
import PropTypes from 'prop-types';

const ItemCarousel = ({ index, attrclass }) => (
    <div className={attrclass}>
        <p>SLIDE {index}</p>
    </div>
);

ItemCarousel.propTypes = {
    index: PropTypes.number.isRequired,
}

export default ItemCarousel;