import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

const Movie = ({ poster, onCollected }) => {
  return (
    <div className="movie-wrapper" onClick={onCollected}>
      <div className="card">
        <img src={poster} />
      </div>
    </div>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  onCollected: PropTypes.func.isRequired
}

export default Movie;