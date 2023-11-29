const seedCategories = require("./categoriesSeeds");
const seedProducts = require("./productsSeeds");
const seedUsers = require("./usersSeeds");
const seedUserProducts = require("./productUsersSeeds");
const seedComments = require("./commentsSeeds");

const sequelize = require("../config/connection");

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("\n---- Database Synced----\n");

    await seedCategories();
    console.log("\n---- Added Categories----\n");

    await seedProducts();
    console.log("\n---- Added Products----\n");

    await seedUsers();
    console.log("\n---- Added Users----\n");

    await seedUserProducts();
    console.log("\n---- Added Product Users----\n");

    await seedComments();
    console.log("\n---- Added Comments----\n");

    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
};

seedData();
