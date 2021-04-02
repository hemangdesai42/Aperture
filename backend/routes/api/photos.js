const express = require('express');
const asyncHandler = require('express-async-handler');
const { Photo } = require('../../db/models')

const router = express.Router();


router.post('/:id', asyncHandler(async function (req, res) {
    const photo = req.params.photo;
    if (user) {
        console.log((user), 'user')
        const newPhoto = await Photo.create({ userId: userId, photo: Photo.photo });
        return res.json(newPhoto);
    } else {
        return res.json({ success: false, message: "Unable to complete your request..." });
    }
}));

router.get('/', asyncHandler(async function (req, res) {
    const photos = await Photo.findAll();
    return res.json(photos);
}));

router.delete('/:id', asyncHandler(async function (req, res) {
   let user;
    if (res.locals.authenticated) {
        const user = res.locals.user;
        await Photo.destroy({ where: { userId: user.id } })
    };

    return res.json({ 'deleted': true })
}));


module.exports = router;

