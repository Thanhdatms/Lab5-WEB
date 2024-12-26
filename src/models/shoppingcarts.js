"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class ShoppingCarts extends Model {
    static associate(models) {
      ShoppingCarts.belongsTo(models.Users, {
        foreignKey: "user_id",
      });

      ShoppingCarts.belongsTo(models.Products, {
        foreignKey: "product_id",
      });
    }
  }

  ShoppingCarts.init(
    {
      id: { // Add an id column for simplicity
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "ShoppingCarts",
      tableName: "ShoppingCarts",
      timestamps: true, // Matches the migration
    }
  );

  return ShoppingCarts;
};
