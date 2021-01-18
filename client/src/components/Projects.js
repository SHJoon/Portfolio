import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Import styling
import styles from '../styles/Projects.module.css';

// Import images
import github from '../images/github.png';

const Projects = (props) => {

    return(
        <div className={styles.selected}>
            {
                props.projectId !== -1 ?
                <div>
                    <Carousel
                    className={ styles.selectedPics }
                    dynamicHeight={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    selectedItem={props.selectedProject}
                    showArrows={ true }
                    swiping={true}
                    swipeable={true}
                    >
                    {
                        props.projects[props.projectId].images.map((image, i) => {
                            return(<div key={i}><img src={image} alt={props.projects[props.projectId].title}/></div>);
                        })
                    }
                    </Carousel>
                    <div className={ styles.projectDesc }>
                        <h1>{ props.projects[props.projectId].title }</h1>
                        <div className= { styles.langFrame }>
                            <h3 className= { styles.lang }>Language: { props.projects[props.projectId].language }</h3>
                            {props.projects[props.projectId].framework && <h3>Framework: { props.projects[props.projectId].framework }</h3>}
                        </div>
                        <p className= { styles.descParagraph }>{ props.projects[props.projectId].description }</p>
                        <a
                        className= {`${ styles.descParagraph } ${ styles.githubBtn }`}
                        href={ props.projects[props.projectId].github }
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            Checkout the code!&nbsp;
                            <img className={ styles.githubLogo } src={ github } alt="github" />
                        </a>
                    </div>
                </div>
                : <div></div>
            }
        </div>
    )
}

export default Projects;