import React, { useEffect, useState } from 'react';
// import { Carousel } from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Import styling
import styles from '../styles/Projects.module.css'

const Projects = (props) => {

    return(
        <div>
        {
            props.projectId === "easy" &&
            <Carousel showArrows={ true }>
            {
                props.projects[0].images.map((image) => {
                    return(<div><img src={image} /></div>);
                })
            }
            </Carousel>
        }

        {
            props.projectId === "aqi" &&
            <Carousel showArrows={ true }>
            {
                props.projects[1].images.map((image) => {
                    return(<div><img src={image} /></div>);
                })
            }
            </Carousel>
        }

        {
            props.projectId === "meet" &&
            <Carousel showArrows={ true }>
            {
                props.projects[2].images.map((image) => {
                    return(<div><img src={image} /></div>);
                })
            }
            </Carousel>
        }

        {
            props.projectId === "inhouse" &&
            <Carousel showArrows={ true }>
            {
                props.projects[3].images.map((image) => {
                    return(<div><img src={image} /></div>);
                })
            }
            </Carousel>
        }

        {
            props.projectId === "nids" &&
            <Carousel showArrows={ true }>
            {
                props.projects[4].images.map((image) => {
                    return(<div><img src={image} /></div>);
                })
            }
            </Carousel>
        }
        </div>
    )
}

export default Projects;