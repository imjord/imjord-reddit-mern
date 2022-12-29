const requireAuth = require('../config/auth');
const { CreateComment } = require('../controllers/CommentController');

const router = require('express').Router();

router.post('/comment/:id', requireAuth, CreateComment);


module.exports = router;
