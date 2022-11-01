const {getUsers, createUser} = require('../controllers/UserController');
const router = require('express').Router();

router.get('/users', getUsers)
router.post('/users', createUser);

module.exports = router;
