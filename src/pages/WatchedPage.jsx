import React from 'react';
import '../styles/WatchedPage.css';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

const WatchedPage = ({ watched, handleListChange }) => {
  return (
    <div className="watched-page">
      <h1 className='watched-title'>Watched</h1>
      <div className="movie-list">
        {watched.map(movie => (
          <MovieCard
          key={movie.id}
          movie={movie}
          handleListChange={handleListChange} />
        ))}
      </div>
    </div>
  );
};

export default WatchedPage;