// DEPENDENCIES
const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// router.get("/", (req, res) => {
//   res.render("home");
// });

// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);

module.exports = router;
