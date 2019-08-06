import React from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/Input';
import { auth as authAction } from 'actions/UserActions';
import PropTypes from 'prop-types';
import { routes } from '../routes';
import AuthTemplate from '../templates/AuthTemplate';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
  height: 20px;
  width: 300px;
`;

const LoginPage = ({ auth, userID }) => {
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          auth(username, password);
        }}
      >
        {({ handleChange, handleBlur, values }) => {
          if (userID) {
            return <Redirect to={routes.home} />;
          }
          return (
            <>
              <h1>Sign up</h1>
              <StyledForm>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <button type="submit">Login</button>
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

LoginPage.defaultProps = {
  userID: null,
};

LoginPage.propTypes = {
  auth: PropTypes.func.isRequired,
  userID: PropTypes.string,
};

const mapStateToProps = ({ UserReducer: { userID = null } }) => ({
  userID,
});

const mapDispatchToProps = dispatch => ({
  auth: (username, password) => dispatch(authAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
