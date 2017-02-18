import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import Live from './components/Live';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/live" component={Live} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
