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
     *    poster: 'http://...' // movie poster image
     *  }
     * ]
     */
    const fetchMoviesList = async () => {
      const moviesList = await getMoviesListMagically();
      setMovies(moviesList);
    };

    fetchMoviesList();
  }, []);

  return (
    <div>
      <h1 className="heading">🍿 Movie Poster box</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
