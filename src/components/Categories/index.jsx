import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from '../card/cardCat';
const Categories = () => {
    const [categories, setCategory] = useState([])
    // const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/category')
            .then(res => {
                const categories = res.data
                setCategory(categories)
                console.log(categories)
            }
            )
    }, [])

    return (
        <div className='carousel'>
            <h1>Categories</h1>
            <div className='categories'>
                {categories.map((category) => {
                    return <Card name={category.name} description={category.description} />

                })}
            </div>
        </div>
    );
};

export default Categories;

