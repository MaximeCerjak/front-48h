import React from 'react';
import App from '../../App';
import Carousel from '../Carousel';

const Home = () => {

    const images = ["image1", "image2", "image3"];

    return (
        <div>
            <Carousel images={images}/>
            <App />
        </div>
    );
};

export default Home;
