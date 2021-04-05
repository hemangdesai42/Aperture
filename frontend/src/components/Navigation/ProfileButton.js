// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router";
import * as sessionActions from '../../store/session';
import * as sessionAct from '../../store/upload';
import './ProfileButton.css';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [create, createPhoto] = useState()
    const sessionUser = useSelector(state => state.session.user);


    const set = () => {
        dispatch(sessionAct.uploadImage());;
    }

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };


    return (
        <>
            <ul className="profile-dropdown">
                        <li className='logout_container'>
                            <button className='logoutbutton' onClick={logout}>Log Out</button>
                            <button className='upload' onClick={set}>Upload</button>
                            <li className='hello'>Hello, {user.username}!</li>
                        </li>
            </ul>
        </>
    );
}

export default ProfileButton;