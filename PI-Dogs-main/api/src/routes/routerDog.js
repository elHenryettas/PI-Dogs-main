const { getAllInfo } = require("../../Controllers/controllers.js");
const { Router } = require("express");

const router = Router();

router.get("/dogs", async (req, res) => {
  try {
    const name = req.query.name;
    const allDogs = await getAllInfo();
    if (name) {
      const raza = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );

      raza.length < 1
        ? res.status(404).json("Perro no encontrado, sory beibe")
        : res.status(200).json(raza);
    } else {
      res.status(200).json(allDogs);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
