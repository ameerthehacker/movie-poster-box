import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ name, poster, rating }) =>{
  return <li>{name}</li>;
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

export default Movie;