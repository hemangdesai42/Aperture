export const LOAD_PHOTOS = "photos/LOAD_PHOTOS";
export const REMOVE_PHOTOS = "photos/REMOVE_PHOTOS";
export const UPLOAD_PHOTOS = "photos/UPLOAD_PHOTOS";


const load = (photos, userId) => ({
    type: LOAD_PHOTOS,
    photos,
    userId,
});

const remove = (photoId, userId) => ({
    type: REMOVE_PHOTOS,
    photoId,
    userId,
});

const upload = (photos) => ({
    type: UPLOAD_PHOTOS,
    photos,
});
