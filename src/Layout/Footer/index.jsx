import React from 'react'
import './index.css'

const Footer = () => (
  <footer className="Footer">
    <div className="content">
      <div className="icons">🎬 🍿 🎥</div>
      <div className="logo">TMED Movies</div>
      <p className="tagline">Your action‑packed movie hub</p>

      <nav className="links">
        <a href="#home">Home</a>
        <a href="#movies">Movies</a>
        <a href="#trending">Trending</a>
        <a href="#contact">Contact</a>
      </nav>

      <p className="footer-contact">
        Email: info@tmedmovies.com | Phone: +1555‑123-4567
      </p>
    </div>

    <div className="copyright">
      © 2026 TMED Movies. All rights reserved.
    </div>
  </footer>
)

export default Footer