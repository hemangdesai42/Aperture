import { csrfFetch } from "./csrf"

const UPLOADIMAGE = "session/uploadImg"


const uploadImg = (photo) => {
    return {
        type: UPLOADIMAGE,
        payload: photo
    };
};

export const uploadImage = (photo) => async (dispatch) => {
    const { photo, albumId, userId, } = photo;
    const response = await csrfFetch(`/api/upload/`, {
        method: "POST",
        body: JSON.stringify({
            photo,
            albumId,
            userId,
        }),
    });
        const data = await response.json();
        // console.log(photos)
        dispatch(uploadImg(data.photo));
        return response;

}

const initialState = { photo: null };


const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case UPLOADIMAGE:
            newState = Object.assign({}, state);
            newState.photo = action.payload;
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;