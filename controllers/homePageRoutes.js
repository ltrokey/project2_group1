const router = require("express").Router();
const { Products, Users, Comments } = require("../models");

// GET loggedIn User Info.
const getUserInfo = async (req) => {
  let userPlain = null;
  let userFunds = null;

  if (req.session.loggedIn) {
    const user = req.session.users_id
      ? await Users.findByPk(req.session.users_id)
      : null;

    if (user) {
      userPlain = user.get({ plain: true });
      userFunds = user.funds;
    }
  }

  return { userPlain, userFunds };
};

// GET all products for homepage
router.get("/", async (req, res) => {
  try {
    const dbProductsData = await Products.findAll({
      attributes: ["id", "title", "filename", "description"],
    });

    const products = dbProductsData.map((product) =>
      product.get({ plain: true })
    );

    const { userPlain, userFunds } = await getUserInfo(req);

    res.render("home", {
      userPlain,
      products,
      userFunds,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get Products by Category
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

    const { userPlain, userFunds } = await getUserInfo(req);

    res.render("home", {
      products,
      userFunds,
      userPlain,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Compare Funds vs Price
const compareValues = (value1, operator, value2) => {
  // Convert values to numbers
  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);

  switch (operator) {
    case "<":
      return num1 < num2;
    case ">":
      return num1 > num2;
    case "==":
      return num1 === num2;
    default:
      return false;
  }
};

// GET one Product
router.get("/product/:id", async (req, res) => {
  try {
    const dbProductData = await Products.findByPk(req.params.id, {
      attributes: ["id", "title", "description", "price", "filename"],
      include: [
        {
          model: Users,
          attributes: ["id", "username", "funds"],
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

    const { userPlain, userFunds } = await getUserInfo(req);

    // Sort comments by created_at in descending order
    const sortedComments = product.comments.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    res.render("singleItem", {
      product: {
        ...product,
        comments: sortedComments,
      },
      userPlain,
      userFunds,
      compareValues,
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

// Updated
router.get("/funds/:id/update", async (req, res) => {
  try {
    const { userPlain, userFunds } = await getUserInfo(req);

    if (!req.session.loggedIn) {
      res.redirect("/login");
      return;
    }

    res.render("funds", {
      userPlain,
      userFunds,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
