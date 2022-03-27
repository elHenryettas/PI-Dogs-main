const { getAllInfo } = require("../../Controllers/controllers.js");
const { Router } = require("express");

const router = Router();

router.get("/dogs", async (req, res) => {
  try {
    const allDogs = await getAllInfo();
    const name = req.query.name;
    if (name) {
      const raza = allDogs.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
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

router.get("/dogs/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const allDogs = await getAllInfo();
    const idDog = allDogs.find((e) => {
      return parseInt(e.id) === parseInt(id);
    });
    if (idDog) {
      res.status(200).json(idDog);
    } else {
      res.status(404).json("Ningun perro coincide con esa ID");
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
