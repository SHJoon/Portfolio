import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

const Nav = () => {

    return(
        <div>
            <Link to="/">Homepage</Link>
            <Link to="/projects">Projects</Link>
            <a src="https://github.com/SHJoon">GitHub</a>
            <a src="https://www.linkedin.com/in/howard-shin/">GitHub</a>
            <Link to="/resume">Resume</Link>
        </div>
    )
}

export default Nav;