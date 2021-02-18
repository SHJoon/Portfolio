import React from 'react';

import ProjectsPreview from './ProjectsPreview';
import Projects from './Projects';
import styles from '../styles/ProjectSection.module.css';

import ScrollAnimation from 'react-animate-on-scroll';

const ProjectSection = () => {

    return(
        <div>
            <ScrollAnimation delay={1} animateIn="bounceInUp" duration={1} animateOnce={true}>
                <h1 className="projectTitle">Projects</h1>
                <p className="projectIntro">Cool programs I've worked on</p>
            </ScrollAnimation>
            <ScrollAnimation delay={1} animateIn="bounceInUp" duration={1} animateOnce={true}>
                    <div className="row col-sm-12 project">
                    {
                        props.projects.map((project, i) => {
                            return(<ProjectsPreview
                                className="eachProject"
                                projectId={ projectId }
                                setProjectId={ setProjectId }
                                key={i}
                                project={ project }
                                idx={i}
                                />)
                        })
                    }
                    </div>
                </ScrollAnimation>
            <ScrollAnimation delay={1} animateIn="bounceInUp" duration={1} animateOnce={true}>
                <Projects projects={ props.projects } projectId={ projectId } />
            </ScrollAnimation>
        </div>
    )
}

export default ProjectSection;