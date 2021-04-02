import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { grabPhotos, getPhotos } from "../../store/photos";
import { Redirect, useHistory } from 'react-router-dom';

function HomePage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos) //=? Object.values(state.photos) : null)
    let photoArr; 
    if (photos) photoArr = Object.values(photos);

    // useEffect(() => {
    //     if (user) { dispatch(grabPhotos(photos)) }
    // }, [dispatch, photos])

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    const history = useHistory();
    
    if (!photos && !photoArr) return null;

    return (
        <div className="photos-home">
            {console.log('-----------------',photos)}
            <div>HomePage</div>
            <div className="photos-container">
                {photoArr.map(photo =>
                    <img src={photo.photo} alt=''/>
                )
                }
            </div>
        </div>
    )
}

export default HomePage;