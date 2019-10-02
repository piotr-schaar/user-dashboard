import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'redux/store';
import AuthPage from 'views/AuthPage';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import SettingsPage from 'views/SettingsPage';

import ContactsPage from './ContactsPage';
import TasksPage from './TasksPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={MainPage} />
          <Route exact path={routes.login} component={AuthPage} />
          <Route path={routes.contacts} component={ContactsPage} />
          <Route path={routes.tasks} component={TasksPage} />
          <Route path={routes.settings} component={SettingsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
