import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Import styling
import styles from '../styles/Projects.module.css'

const Projects = (props) => {

    useEffect(() => {

    }, [props.projectSelected]);

    return(
        <div className={styles.selected}>
            {
                props.projectId !== -1 ?
                <div>
                    <Carousel
                    className={styles.selectedPics}
                    dynamicHeight={true}
                    emulateTouch={true}
                    // preventMovementUntilSwipeScrollTolerance={true}
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
                    <h1>{ props.projects[props.projectId].title }</h1>
                    <p>Language: { props.projects[props.projectId].language }</p>
                    <p>Framework used: { props.projects[props.projectId].framework }</p>
                    <p>{ props.projects[props.projectId].description }</p>
                    <a href={ props.projects[props.projectId].github } target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                : <div></div>
            }
        </div>
    )
}

export default Projects;