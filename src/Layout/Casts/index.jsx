import React, { useEffect, useState } from "react";
import { fetchMoviesCast } from "../../Api/index";
import { Link } from "react-router-dom";
import "./index.css";

const Casts = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(id).then((d) => setCast(d.cast));
  }, [id]);

  return (
    <div className="cast-container">
      {cast.slice(0, 8).map((item) => (
        <Link key={item.id} to={`/cast/${item.id}`} className="cast-card">
          <img
            className="cast-image"
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : "https://via.placeholder.com/150"
            }
            alt={item.name}
          />
          <p className="cast-name">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Casts;