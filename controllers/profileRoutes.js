const sequelize = require("../config/connection");
const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Products, Users, ProductUsers, Comments } = require("../models");

//Get Products by Product Users
router.get("/", withAuth, async (req, res) => {
  try {
    const user = await Users.findByPk(req.session.users_id, {
      include: [
        {
          model: Products,
          through: ProductUsers,
        },
      ],
    });

    if (!user) {
      return res.status(404).render("404");
    }

    console.log("\n--------------User----------\n", user);
    console.log("\n--------------User Product----------\n", user.Products);

    const userProducts = user.Products || [];

    res.render("profile", {
      user,
      userProducts,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

module.exports = router;
