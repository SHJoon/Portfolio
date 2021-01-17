import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// Import image
import profile from '../images/profile.jpg';

// Import styling
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return(
        <div>
            <div className={ styles.intro }>
                <ScrollAnimation animateIn="fadeInDown" duration={1.5} animateOnce={true}>
                    <h1 className={ styles.header }>Full-Stack Developer | Software Engineer</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown" duration={1.5} animateOnce={true}>
                    <h3 className= { styles.introLang }>Python | JavaScript | Java</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
                    <img className={ styles.pic } src={ profile } alt="profile" />
                </ScrollAnimation>
            </div>
            <div className={ styles.block }>
                <ScrollAnimation animateIn="zoomIn" duration={1} animatePreScroll={false} animateOnce={true}>
                    <h3 className={ styles.selfIntro1 }>Howard Shin</h3>
                    <h3 className={ styles.selfIntro2 }>Web-developer who loves computers and music.</h3>
                    <p className={ styles.selfIntro3 }>My background in Computer Engineering piqued my passion for software development,
                    tackling difficult yet invigorating challenges. Through coding bootcamp and personal projects, I learned the joys of
                    collaborating with others, creating optimal solutions of my own, and improving myself along the process.
                    </p>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default AboutMe;