import React, { useEffect, useState } from 'react';
import python from '../images/python.png';
import javascript from '../images/javascript.png';
import java from '../images/java.png';

const Languages = () => {

    return(
        <div>
            <p>Languages</p>
            
            <div>
                <img src={ python } alt="python" />
                <h1>Python</h1>
                <div className="lang-description">
                    <div>
                        <p className="desc-title">Framework</p>
                        <p className="webframe">Django</p>
                    </div>
                    <div>
                        <p className="desc-title">Techs Utilized</p>
                        <p className="used-techs">, </p>
                    </div>
                </div>
            </div>

            <div>
                <img src={ javascript } alt="javascript" />
                <h1>JavaScript</h1>
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
                <img src={ java } alt="java" />
                <h1>Java</h1>
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

export default Languages;