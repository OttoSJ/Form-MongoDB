const express = require("express");
const router = express.Router();
const {
  getGames,
  setGames,
  updateGames,
  deleteGames,
} = require("../controllers/gameController");

router.get("/", getGames);

router.post("/", setGames);

router.put("/:id", updateGames);

router.delete("/:id", deleteGames);

module.exports = router;
