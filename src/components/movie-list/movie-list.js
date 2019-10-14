import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie/movie';

const MovieList = ({ movies }) => {
  return movies.map(movie => <Movie key={movie.id} {...movie} />);
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired
}

export default MovieList;