const router = require("express").Router();
const { Dog, Temperament } = require("../db.js");
router.post("/", async (req, res, next) => {
  const {
    name,
    heightMax,
    heightMin,
    weightMax,
    weightMin,
    temperament,
    life_span,
    image,
  } = req.body;
  try {
    let newDog = await Dog.create({
      name,
      heightMax,
      heightMin,
      weightMax,
      weightMin,
      life_span,
      image,
    });

    let newTemp = await Temperament.create({
      where: { name: temperament },
    });
    newDog.addTemperament(newTemp);
    res.send("Tu nueva raza perruna ha sido agregada");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
