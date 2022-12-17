const {getUsers, createUser, loginUser, logoutUser, getUser} = require('../controllers/UserController');
const requireAuth = require('../config/auth');

const router = require('express').Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/users', createUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

module.exports = router;
