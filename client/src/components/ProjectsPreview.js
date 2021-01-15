import React from 'react';
import { Link } from '@reach/router';

import '../styles/ProjectsPreview.css';

const ProjectsPreview = (props) => {

    const handleClick = (e, id) => {
        console.log(props.projectSelected);
        props.setProjectId(id);
    }

    return(
        <button onClick={e => handleClick(e, props.idx)} className={`${"mx-4 mb-4 preview"} ${props.idx === props.projectId ? "isSelected" : ""}`}>
            <img className="projectImg" src={props.project.prevImg} />
            <div className="overlay"></div>
            <div className="centered">{ props.project.title }</div>
        </button>
    )
}

export default ProjectsPreview;