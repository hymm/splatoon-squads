import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import 'bootstrap-loader';
import App from './app';
import Home from './home';
import Login from './login';
import UserStore from '../stores/current-user-store';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path="/login" component={Login} />
        </Route>
      </Router>
    );
  }
}
