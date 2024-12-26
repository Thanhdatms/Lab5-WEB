'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.ShoppingCarts, {
        foreignKey: "user_id",
      });
    }
  }

  Users.init(
    {
      id: { // Match the migration's primary key
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true, // Assuming address uniqueness isn't a business requirement
      },
      registration_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Users",
      tableName: "Users",
      timestamps: true, // Matches the migration
    }
  );

  return Users;
};
