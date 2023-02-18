const { GetPosts, CreatePost, GetPostDetails, LikePost, DislikePost, GetPostsByLikes } = require('../controllers/PostController');
const requireAuth = require('../config/auth');

const router = require('express').Router();

router.get('/posts', GetPosts);
router.get('/posts/getlikes', GetPostsByLikes)
router.post('/posts', requireAuth, CreatePost);
router.get('/posts/:id', GetPostDetails);
router.post('/posts/:id/like', requireAuth, LikePost);
router.post('/posts/:id/dislike', requireAuth, DislikePost);


module.exports = router;
