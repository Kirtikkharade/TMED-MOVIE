import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastDetails, fetchActorMovies } from "../../Api";
import "./index.css";

const CastDetails = () => {

  const { id } = useParams();
  const [actor, setActor] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetchCastDetails(id)
      .then(data => setActor(data));

    fetchActorMovies(id)
      .then(data => setMovies(data.cast || []));

  }, [id]);

  return (
    <div className="cast-details">

      <img
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />

      <div className="actor-info">

        <h1>{actor.name}</h1>

        <p><b>Birthday:</b> {actor.birthday}</p>

        <p><b>Place of Birth:</b> {actor.place_of_birth}</p>

        <p><b>Popularity:</b> {actor.popularity}</p>

        <p>{actor.biography}</p>

      </div>

      <div className="actor-movies">
        <h2>Movies</h2>
        <div className="movies-grid">
          {movies.slice(0, 12).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.title}
              />
              <p className="movie-title">{movie.title}</p>
              <p className="movie-year">{movie.release_date?.slice(0, 4)}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CastDetails;