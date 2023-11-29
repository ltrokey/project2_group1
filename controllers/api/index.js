const router = require("express").Router();

const categoriesRoutes = require("../api/categories");
const productsRoutes = require("../api/products");
const usersRoutes = require("../api/users");
const productUsers = require("../api/productUsers");
const commentsRoutes = require("../api/comments");

router.use("/categories", categoriesRoutes);
router.use("/products", productsRoutes);
router.use("/users", usersRoutes);
router.use("/productUsers", productUsers);
router.use("./comments", commentsRoutes);

module.exports = router;
