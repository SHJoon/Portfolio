import React, { useState, useEffect } from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return(
        <div className={ styles.intro }>
            {/* <img src="" /> Add my face here */}
            <p>Full-Stack Developer | Software Engineer</p>
            <p>Python | JavaScript | Java</p>
            <p>Hi, I'm Howard. I'm a highly motivated developer who loves computer and music.</p>
        </div>
    )
}

export default AboutMe;