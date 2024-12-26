"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Products extends Model {
    static associate(models) {
      Products.hasMany(models.ShoppingCarts, {
        foreignKey: "product_id",
      });
    }
  }

  Products.init(
    {
      id: { // Match the migration's primary key
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      manufacturing_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Products",
      tableName: "Products",
      timestamps: true, // Matches the migration
    }
  );

  return Products;
};
