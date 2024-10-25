// src/components/MovieContainer.jsx
import React from 'react';
import NavigationArrows from './NavigationArrows';
import MoviePoster from './MoviePoster';
import BreakingBad from '../../img/Breaking-Bad.jpg';
import TheRain from '../../img/The-Rain.jpg';
import LifeInaYear from '../../img/Life-Ina-Year.jpg';
import MoneyHeistKorea from '../../img/Money-Heist-Korea.jpg';
import SquidGame from '../../img/Squid-game.jpg';

const movieImages = [
  { src: BreakingBad, alt: 'Breaking Bad' },
  { src: TheRain, alt: 'The Rain' },
  { src: LifeInaYear, alt: 'Life in a Year' },
  { src: MoneyHeistKorea, alt: 'Money Heist Korea' },
  { src: SquidGame, alt: 'Squid Game' },
];

const MovieContainer = () => {
  return (
    <div className="movie-container">
      <div className="nav-films">
        <h4 className="Popular-Films">POPULAR THIS WEEK</h4>
        <NavigationArrows />
      </div>
      <div className="movie-category">
        <div className="movie-category-wrapper">
          {movieImages.map((movie) => (
            <MoviePoster key={movie.src} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
