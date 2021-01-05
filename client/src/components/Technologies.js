import React, { useEffect, useState } from 'react';

import html from '../images/html2.png';
import css from '../images/css.png';
import react from '../images/react2.png';
import python from '../images/python.png';
import javascript from '../images/js2.png';
import java from '../images/java.png';
import git from '../images/git.png';
import aws from '../images/aws.png';
import maps from '../images/maps.png';

import styles from '../styles/Techs.module.css';

const Technologies = () => {

    return(
        <div>
            <div className={ styles.block }></div>
            <h1>Technologies</h1>
            
            <div className={ styles.descBlock }>
                <div className={ styles.descInfo }>
                    <img className={ styles.logo } src={ html } alt="html" />
                    <img className={ styles.logo } src={ css } alt="css" />
                    <img className={ styles.logo } src={ react } alt="react" />
                    <h1>Front-End</h1>
                </div>
                <div className={ styles.langDescription }>
                    <div>
                        <p className={ styles.descTitle }>Languages</p>
                        <p className={ styles.descContent }>HTML, CSS, JavaScript</p>
                    </div>
                    <div>
                        <p className={ styles.descTitle }>Techs Utilized</p>
                        <p className={ styles.usedTechs }>React, Bootstrap, jQuery</p>
                    </div>
                </div>
            </div>

            <div className={ styles.descBlock }>
                <div className={ styles.langDescription }>
                    <div>
                        <p className={ styles.descTitle }>Languages</p>
                        <p className={ styles.descContent }>Python, JavaScript, Java</p>
                    </div>
                    <div>
                        <p className={ styles.descTitle }>Techs Utilized</p>
                        <p className={ styles.usedTechs }>
                            Django, MongoDB, Express.js, Node.js, Socket.IO, Spring Boot, MySQL, NoSQL, 
                            bcrypt, Regex
                        </p>
                    </div>
                </div>
                <div className={ styles.descInfo }>
                    <img className={ styles.logo } src={ python } alt="python" />
                    <img className={ styles.logo } src={ javascript } alt="javascript" />
                    <img className={ styles.logo } src={ java } alt="java" />
                    <h1>Back-End</h1>
                </div>
            </div>
            
            <div className={ styles.descBlock }>
                <div className={ styles.descInfo }>
                    <img className={ styles.logo } src={ git } alt="git" />
                    <img className={ styles.logo } src={ aws } alt="aws" />
                    <img className={ styles.logo } src={ maps } alt="maps" />
                    <h1>Other Skills</h1>
                </div>
                <div className={ styles.langDescription }>
                    <div>
                        <p className={ styles.descTitle }>Tools</p>
                        <p className={ styles.descContent }>
                            Git, GitHub, Visual Studios Code, AWS Deployment, Discord API, Google Spreadsheet API, 
                            Google Maps API, PSpice
                        </p>
                    </div>
                    <div>
                        <p className={ styles.descTitle }>Concepts</p>
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