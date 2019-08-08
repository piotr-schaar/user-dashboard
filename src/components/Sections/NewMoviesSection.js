import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies as fetchMoviesAction } from 'actions/MoviesActions';

import Card from 'components/Card';
import Heading from 'components/Heading';
import Slider from 'components/Slider/Slider';

const NewMoviesSection = ({ fetchMovies, moviesPopular }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <>
      <Heading big color="white">
        In Theatres
      </Heading>
      <Card>
        <Slider movies={moviesPopular} />
      </Card>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMoviesAction('moviesPopular')),
});

const mapStateToProps = ({ MoviesReducer }) => MoviesReducer;

NewMoviesSection.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  moviesPopular: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMoviesSection);
