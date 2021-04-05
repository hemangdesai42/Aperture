import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getPhoto, getPhotos } from "../../store/photos";
import { Redirect, useHistory } from 'react-router-dom';
import './homepage.css';

function HomePage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos) //=? Object.values(state.photos) : null)
    const id = useSelector(state => state.photos.id)
    let photoArr; 
    if (photos) photoArr = Object.values(photos);

    useEffect(() => {
        if(user) {dispatch(getPhoto(user.id))}
    }, [dispatch, user])

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    const history = useHistory();
    
    if (!photos && !photoArr) return null;

    return (
        <div className="photos-home">
            <div className="welcome">Welcome {user.username}!</div>
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
    )
}

export default HomePage;