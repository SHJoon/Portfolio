import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// Import images
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import python from '../images/python.png';
import javascript from '../images/js.png';
import java from '../images/java.png';
import git from '../images/git.png';
import aws from '../images/aws.png';
import maps from '../images/maps.png';

// Import styling
import styles from '../styles/Techs.module.css';

const Technologies = () => {

    return(
        <div className={ styles.tech }>
            <ScrollAnimation delay={150} animateIn="fadeIn" duration={2} animateOnce={true}>
                <p className={ styles.techTitle }>Technical Skills</p>
                <p className={ styles.techIntro }>Stuff I know and love to use</p>
            </ScrollAnimation>
                
            <ScrollAnimation delay={150} animateIn="fadeIn" duration={2} animateOnce={true}>
                <div className={ styles.descBlock }>
                    <div className={ styles.descInfo }>
                        <img className={ styles.logos } src={ html } alt="html" />
                        <img className={ styles.logos } src={ css } alt="css" />
                        <img className={ styles.logos } src={ react } alt="react" />
                    </div>
                    <div className={ styles.descInfo }>
                        <h1>Front-End</h1>
                        <div>
                            <h3 className={ styles.descTitle }>Languages</h3>
                            <p className={ styles.descContent }>HTML, CSS, JavaScript</p>
                        </div>
                        <div>
                            <h3 className={ styles.descTitle }>Techs Utilized</h3>
                            <p className={ styles.descContent }>React, React Native, Bootstrap, jQuery, Redux, Material-UI</p>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            

            <ScrollAnimation delay={150} animateIn="fadeIn" duration={2} animateOnce={true}>
                <div className={ styles.descBlock }>
                    <div className={ styles.descInfo }>
                        <h1>Back-End</h1>
                        <div>
                            <h3 className={ styles.descTitle }>Languages</h3>
                            <p className={ styles.descContent }>Python, JavaScript, Java</p>
                        </div>
                        <div>
                            <h3 className={ styles.descTitle }>Techs Utilized</h3>
                            <p className={ styles.descContent }>
                                Django, MongoDB, Express.js, Node.js, Socket.IO, Spring Boot, MySQL, NoSQL, 
                                bcrypt, Regex
                            </p>
                        </div>
                    </div>
                    <div className={ styles.descInfo }>
                        <img className={ styles.logos } src={ python } alt="python" />
                        <img className={ styles.logos } src={ javascript } alt="javascript" />
                        <img className={ styles.logos } src={ java } alt="java" />
                    </div>
                </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={150} animateIn="fadeIn" duration={2} animateOnce={true}>
                <div className={ styles.descBlock }>
                    <div className={ styles.descInfo }>
                        <img className={ styles.logos } src={ git } alt="git" />
                        <img className={ styles.logos } src={ aws } alt="aws" />
                        <img className={ styles.logos } src={ maps } alt="maps" />
                    </div>
                    <div className={ styles.descInfo }>
                        <h1>Other Skills</h1>
                        <div>
                            <h3 className={ styles.descTitle }>Tools</h3>
                            <p className={ styles.descContent }>
                                Git, GitHub, scikit-learn, AWS Deployment, Discord API, 
                                Google Spreadsheet API, Google Maps API, Visual Studios Code, PSpice
                            </p>
                        </div>
                        <div>
                            <h3 className={ styles.descTitle }>Concepts</h3>
                            <p className={ styles.descContent }>
                                RESTful API, Machine learning, Data science, ORM, MTV, MVC, Asynchronous programming
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

        </div>
    )
}

export default Technologies;