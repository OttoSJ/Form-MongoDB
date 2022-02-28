// DEPENDENCIES
const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

//  CONFIGURATIONS
const router = express.Router();

// Remember to protect routes here and add to the router.get routes!!!!!

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getUser);

module.exports = router;
