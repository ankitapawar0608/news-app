import React from 'react'
import "./NewsArticle.css"

function NewsArticle({ author, title, urlToImage, description, url, publishedAt }) {
    return (
        <div>



            <div className="card mb-3 p-3 shadow" style={{ width: '25rem' }}>
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>

                    <div className='d-flex justify-content-between mt-2' >
                        <p className="card-text">{author}</p>
                        <p className="card-text">{publishedAt}</p>
                    </div>

                    <p className='card-text'>{description}</p>
                  
                    <a href={url} className="btn btn-dark text-light ">Read More</a>
                </div>
            </div>



        </div>
    )
}

export default NewsArticle