import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'redux/store';
import AuthPage from 'views/AuthPage';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import ContactsPage from './ContactsPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={MainPage} />
          <Route exact path={routes.login} component={AuthPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
