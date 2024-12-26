"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../../controllers/products.controllers");

// Route to create a new product
router.post("/", productController.create_product);
router.get("/", productController.get_all_products);
router.get("/:id", productController.get_product_by_id);
router.put("/:id", productController.update_product);
router.delete("/:id", productController.delete_product);

module.exports = router;
