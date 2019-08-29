import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

import LandingPage from './components/Home/index';
import Countries from './components/Countries/index';
import CountryDetails from './components/Country/index';
import NavBar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <React.Fragment>
    <Router>
      <NavBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/countries" exact component={Countries} />
      <Route path="/countries/:id" exact component={CountryDetails} />
      <Footer />
    </Router>
    </React.Fragment>
  );
}

export default App;
