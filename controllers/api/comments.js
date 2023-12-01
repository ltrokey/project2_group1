const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE New Comment
router.post("/", withAuth, async (req, res) => {
  try {
    const { content, product_id } = req.body;

    if (!content || !product_id) {
      return res
        .status(400)
        .json({ error: "Content and product_id are required." });
    }

    console.log("\n------content-----\n", content);
    console.log("\n------product_id-----\n", product_id);

    await Comments.create({
      content,
      user_id: req.session.users_id,
      product_id,
    });

    console.log("\n-------user_id------\n", req.session.users_id);

    res.redirect(`/product/${product_id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new comment." });
  }
});

module.exports = router;
