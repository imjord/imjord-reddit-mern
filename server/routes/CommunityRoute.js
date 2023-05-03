const {
  GetCommunities,
  CreateCommunity,
  JoinCommunity,
} = require("../controllers/CommunityController");
const requireAuth = require("../config/auth");

const router = require("express").Router();

router.get("/api/community", GetCommunities);
router.post("/api/community", requireAuth, CreateCommunity);
router.post("/api/community/join/:id", requireAuth, JoinCommunity);

module.exports = router;
