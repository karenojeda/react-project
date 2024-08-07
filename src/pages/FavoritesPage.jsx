import React from 'react';
import '../styles/FavoritesPage.css';

const FavoritesPage = ({ favorites, handleListChange }) => {
  return (
    <div className="favorites-page">
      <h1 className='favorite-title'>Favoritos</h1>
      <div className="movie-list">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} handleListChange={handleListChange} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;