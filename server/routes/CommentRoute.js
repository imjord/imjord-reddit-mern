const requireAuth = require("../config/auth");
const {
  CreateComment,
  GetComments,
} = require("../controllers/CommentController");

const router = require("express").Router();

router.post("/api/comment/:id", requireAuth, CreateComment);
router.get("/api/comment/:id", GetComments);

module.exports = router;
