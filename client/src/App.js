import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import Nav from './components/Nav';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Nav className="nav" />
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;
