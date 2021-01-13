import React, { useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import ProjectsPreview from '../components/ProjectsPreview';

import '../styles/Main.css';

const Main = (props) => {

    return(
        <div>
            <AboutMe />
            <Technologies />
            <h1 className="my-3">Projects</h1>
            <div className="row col-sm-12 project">
            {
                props.projects.map((project, i) => {
                    return(<ProjectsPreview className="eachProject" idx={i} project={ project }/>)
                })
            }
            </div>
            <div style={{backgroundColor: "green", width: "auto", height: "500px"}}></div>
        </div>
    )
}

export default Main;