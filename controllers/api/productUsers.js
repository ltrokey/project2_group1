const router = require("express").Router();

const { ProductUsers } = require("../../models");

const getAllProductUsers = async () => {
  try {
    const productUsers = await ProductUsers.findAll();
    console.log("Product Users:", productUsers);
  } catch (error) {
    console.error("Error fetching product users:", error);
  }
};

getAllProductUsers();

module.exports = router;
