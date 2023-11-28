const { Categories } = require("../models");

const categoriesData = [
  {
    categories_name: "Under $25",
  },
  {
    categories_name: "$25 to $100",
  },
  {
    categories_name: "Over $100",
  },
];

const seedCategories = async () => {
  try {
    await Categories.bulkCreate(categoriesData);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error during categories seeding:", error);
  }
};

module.exports = seedCategories;
