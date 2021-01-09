import React, { useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import ProjectsPreview from '../components/ProjectsPreview';

const Main = (props) => {

    return(
        <div>
            <AboutMe />
            <Technologies />
            {
                props.projects.map((project) => {
                    return(<ProjectsPreview project={ project }/>)
                })
            }
        </div>
    )
}

export default Main;