import React from 'react';
import { Link } from '@reach/router';

// Import image
import logo from '../images/logo.png';

// Import styling
import styles from '../styles/Nav.module.css';

const Nav = () => {
    return(
        <div className={ styles.navbar }>
            <Link className={ styles.logo } to="/"><img style={{width:"100px"}} src={logo} alt="logo" /></Link>
            <ul className={ styles.links }>
                <li className= {styles.navLinks }><Link className={ styles.eachLinks } to="/resume">Resume</Link></li>
                <li className= {styles.navLinks }><a className={ styles.eachLinks } href="https://github.com/SHJoon" target="_blank" rel="noopener noreferrer">GitHub </a></li>
                <li className= {styles.navLinks }><a className={ styles.eachLinks } href="https://www.linkedin.com/in/howard-shin/" target="_blank" rel="noopener noreferrer">Linkedin </a></li>
            </ul>
        </div>
    )
}

export default Nav;