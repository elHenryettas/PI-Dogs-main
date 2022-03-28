const router = require("express").Router();
const { getAllInfo } = require("./dogs.js");
const { Temperament } = require("../src/db");

router.get("/", async (req, res) => {
  try {
    const allDogs = await getAllInfo();
    const temperaments = [
      ...new Set(
        allDogs
          .map((e) => e.temperament)
          /* todos los t. en un array cuyos elementos son str */
          .join()
          .split(",")

        /* un array donde cada elemento es un unico temperamento en str */
      ),
    ]
      .sort()
      .filter((e) => e && e[0] === " ");
    /* ordena alfabeticamente y elimina strings vacios(solo hay uno pero bueno) */
    for (let i = 0; i < temperaments.length; i++) {
      const e = temperaments[i];
      Temperament.findOrCreate({
        where: { name: e },
      });
    }

    const AllTemperaments = await Temperament.findAll();
    res.send(AllTemperaments);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;

/*
? Esto funciona pero no lo guarda en la base de datos, ¿Por qué?, Ni idea

  const array = [];
    for (let i = 0; i < temperaments.length; i++) {
      const e = temperaments[i];
      array.push({ name: e });
    }

    await Temperament.bulkCreate(array);*/
