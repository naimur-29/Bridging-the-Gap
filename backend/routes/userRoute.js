const { Router } = require("express");
const {
  createUser,
  updateUserById,
  getUserById,
  deleteUserById,
  userAuth,
} = require("../controllers/userController");

const router = Router();

router.get("/user", (req, res) => {
  res.json({ message: "USER ROUTE" });
});

router.post("/user/new", createUser);
router.post("/user/update", updateUserById);
router.post("/user/get", getUserById);
router.post("/user/delete", deleteUserById);
router.post("/user/auth", userAuth);

module.exports = router;
