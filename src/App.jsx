import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import FavoritesPage from './pages/FavoritesPage';
import WatchedPage from './pages/WatchedPage';
import Footer from './components/Footer';
import UpcomingReleasesCarousel from './components/UpcomingReleasesCarousel'; // Asegúrate de que esta ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const movies = [
  { id: 1, title: 'Movie 1', posterUrl: 'https://via.placeholder.com/800x400', description: 'Descripción de la película 1' },
  { id: 2, title: 'Movie 2', posterUrl: 'https://via.placeholder.com/800x400', description: 'Descripción de la película 2' },
  // Añade más películas aquí
];

const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);

  const handleListChange = (movie, list) => {
    const updatedMovie = { ...movie };
    if (list === 'watchlist') {
      setWatchlist(prevList => [...prevList, movie]);
    } else if (list === 'favorites') {
      setFavorites(prevList => [...prevList, movie]);
    } else if (list === 'watched') {
      setWatched(prevList => [...prevList, movie]);
    }
  };

  const handleDeleteMovie = (movieId, list) => {
    if (list === 'watchlist') {
      setWatchlist(prevList => prevList.filter(movie => movie.id !== movieId));
    } else if (list === 'favorites') {
      setFavorites(prevList => prevList.filter(movie => movie.id !== movieId));
    } else if (list === 'watched') {
      setWatched(prevList => prevList.filter(movie => movie.id !== movieId));
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage handleListChange={handleListChange} />} />
        <Route path="/watchlist" element={
          <WatchlistPage
            watchlist={watchlist}
            handleListChange={handleListChange}
            handleDeleteMovie={handleDeleteMovie}
          />
        } />
        <Route path="/favorites" element={
          <FavoritesPage
            favorites={favorites}
            handleListChange={handleListChange}
            handleDeleteMovie={handleDeleteMovie}
          />
        } />
        <Route path="/watched" element={
          <WatchedPage
            watched={watched}
            handleListChange={handleListChange}
            handleDeleteMovie={handleDeleteMovie}
          />
        } />
      </Routes>
      <UpcomingReleasesCarousel movies={movies} /> {/* Asegúrate de que esto esté fuera de <Routes> */}
      <Footer />
    </Router>
  );
};

export default App;

