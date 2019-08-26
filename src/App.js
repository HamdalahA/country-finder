import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/Home/index';
import Countries from './components/Countries/index';
import CountryDetails from './components/Country/index';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/countries" exact component={Countries} />
      <Route exact path="/countries/:id" component={CountryDetails} />
    </Router>
  );
}

export default App;
