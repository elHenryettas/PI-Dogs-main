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
    let NewDog = await Dog.create({
      name,
      heightMax,
      heightMin,
      weightMax,
      weightMin,
      life_span,
      image,
    });
    console.log(temperament);
    let temperamentNewDog = await Temperament.findAll({
      where: { name: temperament },
    });
    NewDog.addTemperament(temperamentNewDog);
    res.send("Tu nueva raza perruna ha sido agregada");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
