import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faClock, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/MovieCard.css';

//Agregar puntuación
const MovieCard = ({ movie, handleListChange, buttonText ,handleDeleteMovie }) => {
  const [rating, setRating] = useState(movie.rating || 0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    movie.rating = rate;
  };

  const handleMouseEnter = (rate) => {
    setHoverRating(rate);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    //Movie Cards info
    <div className={`movie-card ${isExpanded ? 'expanded' : ''}`}> 
      <img src={movie.posterUrl} alt={`${movie.title} poster`} className="movie-poster" />
      <h3>{movie.title} <span>({movie.year})</span></h3>
      <p>Director: {movie.director}</p>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <span
            key={index}
            className={`star ${hoverRating >= star || rating >= star ? 'filled' : ''} ${Math.ceil(hoverRating) === star || Math.ceil(rating) === star ? 'half' : ''}`}
            onClick={() => handleRating(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
        ))}
      </div>
      <div className="buttons">
        <button
          className="watchlist"
          onClick={() => handleListChange(movie, 'watchlist')}
          title="Agregar a Watchlist"
        >
          <FontAwesomeIcon icon={faClock} />
        </button>
        <button
          className="favorites"
          onClick={() => handleListChange(movie, 'favorites')}
          title="Agregar a Favoritos"
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button
          className="watched"
          onClick={() => handleListChange(movie, 'watched')}
          title="Agregar a Watched"
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button
          className='delete'
          onClick={() => handleDeleteMovie(movie.id)}
          title='Eliminar película'
        >
        <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <button className="info-button" onClick={toggleExpand}>
        + info
      </button>
      {isExpanded && (
        <div className="movie-details">
          <p className="synopsis">Sinopsis: {movie.synopsis}</p>
          <p className="general-rating">Ratings: {movie.generalRating} <FontAwesomeIcon icon={faStar} /></p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
