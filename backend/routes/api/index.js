// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photoRoute = require('./photos');
const uploadRoute = require('./upload');
const commentsRouter = require('./comment.js');
router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/photos', photoRoute);
router.use('/comments', commentsRouter);
router.use('/upload', uploadRoute);



module.exports = router;