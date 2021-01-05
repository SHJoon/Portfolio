import React, { useEffect, useState } from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import python from '../images/python.png';
import javascript from '../images/js.png';
import java from '../images/java.png';
import styles from '../styles/Techs.module.css';

const Technologies = () => {

    return(
        <div>
            <p>Technologies</p>
            
            <div>
                <img className={ styles.logo } src={ html } alt="html" />
                <img className={ styles.logo } src={ css } alt="css" />
                <img className={ styles.logo } src={ react } alt="react" />
                <h1>Front-End</h1>
                <div className="lang-description">
                    <div>
                        <p className="desc-title">Languages</p>
                        <p className="desc-content">HTML, CSS, JavaScript</p>
                    </div>
                    <div>
                        <p className="desc-title">Techs Utilized</p>
                        <p className="used-techs">React, Bootstrap, jQuery</p>
                    </div>
                </div>
            </div>

            <div>
                <img className={ styles.logo } src={ python } alt="python" />
                <img className={ styles.logo } src={ javascript } alt="javascript" />
                <img className={ styles.logo } src={ java } alt="java" />
                <h1>Back-End</h1>
                <div className="lang-description">
                    <div>
                        <p className="desc-title">Languages</p>
                        <p className="desc-content">Python, JavaScript, Java</p>
                    </div>
                    <div>
                        <p className="desc-title">Techs Utilized</p>
                        <p className="used-techs">
                            Django, MongoDB, Express.js, Node.js, Socket.IO, Spring Boot, MySQL, NoSQL, 
                            bcrypt, Regex
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h1>Other Skills</h1>
                <div className="lang-description">
                    <div>
                        <p className="desc-title">Tools</p>
                        <p className="desc-content">
                            Git, GitHub, Visual Studios Code, AWS Deployment, Discord API, Google Spreadsheet API, 
                            Google Maps API, PSpice
                        </p>
                    </div>
                    <div>
                        <p className="desc-title">Concepts</p>
                        <p className="used-techs">
                            RESTful API, Machine learning, Data science, ORM, MTV, MVC, Asynchronous programming
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Technologies;