const router = require("express").Router();
const { Users } = require("../../models");

// CREATE New User - NEED to add view code & JS function
router.post("/signup", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const dbUserData = Users.create({
      username: req.body.username.toLowerCase(),
      password: req.body.password,
      funds: req.body.funds,
    });

    console.log(dbUserData);

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

// USER Login - NEED to add view code & JS function
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await Users.findOne({
      where: {
        username: req.body.username.toLowerCase(),
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again." });
      return;
    }

    const validpassword = await dbUserData.checkPassword(req.body.password);

    if (!validpassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again." });
      return;
    }

    req.session.save(() => {
      req.session.users_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (error) {
    console.error(error);
    errorHandler(error, req, res, next);
  }
});

//Logout - NEED to add nav link & JS function
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
