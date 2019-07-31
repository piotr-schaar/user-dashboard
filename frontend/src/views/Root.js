import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';

const Root = () => (
  <>
    <Router>
      <Switch>
        <Route exact path={routes.home} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.register} component={RegisterPage} />
      </Switch>
    </Router>
  </>
);

export default Root;
