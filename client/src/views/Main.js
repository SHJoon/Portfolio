import React, { useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Languages from '../components/Languages';
import Projects from '../components/Projects';

const Main = () => {


    return(
        <div>
            <AboutMe />
            <Languages />
            <Projects />
        </div>
    )
}

export default Main;