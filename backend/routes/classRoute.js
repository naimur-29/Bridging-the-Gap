const { Router } = require("express");
const {
  createClass,
  updateClassById,
  getClassById,
} = require("../controllers/classController");

const router = Router();

router.get("/class", (req, res) => {
  res.json({ message: "CLASS ROUTE" });
});

router.post("/class/new", createClass);
router.post("/class/update", updateClassById);
router.post("/class/get", getClassById);
// router.post("/course/delete", deleteCourseById);

module.exports = router;
