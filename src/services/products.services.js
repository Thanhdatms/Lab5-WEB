"use strict";
const db = require("../models");

class ProductServices {
  static create = async ({ name, price, manufacturing_date }) => {
    try {
      const product = await db.Products.create({
        name,
        price,
        manufacturing_date,
      });
      return product;
    } catch (error) {
      throw new Error("Failed to create product: " + error.message);
    }
  };

  static getAll = async () => {
    try {
      return await db.Products.findAll();
    } catch (error) {
      throw new Error("Failed to fetch products: " + error.message);
    }
  };

  static getById = async (id) => {
    try {
      const product = await db.Products.findByPk(id);
      if (!product) throw new Error("Product not found");
      return product;
    } catch (error) {
      throw new Error("Failed to fetch product: " + error.message);
    }
  };

  static update = async (id, updatedData) => {
    try {
      const product = await db.Products.findByPk(id);
      if (!product) throw new Error("Product not found");
      await product.update(updatedData);
      return product;
    } catch (error) {
      throw new Error("Failed to update product: " + error.message);
    }
  };

  static delete = async (id) => {
    try {
      const product = await db.Products.findByPk(id);
      if (!product) throw new Error("Product not found");
      await product.destroy();
      return true;
    } catch (error) {
      throw new Error("Failed to delete product: " + error.message);
    }
  };
}

module.exports = ProductServices;
