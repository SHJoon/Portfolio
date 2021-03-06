import React from 'react';

import '../styles/ProjectsPreview.css';

const ProjectsPreview = (props) => {

    const handleClick = (e, id) => {
        props.setProjectId(id);
    }

    return(
        <button onClick={e => handleClick(e, props.idx)} className={`${"mx-4 mb-4 preview"} ${props.idx === props.projectId ? "isSelected" : ""}`}>
            <img className="projectImg" src={props.project.prevImg} alt="projectImage" />
            <div className="overlay"></div>
            <div className="centered">{ props.project.title }</div>
        </button>
    )
}

export default ProjectsPreview;