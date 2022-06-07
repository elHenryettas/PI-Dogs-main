const router = require("express").Router();
const { Dog } = require("../db.js");

router.delete("/:id", (req,res) =>{
    const {id} = req.params;
    if(id){
        Dog.destroy({
            where: {id}
        })
        res.send({mensaje: "PERRO BORRADO"})
    }
})



module.exports = router;