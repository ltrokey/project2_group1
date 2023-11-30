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
    const dbProductData = await Products.findByPk(req.params.id, {
      attributes: ["id", "title", "description", "price", "filename"],
      include: [
        {
          model: Users,
          attributes: ["id", "username"],
        },
        {
          model: Comments,
          attributes: [
            "id",
            "created_at",
            "content",
            "users_id",
            "products_id",
          ],
          include: [
            {
              model: Users,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const product = dbProductData.get({ plain: true });

    // Sort comments by created_at in descending order
    const sortedComments = product.comments.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    res.render("singleItem", {
      product: {
        ...product,
        comments: sortedComments,
      },
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
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
