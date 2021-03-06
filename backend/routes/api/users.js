// backend/routes/api/users.js
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singlePublicFileUpload } = require('../../awsS3');
const { singleMulterUpload } = require('../../awsS3')

const validateSignup = [
    check('name')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a name.'),
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

// Post /api/users ---Sign up
router.post(
    "/",
    // singleMulterUpload("image"),
    validateSignup,
    asyncHandler(async (req, res) => {
        const { name, email, password, username } = req.body;
        // const profileImageUrl = await singlePublicFileUpload(req.file);
        console.log(name, email, username)
        const user = await User.signup({
            name,
            username,
            email,
            password,
            // profileImageUrl,
        });
        
        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    })
);


module.exports = router;