const express = require('express');
const asyncHandler = require('express-async-handler');
const { singlePublicFileUpload } = require('../../awsS3');
const { singleMulterUpload } = require('../../awsS3')
const { User, Photo, Album, Comment, Tag } = require('../../db/models')

const router = express.Router();

router.get('/photos', asyncHandler(async function (req, res) {
    const photos = await Photo.findAll();
    return res.json(photos);
}));

router.post('/photos/:id', singleMulterUpload('image'), asyncHandler(async function (req, res) {
    let user;
    if (res.locals.authenticated) {
        user = res.locals.user;
        const newPhoto = await Photo.create({ userId: +userId, photo: photoURL });
        res.json(newPhoto);
        // return newPhoto;
    } else {
        res.json({ success: false, message: "Unable to complete your request..." });
    }
}));

router.delete('/photos/:id', asyncHandler(async function (req, res) {
    const photoId = req.params.id;
    if (res.locals.authenticated) {
        const user = res.locals.user;
        await Photo.destroy({ where: { userId: user.id, photoId } })
    };

    res.redirect('/photos')
}));



