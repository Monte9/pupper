import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Matches from './components/Matches';
import Profie from './components/Profie';
import Live from './components/Live';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/matches" component={Matches} />
    <Route path="/profile" component={Profie} />
    <Route path="/live" component={Live} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
