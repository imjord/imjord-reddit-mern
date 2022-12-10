const { GetPosts, CreatePost, GetPostDetails } = require('../controllers/PostController');
const requireAuth = require('../config/auth');

const router = require('express').Router();

router.get('/posts', GetPosts);
router.post('/posts', requireAuth, CreatePost);
router.get('/posts/:id', GetPostDetails);

module.exports = router;
