import React from 'react';
import styles from '../styles/Footer.module.css';
import { Link } from '@reach/router';

import logo from '../images/logo.png'

const Footer = (props) => {

    return(
        <div className={ styles.footer }>
            <img style={{width:"80px"}}src={ logo } alt="logo"/>
            <div className={ styles.footerDesc }>
                <div>Howard Shin</div>
                <div>(818) 966-5808</div>
                <a className={ styles.links } href="mailto:hojoon0617@gmail.com">hojoon0617@gmail.com</a>
                <a className={ styles.links } href="https://www.github.com/SHJoon" target="_blank" rel="noopener noreferrer">Github</a>
                <a className={ styles.links } href="https://www.linkedin.com/in/howard-shin/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
        </div>
    );
}

export default Footer;