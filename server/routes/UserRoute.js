const {getUsers, createUser, getUserPosts, loginUser, logoutUser, getUser, getUserComments, getUserByUsername} = require('../controllers/UserController');
const requireAuth = require('../config/auth');

const router = require('express').Router();

router.get('/users', getUsers);
router.get('/user/comments/:id', getUserComments);
router.get('/user/posts/:id', getUserPosts);
router.get('/user/:id', getUser);
router.post('/user', getUserByUsername);
router.post('/users', createUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

module.exports = router;
