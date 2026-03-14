import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="about">

      <h1 className="about-title">About Movie App</h1>

      <p className="about-text">
        This Movie App is a React-based web application where users can explore
        popular movies, search for movies, view movie ratings, release dates,
        and see the cast of each movie.
      </p>

      <div className="about-section">
        <h2>Features</h2>
        <ul>
          <li>Search movies by name</li>
          <li>Browse popular movies</li>
          <li>View movie details</li>
          <li>See movie cast</li>
          <li>Pagination for movie lists</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Technologies Used</h2>
        <ul>
          <li>React JS</li>
          <li>React Router</li>
          <li>TMDB API</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Purpose</h2>
        <p>
          The purpose of this project is to learn React concepts like
          components, hooks, API fetching, routing, lazy loading, and
          pagination while building a real-world movie browsing application.
        </p>
      </div>

    </div>
  );
};

export default About;