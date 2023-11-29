const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homePageRoutes");
const profileRoutes = require("./profileRoutes");

router.use("/api", apiRoutes);
route.use("/", homeRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
