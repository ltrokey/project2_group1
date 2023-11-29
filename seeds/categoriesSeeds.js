const { Categories } = require("../models");

const categoriesData = [
  {
    name: "Under $25",
  },
  {
    name: "$25 to $100",
  },
  {
    name: "Over $100",
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
