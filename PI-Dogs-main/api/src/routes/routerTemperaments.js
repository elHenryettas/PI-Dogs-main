const getAllTemperaments = require("../../Controllers/temperament");
const router = require("express").Router();

router.get("/", getAllTemperaments);

module.exports = router;
