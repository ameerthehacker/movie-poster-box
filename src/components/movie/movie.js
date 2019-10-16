import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.id !== nextProps.id) {
      return false;
    }
  }

  render() {
    return (
      <div className="movie-wrapper" onClick={this.props.onCollected}>
        <div className="card">
          <img src={this.props.poster} />
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  onCollected: PropTypes.func.isRequired
}

export default Movie;