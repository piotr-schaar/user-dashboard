import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchMovies as fetchMoviesAction } from 'actions/MoviesActions';

const MainPage = ({ UserReducer: { userID }, MoviesReducer: { movies }, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (userID === null) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {movies.map(item => (
        <p>{item.title}</p>
      ))}
    </>
  );
};

MainPage.defaultProps = {
  userID: null,
};

MainPage.propTypes = {
  userID: PropTypes.string,
  UserReducer: PropTypes.object.isRequired,
  MoviesReducer: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMoviesAction()),
});

const mapStateToProps = ({ UserReducer, MoviesReducer }) => ({
  UserReducer,
  MoviesReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
