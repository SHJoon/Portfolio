import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import logo from '../images/logo.png';

const Nav = () => {

    return(
        <div>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <div>
                <a href="https://github.com/SHJoon">GitHub </a>
                <a href="https://www.linkedin.com/in/howard-shin/">Linkedin </a>
                <Link to="/resume">Resume</Link>
            </div>
        </div>
    )
}

export default Nav;