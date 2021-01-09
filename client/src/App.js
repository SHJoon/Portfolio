import './App.css';
import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import Nav from './components/Nav';
import Main from './views/Main';
import Resume from './views/Resume';
import Projects from './views/Projects';

function App() {
  const [ projects, setProjects ] = useState([{
    "title": "EasyShop",
    "language": "Python",
    "framework": "Django",
    "description": `An e-commerce website built using Django, which featuers 
    secure user login/registration using bcrypt`
  }, {
    "title": "AQI-Maps",
    "language": "JavaScript",
    "framework": "MERN Stack",
    "description": `An user-friendly interactive website showcasing fluent 
    implementation of Google Maps API and World Air Quality Index API. 
    Users can view the air quality index of every available US stations with highly intuitive interface.`
  }, {
    "title": ""
  }]);
  return (
    <div className="App">
      <Nav className="nav" />
      <Router>
        <Main path="/" />
        <Resume path="/resume" />
        <Projects path="/projects/:id" />
      </Router>
    </div>
  );
}

export default App;
