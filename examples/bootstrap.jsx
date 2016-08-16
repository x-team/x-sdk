import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history'
import { Router, Route, Link, useRouterHistory, IndexRedirect } from 'react-router'
import App from './app';
import * as Pages from './pages';

const wrapper = document.createElement('div');
document.body.appendChild(wrapper);

const history = useRouterHistory(createHistory)({
  basename: window.location.host === 'x-team.github.io' ? '/x-sdk' : '/'
})

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRedirect to="/welcome" />
      <Route path="welcome" component={Pages.Welcome} />
      <Route path="components">
        <IndexRedirect to="card" />
        <Route path="card" component={Pages.Card}/>
      </Route>
    </Route>
  </Router>
), wrapper)
