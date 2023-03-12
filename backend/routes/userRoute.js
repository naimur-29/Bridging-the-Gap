const { Router } = require("express");
const { createUser } = require("../controllers/userController");

const router = Router();

router.get("/user", (req, res) => {
  res.json({ message: "USER ROUTE" });
});

module.exports = router;
