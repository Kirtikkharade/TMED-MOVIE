import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Sidebar = () => (
  <div className="Sidebar">
    <h3>Categories</h3>
    <ul>
      <li><Link to="/trending">Trending</Link></li>
      <li><Link to="/top-rated">Top Rated</Link></li>
      <li><Link to="/upcoming">Upcoming</Link></li>
      <li><Link to="/now-playing">Now Playing</Link></li>
    </ul>
    <h3>Genres</h3>
    <ul>
      <li><Link to="/genre/action">Action</Link></li>
      <li><Link to="/genre/comedy">Comedy</Link></li>
      <li><Link to="/genre/drama">Drama</Link></li>
      <li><Link to="/genre/horror">Horror</Link></li>
      <li><Link to="/genre/sci-fi">Sci-Fi</Link></li>
    </ul>
  </div>
);

export default Sidebar;
