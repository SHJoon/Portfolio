import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

// Import image
import logo from '../images/logo.png';

// Import styling
import styles from '../styles/Nav.module.css';

const Nav = () => {
    return(
        <div className={styles.navbar}>
            <Link className={ styles.logo } to="/"><img className={ styles.logo } src={logo} alt="logo" /></Link>
            <div className={ styles.links }>
                <Link className={ styles.eachLinks } to="/resume">Resume</Link>
                <a className={ styles.eachLinks } href="https://github.com/SHJoon">GitHub </a>
                <a className={ styles.eachLinks } href="https://www.linkedin.com/in/howard-shin/">Linkedin </a>
            </div>
        </div>
    )
}

export default Nav;