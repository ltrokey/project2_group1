const router = require("express").Router();
const { ProductUsers } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE New ProductUsers for when user selects favorite (withAuth)

//DELETE Distroy ProductUsers by Id when user deselects favorite (withAuth)

module.exports = router;
