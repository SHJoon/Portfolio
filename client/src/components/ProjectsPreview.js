import React from 'react';
import { Link } from '@reach/router';

import '../styles/ProjectsPreview.css';

const ProjectsPreview = (props) => {

    return(
        <div className="mx-4 mb-4 preview">
            <Link to={`/projects/${props.idx}`}>
                <img className="projectImg" src={props.project.img} />
                <div className="overlay"></div>
                <div className="centered">{ props.project.title }</div>
            </Link>
        </div>
    )
}

export default ProjectsPreview;