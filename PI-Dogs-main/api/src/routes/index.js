const { Router } = require("express");
const RouterDog = require("../routes/routerDog");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dog", RouterDog);

module.exports = router;
