import React, { useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import ProjectsPreview from '../components/ProjectsPreview';
import Projects from '../components/Projects.js';

import '../styles/Main.css';

const Main = (props) => {

    const [ projectId, setProjectId ] = useState("");

    return(
        <div>
            <AboutMe />
            <Technologies />
            <h1 className="my-3">Projects</h1>
            <div className="row col-sm-12 project">
            {
                props.projects.map((project, i) => {
                    return(<ProjectsPreview className="eachProject" setProjectId={ setProjectId } idx={i} project={ project }/>)
                })
            }
            </div>
            <div style={{backgroundColor: "green", width: "auto", height: "200px"}}></div>
            <Projects projects={ props.projects } projectId={ projectId } />
        </div>
    )
}

export default Main;