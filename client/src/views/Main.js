import React, { useState } from 'react';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import ProjectsPreview from '../components/ProjectsPreview';
import Projects from '../components/Projects.js';
import Contributions from '../components/Contributions.js';
import ScrollAnimation from 'react-animate-on-scroll';

import '../styles/Main.css';

const Main = (props) => {

    const [ projectId, setProjectId ] = useState(0);

    return(
        <div>
            <AboutMe/>
            <Technologies />
            <div className="projects">
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
            {/* <Contributions /> */}
        </div>
    )
}

export default Main;