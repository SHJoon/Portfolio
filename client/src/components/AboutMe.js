import React, { useState, useEffect } from 'react';

// Import image
import profile from '../images/profile4.jpg';

// Import styling
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return(
        <div>
            <div className={ styles.intro }>
                <h1 className={ styles.header }>Full-Stack Developer | Software Engineer</h1>
                <h3 className= { styles.introLang }>Python | JavaScript | Java</h3>
                <img className={ styles.pic } src={ profile } alt="profile" />
            </div>
            <div className={ styles.block }>
                <h3 className={ styles.selfIntro1 }>Howard Shin</h3>
                <h3 className={ styles.selfIntro2 }>Web-developer who loves computers and music.</h3>
                <p className={ styles.selfIntro3 }>My background in Computer Engineering piqued my passion for software development,
                tackling difficult yet invigorating challenges. Through coding bootcamp and personal projects, I learned the joys of
                collaborating with others, creating optimal solutions of my own, and improving myself along the process.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;