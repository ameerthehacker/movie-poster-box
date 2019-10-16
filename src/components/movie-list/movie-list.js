import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie/movie';

const MovieList = ({ movies, onCollected }) => {
  return movies.map((movie, index) => 
  <Movie 
    key={movie.id} {...movie} 
    onCollected={() => onCollected(index)} 
  />);
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
  onCollected: PropTypes.func.isRequired
}

export default MovieList;