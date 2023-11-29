const router = require("express").Router();

const {
  Categories,
  Products,
  Users,
  ProductUsers,
  Users,
} = require("../models");

const withAuth = require("../utils/auth");

// GET all products for homepage
router.get("/", async (req, res) => {
  try {
    const dbCategoriesData = await Categories.findAll({
      include: [
        {
          model: Products,
          attributes: ["title", "filename"],
        },
      ],
    });

    const categories = dbCategoriesData.map((category) =>
      category.get({ plain: true })
    );

    res.render("home", {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get one Category & Products
router.get("/category/:id", async (req, res) => {
  try {
    const dbCategoryData = await Categories.findByPk(req.params.id, {
      include: [
        {
          model: Products,
          attributes: ["id", "title", "description", "price", "filename"],
        },
      ],
    });

    const category = dbCategoryData.get({ plain: true });

    res.render("category", {
      category,
      loggedIn: req.session.loggedIn,
    });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET one Product
router.get("/product/:id", withAuth, async (req, res) => {
  try {
    const dbProductData = await Products.findByPk(req.params.id);

    const product = dbProductData.get({ plain: true });

    res.render("singleItem", {
      product,
      loggedIn: req.session.loggedIn,
    });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
