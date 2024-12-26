const multer = require("multer");
const path = require("path");

// Set the storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the directory where images will be stored
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Generate a unique name for each image (avoid name collisions)
    cb(null, Date.now() + path.extname(file.originalname)); // e.g., 1632150602321.jpg
  },
});

// File filter to only allow image files
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"), false);
  }
};

// Set up the upload middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
});

module.exports = upload;
