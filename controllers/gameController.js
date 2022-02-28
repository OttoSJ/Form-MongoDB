const asyncHandler = require("express-async-handler");

// GET Games
// ROUTE  GET/api/games
// ACCESS Private
const getGames = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get games" });
});

// SET Games
// ROUTE POST/api/games
// ACCESS Private
const setGames = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please select a lecture");
  }
});

// UPDATE Games
// ROUTE PUT/api/games/:id
// ACCESS Private
const updateGames = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update game ${req.params.id}` });
});

// DELETE Games
// ROUTE DELETE/api/games/:id
// ACCESS Private
const deleteGames = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete game ${req.params.id}` });
});

module.exports = {
  getGames,
  setGames,
  updateGames,
  deleteGames,
};
