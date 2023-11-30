const router = require("express").Router();
const { ProductUsers } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/:productId", withAuth, async (req, res) => {
  try {
    const { productId } = req.params;

    // Ensure the user is authenticated
    const userId = req.session.users_id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Create a ProductUser record
    const productUser = await ProductUsers.create({
      products_id: productId,
      users_id: userId,
    });

    res.status(201).json(productUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

//DELETE Distroy ProductUsers by Id
router.delete("/:productId", withAuth, async (req, res) => {
  try {
    const { productId } = req.params;

    const userId = req.session.users_id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await ProductUsers.destroy({
      where: {
        products_id: productId,
        users_id: userId,
      },
    });

    res.status(204).end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

module.exports = router;

module.exports = router;
