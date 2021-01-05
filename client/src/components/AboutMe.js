import React, { useState, useEffect } from 'react';

import profile from '../images/profile.png';

import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return(
        <div className={ styles.intro }>
            <h1>Full-Stack Developer | Software Engineer</h1>
            <h3>Python | JavaScript | Java</h3>
            <img className={ styles.pic } src={ profile } alt="profile" />
            <h4>Hi, I'm Howard. I'm a highly motivated developer who loves computer and music.</h4>
        </div>
    )
}

export default AboutMe;