const requireAuth = require('../config/auth');
const { CreateComment, GetComments } = require('../controllers/CommentController');

const router = require('express').Router();

router.post('/comment/:id', requireAuth, CreateComment);
router.get("/comment/:id", GetComments);

module.exports = router;
