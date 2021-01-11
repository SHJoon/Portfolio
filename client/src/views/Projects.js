import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap/Carousel';

// Import styling
import styles from '../styles/Projects.module.css'

const Projects = (props) => {

    return(
        <div>
            <div className={ styles.block }></div>
            <h1>{ props.projects[props.id].title }</h1>
            <p>Language: { props.projects[props.id].language }</p>
            <p>Framework used: { props.projects[props.id].framework }</p>
            <p>{ props.projects[props.id].description }</p>
        </div>
    )
}

export default Projects;