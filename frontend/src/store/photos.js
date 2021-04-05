import { csrfFetch } from './csrf';

const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
const GET_PHOTO = 'GET_PHOTOS'
const GET_APHOTO = 'GET_APHOTO'

export const setPhoto = (photo) => ({
    type: UPLOAD_PHOTO,
    photo,
});

export const grabPhotos = (photos) => ({
    type: GET_PHOTO,
    photos,
});

export const grabAPhoto = (photos, id) => ({
    type: GET_APHOTO,
    photos,
    id
})

/////need to fix this route
export const getPhoto = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/photos/${id}`)

    if (res.ok) {
        const image = await res.json();
        console.log(image)
        dispatch(grabAPhoto(image))
    }
}

export const createPhoto = (userId, photo, id) => async (dispatch) => {
    const formData = new FormData()
    formData.append("userId", userId)
    formData.append("photo", photo)

    const res = await csrfFetch(`/api/photos/${id}`, {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData
    })
    const data = await res.json();
    
    dispatch(setPhoto(data))
}

export const getPhotos = () => async (dispatch) => {
    const res = await csrfFetch(`/api/photos/`)

    if (res.ok) {
        const images = await res.json();
        dispatch(grabPhotos(images))
    }
}

export default function photoReducer(state = {}, action) {
    switch (action.type) {
        case UPLOAD_PHOTO:
            return { ...state, [action.photo]: action.photo }
        case GET_PHOTO:
            let nextState = { ...state}
            action.photos.forEach(photo => {
                nextState[photo.id] = photo
            })
            return nextState
        default:
            return state
    }
}