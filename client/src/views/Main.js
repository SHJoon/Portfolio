import React, { useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Languages from '../components/Languages';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';

const Main = () => {


    return(
        <div>
            <AboutMe />
            {/* <Languages /> */}
            <Technologies />
            <Projects />
        </div>
    )
}

export default Main;