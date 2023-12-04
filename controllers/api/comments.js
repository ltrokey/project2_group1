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

    const created = await Comments.create({
      content,
      users_id: req.session.users_id,
      products_id: parseInt(product_id),
    });

    const createdComment = created.get({ plain: true });

    return res.json(createdComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new comment." });
  }
});

module.exports = router;
