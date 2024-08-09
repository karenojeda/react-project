import React from 'react';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import '../styles/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import Comments from '../components/Comments'; 

const HomePage = ({ handleListChange }) => {
  return (
    <div className="home-page">
      <h1 className='home-title'>
        Cineteca <FontAwesomeIcon icon={faVideoCamera} />
      </h1>
      <p className='home-secondary-text'>
        Registrá y puntuá las películas que viste. Guardá las que querés ver.
      </p>
      
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleListChange={handleListChange}
          />
        ))}
      </div>

      <div className="comments-section">
        <Comments movieId={1} />  
      </div>


    </div>
  );
};

export default HomePage;
