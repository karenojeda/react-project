import React from 'react';
import '../styles/WatchlistPage.css';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

const WatchlistPage = ({ watchlist, handleListChange }) => {
  return (
    <div className="watchlist-page">
      <h1 className='watchlist-title'>Watchlist</h1>
      <div className="movie-list">
        {watchlist.map(movie => (
          <MovieCard
          key={movie.id}
          movie={movie}
          handleListChange={handleListChange} />
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;