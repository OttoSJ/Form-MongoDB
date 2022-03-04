// DEPENDENCIES
const express = require("express");
const { render } = require("express/lib/response");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

//  CONFIGURATIONS
const router = express.Router();

// Remember to protect routes here and add to the router.get routes!!!!!

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/me", getUser);

module.exports = router;
