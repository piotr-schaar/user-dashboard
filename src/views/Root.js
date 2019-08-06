import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import MainTemplate from 'templates/MainTemplate';
import MainPage from './MainPage';

const Root = () => (
  <Provider store={store}>
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={MainPage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.register} component={RegisterPage} />
        </Switch>
      </MainTemplate>
    </Router>
  </Provider>
);

export default Root;
