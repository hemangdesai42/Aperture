// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import aperturelogo from "./aperturelogo.png"

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className='login' to="/login">Log In</NavLink>
                <NavLink className='signup' to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <li>
            <NavLink className='home' exact to="/"><img className='logo' src={aperturelogo} alt=''/></NavLink>
            {isLoaded && sessionLinks}
        </li>
    );
}

export default Navigation;