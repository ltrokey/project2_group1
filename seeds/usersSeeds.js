const { Users } = require("../models");
const bcrypt = require("bcrypt");
const faker = require("faker");

const generateRandomUsers = (count) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const username = faker.internet.userName().toLowerCase();
    const password = faker.internet.password();
    const funds = faker.datatype.number({ min: 1, max: 500 });

    users.push({ username, password, funds });
  }

  return users;
};

const seedUsers = async () => {
  try {
    const userData = generateRandomUsers(15);

    const usersWithHashedPasswords = await Promise.all(
      userData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return {
          ...user,
          password: hashedPassword,
        };
      })
    );

    await Users.bulkCreate(usersWithHashedPasswords);
    console.log("Users seeded successfully!");
  } catch (error) {
    console.error("Error during users seeding:", error);
  }
};

module.exports = seedUsers;
