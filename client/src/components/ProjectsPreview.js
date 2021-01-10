import React from 'react';

import '../styles/ProjectsPreview.css';

const ProjectsPreview = (props) => {

    return(
        <div className="mx-4 mb-4">
            <img className="projectImg" src={props.project.img} />
            <p>{ props.project.title }</p>
        </div>
    )
}

export default ProjectsPreview;