import './App.css';
import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import Nav from './components/Nav';
import Main from './views/Main';
import Resume from './views/Resume';
import Projects from './views/Projects';

function App() {
  const [ project1, setProject1 ] = useState({
    "title": "EasyShop",
    "language": "Python",
    "framework": "Django",
    "description": <p>An e-commerce website built using Django, which featuers
      secure user login/registration using bcrypt,
    </p>
  });
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
