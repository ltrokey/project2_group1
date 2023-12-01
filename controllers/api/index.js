const router = require("express").Router();

const usersRoutes = require("../api/users");
const productUsers = require("../api/productUsers");
const commentsRoutes = require("../api/comments");

router.use("/users", usersRoutes);
router.use("/productUsers", productUsers);
router.use("/comments", commentsRoutes);

module.exports = router;
