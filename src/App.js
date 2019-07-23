import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Common Components
import Header from './components/common/header';

//Pages
import HomePage from './components/pages/home';
import ProjectsPage from './components/pages/projects';
import AboutPage from './components/pages/about';
import ContactPage from './components/pages/contact';
import SuccessPage from './components/pages/contact/successful';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/contact/success" component={SuccessPage} />
    </Router>
  );
};

export default App;
