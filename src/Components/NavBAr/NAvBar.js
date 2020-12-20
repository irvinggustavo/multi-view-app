import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <header>
            <ul>
                <li><NavLink to = "/"> Main </NavLink></li>
                <li><NavLink to= "/About"> About </NavLink></li>
            </ul>
        </header>
    )
};

export default NavBar;