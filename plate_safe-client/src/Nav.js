import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='header'>
            <h1>PlateSafe</h1>
            <div className='links'>
                <NavLink className='navLink' to="/">Home </NavLink>
                <NavLink className='navLink' to="/About"> About </NavLink>
                <NavLink className='navLink' to="/Browse"> Browse</NavLink>
            </div>
        </div>
    )
}

export default Nav;