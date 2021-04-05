const express = require('express');
const asyncHandler = require('express-async-handler');
const { Photo, User } = require('../../db/models')
const router = express.Router();

router.post('/', asyncHandler(async function (req, res) {
    const {
        photo,
        albumId,
        userId,
    } = req.body;

    const image = await Review.create({
        photo,
        albumId,
        userId,
    })

    return res.json(image)
}));

module.exports = router;