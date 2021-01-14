import React from 'react';
import { Link } from '@reach/router';

import '../styles/ProjectsPreview.css';

const ProjectsPreview = (props) => {

    const handleClick = (e, id) => {
        props.setProjectIdx(id);
    }

    return(
        <button onClick={e => handleClick(e, props.project.id)} className="mx-4 mb-4 preview">
            <img className="projectImg" src={props.project.prevImg} />
            <div className="overlay"></div>
            <div className="centered">{ props.project.title }</div>
        </button>
    )
}

export default ProjectsPreview;