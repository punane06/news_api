import React from 'react'

const NewsItem = ({ index, title, description, url, urlToImage }: { index: number, title: string, description: string, url: string, urlToImage: string }) => {
    return (
        <div className={`bg-gray-700 m-4 w-80 relative rounded-lg p-3 h-full ${title === null || urlToImage === null  ? 'hidden' : ''}`}>
            <li className='list-none relative' key={index}>
                <div className='rounded   max-w-full overflow-hidden mb-3'>
                    <img className='rounded' src={urlToImage} alt={urlToImage} />
                </div>
                <h3 className='text-xl font-bold mb-3'><a href={url}>{title}</a></h3>
                <p className='text-sm mb-3' >{description}</p>
                <a className='text-sm  float-end border bg-gray-500 hover:opacity-75 rounded px-2 py-1' href={url} target='_blank' rel='noopener noreferrer'>Read more</a>
            </li>
        </div>
    )
}

export default NewsItem