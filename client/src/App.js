import './App.css';
import React from 'react';
import { Router } from '@reach/router';

// import components/views
import Nav from './components/Nav';
import Main from './views/Main';
import Resume from './views/Resume';
import Footer from './components/Footer';

// import images
import easyshop from './images/easyshoplogo.png';
import aqi from './images/air.png';
import meet from './images/meetup.png';
import discordpy from './images/discordpy.png';
import machinelearning from './images/machinelearning.png'

import easyshop1 from './images/django/easyshop1.png';
import easyshop2 from './images/django/easyshop2.png';
import easyshop3 from './images/django/easyshop3.png';
import easyshop4 from './images/django/easyshop4.png';
import easyshop5 from './images/django/easyshop5.png';

import aqi1 from './images/mern/aqi1.png';
import aqi2 from './images/mern/aqi2.png';
import aqi3 from './images/mern/aqi3.png';
import aqi4 from './images/mern/aqi4.png';

import meet1 from './images/spring/meet1.png';
import meet2 from './images/spring/meet2.png';
import meet3 from './images/spring/meet3.png';
import meet4 from './images/spring/meet4.png';
import meet5 from './images/spring/meet5.png';

import discord1 from './images/discord/discord1.png';
import discord2 from './images/discord/discord2.png';
import discord3 from './images/discord/discord3.png';
import discord4 from './images/discord/discord4.png';

import nids1 from './images/nids/nids1.png';
import nids2 from './images/nids/nids2.png';
import nids3 from './images/nids/nids3.png';
import nids4 from './images/nids/nids4.png';
import nids5 from './images/nids/nids5.png';

function App() {

  const projects = [{
    "title": "EasyShop",
    "language": "Python",
    "framework": "Django",
    "description": `An e-commerce website featuring 
    secure user login/registration using bcrypt, shopping cart per user, 
    review system, and more.`,
    "prevImg": easyshop,
    "github": "https://github.com/SHJoon/EasyShop",
    "images": [easyshop1, easyshop2, easyshop3, easyshop4, easyshop5]
  }, {
    "title": "AQI-Maps",
    "language": "JavaScript",
    "framework": "MERN Stack",
    "description": `A user-friendly interactive website showcasing fluent 
    implementation of Google Maps API and World Air Quality Index API. 
    Users can view the air quality index of every available US stations 
    with highly intuitive interface.`,
    "prevImg": aqi,
    "github": "https://github.com/SHJoon/AQI-Maps",
    "images": [aqi1, aqi2, aqi3, aqi4]
  }, {
    "title": "Let's Meet",
    "language": "Java",
    "framework": "Spring Boot",
    "description": `A group meetup website where users can organize events
    across different locations that allows people with common interest to 
    socialize and come together.`,
    "prevImg": meet,
    "github": "https://github.com/trinhgliedt/Let_s_Meet_Java_Project",
    "images": [meet1, meet2, meet3, meet4, meet5]
  }, {
    "title": "InHouseBot",
    "language": "Python",
    "description": `A Discord Bot for gaming server featuring numerous handy 
    utilies, such as queue system in which hundreds of users can organize events, 
    currency/rating system to automatically keep track of players' performance, 
    and many more.`,
    "prevImg": discordpy,
    "github": "https://github.com/SHJoon/ChongBot/tree/clean",
    "images": [discord1, discord2, discord3, discord4]
  }, {
    "title": "Network Intrusion Detection",
    "language": "Python",
    "description": `A network intrusion detection project in which different 
    machine learning algorithms with different optimizations are employed to 
    detect anomaly vs normal network signal.`,
    "prevImg": machinelearning,
    "github": "https://github.com/SHJoon/Network_Intrusion_Detection",
    "images": [nids1, nids2, nids3, nids4, nids5]
  }];

  return (
    <div className="App">
      <Nav className="nav" />
      <Router primary={false}>
        <Main path="/" projects={ projects } />
        <Resume path="/resume" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
