import React from 'react';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';
import '../styles/HomePage.css';

const HomePage = ({ handleListChange }) => {
  return (
    <div className="home-page">
      <h1 className="home-title">Cineteca</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
          key={movie.id}
          movie={movie}
          handleListChange={handleListChange} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
