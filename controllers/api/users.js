const router = require("express").Router();
const { Users } = require("../../models");

// CREATE New User
router.post("/signup", async (req, res) => {
  try {
    const dbUserData = Users.create({
      username: req.body.username.toLowerCase(),
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.users_id = dbUserData.users_id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
