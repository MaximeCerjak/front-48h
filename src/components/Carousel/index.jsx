import React, { useState } from 'react';

const Carousel = ({ images, title, src, alt }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
    };

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    return (
        <div className='carousel'>
            <button onClick={handlePrevious}>Previous</button>
            {/* <img src={images[currentImageIndex][src]} alt="Carousel item"/> */}
            <p>{images[currentImageIndex]}</p>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Carousel;

