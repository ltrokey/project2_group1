const router = require("express").Router();

const {
  Categories,
  Products,
  Users,
  ProductUsers,
  Comments,
} = require("../models");

const withAuth = require("../utils/auth");

// GET all products for homepage
router.get("/", async (req, res) => {
  try {
    const dbProductsData = await Products.findAll({
      attributes: ["id", "title", "filename"],
    });

    const products = dbProductsData.map((product) =>
      product.get({ plain: true })
    );

    res.render("home", {
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get Products by Category
router.get("/products/:category_id", async (req, res) => {
  try {
    const category_id = req.params.category_id;

    const dbProductsData = await Products.findAll({
      where: {
        categories_id: category_id,
      },
      attributes: ["id", "title", "filename", "categories_id"],
    });

    const products = dbProductsData.map((product) =>
      product.get({ plain: true })
    );

    res.render("home", {
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET one Product - Should user be loggedIn for access, add withAuth?
router.get("/product/:id", async (req, res) => {
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

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
