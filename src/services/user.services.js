"use strict";
const db = require("../models");
const axios = require('axios');



class userServices {
  static create = async ({ fullname, email, address, registration_date }) => {
    try {
      const user = await db.Users.create({
        fullname,
        email,
        address,
        registration_date,
      });
      return user;
    } catch (error) {
      throw new Error("Failed to create user: " + error.message);
    }
  };

  static getAll = async () => {
    try {
      return await db.Users.findAll();
    } catch (error) {
      throw new Error("Failed to fetch users: " + error.message);
    }
  };

  static getById = async (id) => {
    try {
      const user = await db.Users.findByPk(id);
      if (!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw new Error("Failed to fetch user: " + error.message);
    }
  };

  static update = async (id, updatedData) => {
    try {
      const user = await db.Users.findByPk(id);
      if (!user) throw new Error("User not found");
      await user.update(updatedData);
      return user;
    } catch (error) {
      throw new Error("Failed to update user: " + error.message);
    }
  };

  static delete = async (id) => {
    try {
      const user = await db.Users.findByPk(id);
      if (!user) throw new Error("User not found");
      await user.destroy();
      return true;
    } catch (error) {
      throw new Error("Failed to delete user: " + error.message);
    }
  };

  static fetchAndSaveApiUsers = async () => {
    try {
      // Fetch data from the API
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      
      const usersData = response.data;

      class User {
        constructor(name, email, address) {
          this.name = name;
          this.email = email;
          this.address = address;
        }
      }
      
      // Iterate through the fetched data, map it to User class, and save to DB
      for (const userData of usersData) {
        const user = new User(
            userData.name,
            userData.email,
            userData.address,
          );
   
        // Save to the database (use Sequelize model to insert)
        await db.Users.create({
          fullname: user.name,
          email: user.email,
          address: user.address.street,
          registration_date: "2024-12-26T10:00:00Z"
        });
      }

      return { message: "Users fetched and saved successfully." };
    } catch (error) {
      throw new Error("Failed to fetch and save users: " + error.message);
    }
  };
}

module.exports = userServices;
