import React, { useEffect, useState } from 'react';
// import { Carousel } from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Import styling
import styles from '../styles/Projects.module.css'

const Projects = (props) => {

    return(
        <div className={styles.selected}>
            {
                props.projectId !== -1 ?
                <Carousel showArrows={ true } className={styles.selectedPics}>
                {
                    props.projects[props.projectId].images.map((image, i) => {
                        return(<div key={i}><img src={image} alt={props.projects[props.projectId].title}/></div>);
                    })
                }
                </Carousel>
                : <div></div>
            }
        </div>
    )
}

export default Projects;