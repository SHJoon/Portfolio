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
                        <p className="webframe">HTML, CSS, JavaScript</p>
                    </div>
                    <div>
                        <p className="desc-title">Techs Utilized</p>
                        <p className="used-techs">React, Bootstrap, jQuery</p>
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
                        <p className="desc-title">Languages</p>
                        <p className="webframe">Python, JavaScript, Java</p>
                    </div>
                    <div>
                        <p className="desc-title">Techs Utilized</p>
                        <p className="used-techs">
                            Django, MongoDB, Express.js, Node.js, Socket.IO, Spring Boot, MySQL, NoSQL, 
                            bcrypt, RESTful API, ORM, MVC, MTV
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h1>Related Skills</h1>
                <div className="lang-description">
                    <div>
                        <p className="desc-title">Libraries</p>
                        <p className="webframe">
                            scikit-learn, NumPy, Matplotlib, pandas, Discord.py, gspread, 
                            
                        </p>
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