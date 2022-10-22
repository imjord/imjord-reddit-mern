const { GetPosts, CreatePost } = require('../controllers/PostController');

const router = require('express').Router();

router.get('/posts', GetPosts);
router.post('/posts', CreatePost);


module.exports = router;
