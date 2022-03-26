const express = require("express");
const router = express.Router();
const {
  getMessages,
  setMessages,
  updateMessages,
  deleteMessages,
} = require("../controllers/messageController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getMessages);

router.post("/", protect, setMessages);

router.put("/:id", protect, updateMessages);

router.delete("/:id", protect, deleteMessages);

module.exports = router;
