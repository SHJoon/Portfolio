import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

const Nav = () => {

    return(
        <div>
            <Link to="/">Homepage </Link>
            <div>
                <a href="https://github.com/SHJoon">GitHub </a>
                <a href="https://www.linkedin.com/in/howard-shin/">Linkedin </a>
                <Link to="/resume">Resume</Link>
            </div>
        </div>
    )
}

export default Nav;