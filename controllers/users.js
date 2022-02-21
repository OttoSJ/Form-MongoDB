const express = require("express");

const User = require("../models/User");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("home");
// });

router.get("/", (req, res) => {
  res.render("signup");
});

router.get("/get", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await new User({
      username,
      password,
    }).save();

    res.status(201).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

module.exports = router;
