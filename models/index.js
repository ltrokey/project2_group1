// import models
const Category = require('./categories');
const Comment = require('./comments');
const Products = require('./products');
const Users = require('./users');

// Products belongsTo Category
Category.hasMany(Products, {
  foreignKey: 'products_id',
});

// Categories have many Products
Users.hasMany(Comment, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Comment.belongsToMany(Users, {
  foreignKey: 'user_id',
});

// Tags belongToMany Products (through ProductTag)
Users.hasMany(Products, {
  foreignKey: 'user_id',
});

module.exports = {
  Category,
  Comment,
  Products,
  Users,
};