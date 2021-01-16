import React from 'react';
import styles from '../styles/Footer.module.css';
import { Link } from '@reach/router';

import logo from '../images/logo.png';

const Footer = (props) => {

    return(
        <div className={ styles.footer }>
            <div className={ styles.footerBlock1 }>
                <img style={{width:"80px"}} src={ logo } alt="logo" />
                <p style={{color:"black"}}>Made with React</p>
            </div>

            <div className={ styles.footerBlock2 }>
                <div className={ styles.footerContent }>
                    <div>Howard Shin</div>
                    <div>(818) 966-5808</div>
                    <a className={ styles.links } href="mailto:hojoon0617@gmail.com">hojoon0617@gmail.com</a>
                </div>
                
                <ul className={ `${ styles.footerContent } ${ styles.footerLinks }` }>
                    <li><Link to="/resume" className={ styles.links }>Resume</Link></li>
                    <li><a className={ styles.links } href="https://www.github.com/SHJoon" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a className={ styles.links } href="https://www.linkedin.com/in/howard-shin/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;