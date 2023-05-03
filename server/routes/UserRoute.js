const {
  getUsers,
  createUser,
  getUserPosts,
  loginUser,
  logoutUser,
  getUser,
  getUserComments,
  getUserByUsername,
} = require("../controllers/UserController");
const requireAuth = require("../config/auth");

const router = require("express").Router();

router.get("/api/users", getUsers);
router.get("/api/user/comments/:id", getUserComments);
router.get("/api/user/posts/:id", getUserPosts);
router.get("/api/user/:id", getUser);
router.post("/api/user", getUserByUsername);
router.post("/api/users", createUser);
router.post("/api/login", loginUser);
router.get("/api/logout", logoutUser);

module.exports = router;
