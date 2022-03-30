const express = require("express");
const router = express.Router();
const {
  getMessages,
  getAllMessages,
  setMessages,
  updateMessages,
  deleteMessages,
} = require("../controllers/messageController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getAllMessages);

router.get("/", protect, getMessages);

router.post("/", protect, setMessages);

router.put("/:id", protect, updateMessages);

router.delete("/:id", protect, deleteMessages);

module.exports = router;
