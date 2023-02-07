import React from 'react';
import App from '../../App';
import Categories from '../Categories';
import Articles from '../Articles';
import Header from '../Header';

const Home = () => {


    return (
        <div>
            <Header />
            <Categories />
            <Articles />
        </div>
    );
};

export default Home;
