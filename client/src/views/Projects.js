import React, { useEffect, useState } from 'react';

// Import styling
import styles from '../styles/Projects.module.css'

const Projects = (props) => {

    return(
        <div>
            <div className={ styles.block }></div>
            <h1>{ props.projects[props.id].title }</h1>

            
        </div>
    )
}

export default Projects;