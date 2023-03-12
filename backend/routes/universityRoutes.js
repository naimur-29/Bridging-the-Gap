const { Router } = require("express");
// const {
//   getToDo,
//   saveToDo,
//   updateToDo,
//   deleteToDo,
// } = require("../controllers/toDoController");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "UNIVERSITY ROUTE" });
});

module.exports = router;
