import React, { useState } from "react";
import "./styles/MovieCard.css";

const MovieCard = ({ movie, addToList }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={`${movie.title} poster`} />
      <div className="movie-details">
        <h3>{movie.title} ({movie.year})</h3>
        <div className="buttons">
          <button className="btn btn-watchlist" onClick={() => addToList(movie, "watchlist")}>🔲</button>
          <button className="btn btn-favorites" onClick={() => addToList(movie, "favorites")}>❤️</button>
          <button className="btn btn-watched" onClick={() => addToList(movie, "watched")}>👁️</button>
        </div>
        <button className="btn btn-info" onClick={handleExpand}>+ info</button>
        {expanded && (
          <div className="additional-info">
            <p>{movie.synopsis}</p>
            <p>General Rating: {movie.generalRating}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
