"use strict";
const path = require("path");

class imageController {
  // Endpoint to upload an image
  static upload_image = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No image uploaded",
        });
      }
      return res.status(200).json({
        message: "Image uploaded successfully",
        file: req.file,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while uploading the image",
        code: 500,
        error: error.message,
      });
    }
  };

  // Endpoint to display an uploaded image
  static get_image = (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, "../uploads", imageName);
    return res.sendFile(imagePath, (err) => {
      if (err) {
        return res.status(404).json({
          message: "Image not found",
        });
      }
    });
  };
}

module.exports = imageController;
