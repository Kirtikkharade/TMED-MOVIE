import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImage, CardTitle, CardDate, CardRating } from '../Card';
import Sidebar from '../Sidebar';
import './index.css'

const index = ({ movie = [] }) => {
  const image_Url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="HomePage">
      <Sidebar />
      <div className="Home">
        { movie.map((item) => (
          <Card key={item.id} >
            <Link to={`/movie/${item.id}`}>
              <CardImage src={`${image_Url}${item.poster_path}`} />
            </Link>
            <CardTitle>{item.title}</CardTitle>
            <CardDate>{item.release_date}</CardDate>
            <CardRating>Rating: {item.vote_average}</CardRating>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default index