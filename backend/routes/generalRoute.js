const { Router } = require("express");
const { joinClass } = require("../controllers/generalControllers");

const router = Router();

router.post("/join", joinClass);

module.exports = router;
