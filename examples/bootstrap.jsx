import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'
import App from './app';
import * as Pages from './pages';

const wrapper = document.createElement('div');
document.body.appendChild(wrapper);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/welcome" />
      <Route path="welcome" component={Pages.Welcome} />
      <Route path="components/card" component={Pages.Card}/>
    </Route>
  </Router>
), wrapper)
