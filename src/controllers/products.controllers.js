"use strict";
const ProductServices = require("../services/products.services");

class ProductController {
  static create_product = async (req, res) => {
    try {
      const productData = req.body;
      const product = await ProductServices.create(productData);
      return res.status(201).json({
        message: "Product created successfully",
        status: 201,
        product,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while creating the product",
        code: 500,
        error: error.message,
      });
    }
  };

  static get_all_products = async (req, res) => {
    try {
      const products = await ProductServices.getAll();
      return res.status(200).json({
        message: "Products retrieved successfully",
        status: 200,
        products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while fetching the products",
        code: 500,
        error: error.message,
      });
    }
  };

  static get_product_by_id = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductServices.getById(id);
      return res.status(200).json({
        message: "Product retrieved successfully",
        status: 200,
        product,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while fetching the product",
        code: 500,
        error: error.message,
      });
    }
  };

  static update_product = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const product = await ProductServices.update(id, updatedData);
      return res.status(200).json({
        message: "Product updated successfully",
        status: 200,
        product,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while updating the product",
        code: 500,
        error: error.message,
      });
    }
  };

  static delete_product = async (req, res) => {
    try {
      const { id } = req.params;
      await ProductServices.delete(id);
      return res.status(200).json({
        message: "Product deleted successfully",
        status: 200,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while deleting the product",
        code: 500,
        error: error.message,
      });
    }
  };
}

module.exports = ProductController;
