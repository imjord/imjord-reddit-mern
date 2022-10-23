const { GetPosts, CreatePost, GetPostDetails } = require('../controllers/PostController');

const router = require('express').Router();

router.get('/posts', GetPosts);
router.post('/posts', CreatePost);
router.get('/posts/:id', GetPostDetails);

module.exports = router;
