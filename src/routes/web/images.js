"use strict";
const express = require("express");
const router = express.Router();
const imageController = require("../../controllers/images.controllers");
const upload = require("../../middleware/multer");


router.post("/upload", upload.single("image"), imageController.upload_image);

router.get("/images/:imageName", imageController.get_image);

module.exports = router;
