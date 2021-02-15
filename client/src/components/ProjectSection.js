import React from 'react';

import ProjectsPreview from './ProjectsPreview';
import Projects from './Projects';
import styles from '../styles/ProjectSection.module.css';

const ProjectSection = () => {

    return(
        <div>
            <ProjectsPreview />
            <Projects />
        </div>
    )
}

export default ProjectSection;