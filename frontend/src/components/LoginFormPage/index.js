import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './LoginForm.css'

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/photos" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="header-container">
                    <h1 className='title'>Log in to Aperture</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>

                    <div className="email-container">
                        <label className="email-label"></label>
                        <div>
                            <input
                                type="text"
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                required
                                placeholder='Username or Email'
                            />
                        </div>
                    </div>

                    <div className='password-container'>
                        <label className='password-label'></label>
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder='Password'
                            />
                        </div>
                    </div>

                    <button className='login-button' type="submit" onClick={'/photos'}>Log In</button>
                    <button className='demo-user' type="submit">Demo User</button>
                </form>
                <div className='not'>
                <NavLink to='/signup'>Not an Aperture member? Sign up here.</NavLink>
                </div>
            </div>
        </div>
    );
}

export default LoginFormPage;
