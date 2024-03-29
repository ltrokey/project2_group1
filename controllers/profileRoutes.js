const sequelize = require("../config/connection");
const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Op } = require("sequelize");
const { Products, Users, ProductUsers, Comments } = require("../models");

//Get Products by Product Users
router.get("/", withAuth, async (req, res) => {
  try {
    const productUsers = await ProductUsers.findAll({
      where: {
        users_id: req.session.users_id,
      },
    });

    const productIds = productUsers.map(
      (productUser) => productUser.products_id
    );

    const dbUserProducts = await Products.findAll({
      where: {
        id: {
          [Op.in]: productIds,
        },
      },
    });

    if (!dbUserProducts) {
      return res.status(404).render("404");
    }

    const products = dbUserProducts.map((product) =>
      product.get({ plain: true })
    );

    const userId = await Users.findByPk(req.session.users_id);

    const userPlain = userId.get({ plain: true });

    const user = req.session.users_id
      ? await Users.findByPk(req.session.users_id)
      : null;
    const userFunds = user ? user.funds : null;

    res.render("profile", {
      userPlain,
      userFunds,
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

module.exports = router;
