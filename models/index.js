const Categories = require("./categories");
const Products = require("./products");
const Users = require("./users");
const Comments = require("./comments");
const ProductUsers = require("./productUsers");

Categories.hasMany(Products, {
  foreignKey: "categories_id",
  onDelete: "CASCADE",
});

Products.belongsTo(Categories, {
  foreignKey: "categories_id",
  onDelete: "CASCADE",
});

Products.hasMany(Comments, {
  foreignKey: "products_id",
  onDelete: "CASCADE",
});

Products.belongsToMany(Users, {
  through: ProductUsers,
  onDelete: "CASCADE",
});

Users.hasMany(Comments, {
  foreignKey: "users_id",
});

Users.belongsToMany(Products, {
  through: ProductUsers,
  foreignKey: "users_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Users, {
  foreignKey: "users_id",
});

module.exports = {
  Categories,
  Products,
  Users,
  Comments,
  ProductUsers,
};
