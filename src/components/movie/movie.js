import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

const Movie = ({ poster }) =>{
  return (
    <div className="movie-wrapper">
      <div className="card">
        <img src={poster} />
      </div>
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

export default Movie;