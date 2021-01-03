import React, { useEffect, useState } from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import python from '../images/python.png';
import javascript from '../images/js.png';
import java from '../images/java.png';

const Technologies = () => {

    return(
        <div>
            <p>Technologies</p>
            
            <div>
                <img src={ html } alt="html" />
                <img src={ css } alt="css" />
                <img src={ react } alt="react" />
                <h1>Front-End</h1>
                <div className="lang-description">
                    <div>
                        <p className="desc-title">Languages</p>
                        <p className="webframe"> HTML, CSS, JavaScript </p>
                    </div>
                    <div>
                        <p className="desc-title">Techs Utilized</p>
                        <p className="used-techs">React, Bootstrap, </p>
                    </div>
                </div>
            </div>

            <div>
                <img src={ python } alt="python" />
                <img src={ javascript } alt="javascript" />
                <img src={ java } alt="java" />
                <h1>Back-End</h1>
                <div className="lang-description">
                    <div>
                        <p className="desc-title">Framework</p>
                        <p className="webframe">MERN Stack</p>
                    </div>
                    <div>
                        <p className="desc-title">Techs Utilized</p>
                        <p className="used-techs"></p>
                    </div>
                </div>
            </div>

            <div>
                <h1>Related Skills</h1>
                <div className="lang-description">
                    <div>
                        <p className="desc-title">Framework</p>
                        <p className="webframe">Spring Boot</p>
                    </div>
                    <div>
                        <p className="desc-title">Techs Utilized</p>
                        <p className="used-techs"></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Technologies;