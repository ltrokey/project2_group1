const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Products extends Model {}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categories_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "products",
  }
);

module.exports = Products;
