const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");

// GET Messages
// ROUTE  GET/api/games
// ACCESS Private
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({ user: req.user.id });
  res.status(200).json(messages);
});

const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find();
  res.status(200).json(messages);
});

// SET Messages
// ROUTE POST/api/games
// ACCESS Private
const setMessages = asyncHandler(async (req, res) => {
  if (!req.body.message) {
    res.status(400);
    throw new Error("Please add a text");
  }
  const messages = await Message.create({
    message: req.body.message,
    user: req.user.id,
  });
  res.status(200).json(messages);
});

// UPDATE Messages
// ROUTE PUT/api/games/:id
// ACCESS Private
const updateMessages = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);
  if (!message) {
    res.status(400);
    throw new Error("Goal not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (message.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedMessage = await Message.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedMessage);
});

// DELETE Messages
// ROUTE DELETE/api/games/:id
// ACCESS Private
const deleteMessages = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(400);
    throw new Error("Message not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (message.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await message.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMessages,
  setMessages,
  updateMessages,
  deleteMessages,
  getAllMessages,
};
