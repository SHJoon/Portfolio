import React, { useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import ProjectsPreview from '../components/ProjectsPreview';
import Projects from '../components/Projects.js';

import '../styles/Main.css';

const Main = (props) => {

    const [ projectId, setProjectId ] = useState(-1);

    return(
        <div>
            <AboutMe />
            <Technologies />
            <h1 className="my-3">Projects</h1>
            <div className="row col-sm-12 project">
            {
                props.projects.map((project, i) => {
                    return(<ProjectsPreview
                        className="eachProject"
                        setProjectId={ setProjectId }
                        key={i}
                        project={ project }
                        idx={i}
                        />)
                })
            }
            </div>
            <Projects projects={ props.projects } projectId={ projectId } />
            <div style={{width: "auto", height: "200px"}}></div>
        </div>
    )
}

export default Main;