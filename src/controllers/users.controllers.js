"use strict";
const userServices = require("../services/user.services");

class userController {
  // Create a new user
  static create_user = async (req, res) => {
    try {
      console.log("Incoming request:", req.body);
      const userData = req.body;
      const user = await userServices.create(userData);
      return res.status(201).json({
        action: "User created successfully",
        status: "201",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while creating the user",
        code: "500",
        error: error.message,
      });
    }
  };

  // Get all users
  static get_all_users = async (req, res) => {
    try {
      const users = await userServices.getAll();
      return res.status(200).json({
        message: "Users retrieved successfully",
        status: "200",
        users,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while fetching the users",
        code: "500",
        error: error.message,
      });
    }
  };

  // Get a user by ID
  static get_user_by_id = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userServices.getById(id);
      return res.status(200).json({
        message: "User retrieved successfully",
        status: "200",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while fetching the user",
        code: "500",
        error: error.message,
      });
    }
  };

  // Update a user
  static update_user = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const user = await userServices.update(id, updatedData);
      return res.status(200).json({
        message: "User updated successfully",
        status: "200",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while updating the user",
        code: "500",
        error: error.message,
      });
    }
  };

  // Delete a user
  static delete_user = async (req, res) => {
    try {
      const { id } = req.params;
      await userServices.delete(id);
      return res.status(200).json({
        message: "User deleted successfully",
        status: "200",
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while deleting the user",
        code: "500",
        error: error.message,
      });
    }
  };

  static fetchAndSaveUsers = async (req, res) => {
    try {
      const result = await userServices.fetchAndSaveApiUsers();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while fetching and saving users",
        code: 500,
        error: error.message,
      });
    }
  };

}

module.exports = userController;
