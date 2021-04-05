import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getPhoto, getPhotos } from "../../store/photos";
import { Redirect, useHistory } from 'react-router-dom';
import './homepage.css';

import * as sessionActions from '../../store/session';


function HomePage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos) //=? Object.values(state.photos) : null)
    const id = useSelector(state => state.photos.id)
    const sessionUser = useSelector(state => state.session.user);
  
    let photoArr; 
    if (photos) photoArr = Object.values(photos);

    useEffect(() => {
        if(user) {dispatch(getPhoto(user.id))}
    }, [dispatch, user])

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    // const history = useHistory();
    
    if (!photos && !photoArr) return null;

    function person(username) {
    if (sessionUser) {
        username = user.username
        } else username = null
        return username 
    }


    if (sessionUser) {return (
        <div className="photos-home">
            <div className="welcome">Welcome {person()}!</div>
            <div className="photos-container">
                {photoArr.map(photo =>
                    <div>
                        <div className='each'>
                            <a href={`/photos/${id}`} className="image"><img src={photo.photo} alt=''/></a>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )} else {
        return (Redirect('/login'))
    }
}

export default HomePage;
