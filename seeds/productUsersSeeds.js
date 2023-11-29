const { ProductUsers } = require("../models");

const productUserData = [
  {
    products_id: 1,
    users_id: 5,
  },
  {
    products_id: 1,
    users_id: 7,
  },
  {
    products_id: 1,
    users_id: 11,
  },
  {
    products_id: 2,
    users_id: 1,
  },
  {
    products_id: 2,
    users_id: 7,
  },
  {
    products_id: 2,
    users_id: 14,
  },
  {
    products_id: 3,
    users_id: 4,
  },
  {
    products_id: 3,
    users_id: 8,
  },
  {
    products_id: 4,
    users_id: 7,
  },
  {
    products_id: 4,
    users_id: 14,
  },
  {
    products_id: 5,
    users_id: 8,
  },
  {
    products_id: 5,
    users_id: 11,
  },
  {
    products_id: 6,
    users_id: 2,
  },
  {
    products_id: 6,
    users_id: 8,
  },
  {
    products_id: 7,
    users_id: 5,
  },
  {
    products_id: 7,
    users_id: 7,
  },
  {
    products_id: 7,
    users_id: 15,
  },
  {
    products_id: 8,
    users_id: 2,
  },
  {
    products_id: 8,
    users_id: 4,
  },
  {
    products_id: 8,
    users_id: 12,
  },
  {
    products_id: 8,
    users_id: 14,
  },
  {
    products_id: 9,
    users_id: 13,
  },
  {
    products_id: 10,
    users_id: 7,
  },
  {
    products_id: 11,
    users_id: 4,
  },
  {
    products_id: 11,
    users_id: 13,
  },
  {
    products_id: 12,
    users_id: 6,
  },
  {
    products_id: 13,
    users_id: 3,
  },
  {
    products_id: 13,
    users_id: 6,
  },
  {
    products_id: 14,
    users_id: 7,
  },
  {
    products_id: 14,
    users_id: 15,
  },
  {
    products_id: 15,
    users_id: 11,
  },
  {
    products_id: 15,
    users_id: 13,
  },
  {
    products_id: 16,
    users_id: 11,
  },
  {
    products_id: 16,
    users_id: 12,
  },
  {
    products_id: 17,
    users_id: 1,
  },
  {
    products_id: 17,
    users_id: 10,
  },
  {
    products_id: 18,
    users_id: 5,
  },
  {
    products_id: 19,
    users_id: 6,
  },
  {
    products_id: 19,
    users_id: 15,
  },
  {
    products_id: 20,
    users_id: 4,
  },
  {
    products_id: 20,
    users_id: 11,
  },
  {
    products_id: 21,
    users_id: 9,
  },
  {
    products_id: 21,
    users_id: 14,
  },
  {
    products_id: 22,
    users_id: 3,
  },
  {
    products_id: 22,
    users_id: 5,
  },
  {
    products_id: 22,
    users_id: 10,
  },
  {
    products_id: 22,
    users_id: 13,
  },
  {
    products_id: 23,
    users_id: 2,
  },
  {
    products_id: 24,
    users_id: 6,
  },
  {
    products_id: 24,
    users_id: 13,
  },
  {
    products_id: 26,
    users_id: 12,
  },
  {
    products_id: 27,
    users_id: 9,
  },
  {
    products_id: 27,
    users_id: 12,
  },
  {
    products_id: 28,
    users_id: 5,
  },
  {
    products_id: 29,
    users_id: 3,
  },
  {
    products_id: 29,
    users_id: 9,
  },
  {
    products_id: 30,
    users_id: 10,
  },
  {
    products_id: 30,
    users_id: 15,
  },
];

const seedUserProducts = async () => {
  try {
    await ProductUsers.bulkCreate(productUserData);
    console.log("Product Users seeded successfully!");
  } catch (error) {
    console.error("Error during product users seeding:", error);
  }
};

module.exports = seedUserProducts;
