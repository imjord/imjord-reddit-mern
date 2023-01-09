const { GetCommunities, CreateCommunity, JoinCommunity } = require('../controllers/CommunityController');
const requireAuth = require('../config/auth');

const router = require('express').Router();


router.get('/community', GetCommunities);
router.post('/community', requireAuth, CreateCommunity);
router.post('/community/join/:id', requireAuth, JoinCommunity);



module.exports = router;