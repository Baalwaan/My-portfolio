import React from 'react';
import './App.css';
// import { Router } from 'react-router-dom';

//Common Components
import Header from './components/common/header';

//Pages
import HomePage from './components/pages/home';
import ProjectPage from './components/pages/projects';
import AboutPage from './components/pages/about';
import ContactPage from './components/pages/contact';
const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
};

export default App;
