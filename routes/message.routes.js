const express = require("express");
const router = express.Router();
const MessageController = require("../controller/message.controller");

router.post("/send", MessageController.sendMessage);
router.get("/create-session", MessageController.createSession);
module.exports = router;
