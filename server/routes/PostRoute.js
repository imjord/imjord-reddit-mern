const {
  GetPosts,
  CreatePost,
  GetPostDetails,
  LikePost,
  DislikePost,
  GetPostsByLikes,
} = require("../controllers/PostController");
const requireAuth = require("../config/auth");

const router = require("express").Router();

router.get("/api/posts", GetPosts);
router.get("/api/posts/getlikes", GetPostsByLikes);
router.post("/api/posts", requireAuth, CreatePost);
router.get("/api/posts/:id", GetPostDetails);
router.post("/api/posts/:id/like", requireAuth, LikePost);
router.post("/api/posts/:id/dislike", requireAuth, DislikePost);

module.exports = router;
