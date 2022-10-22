const { CreateComment } = require('../controllers/CommentController');

const router = require('express').Router();

router.post('/posts/:id/comment', CreateComment);


module.exports = router;
