import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import styles from '../styles/Contributions.module.css';

const Contributions = () => {

    return(
        <div className={ styles.contribution }>
            <ScrollAnimation animateIn="bounceIn" duration={1} animateOnce={true}>
                <div className={ styles.contHeader }>
                    <p className= { styles.contTitle }>GitHub Contributions</p>
                    <p className= { styles.contDesc }>I like to code a lot</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceIn" duration={1} animateOnce={true}>
                <img className={ styles.chart } src="https://ghchart.rshah.org/3490bb/SHJoon" alt="Howard Github Contributions" />
            </ScrollAnimation>
        </div>
    );
}

export default Contributions;