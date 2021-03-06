import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import {LoginPage, Layout} from '../containers';


export default(
  <Router>
    <Route path="/" component={Layout} />
    <Route path="login" component={LoginPage} />
  </Router>
);
