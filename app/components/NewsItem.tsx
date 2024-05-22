import React from 'react'

const NewsItem = ({ index, title, description, url, urlToImage }: { index: number, title: string, description: string, url: string, urlToImage: string }) => {
    return (
        <div className="news-app">
            <li className='news-item' key={index}>
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
                <a href={url} target='_blank' rel='noopener noreferrer'>Read more</a>
            </li>
        </div>
    )
}

export default NewsItem