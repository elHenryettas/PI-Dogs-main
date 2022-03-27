/* const { getAllInfo } = require("../../Controllers/controllers.js");
const router = require("express").Router();

router.get("/dogs?name", async (req, res) => {
  const name = req.query.name;
  const allDogs = await getAllInfo();
  const found = allDogs.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );
  if (found.lenght) {
    res.status(200).json(found);
  } else {
    res.status(404).json("No existe tal raza registrada.");
  }
});
module.exports = router; */
