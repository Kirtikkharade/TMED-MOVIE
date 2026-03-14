import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { fetchMoviesDetails,fetchMoviesTrailer } from '../../Api/index';
import './index.css';
import Casts from '../Casts';

const MovieDetails = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState({});

  useEffect(() => {
    fetchMoviesDetails(id)
    .then(data => setMovie(data));
    fetchMoviesTrailer(id)
    .then(data=>setTrailer(data.results[0]));

  }, [id]);
  console.log(trailer);

  return (
    <div className="movie-details">

      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />

      <p>{movie.overview}</p>

      <p>Release Date : {movie.release_date}</p>

      <p>Rating : {movie.vote_average}</p>

      {
        trailer?.key && <YouTube videoId={trailer.key} />
      } 

        <Casts id={id} />
    </div>
    
  );
};

export default MovieDetails;