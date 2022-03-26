const { getAllInfo } = require("../../Controllers/controllers.js");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  const informasao = await getAllInfo();
  res.json(informasao);
});

module.exports = router;
