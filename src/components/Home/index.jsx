import React from 'react';
import App from '../../App';
import Carousel from '../Carousel';
import Header from '../Header';

const Home = () => {

    const images = ["image1", "image2", "image3"];

    return (
        <div>
            <Header />
            <Carousel images={images}/>
            {/* <App /> */}
        </div>
    );
};

export default Home;
