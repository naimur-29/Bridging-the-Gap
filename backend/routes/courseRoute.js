const { Router } = require("express");
const {
  createCourse,
  updateCourseById,
  getCourseById,
  deleteCourseById,
} = require("../controllers/courseController");

const router = Router();

router.get("/course", (req, res) => {
  res.json({ message: "COURSE ROUTE" });
});

router.post("/course/new", createCourse);
router.post("/course/update", updateCourseById);
router.post("/course/get", getCourseById);
router.post("/course/delete", deleteCourseById);

module.exports = router;
