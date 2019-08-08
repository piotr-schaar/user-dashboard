import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchMovies as fetchMoviesAction } from 'actions/MoviesActions';
import DashboardTemlate from '../templates/DashboardTemplate';

import Card from 'components/Card';
import Heading from 'components/Heading';

const MainPage = ({ UserReducer: { userID }, MoviesReducer: { movies }, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (userID === null) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardTemlate>
      <Heading big color="white">
        News
      </Heading>
      <Card>
        News
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus saepe ipsam labore
          iste assumenda eveniet, nam dolorem et adipisci quam placeat, dignissimos eligendi nulla
          libero iusto illum veritatis, corporis repudiandae!
        </p>
      </Card>
    </DashboardTemlate>
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
