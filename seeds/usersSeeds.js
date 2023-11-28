const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    username: "sparklepanda",
    password: "password1",
    funds: 25,
  },
  {
    username: "quantumkid",
    password: "password2",
    funds: 15,
  },
  {
    username: "lunaexplorer",
    password: "password3",
    funds: 47,
  },
  {
    username: "neontiger22",
    password: "password4",
    funds: 89,
  },
  {
    username: "starrydreamer",
    password: "password5",
    funds: 103,
  },
  {
    username: "cyberphoenix",
    password: "password6",
    funds: 204,
  },
  {
    username: "oceanwhisper",
    password: "password7",
    funds: 65,
  },
  {
    username: "galacticgamer",
    password: "password8",
    funds: 8,
  },
  {
    username: "midnighthowler",
    password: "password9",
    funds: 32,
  },
  {
    username: "rainbowrider",
    password: "password10",
    funds: 43,
  },
  {
    username: "frostyninja",
    password: "password11",
    funds: 301,
  },
  {
    username: "stealthystriker",
    password: "password12",
    funds: 87,
  },
  {
    username: "velvetvoyager",
    password: "password13",
    funds: 51,
  },
  {
    username: "ivoryinferno",
    password: "password14",
    funds: 38,
  },
  {
    username: "enchantedEmber",
    password: "password15",
    funds: 75,
  },
];

const seedUsers = async () => {
  try {
    const usersWithHashedPasswords = await Promise.all(
      userData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return {
          ...user,
          password: hashedPassword,
        };
      })
    );

    await User.bulkCreate(usersWithHashedPasswords);
    console.log("Users seeded successfully!");
  } catch (error) {
    console.error("Error during users seeding:", error);
  }
};

module.exports = seedUsers;
