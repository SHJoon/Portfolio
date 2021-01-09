import './App.css';
import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import Nav from './components/Nav';
import Main from './views/Main';
import Resume from './views/Resume';
import Projects from './views/Projects';

function App() {
  const projects = [{
    "title": "EasyShop",
    "language": "Python",
    "framework": "Django",
    "description": `An e-commerce website featuring 
    secure user login/registration using bcrypt, shopping cart per user, 
    review system, and more.`
  }, {
    "title": "AQI-Maps",
    "language": "JavaScript",
    "framework": "MERN Stack",
    "description": `An user-friendly interactive website showcasing fluent 
    implementation of Google Maps API and World Air Quality Index API. 
    Users can view the air quality index of every available US stations 
    with highly intuitive interface.`
  }, {
    "title": "Let's Meet",
    "language": "Java",
    "framework": "Spring Boot",
    "description": `A group meetup website where users can organize events
    across different locations that allows people with common interest to 
    socialize and come together.`
  }, {
    "title": "InHouseBot",
    "language": "Python",
    "description": `A Discord Bot for gaming server featuring numerous handy 
    utilies, such as queue system in which hundreds of users can organize events, 
    currency/rating system to automatically keep track of players' performance, 
    and many more.`
  }, {
    "title": "Network Intrusion Detection",
    "language": "Python",
    "description": `A network intrusion detection project in which different 
    machine learning algorithms with different optimizations are employed to 
    detect anomaly vs normal network signal.`
  }];

  return (
    <div className="App">
      <Nav className="nav" />
      <Router>
        <Main path="/" projects={ projects } />
        <Resume path="/resume" />
        <Projects path="/projects/:id" projects={ projects } />
      </Router>
    </div>
  );
}

export default App;
