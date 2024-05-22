import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import { useSelector } from 'react-redux'
import Loading from '../Loading'
import Error from '../Error'

const NewsList = () => {
    const [articles, setArticles] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try{

                const apiKey = localStorage.getItem('apiKey');
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
                setArticles(response.data.articles)
                setLoading(false)
            }
            catch (err: any) {
                setError(err.message)
                setLoading(false);
            }
        }
        getArticles()
    }, [])

    if (loading) return <Loading />
    if (error) return <Error message={error} />

    return (
        <div>
            {articles.map((article, index) => {
                return(
                    <NewsItem 
                        index={index}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList