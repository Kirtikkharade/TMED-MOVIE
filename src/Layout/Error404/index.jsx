import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Error404 = () => (
  <div className="error-page">
    <div className="error-content">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go back home</Link>
    </div>
  </div>
);

export default Error404;
