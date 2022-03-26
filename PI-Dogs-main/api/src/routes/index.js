const { Router } = require("express");
const { RouteDog } = require("../../Controllers/controllers.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", RouteDog);

module.exports = router;
