const router = require("express").Router();
const RouterDog = require("./routerDog");
const RouterTemperament = require("./routerTemperaments");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", RouterDog);
router.use("/temperament", RouterTemperament);

module.exports = router;
