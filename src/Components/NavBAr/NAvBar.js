import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {


    return(
        <header className= "header">
            <ul className = 'header__navBar'>
                <li><NavLink exact to = "/"  className ='header__Link' activeClassName = "selected"> Main </NavLink></li>
                <li><NavLink to= "/About"  className ='header__Link' activeClassName = "selected"> About </NavLink></li>
            </ul>
        </header>
    )
};

export default NavBar;