const router = require("express").Router();
const { Users } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE New User
router.post("/signup", async (req, res) => {
  try {
    const dbUserData = await Users.create({
      username: req.body.username.toLowerCase(),
      password: req.body.password,
      funds: req.body.funds,
    });

    req.session.save(() => {
      req.session.users_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

// USER Login
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

//Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Update Funds
router.put("/:id", withAuth, async (req, res) => {
  try {
    await Users.update(
      {
        funds: req.body.funds,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.status(200).json({ message: "Funds successfully updated!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update funds." });
  }
});

module.exports = router;
