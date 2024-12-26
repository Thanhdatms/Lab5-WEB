"use strict";
const express = require("express");
const router = express.Router();
const emailController = require("../../controllers/email.controllers");

// Route to send an email
router.post("/send", emailController.send_email);

module.exports = router;