import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from '../card/cardArticle.js';
const Articles = () => {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/api/articles')
            .then(res => {
                const articles = res.data
                setArticles(articles)
                console.log(articles)
            }
            )
    }, [])

    return (
        <div className='carousel'>
            <h1>Articles</h1>
            <div className='categories'>
                {articles.map((article) => {
                    return <Card title={article.title} price={article.price.$numberDecimal} description={article.description} />

                })}
            </div>
        </div>
    );
};

export default Articles;

