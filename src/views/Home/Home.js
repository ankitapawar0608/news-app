import React, { useEffect, useState } from 'react'
import NewsArticle from '../../components/NewsArticle/NewsArticle';
import axios from 'axios';
import "./Home.css"

function Home() {

  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("pune")

  const loadNews = async () => {

    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-03-04&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`);

      setNews(response.data.articles);
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadNews();
  }, [])


  useEffect(() => {
    loadNews();
  }, [searchQuery])

  return (
    <>

      <h1 className='text-center m-3'>News App</h1>

      <div className='d-flex justify-content-center'>
        <input
          type='text'
          className='form-control w-25 d-block m-5'
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
        />
      </div>


      <div className='news-card-container'>
        {
          news.map((newsArticle, index) => {
            const { author, title, urlToImage, description, url, publishedAt } = newsArticle;

            return (<NewsArticle author={author} title={title} urlToImage={urlToImage}
              description={description} url={url} publishedAt={publishedAt} key={index} />)



          })
        }

      </div>


    </>
  )
}

export default Home