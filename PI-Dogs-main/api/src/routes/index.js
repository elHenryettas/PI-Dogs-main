const router = require("express").Router();
const routerDog = require("./routerDog");
const routerTemperament = require("./routerTemperaments");
const routerCreate = require("./routerCreate");
const deleteDog = require("./deleteDog");
/* const { validatorDog } = require("../validator/validatorDog"); */

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dog", /* validatorDog, */ routerCreate);
router.use("/dogs", routerDog);
router.use("/temperament", routerTemperament);
router.use("/delete", deleteDog);

module.exports = router;
