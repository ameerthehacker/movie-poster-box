import React, { useState, useEffect } from 'react';
import { getMoviesListMagically } from './services/movie-service';
import MovieList from './components/movie-list/movie-list';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    /**
     * [
     *  {
     *    id: 234                // some uuid
     *    name: 'Avengers',     // movie name
     *    poster: 'http://...' // movie poster image
     *    rating: '9.6'       // movie rating from imdb 
     *  }
     * ]
     */
    const fetchMoviesList = async () => {
      const moviesList = await getMoviesListMagically();
      setMovies(moviesList);
    };

    fetchMoviesList();
  }, []);

  return <MovieList movies={movies} />;
}

export default App;
