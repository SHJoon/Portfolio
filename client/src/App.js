import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;
