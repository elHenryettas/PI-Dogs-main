const { getAllInfo } = require("../../Controllers/dogs.js");
const router = require("express").Router();

router.get("/", async (req, res) => {
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
      res.send(200, allDogs);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const allDogs = await getAllInfo();
    const idDog = allDogs.find((e) => {
      return e.id === id;
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
