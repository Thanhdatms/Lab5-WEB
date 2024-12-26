"use strict";
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.controllers");

// Route to create a new user
router.post("/", userController.create_user);
router.get("/", userController.get_all_users);
router.get("/:id", userController.get_user_by_id);
router.put("/:id", userController.update_user);
router.delete("/:id", userController.delete_user);
router.get("/fetch/fetch-and-save", userController.fetchAndSaveUsers);

module.exports = router;
