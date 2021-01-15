import React, { useState, useEffect } from 'react';

// Import image
import profile from '../images/profile.jpg';

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
                <p className={ styles.selfIntro3 }>I have a background in Computer Engineering, which is a combination of both the software and hardware
                    aspects of electronics. It is then that I found my passion for coding. By tackling difficult yet
                    invigorating challenges, I have developed skills to overcome the complexity of software development.
                    Computer Engineering, however, focused heavily on the hardware aspects, and so I learned how to be
                    self-sufficient and research into new programming knowledge on my own.</p>
            </div>
        </div>
    )
}

export default AboutMe;