const { Router } = require("express");
const {
  getAllUniversities,
  createUniversity,
  updateUniversityById,
  getUniversityById,
  deleteUniversityById,
  universityAuth,
} = require("../controllers/universityController");

const router = Router();

router.get("/university", (req, res) => {
  res.json({ message: "UNIVERSITY ROUTE" });
});

router.get("/university/get-all", getAllUniversities);
router.post("/university/new", createUniversity);
router.post("/university/update", updateUniversityById);
router.post("/university/get", getUniversityById);
router.post("/university/delete", deleteUniversityById);
router.post("/university/auth", universityAuth);

module.exports = router;
