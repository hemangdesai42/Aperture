const express = require('express');
const asyncHandler = require('express-async-handler');
const { Photo, User } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async function (req, res) {
    const photos = await Photo.findAll();
    return res.json(photos);
}));

router.get('/:id', asyncHandler(async function (req, res) {
    const userId = req.params.userId;
    const photo = req.params.photo;
    // const id = req.params.id
    const photos = await Photo.findByPk(userId);
    return res.json(photos);
}));

router.delete('/:id', asyncHandler(async function (req, res) {
    await Photo.destroy({ where:{userId}})
    return res.json({ 'deleted': true })
}));


module.exports = router;

