import React, { useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import ProjectsPreview from '../components/ProjectsPreview';

import '../styles/Main.css';

const Main = (props) => {

    const [ projectIdx, setProjectIdx ] = useState(-1);

    const handleClick = (i) => {
        setProjectIdx(i);
    }
    
    return(
        <div>
            <AboutMe />
            <Technologies />
            <h1 className="my-3">Projects</h1>
            <div className="row col-sm-12 project">
            {
                props.projects.map((project, i) => {
                    return(<ProjectsPreview onClick={handleClick(i)} className="eachProject" idx={i} project={ project }/>)
                })
            }
            </div>
            <div style={{backgroundColor: "green", width: "auto", height: "500px"}}></div>
        </div>
    )
}

export default Main;