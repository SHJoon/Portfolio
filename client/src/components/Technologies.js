import React, { useEffect, useState } from 'react';

import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import python from '../images/python.png';
import javascript from '../images/js.png';
import java from '../images/java.png';
import git from '../images/git.png';
import aws from '../images/aws.png';
import maps from '../images/maps.png';

import styles from '../styles/Techs.module.css';

const Technologies = () => {

    return(
        <div>
            <div className={ styles.block }></div>
            <h1 className={ styles.techTitle }>Technologies</h1>
            
            <div className={ `${styles.descBlock} ${styles.descBlock1}` }>
                <div className={ styles.descInfo }>
                    <img className={ styles.logos } src={ html } alt="html" />
                    <img className={ styles.logos } src={ css } alt="css" />
                    <img className={ styles.logos } src={ react } alt="react" />
                    <h1>Front-End</h1>
                </div>
                <div className={ styles.descInfo }>
                    <div>
                        <h3 className={ styles.descTitle }>Languages</h3>
                        <p className={ styles.descContent }>HTML, CSS, JavaScript</p>
                    </div>
                    <div>
                        <h3 className={ styles.descTitle }>Techs Utilized</h3>
                        <p className={ styles.usedTechs }>React, Bootstrap, jQuery</p>
                    </div>
                </div>
            </div>
        
            <div className={ `${styles.descBlock} ${styles.descBlock2}` }>
                <div className={ styles.descInfo }>
                    <div>
                        <h3 className={ styles.descTitle }>Languages</h3>
                        <p className={ styles.descContent }>Python, JavaScript, Java</p>
                    </div>
                    <div>
                        <h3 className={ styles.descTitle }>Techs Utilized</h3>
                        <p className={ styles.usedTechs }>
                            Django, MongoDB, Express.js, Node.js, Socket.IO, Spring Boot, MySQL, NoSQL, 
                            bcrypt, Regex
                        </p>
                    </div>
                </div>
                <div className={ styles.descInfo }>
                    <img className={ styles.logos } src={ python } alt="python" />
                    <img className={ styles.logos } src={ javascript } alt="javascript" />
                    <img className={ styles.logos } src={ java } alt="java" />
                    <h1>Back-End</h1>
                </div>
            </div>
            
            <div className={ `${styles.descBlock} ${styles.descBlock3}` }>
                <div className={ styles.descInfo }>
                    <img className={ styles.logos } src={ git } alt="git" />
                    <img className={ styles.logos } src={ aws } alt="aws" />
                    <img className={ styles.logos } src={ maps } alt="maps" />
                    <h1>Other Skills</h1>
                </div>
                <div className={ styles.descInfo }>
                    <div>
                        <h3 className={ styles.descTitle }>Tools</h3>
                        <p className={ styles.descContent }>
                            Git, GitHub, Visual Studios Code, AWS Deployment, Discord API, Google Spreadsheet API, 
                            Google Maps API, PSpice
                        </p>
                    </div>
                    <div>
                        <h3 className={ styles.descTitle }>Concepts</h3>
                        <p className={ styles.usedTechs }>
                            RESTful API, Machine learning, Data science, ORM, MTV, MVC, Asynchronous programming
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Technologies;