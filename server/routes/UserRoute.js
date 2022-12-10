const {getUsers, createUser, loginUser, logoutUser} = require('../controllers/UserController');
const requireAuth = require('../config/auth');

const router = require('express').Router();

router.get('/users', requireAuth, getUsers)
router.post('/users', createUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

module.exports = router;
